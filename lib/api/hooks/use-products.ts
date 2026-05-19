"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { productsQueryOptions } from "@/lib/api/query-options";

export function useProducts(params?: {
  page?: number;
  page_size?: number;
  featured?: boolean;
}) {
  return useSuspenseQuery(productsQueryOptions(params));
}
