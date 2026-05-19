"use client";

import type { GalleryChapter } from "@/components/marketing/gallery/gallery-data";
import { GalleryFilterPanel } from "@/components/marketing/gallery/gallery-filter-panel";

type GallerySidebarProps = {
  chapters: GalleryChapter[];
  strengthOptions: readonly string[];
  selectedStrengths: Set<string>;
  onToggleStrength: (mg: string) => void;
};

export function GallerySidebar({
  chapters,
  strengthOptions,
  selectedStrengths,
  onToggleStrength,
}: GallerySidebarProps) {
  return (
    <aside className="hidden w-full shrink-0 lg:block lg:sticky lg:top-28 lg:w-[320px]">
      <div className="rounded-[40px] border border-[#f5f5f5] bg-white p-8 shadow-[0_8px_15px_rgba(0,0,0,0.04)] lg:p-10">
        <GalleryFilterPanel
          chapters={chapters}
          strengthOptions={strengthOptions}
          selectedStrengths={selectedStrengths}
          onToggleStrength={onToggleStrength}
          strengthVariant="sidebar"
        />
      </div>
    </aside>
  );
}
