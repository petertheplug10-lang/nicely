"use client";

import { useQuery } from "@tanstack/react-query";
import type { TikTokOEmbedPreview } from "@/lib/tiktok/oembed-types";
import {
  parseTikTokVideoIdFromOembedHtml,
  parseTikTokVideoIdFromUrl,
} from "@/lib/tiktok/parse-tiktok-video-id";

const OEMBED_ENDPOINT = "https://www.tiktok.com/oembed";

export function tiktokOembedQueryKey(videoUrl: string) {
  return ["tiktok-oembed", videoUrl] as const;
}

async function fetchTikTokOEmbedPreview(videoUrl: string): Promise<TikTokOEmbedPreview> {
  let videoId = parseTikTokVideoIdFromUrl(videoUrl);

  try {
    const oembedUrl = new URL(OEMBED_ENDPOINT);
    oembedUrl.searchParams.set("url", videoUrl);

    const res = await fetch(oembedUrl.toString(), {
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      return {
        thumbnail_url: null,
        title: null,
        video_id: videoId,
      };
    }

    const data = (await res.json()) as {
      thumbnail_url?: string;
      title?: string;
      html?: string;
    };

    if (!videoId && typeof data.html === "string") {
      videoId = parseTikTokVideoIdFromOembedHtml(data.html);
    }

    return {
      thumbnail_url: data.thumbnail_url ?? null,
      title: data.title ?? null,
      video_id: videoId,
    };
  } catch {
    return {
      thumbnail_url: null,
      title: null,
      video_id: videoId,
    };
  }
}

export function useTikTokOEmbedPreview(videoUrl: string) {
  return useQuery({
    queryKey: tiktokOembedQueryKey(videoUrl),
    queryFn: () => fetchTikTokOEmbedPreview(videoUrl),
    staleTime: 1000 * 60 * 60 * 24,
  });
}
