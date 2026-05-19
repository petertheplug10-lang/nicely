import "server-only";

import { cookies } from "next/headers";
import {
  AGE_REGION_COOKIE,
  type AgeRegion,
  parseAgeRegionCookie,
} from "@/lib/age-region";

export async function getAgeRegionForRequest(): Promise<AgeRegion> {
  const store = await cookies();
  return parseAgeRegionCookie(store.get(AGE_REGION_COOKIE)?.value) ?? "US";
}
