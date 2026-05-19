"use client";

import { useMutation } from "@tanstack/react-query";
import { submitWholesaleInquiry } from "@/lib/api/fetchers";
import type { WholesaleInquiryPayload } from "@/lib/api/types";

export function useWholesaleInquiryMutation() {
  return useMutation({
    mutationFn: (body: WholesaleInquiryPayload) => submitWholesaleInquiry(body),
  });
}
