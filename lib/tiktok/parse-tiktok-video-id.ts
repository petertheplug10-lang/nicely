/** Numeric TikTok video id from a canonical watch URL. */
export function parseTikTokVideoIdFromUrl(url: string): string | null {
  try {
    const u = new URL(url.trim());
    const path = u.pathname;
    const m = path.match(/\/video\/(\d+)/);
    return m?.[1] ?? null;
  } catch {
    const m = url.match(/\/video\/(\d+)/);
    return m?.[1] ?? null;
  }
}

export function parseTikTokVideoIdFromOembedHtml(html: string): string | null {
  const m = html.match(/embed\/v2\/(\d+)/);
  return m?.[1] ?? null;
}
