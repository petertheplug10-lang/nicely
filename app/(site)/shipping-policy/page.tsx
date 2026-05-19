import type { Metadata } from "next";
import { ShippingPolicyView } from "@/components/marketing/shipping/shipping-policy-view";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description:
    "Nicozy shipping policy: coverage for Canada and the United States, processing and delivery times, carriers, cross-border flow, delays, and support for lost packages.",
};

export default function ShippingPolicyPage() {
  return (
    <main>
      <ShippingPolicyView />
    </main>
  );
}
