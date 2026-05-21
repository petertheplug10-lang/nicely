import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  AGE_REGION_COOKIE,
  type AgeRegion,
  parseAgeRegionCookie,
} from "@/lib/age-region";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function cookieOptions(value: AgeRegion) {
  return {
    name: AGE_REGION_COOKIE,
    value,
    path: "/" as const,
    maxAge: COOKIE_MAX_AGE,
    sameSite: "lax" as const,
    httpOnly: false,
  };
}

function regionFromEdgeHeaders(request: NextRequest): AgeRegion | null {
  const vercel = request.headers.get("x-vercel-ip-country");
  if (vercel === "CA") return "CA";
  if (vercel === "US") return "US";
  const cf = request.headers.get("cf-ipcountry");
  if (cf === "CA") return "CA";
  if (cf === "US") return "US";
  const custom = request.headers.get("x-geo-country");
  if (custom === "CA") return "CA";
  if (custom === "US") return "US";
  return null;
}

export async function middleware(request: NextRequest) {
  const existing = parseAgeRegionCookie(request.cookies.get(AGE_REGION_COOKIE)?.value);
  if (existing) {
    return NextResponse.next();
  }

  const fromEdge = regionFromEdgeHeaders(request);
  if (fromEdge) {
    const res = NextResponse.next();
    res.cookies.set(cookieOptions(fromEdge));
    return res;
  }

  try {
    const url = new URL("/age-region", request.nextUrl.origin);
    const fwd = await fetch(url, {
      method: "GET",
      headers: {
        "x-forwarded-for": request.headers.get("x-forwarded-for") ?? "",
        "x-real-ip": request.headers.get("x-real-ip") ?? "",
        "cf-connecting-ip": request.headers.get("cf-connecting-ip") ?? "",
        "x-vercel-ip-country": request.headers.get("x-vercel-ip-country") ?? "",
      },
      cache: "no-store",
    });
    if (fwd.ok) {
      const data = (await fwd.json()) as { region?: string };
      const region: AgeRegion = data.region === "CA" ? "CA" : "US";
      const res = NextResponse.next();
      res.cookies.set(cookieOptions(region));
      return res;
    }
  } catch {
    /* fall through */
  }

  const res = NextResponse.next();
  res.cookies.set(cookieOptions("US"));
  return res;
}

export const config = {
  matcher: [
    "/((?!api/|age-region$|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
