import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "@/components/marketing/newsletter-form";
import { IconInstagram, IconTikTok, IconYoutube } from "@/components/marketing/social-icons";

const colNav = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "#", label: "Store Locator" },
  { href: "#", label: "Best Sellers" },
  { href: "/about", label: "About NICOZY" },
];

const socialLinks = {
  instagram: "https://www.instagram.com/nicozylab?igsh=MTg5d292ajZqdmRxbw%3D%3D&utm_source=qr",
  tiktok: "https://www.tiktok.com/@nicozy_us1?_r=1&_t=ZT-94Yn3TLNgLO",
  youtube: "https://youtube.com/@nicozyclub?si=T4-PxNb_moAS02O1",
} as const;

const colLegal = [
  { href: "/service", label: "Customer Service" },
  { href: "/wholesale", label: "Wholesale" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/shipping-policy", label: "Shipping Policy" },
  { href: "/age-verification", label: "Age Verification Policy" },
  { href: "/refund-returns", label: "Refund & Returns Policy" },
];

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="border-b w-fit border-[#1c1b18] pb-1.5 text-[10px] font-bold uppercase leading-[15px] tracking-[1px] text-[#171717]">
      {children}
    </h3>
  );
}

export function MarketingFooter() {
  return (
    <footer className="border-t border-[#e7e7e7] bg-white">
      <div className="mx-auto max-w-[1400px] px-6 pb-16 pt-16 sm:px-8 lg:pb-20 lg:pt-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block">
              <Image
                src="/images/footer/logo.svg"
                alt="Nicozy"
                width={152}
                height={59}
                className="h-10 w-auto sm:h-12"
                priority
              />
            </Link>
            <p className="mt-6 max-w-sm text-xs capitalize leading-[19px] text-[#1c1b18]/80">
              NICOZY is dedicated to providing adult users with a cleaner, finer, and more exhilarating
              nicotine experience. We redefine quality and push boundaries at competitive lifecycles.
            </p>
            <div className="mt-10 flex items-center gap-6 text-[#737373]">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#1c1b18]"
                aria-label="Nicozy on Instagram (@nicozylab)"
              >
                <IconInstagram className="size-5" />
              </a>
              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#1c1b18]"
                aria-label="Nicozy on TikTok (@nicozy_us1)"
              >
                <IconTikTok className="size-5" />
              </a>
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#1c1b18]"
                aria-label="Nicozy Club on YouTube"
              >
                <IconYoutube className="size-5" />
              </a>
            </div>
          </div>

          <nav className="lg:col-span-2" aria-label="Footer navigation">
            <ColumnHeading>Navigation</ColumnHeading>
            <ul className="mt-6 flex flex-col gap-4">
              {colNav.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[12px] font-medium uppercase leading-4 text-[#737373] transition hover:text-[#1c1b18]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-2" aria-label="Legal and support">
            <ColumnHeading>Legal &amp; Support</ColumnHeading>
            <ul className="mt-6 flex flex-col gap-4">
              {colLegal.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[12px] font-medium uppercase leading-4 text-[#737373] transition hover:text-[#1c1b18]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <ColumnHeading>Newsletter</ColumnHeading>
            <p className="mt-6 text-[12px] font-normal uppercase leading-[22.75px] tracking-[1.4px] text-[#1c1b18]/80">
              Sign up to our newsletter for exclusive updates and deals.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-200 bg-black py-4 text-center text-[11px] font-medium uppercase tracking-wide text-white">
        © {new Date().getFullYear()} NICOZY CLUB. All rights reserved.
      </div>
    </footer>
  );
}
