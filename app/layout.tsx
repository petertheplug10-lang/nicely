import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import { AgeVerificationModal } from "@/components/marketing/age-verification-modal";
import { getAgeRegionForRequest } from "@/lib/age-region-server";
import "./globals.css";
import Providers from "./providers";
import { Toaster } from "sonner";

/** Matches Google Fonts: Inter variable (opsz/wght) + italic. */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nicozy",
    template: "%s | Nicozy",
  },
  description:
    "Nicozy is a bold new nicotine pouch brand that brings a modern twist to your nicotine routine.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ageRegion = await getAgeRegionForRequest();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Providers>{children}</Providers>
        <AgeVerificationModal defaultRegion={ageRegion} />
        <Toaster />
      </body>
    </html>
  );
}
