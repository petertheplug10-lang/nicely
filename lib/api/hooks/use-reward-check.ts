"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { rewardQueryOptions } from "@/lib/api/query-options";

export { rewardQueryKey } from "@/lib/api/query-options";

export function useRewardCheck(encryptedCode: string) {
  return useSuspenseQuery(rewardQueryOptions(encryptedCode));
}
