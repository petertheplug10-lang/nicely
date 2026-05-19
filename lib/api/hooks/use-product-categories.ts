"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { productCategoriesQueryOptions } from "@/lib/api/query-options";

export function useProductCategories() {
  return useSuspenseQuery(productCategoriesQueryOptions());
}
