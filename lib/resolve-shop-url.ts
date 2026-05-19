/**
 * Shop URLs for supported regions. Any ISO country can be overridden with `SHOP_REDIRECT_<CC>`.
 * Only US and Canada are supported for checkout; all other regions (or unknown IP) get `supported: false`.
 */
const SHOP_BY_COUNTRY: Record<string, string> = {
  CA: "https://nicozyshop.com",
  US: "https://nicozylab.com",
};

export type ShopResolution = {
  supported: boolean;
  url: string | null;
};

export function getShopResolution(
  countryCode: string | null | undefined,
): ShopResolution {
  const code = countryCode?.trim().toUpperCase();
  if (code) {
    const fromEnv = process.env[`SHOP_REDIRECT_${code}`];
    if (fromEnv) return { supported: true, url: fromEnv };
    const mapped = SHOP_BY_COUNTRY[code];
    if (mapped) return { supported: true, url: mapped };
  }
  return { supported: false, url: null };
}
