"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { tiktokVideosQueryOptions } from "@/lib/api/query-options";

export function useTikTokVideos(limit?: number) {
  return useSuspenseQuery(tiktokVideosQueryOptions(limit));
}
