import type { Metadata } from "next";
import { GalleryView } from "@/components/marketing/gallery/gallery-view";
import { getQueryClient } from "@/app/get-query-client";
import {
  productCategoriesQueryOptions,
  productsQueryOptions,
} from "@/lib/api/query-options";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import {
  GALLERY_SEO_DESCRIPTION,
  GALLERY_SEO_TITLE,
} from "@/lib/seo/gallery";

export const metadata: Metadata = {
  title: {
    absolute: GALLERY_SEO_TITLE,
  },
  description: GALLERY_SEO_DESCRIPTION,
  openGraph: {
    title: GALLERY_SEO_TITLE,
    description: GALLERY_SEO_DESCRIPTION,
    type: "website",
  },
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
