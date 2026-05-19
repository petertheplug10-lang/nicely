import { NextResponse, type NextRequest } from "next/server";
import { getCountryCodeFromHeaders } from "@/lib/country-from-request";
import { getShopResolution } from "@/lib/resolve-shop-url";

export const dynamic = "force-dynamic";

export function GET(request: NextRequest) {
  const country = getCountryCodeFromHeaders(request.headers);
  const { supported, url } = getShopResolution(country);
  return NextResponse.json({
    supported,
    url: url ?? null,
    country: country ?? null,
  });
}
