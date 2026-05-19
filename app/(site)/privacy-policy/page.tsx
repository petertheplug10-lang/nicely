import type { Metadata } from "next";
import { PrivacyPolicyView } from "@/components/marketing/privacy/privacy-policy-view";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Nicozy privacy policy: information we collect, how we use it, cookies, third parties, data protection, your rights, and contact information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PrivacyPolicyView />
    </main>
  );
}
