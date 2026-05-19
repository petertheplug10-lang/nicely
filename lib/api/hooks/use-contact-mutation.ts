"use client";

import { useMutation } from "@tanstack/react-query";
import { submitContact } from "@/lib/api/fetchers";
import type { ContactPayload } from "@/lib/api/types";

export function useContactMutation() {
  return useMutation({
    mutationFn: (body: ContactPayload) => submitContact(body),
  });
}
