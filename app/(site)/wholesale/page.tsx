import type { Metadata } from "next";
import { WholesaleView } from "@/components/marketing/wholesale/wholesale-view";

export const metadata: Metadata = {
  title: "Wholesale",
  description:
    "Partner with Nicozy for global distribution. Contact our sales team for wholesale and business inquiries.",
};

export default function WholesalePage() {
  return (
    <main>
      <WholesaleView />
    </main>
  );
}
