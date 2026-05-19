import type { Metadata } from "next";
import { TermsOfServiceView } from "@/components/marketing/terms/terms-of-service-view";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Nicozy terms of service: eligibility, product information, acceptable use, intellectual property, limitation of liability, and modifications.",
};

export default function TermsOfServicePage() {
  return (
    <main>
      <TermsOfServiceView />
    </main>
  );
}
