"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { bannerQueryOptions } from "@/lib/api/query-options";
import type { BannerPage } from "@/lib/api/types";

export function useBanners(page: BannerPage) {
  return useSuspenseQuery(bannerQueryOptions(page));
}
