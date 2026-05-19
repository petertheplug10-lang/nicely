"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import type { GalleryChapter } from "@/components/marketing/gallery/gallery-data";
import { GalleryFilterPanel } from "@/components/marketing/gallery/gallery-filter-panel";

const SCRIM_Z = 90;
const DRAWER_Z = 100;

type GalleryFilterDrawerProps = {
  open: boolean;
  onClose: () => void;
  chapters: GalleryChapter[];
  strengthOptions: readonly string[];
  selectedStrengths: Set<string>;
  onToggleStrength: (mg: string) => void;
};

export function GalleryFilterDrawer({
  open,
  onClose,
  chapters,
  strengthOptions,
  selectedStrengths,
  onToggleStrength,
}: GalleryFilterDrawerProps) {
  const titleId = useId();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onKey]);

  if (!mounted || !open) return null;

  const scrim = createPortal(
    <button
      type="button"
      className="fixed inset-0 bg-black/35 backdrop-blur-sm lg:hidden"
      style={{ zIndex: SCRIM_Z }}
      aria-label="Close filters"
      onClick={onClose}
    />,
    document.body,
  );

  const drawer = createPortal(
    <div
      className="fixed inset-y-0 right-0 flex w-[min(88vw,380px)] max-w-full flex-col bg-white shadow-[-8px_0_24px_rgba(0,0,0,0.08)] lg:hidden"
      style={{ zIndex: DRAWER_Z }}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div className="flex shrink-0 items-center justify-between border-b border-[#ececec] px-5 py-4">
        <h2 id={titleId} className="text-lg font-semibold text-[#171717]">
          Filters
        </h2>
        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-full text-[#737373] transition hover:bg-[#f5f5f5] hover:text-[#171717]"
          aria-label="Close filters"
          onClick={onClose}
        >
          <span className="relative block size-4">
            <span className="absolute left-1/2 top-1/2 block h-px w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" />
            <span className="absolute left-1/2 top-1/2 block h-px w-4 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" />
          </span>
        </button>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-6">
        <GalleryFilterPanel
          chapters={chapters}
          strengthOptions={strengthOptions}
          selectedStrengths={selectedStrengths}
          onToggleStrength={onToggleStrength}
          onCollectionNavigate={onClose}
          strengthVariant="drawer"
          collectionsTitle="Collections"
          strengthTitle="Strength Options"
        />
      </div>
    </div>,
    document.body,
  );

  return (
    <>
      {scrim}
      {drawer}
    </>
  );
}
