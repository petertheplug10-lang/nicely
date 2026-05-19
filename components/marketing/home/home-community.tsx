"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Unbounded } from "next/font/google";
import { useTikTokVideos } from "@/lib/api/hooks/use-tiktok-videos";
import { useTikTokOEmbedPreview } from "@/lib/api/hooks/use-tiktok-oembed-preview";
import type { TikTokVideo } from "@/lib/api/types";
import { parseTikTokVideoIdFromUrl } from "@/lib/tiktok/parse-tiktok-video-id";
import { TikTokEmbedModal } from "@/components/marketing/home/tiktok-embed-modal";

const display = Unbounded({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-community-display",
});

const cardFrameClass =
  "relative shrink-0 snap-start overflow-hidden h-[min(52vh,420px)] sm:h-[min(62vh,520px)] md:h-[min(70vh,597px)]";

type PlayPayload = {
  videoUrl: string;
  videoId: string | null;
  title: string | null;
};

function CommunityTicker() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[142px] overflow-hidden border-t border-white/10 bg-[#0d0c0b]"
      aria-hidden
    >
      <div
        className="h-full w-full opacity-90"
        style={{
          backgroundImage: "url(/images/community/ticker-segment.svg)",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
          backgroundPositionY: "center",
          animation: "community-ticker-bg 18s linear infinite",
        }}
      />
    </div>
  );
}


function TikTokVideoCard({
  video,
  onRequestPlay,
}: {
  video: TikTokVideo;
  onRequestPlay: (payload: PlayPayload) => void;
}) {
  const { data, isPending } = useTikTokOEmbedPreview(video.url);
  const thumb = data?.thumbnail_url ?? null;

  return (
    <article
      className={`group relative ${cardFrameClass} w-[280px] min-w-[280px] sm:w-[336px] sm:min-w-[336px] rounded-[26px]`}
    >
      {thumb ? (
        // eslint-disable-next-line @next/next/no-img-element -- TikTok CDN thumbnail
        <img
          src={thumb}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
      ) : (
        <div
          className={`absolute inset-0 bg-linear-to-br from-[#2a2826] via-[#1c1b18] to-[#0d0c0b] ${isPending ? "motion-safe:animate-pulse" : ""}`}
          aria-hidden
        />
      )}
      <div
        className="absolute inset-0 opacity-45 bg-[radial-gradient(circle_at_30%_18%,rgba(245,231,212,0.12),transparent_52%)]"
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/15" aria-hidden />

      <div className="absolute inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={() =>
            onRequestPlay({
              videoUrl: video.url,
              videoId:
                data?.video_id ?? parseTikTokVideoIdFromUrl(video.url),
              title: data?.title ?? null,
            })
          }
          className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#fdfbf7] shadow-md ring-1 ring-black/10 transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5e7d4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1c1b18]"
          aria-label="Play TikTok video"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- small local SVG */}
          <img src="/images/community/play-icon.svg" alt="" width={24} height={24} className="ml-0.5" />
        </button>
      </div>
    </article>
  );
}

export function HomeCommunity() {
  const { data } = useTikTokVideos(6);
  const tiktokVideos = data?.videos;
  const [modal, setModal] = useState<PlayPayload | null>(null);

  const sortedVideos = useMemo(
    () => [...tiktokVideos ?? []].sort((a, b) => a.sort - b.sort),
    [tiktokVideos],
  );

  if (!tiktokVideos) return null;

  return (
    <section
      className={`relative overflow-hidden border-y-[3px] border-[#1c1b18] bg-[#1c1b18] pb-[160px] pt-16 sm:pt-20 md:pt-24 ${display.variable}`}
      aria-labelledby="community-heading"
    >
      <div className="pointer-events-none absolute left-1/2 top-6 w-full max-w-[1488px] -translate-x-1/2 px-4 opacity-[0.35] sm:top-10">
        <Image
          src="/images/community/watermark.svg"
          alt=""
          width={1488}
          height={567}
          className="mx-auto h-auto w-full max-w-[min(100%,1488px)]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] text-center">
        <h2
          id="community-heading"
          className={`font-unbounded text-[clamp(2rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-[#fdfbf7]`}
        >
          Loved by the Nicozy Community
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base font-bold uppercase leading-relaxed tracking-[0.2em] text-[#f5e7d4] sm:text-[16px]">
          See how fans across TikTok enjoy Nicozy every day.
        </p>
      </div>

      <div className="relative z-10 mt-12 md:mt-16">
        <div className="flex overflow-x-auto overflow-y-hidden pb-2 pt-2 [scrollbar-width:thin]">
          <div className="flex w-max mx-auto snap-x snap-mandatory gap-5">
            {sortedVideos.map((video) => (
                  <TikTokVideoCard
                    key={video.id}
                    video={video}
                    onRequestPlay={setModal}
                  />
                ))}
          </div>
        </div>
      </div>

      <CommunityTicker />

      <TikTokEmbedModal
        open={modal != null}
        onClose={() => setModal(null)}
        videoUrl={modal?.videoUrl ?? ""}
        videoId={modal?.videoId ?? null}
        title={modal?.title ?? null}
      />
    </section>
  );
}
