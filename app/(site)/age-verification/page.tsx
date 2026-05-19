import type { Metadata } from "next";
import { AgeVerificationView } from "@/components/marketing/age-verification/age-verification-view";

export const metadata: Metadata = {
  title: "Age Verification Policy",
  description:
    "Nicozy age verification policy: minimum age by region, local laws, user confirmation, restrictions, verification measures, liability, and disclaimer.",
};

export default function AgeVerificationPage() {
  return (
    <main>
      <AgeVerificationView />
    </main>
  );
}
