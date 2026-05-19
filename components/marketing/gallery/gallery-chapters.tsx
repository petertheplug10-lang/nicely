"use client";

import { useMemo, useState } from "react";
import type { GalleryChapter, GallerySeries, PouchProduct } from "@/components/marketing/gallery/gallery-data";
import { GalleryChapterHeading } from "@/components/marketing/gallery/gallery-chapter-heading";
import { GalleryFilterDrawer } from "@/components/marketing/gallery/gallery-filter-drawer";
import { GalleryLifestyleCard } from "@/components/marketing/gallery/gallery-lifestyle-card";
import { GalleryProductCard } from "@/components/marketing/gallery/gallery-product-card";
import { GallerySeriesHeading } from "@/components/marketing/gallery/gallery-series-heading";
import { GallerySidebar } from "@/components/marketing/gallery/gallery-sidebar";

function filterPouchProducts(
  products: PouchProduct[],
  selected: Set<string>,
  skipStrengthFilter: boolean,
) {
  if (skipStrengthFilter || selected.size === 0) return products;
  return products.filter(
    (p) =>
      p.strengths.length === 0 ||
      p.strengths.some((s) => selected.has(s)),
  );
}

function filterSeries(
  series: GallerySeries,
  selected: Set<string>,
  skipStrengthFilter: boolean,
): GallerySeries | null {
  if (series.kind === "lifestyle") {
    return series.items.length > 0 ? series : null;
  }
  const products = filterPouchProducts(series.products, selected, skipStrengthFilter);
  if (products.length === 0) return null;
  return { ...series, products };
}

function filterChapter(
  ch: GalleryChapter,
  selected: Set<string>,
  skipStrengthFilter: boolean,
): GalleryChapter | null {
  const series = ch.series
    .map((s) => filterSeries(s, selected, skipStrengthFilter))
    .filter((s): s is GallerySeries => s != null);
  if (series.length === 0) return null;
  return { ...ch, series };
}

function SeriesBlock({ series }: { series: GallerySeries }) {
  if (series.kind === "lifestyle") {
    return (
      <div id={series.id} className="scroll-mt-28 space-y-6 sm:space-y-8">
        <GallerySeriesHeading title={'Apparel & Accessories'} />
        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pl-4 pr-4 [scrollbar-width:thin] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:pb-0 sm:pl-0 sm:pr-0 xl:grid-cols-3">
          {series.items.map((item) => (
            <div
              key={`${series.id}-${item.name}`}
              className="w-[min(78vw,280px)] shrink-0 snap-start sm:w-auto sm:min-w-0 sm:shrink"
            >
              <GalleryLifestyleCard item={item} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  const inner = (
    <>
      <GallerySeriesHeading title={series.name} />
      <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {series.products.map((p) => (
          <GalleryProductCard key={`${series.id}-${p.name}`} product={p} />
        ))}
      </div>
    </>
  );

  if (series.shell === "premium") {
    return (
      <div
        id={series.id}
        className="scroll-mt-28 space-y-6 rounded-[28px] border border-[rgba(255,255,255,0.6)] bg-white/90 p-4 shadow-[0_8px_30px_rgba(0,0,0,0.02)] sm:space-y-8 sm:rounded-[40px] sm:p-8 lg:p-10"
      >
        {inner}
      </div>
    );
  }

  return (
    <div id={series.id} className="scroll-mt-28 space-y-6 sm:space-y-8">
      {inner}
    </div>
  );
}

type GalleryChaptersProps = {
  chapters: GalleryChapter[];
  strengthOptions: readonly string[];
  mobileFiltersOpen: boolean;
  onMobileFiltersOpenChange: (open: boolean) => void;
};

export function GalleryChapters({
  chapters,
  strengthOptions,
  mobileFiltersOpen,
  onMobileFiltersOpenChange,
}: GalleryChaptersProps) {
  /** Empty = all pouch products; exactly one label = filter to that strength (single-select) */
  const [selectedStrengths, setSelectedStrengths] = useState<Set<string>>(() => new Set());

  const onToggleStrength = (mg: string) => {
    setSelectedStrengths((prev) => {
      if (prev.has(mg)) return new Set();
      return new Set([mg]);
    });
  };

  const skipStrengthFilter = strengthOptions.length === 0;

  const filtered = useMemo(
    () =>
      chapters
        .map((ch) => filterChapter(ch, selectedStrengths, skipStrengthFilter))
        .filter((ch): ch is GalleryChapter => ch != null),
    [chapters, selectedStrengths, skipStrengthFilter],
  );

  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
      <GalleryFilterDrawer
        open={mobileFiltersOpen}
        onClose={() => onMobileFiltersOpenChange(false)}
        chapters={chapters}
        strengthOptions={strengthOptions}
        selectedStrengths={selectedStrengths}
        onToggleStrength={onToggleStrength}
      />
      <GallerySidebar
        chapters={chapters}
        strengthOptions={strengthOptions}
        selectedStrengths={selectedStrengths}
        onToggleStrength={onToggleStrength}
      />
      <div className="min-w-0 flex-1 space-y-12 sm:space-y-16 lg:space-y-20">
        {filtered.map((ch) => (
          <section key={ch.id} id={ch.id} className="scroll-mt-28 space-y-6 sm:space-y-10">
            <GalleryChapterHeading title={ch.title} />
            <div className="space-y-8 sm:space-y-12 lg:space-y-14">
              {ch.series.map((series) => (
                <SeriesBlock key={series.id} series={series} />
              ))}
            </div>
          </section>
        ))}
        {filtered.length === 0 ? (
          <p className="rounded-2xl border border-[#f5f5f5] bg-white p-8 text-center text-[#737373]">
            No products match the selected strengths. Clear your selection to see all products, or
            pick different options.
          </p>
        ) : null}
      </div>
    </div>
  );
}
