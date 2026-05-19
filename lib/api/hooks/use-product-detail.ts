"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { productDetailQueryOptions } from "@/lib/api/query-options";

export function useProductDetail(productId: number) {
  return useSuspenseQuery(productDetailQueryOptions(productId));
}
