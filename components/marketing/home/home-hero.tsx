"use client";

import Image from "next/image";
import Link from "next/link";
import { Unbounded } from "next/font/google";
import { useBanners } from "@/lib/api/hooks/use-banners";
import { BannerSwiperFrame } from "../banner-swiper-frame";

const display = Unbounded({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-nicozy-display",
});

const HERO_PRODUCTS_DESKTOP = "/images/home/hero-products.png";
/** Mobile hero art — export from Figma mobile frame and replace this file. */
const HERO_PRODUCTS_MOBILE = "/images/home/hero-products-mobile.png";

export function HomeHeroStatic() {
  const { data: banners } = useBanners("home");
  console.log(banners);
  if (!banners) return null;
  const { pc, mobile } = banners;
  const { imageUrl, linkUrl } = pc[0];
  const { imageUrl: mobileImageUrl, linkUrl: mobileLinkUrl } = mobile[0];
  console.log(imageUrl, linkUrl, mobileImageUrl, mobileLinkUrl);
  return (
    <section
      className={`relative min-h-[min(100svh,820px)] w-full overflow-hidden bg-[#c4a574] md:min-h-[798px] ${display.variable}`}
      aria-labelledby="home-hero-heading"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/home/hero-texture.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[center_30%] md:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20" aria-hidden />

        {/* Mobile banner art — vertical / tighter crop (Figma mobile frame) */}
        <Image
          src={HERO_PRODUCTS_MOBILE}
          alt="Nicozy nicotine pouch products"
          fill
          priority
          className="object-cover object-[center_22%] md:hidden"
          sizes="100vw"
        />
        {/* Desktop / tablet banner art */}
        <Image
          src={HERO_PRODUCTS_DESKTOP}
          alt="Nicozy nicotine pouch products"
          fill
          priority
          className="hidden object-cover object-center md:block"
          sizes="100vw"
        />

        <div
          className="absolute inset-0 bg-linear-to-b from-black/35 via-black/10 to-black/40 md:from-black/30 md:via-black/15 md:to-black/35"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center px-4 pb-14 pt-10 text-center sm:px-6 sm:pb-20 md:pb-24">
        <div className="flex items-center">
          <Image
            src="/images/logo.svg"
            alt="Nicozy logo"
            width={500}
            height={188}
            priority
            className="h-auto w-[min(78vw,300px)] sm:w-[min(55vw,380px)] md:w-[min(92vw,500px)]"
          />
          <div className="mx-auto mt-4 h-3 w-15 bg-white sm:mt-5" aria-hidden />
        </div>

        <h1
          id="home-hero-heading"
          className="font-unbounded max-w-[18ch] text-[clamp(2rem,9.5vw,3.75rem)] font-semibold uppercase leading-[0.95] tracking-[-0.02em] text-white sm:max-w-none sm:text-6xl sm:tracking-tight lg:text-9xl md:leading-[1.02] md:tracking-[-0.04em]"
        >
          <span className="block">The Premium</span>
          <span className="block">Nicotine</span>
          <span className="block">Experience</span>
        </h1>

        <p className="mt-8 flex items-center justify-center gap-2 text-lg font-bold italic tracking-wide text-white sm:mt-10 sm:gap-3 sm:text-2xl md:text-3xl">
          <span className="h-6 w-0.5 bg-white sm:h-8 sm:w-1" aria-hidden />
          Keep It Nicozy.
        </p>

        <div className="mt-10 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mt-12 sm:max-w-none sm:flex-row sm:items-center sm:gap-5">
          <Link
            href="/gallery"
            className="inline-flex h-12 min-h-[48px] w-full items-center justify-center rounded-full bg-black px-8 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-neutral-900 sm:w-auto sm:min-w-[200px]"
          >
            Explore Collection
          </Link>
          <Link
            href="#difference"
            className="inline-flex h-12 min-h-[48px] w-full items-center justify-center rounded-full bg-white px-8 text-xs font-bold uppercase tracking-wide text-black transition hover:bg-neutral-100 sm:w-auto sm:min-w-[170px]"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export function HomeHero() {
  const { data: banners } = useBanners("home");

  return (
    <BannerSwiperFrame
      data={banners}
      aria-labelledby="home-hero-heading"
    >
      <HomeHeroStatic />
    </BannerSwiperFrame>
  );
}