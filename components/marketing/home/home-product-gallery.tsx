"use client";

import Image from "next/image";
import Link from "next/link";
import { Unbounded } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const display = Unbounded({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-gallery-display",
});

const cards = [
  {
    label: "CHAPTER 1",
    title: "NICOZY CLASSIC",
    subtitle: "DESIGNED FOR EFFORTLESS ACCESS",
    description:
      "WITH ITS SMOOTH SIDE-SLIDE OPENING, THE NICOZY SQUARE TIN ALLOWS EASY ONE-HAND OPERATION-PERFECT FOR QUICK ACCESS WHEREVER YOU ARE.",
    image: "/images/product-gallery/classic.jpg",
    imageClass: "object-cover object-[50%_45%]",
    href: "/gallery#chapter-one",
  },
  {
    label: "CHAPTER 2",
    title: "NICOZY PREMIUM",
    subtitle: "Freshness Meets Compliance",
    description:
      "The Nicozy round tin is designed to preserve pouch moisture while meeting modern packaging standards—ensuring freshness, quality, and reliability in every tin.",
    image: "/images/product-gallery/premium.jpg",
    imageClass: "object-cover object-[50%_55%]",
    href: "/gallery#chapter-two-premium",
  },
  {
    label: "",
    title: "NICOZY LIFESTYLE",
    subtitle: "",
    description:
      "Nicozy is more than a pouch brand — it’s a lifestyle. Explore exclusive apparel, accessories, and more inspired by the Nicozy culture.",
    image: "/images/product-gallery/lifestyle.jpg",
    imageClass: "object-cover object-[50%_20%]",
    href: "/gallery#lifestyle",
  },
] as const;

type ProductGalleryCard = (typeof cards)[number];

function ProductCard({ label, title, subtitle, description, image, imageClass, href }: ProductGalleryCard) {
  return (
    <Link
      href={href}
      aria-label={`Browse ${title}`}
      data-gallery-card
      className="group relative mx-auto flex w-full flex-1 shrink-0 flex-col overflow-hidden rounded-[40px] border border-[rgba(229,229,229,0.6)] bg-white shadow-[0_8px_15px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(0,0,0,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 lg:mx-0 lg:min-h-[572px]"
    >
      <div className="relative mx-2 mt-2 min-h-14 shrink-0 overflow-hidden sm:min-h-16">
        <div className="absolute left-4 top-4 z-10 inline-flex h-10 items-center px-4 text-[10px] font-bold uppercase tracking-widest text-black">
          {label}
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 pb-1 pt-6 text-center sm:px-8 sm:pt-8">
        <h3
          className={`font-unbounded text-[clamp(1.5rem,4vw,2.25rem)] font-normal uppercase leading-tight tracking-[-0.04em] text-black md:text-[36px] md:leading-9`}
        >
          {title}
        </h3>
        <p className="mt-3 max-w-[420px] text-base font-bold leading-snug text-black">{subtitle}</p>
        <p className="mt-3 max-w-[420px] text-[10px] font-normal uppercase leading-[18px] tracking-wide text-[#6a7282]">
          {description}
        </p>
      </div>

      <div className="relative mt-4 min-h-[220px] w-full flex-1 overflow-hidden rounded-b-[40px] sm:min-h-[280px] md:mt-2 md:min-h-[316px]">
        <div data-gallery-card-image className="absolute inset-0">
          <Image
            src={image}
            alt={`${title} product`}
            fill
            className={imageClass}
            sizes="(max-width: 1024px) 100vw, 485px"
          />
        </div>
      </div>
    </Link>
  );
}

export function HomeProductGallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    if (!section) return;

    const header = section.querySelector<HTMLElement>("[data-gallery-header]");
    const cards = section.querySelectorAll<HTMLElement>("[data-gallery-card]");

    const runIntro = (desktopSides: boolean) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          once: true,
        },
      });

      if (header) {
        tl.fromTo(
          header,
          { y: 56, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.72, ease: "power2.out" },
          0,
        );
      }

      cards.forEach((card, i) => {
        const fromX = desktopSides ? (i === 0 ? -58 : i === 2 ? 58 : 0) : 0;
        const fromY = desktopSides ? (i === 1 ? 80 : 60) : 68;
        const slot = 0.08 + i * 0.15;

        tl.fromTo(
          card,
          { x: fromX, y: fromY, autoAlpha: 0, scale: 0.93 },
          { x: 0, y: 0, autoAlpha: 1, scale: 1, duration: 0.92, ease: "power3.out" },
          slot,
        );

        const imgWrap = card.querySelector<HTMLElement>("[data-gallery-card-image]");
        if (imgWrap) {
          tl.fromTo(
            imgWrap,
            { scale: 1.12 },
            { scale: 1, duration: 1.05, ease: "power2.out" },
            slot + 0.1,
          );
        }
      });
    };

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const ctx = gsap.context(() => runIntro(true), section);
      return () => ctx.revert();
    });

    mm.add("(max-width: 1023px)", () => {
      const ctx = gsap.context(() => runIntro(false), section);
      return () => ctx.revert();
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className={`scroll-mt-28 bg-[#fafafa] ${display.variable}`}
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto flex max-w-[1600px] flex-col gap-10 px-4 pb-16 pt-16 sm:gap-12 sm:px-6 sm:pb-20 sm:pt-20 lg:gap-12 lg:px-12 lg:pt-24">
        <header
          data-gallery-header
          className="flex flex-col gap-4 border-b border-[#e5e7eb] pb-6 sm:flex-row sm:items-end sm:justify-between sm:pb-7"
        >
          <h2
            id="gallery-heading"
            className="font-unbounded text-5xl font-normal tracking-tight text-[#171717] sm:text-5xl md:text-[60px] md:leading-[60px] md:tracking-[-3px]"
          >
            Product Gallery
          </h2>
          <Link
            href="/gallery"
            className="shrink-0 max-md:text-right text-xs font-bold uppercase leading-4 tracking-widest text-[#6a7282] transition hover:text-[#171717]"
          >
            VIEW ALL COLLECTIONS &gt;
          </Link>
        </header>

        <div className="flex flex-col items-stretch gap-6 lg:flex-row lg:justify-center lg:gap-6">
          {cards.map((c) => (
            <ProductCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
