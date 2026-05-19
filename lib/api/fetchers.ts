import { requestData, requestSuccessJson } from "@/lib/request";
import type {
  BannerPage,
  BannersPayload,
  ContactPayload,
  FormSubmitResult,
  ProductCategoriesPayload,
  ProductDetail,
  ProductsListPayload,
  RewardCheckResult,
  TikTokVideo,
  WholesaleInquiryPayload,
} from "./types";

export async function fetchBanners(
  page: BannerPage,
): Promise<BannersPayload | null> {
  return requestData<BannersPayload | null>("/api/banners", {
    method: "GET",
    searchParams: { page },
  });
}

export async function fetchTikTokVideos(limit?: number): Promise<{
  videos: TikTokVideo[];
}> {
  return requestData<{ videos: TikTokVideo[] }>("/api/tiktok-videos", {
    method: "GET",
    searchParams:
      limit !== undefined ? { limit } : undefined,
  });
}

export async function fetchProductCategories(): Promise<ProductCategoriesPayload> {
  return requestData<ProductCategoriesPayload>("/api/product-categories", {
    method: "GET",
  });
}

export async function fetchProducts(params?: {
  page?: number;
  page_size?: number;
  featured?: boolean;
}): Promise<ProductsListPayload> {
  return requestData<ProductsListPayload>("/api/products", {
    method: "GET",
    searchParams: params
      ? {
          page: params.page,
          page_size: params.page_size,
          featured:
            params.featured === true ? "true" : undefined,
        }
      : undefined,
  });
}

export async function fetchProduct(id: number): Promise<ProductDetail> {
  return requestData<ProductDetail>(`/api/products/${id}`, {
    method: "GET",
  });
}

export async function submitContact(
  body: ContactPayload,
): Promise<FormSubmitResult> {
  return requestData<FormSubmitResult>("/api/contact", {
    method: "POST",
    body,
  });
}

export async function submitWholesaleInquiry(
  body: WholesaleInquiryPayload,
): Promise<FormSubmitResult> {
  return requestData<FormSubmitResult>("/api/wholesale-inquiry", {
    method: "POST",
    body,
  });
}

export async function fetchRewardStatus(
  encryptedCode: string,
): Promise<RewardCheckResult> {
  try {
  const path = `/access-reward/${encryptedCode}/`;
  const json = await requestSuccessJson<{ status: "success" | "failure"; isUsed: boolean }>(path, {
      method: "GET",
    });
    return { status: json.status, isUsed: json.isUsed };
  } catch {
    return { status: "failure", isUsed: true };
  }
}
