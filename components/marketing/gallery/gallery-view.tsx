"use client";

import { useMemo, useState } from "react";
import {
  buildGalleryChaptersFromProducts,
  deriveStrengthOptions,
} from "@/components/marketing/gallery/build-gallery-from-products";
import { GalleryChapters } from "@/components/marketing/gallery/gallery-chapters";
import { GalleryHero } from "@/components/marketing/gallery/gallery-hero";
import { useProductCategories, useProducts } from "@/lib/api/hooks";

export function GalleryView() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { data } = useProducts({ page: 1, page_size: 1000 });
  const { data: categories } = useProductCategories();
  const products = data.products;

  const chapters = useMemo(
    () => buildGalleryChaptersFromProducts(products),
    [products],
  );
  const strengthOptions = useMemo(
    () => deriveStrengthOptions(categories, products),
    [categories, products],
  );

  const galleryChaptersKey = useMemo(
    () =>
      `${products.map((p) => p.id).join(",")}__${categories.strength.map((s) => s.id).join(",")}__${strengthOptions.join("|")}`,
    [products, categories.strength, strengthOptions],
  );

  return (
    <div className="bg-[#fafafa]">
      <GalleryHero onOpenMobileFilters={() => setMobileFiltersOpen(true)} />
      <div className="mx-auto max-w-[1400px] px-4 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-16 lg:pt-12">
        <GalleryChapters
          key={galleryChaptersKey}
          chapters={chapters}
          strengthOptions={strengthOptions}
          mobileFiltersOpen={mobileFiltersOpen}
          onMobileFiltersOpenChange={setMobileFiltersOpen}
        />
      </div>
    </div>
  );
}
