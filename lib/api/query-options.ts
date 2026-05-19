import { queryOptions } from "@tanstack/react-query";
import {
  fetchBanners,
  fetchProduct,
  fetchProductCategories,
  fetchProducts,
  fetchRewardStatus,
  fetchTikTokVideos,
} from "@/lib/api/fetchers";
import { queryKeys } from "@/lib/api/query-keys";
import type { BannerPage } from "@/lib/api/types";

/** Server prefetch + client `useSuspenseQuery` share these options. */

export function bannerQueryOptions(page: BannerPage) {
  return queryOptions({
    queryKey: queryKeys.banners(page),
    queryFn: () => fetchBanners(page),
  });
}

export function tiktokVideosQueryOptions(limit?: number) {
  return queryOptions({
    queryKey: queryKeys.tiktokVideos(limit),
    queryFn: () => fetchTikTokVideos(limit),
  });
}

export function productCategoriesQueryOptions() {
  return queryOptions({
    queryKey: queryKeys.productCategories,
    queryFn: fetchProductCategories,
  });
}

export function productsQueryOptions(params?: {
  page?: number;
  page_size?: number;
  featured?: boolean;
}) {
  const normalized = params ?? {};
  return queryOptions({
    queryKey: queryKeys.products(normalized),
    queryFn: () => fetchProducts(params),
  });
}

export function productDetailQueryOptions(productId: number) {
  return queryOptions({
    queryKey: queryKeys.product(productId),
    queryFn: () => fetchProduct(productId),
  });
}

export function rewardQueryKey(encryptedCode: string) {
  return ["access-reward", encryptedCode] as const;
}

export function rewardQueryOptions(encryptedCode: string) {
  return queryOptions({
    queryKey: rewardQueryKey(encryptedCode),
    queryFn: () => fetchRewardStatus(encryptedCode),
  });
}
