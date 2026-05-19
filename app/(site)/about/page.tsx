import type { Metadata } from "next";
import { AboutView } from "@/components/marketing/about/about-view";

export const metadata: Metadata = {
  title: "About NICOZY",
  description:
    "Discover Nicozy — a North American nicotine pouch brand built on innovation, premium pouches, and organic nicotine quality.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutView />
    </main>
  );
}
