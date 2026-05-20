"use client";

import Image from "next/image";
import Link from "next/link";
import { Unbounded } from "next/font/google";
import { useBanners } from "@/lib/api/hooks/use-banners";
import { BannerSwiperFrame } from "../banner-swiper-frame";
import { HomeMarquee } from "./home-marquee";

const display = Unbounded({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-nicozy-display",
});

/** Figma mobile Section (375×812); desktop keeps prior min-height. */
const HERO_SECTION_CLASS = `relative min-h-[812px] w-full overflow-hidden bg-[#c4a574] md:min-h-[min(100svh,820px)] ${display.variable}`;

const HERO_TEXTURE_MOBILE = "/images/home/hero-texture-mobile.png";
const HERO_TEXTURE_DESKTOP = "/images/home/hero-texture.jpg";
const HERO_PRODUCTS_DESKTOP = "/images/home/hero-products.png";
const HERO_MOBILE_TIN = "/images/home/hero-mobile-tin.png";
const HERO_MOBILE_PACKS = "/images/home/hero-mobile-packs.png";

export function HomeHeroStaticBackground() {
  return (
    <div className="absolute inset-0">
      {/* Mobile — Figma 56:1216 */}
      <div className="absolute inset-0 md:hidden" aria-hidden>
        <Image
          src={HERO_TEXTURE_MOBILE}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20" />
        <Image
          src={HERO_MOBILE_TIN}
          alt=""
          width={381}
          height={354}
          priority
          className="pointer-events-none absolute left-[23%] top-[-2%] h-auto w-[min(102vw,381px)] max-w-none select-none"
          sizes="(max-width: 768px) 100vw, 0px"
        />
        <Image
          src={HERO_MOBILE_PACKS}
          alt=""
          width={517}
          height={486}
          priority
          className="pointer-events-none absolute -left-[53%] top-[50%] h-auto w-[min(138vw,517px)] max-w-none select-none"
          sizes="(max-width: 768px) 100vw, 0px"
        />
      </div>

      {/* Desktop / tablet */}
      <div className="absolute inset-0 hidden md:block" aria-hidden>
        <Image
          src={HERO_TEXTURE_DESKTOP}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20" />
        <Image
          src={HERO_PRODUCTS_DESKTOP}
          alt="Nicozy nicotine pouch products"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/15 to-black/35" />
      </div>
    </div>
  );
}

export function HomeHeroStaticForeground() {
  return (
    <>
      <div className="relative z-10 mx-auto flex w-full max-w-[375px] flex-col items-center px-4 pb-[72px] pt-[148px] text-center md:max-w-[1200px] md:px-6 md:pb-24 md:pt-10">
        <Image
          src="/images/logo.svg"
          alt="Nicozy logo"
          width={500}
          height={188}
          priority
          className="h-auto w-[min(78vw,293px)] md:w-[min(92vw,500px)]"
        />
        <div
          className="mx-auto mt-4 hidden h-3 w-15 bg-white md:mt-5 md:block"
          aria-hidden
        />

        <h1
          id="home-hero-heading"
          className="font-unbounded mt-6 w-full max-w-[398px] text-[40px] font-semibold uppercase leading-[1.16] tracking-[-0.065em] text-white md:mt-0 md:max-w-none md:text-6xl md:leading-[1.02] md:tracking-[-0.04em] lg:text-9xl"
        >
          <span className="block md:hidden">The Premium</span>
          <span className="block md:hidden">Nicotine Experience</span>
          <span className="hidden md:block">The Premium</span>
          <span className="hidden md:block">Nicotine</span>
          <span className="hidden md:block">Experience</span>
        </h1>

        <p className="mt-8 flex items-center justify-center gap-2 text-xl font-bold italic tracking-wide text-white md:mt-10 md:gap-3 md:text-2xl lg:text-3xl">
          <span className="h-5 w-0.5 bg-white md:h-8 md:w-1" aria-hidden />
          Keep It Nicozy.
        </p>
      </div>

      
    </>
  );
}

/** 无接口轮播时的整块静态 Hero */
export function HomeHeroStatic() {
  return (
    <section className={HERO_SECTION_CLASS} aria-labelledby="home-hero-heading">
      <HomeHeroStaticBackground />
      <HomeHeroStaticForeground />
    </section>
  );
}

export function HomeHero() {
  const { data: banners } = useBanners("home");

  return (
    <BannerSwiperFrame
      data={banners}
      className={HERO_SECTION_CLASS}
      aria-labelledby="home-hero-heading"
      leadingSlide={<HomeHeroStaticBackground />}
      foreground={<HomeHeroStaticForeground />}
    />
  );
}
