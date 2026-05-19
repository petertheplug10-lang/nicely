export type BannerPage = "home" | "service" | "wholesale";

export type BannerSlide = {
  imageUrl: string;
  linkUrl: string;
  sort: number;
};

export type BannersPayload = {
  page: string;
  rotationSeconds: number;
  pc: BannerSlide[];
  mobile: BannerSlide[];
};

export type TikTokVideo = {
  id: number;
  url: string;
  sort: number;
};

export type ProductCategoryItem = {
  id: number;
  name: string;
  sort: number;
  allowsEmptyChildren: boolean;
};

export type ProductCategoriesPayload = {
  primary: ProductCategoryItem[];
  secondary: ProductCategoryItem[];
  strength: ProductCategoryItem[];
};

export type ProductListItem = {
  id: number;
  name: string;
  subtitle: string | null;
  cover_image: string | null;
  weight: string | null;
  price: string;
  display_weight: number;
  primary_category: string | null;
  secondary_category: string | null;
  strength_categories: string[];
};

export type ProductsListPayload = {
  products: ProductListItem[];
  pagination: {
    current_page: number;
    total_pages: number;
    total_items: number;
    has_next: boolean;
    has_previous: boolean;
  };
};

export type ProductDetail = ProductListItem & {
  number_of_pouches: number;
  description: string | null;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
  images: unknown[];
};

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type WholesaleInquiryPayload = {
  company_name: string;
  city_state_country: string;
  business_email: string;
  estimated_monthly_volume: string;
  additional_message?: string;
};

export type FormSubmitResult = { id: number };

export type RewardCheckResult = { status: "success" | "failure"; isUsed: boolean };
