import type { BannerPage } from "./types";

export const queryKeys = {
  banners: (page: BannerPage) => ["banners", page] as const,
  tiktokVideos: (limit?: number) => ["tiktok-videos", limit ?? "default"] as const,
  productCategories: ["product-categories"] as const,
  products: (params: {
    page?: number;
    page_size?: number;
    featured?: boolean;
  }) => ["products", params] as const,
  product: (id: number) => ["product", id] as const,
} as const;
