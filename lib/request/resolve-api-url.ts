/**
 * Server: calls backend directly (full URL).
 * Browser: same-origin path proxied by `pages/api/[...all].ts` → backend.
 */
export function resolveApiUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (typeof window !== "undefined") {
    return `/api/proxy${normalized}`;
  }
  const base =
    process.env.API_URL ??
    process.env.NEXT_PUBLIC_API_URL ??
    "http://localhost:8080";
  const trimmed = base.replace(/\/$/, "");
  return `${trimmed}${normalized}`;
}
