import type { Metadata } from "next";
import { ServiceView } from "@/components/marketing/service/service-view";

export const metadata: Metadata = {
  title: "Service",
  description:
    "Contact Nicozy customer service, verify authentic products, or send us a message. We're here to help.",
};

export default function ServicePage() {
  return (
    <main>
      <ServiceView />
    </main>
  );
}
