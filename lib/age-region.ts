export const AGE_REGION_COOKIE = "nicozy_age_region";

export type AgeRegion = "US" | "CA";

export function parseAgeRegionCookie(value: string | undefined): AgeRegion | null {
  if (value === "US" || value === "CA") return value;
  return null;
}
