import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import type { AgeRegion } from "@/lib/age-region";
import { getCountryCodeFromHeaders } from "@/lib/country-from-request";

export const dynamic = "force-dynamic";

function toAgeRegion(country: string | null): AgeRegion {
  if (country === "CA") return "CA";
  if (country === "US") return "US";
  return "US";
}

/**
 * Node runtime: resolves visitor region for age gate (US / CA only; default US).
 *
 * Lives outside `/api/*` so reverse proxies that forward `/api/*` to the backend
 * don't intercept it. Called by middleware via internal fetch; not a public API contract.
 */
export function GET(req: NextRequest) {
  const region = toAgeRegion(getCountryCodeFromHeaders(req.headers));
  return NextResponse.json({ region });
}
