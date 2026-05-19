import type { Metadata } from "next";
import { RefundPolicyView } from "@/components/marketing/refund/refund-policy-view";

export const metadata: Metadata = {
  title: "Refund & Returns Policy",
  description:
    "Nicozy refund and returns policy: quality guarantee, eligible issues, compensation, claim process, and non-eligible cases.",
};

export default function RefundReturnsPage() {
  return (
    <main>
      <RefundPolicyView />
    </main>
  );
}
