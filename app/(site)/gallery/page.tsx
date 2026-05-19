import type { Metadata } from "next";
import { GalleryView } from "@/components/marketing/gallery/gallery-view";
import { getQueryClient } from "@/app/get-query-client";
import {
  productCategoriesQueryOptions,
  productsQueryOptions,
} from "@/lib/api/query-options";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export const metadata: Metadata = {
  title: "The Gallery",
  description:
    "Explore Nicozy chapters: Classic and Premium nicotine pouch series, strength options, and Nicozy Lifestyle apparel and accessories.",
};

export default async function GalleryPage() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(productCategoriesQueryOptions());
  await queryClient.prefetchQuery(productsQueryOptions({ page: 1, page_size: 1000 }));
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main>
        <GalleryView />
      </main>
    </HydrationBoundary>
  );
}
