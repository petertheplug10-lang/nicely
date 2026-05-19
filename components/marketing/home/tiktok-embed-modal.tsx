"use client";

import { useEffect, useId } from "react";
import { parseTikTokVideoIdFromUrl } from "@/lib/tiktok/parse-tiktok-video-id";

type TikTokEmbedModalProps = {
  open: boolean;
  onClose: () => void;
  videoUrl: string;
  /** From oEmbed when URL is short link; overrides parse from videoUrl */
  videoId: string | null;
  title: string | null;
};

export function TikTokEmbedModal({
  open,
  onClose,
  videoUrl,
  videoId: videoIdProp,
  title,
}: TikTokEmbedModalProps) {
  const titleId = useId();
  const embedId = videoIdProp ?? parseTikTokVideoIdFromUrl(videoUrl);
  const embedSrc =
    embedId != null
      ? `https://www.tiktok.com/embed/v2/${embedId}`
      : null;

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        aria-label="Close video"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-[101] flex w-full max-w-[min(100%,360px)] flex-col rounded-2xl bg-[#1c1b18] p-3 shadow-2xl ring-1 ring-white/10"
      >
        <div className="relative w-full overflow-hidden rounded-xl bg-black">
          {embedSrc ? (
            <iframe
              src={embedSrc}
              title={title?.trim() || "TikTok video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              className="aspect-9/16 h-[min(72vh,740px)] w-full max-h-[740px]"
            />
          ) : (
            <div className="flex aspect-9/16 max-h-[740px] flex-col items-center justify-center gap-4 bg-[#0d0c0b] px-6 text-center">
              <p className="text-sm text-[#f5e7d4]/80">
                This link can’t be embedded here. Open it on TikTok instead.
              </p>
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#fdfbf7] px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-black transition hover:bg-white"
              >
                Open in TikTok
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
