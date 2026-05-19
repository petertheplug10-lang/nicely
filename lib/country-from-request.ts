import { lookup } from "geoip-lite";
import { getClientIp } from "@/lib/get-client-ip";

/**
 * ISO 3166-1 alpha-2 country code from common CDN / proxy headers, then geoip-lite.
 *
 * Header order: `x-vercel-ip-country`, `cf-ipcountry`, `x-geo-country` (self-hosted override).
 */
export function getCountryCodeFromHeaders(headers: Headers): string | null {
  const raw =
    headers.get("x-vercel-ip-country")?.trim() ||
    headers.get("cf-ipcountry")?.trim() ||
    headers.get("x-geo-country")?.trim();

  if (raw) {
    const code = raw.toUpperCase();
    if (/^[A-Z]{2}$/.test(code)) return code;
  }

  const ip = getClientIp(headers);
  if (!ip) return null;
  try {
    const geo = lookup(ip);
    return geo?.country ?? null;
  } catch {
    return null;
  }
}
