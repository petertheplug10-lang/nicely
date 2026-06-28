"use client";

import Image from "next/image";
// import { Unbounded } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { AboutFaq } from "@/components/marketing/about/about-faq";

const pillars = [
  {
    title: "Innovation",
    bg: "bg-[#87bccb]",
    body: (
      <>
        <p className="mb-0 leading-[22.75px]">20+ bold, authentic formulas developed by</p>
        <p className="leading-[22.75px]">
          master perfumers to provide an unparalleled sensory journey.
        </p>
      </>
    ),
    icon: (
      <Image
        src="/images/about/icon-innovation.svg"
        alt=""
        width={34}
        height={34}
        className="object-contain"
      />
    ),
    bodyClass: "text-[16px] font-medium leading-[22.75px] text-white/90",
  },
  {
    title: "Pouches",
    bg: "bg-[#df696e]",
    body: (
      <p className="leading-[22.75px]">
        Soft-touch premium fabric and ergonomic pouch design for ultimate comfort and discretion.
      </p>
    ),
    icon: <div className="size-5 rounded-full border-[3px] border-white" aria-hidden />,
    bodyClass: "text-[14px] font-medium leading-[22.75px] text-white/90",
  },
  {
    title: "Organic",
    bg: "bg-[#1a1a1a]",
    body: (
      <p className="leading-[22.75px]">
        High-purity organic nicotine for smooth delivery and long-lasting satisfaction of up to 40
        minutes.
      </p>
    ),
    icon: (
      <Image
        src="/images/about/icon-organic.svg"
        alt=""
        width={20}
        height={20}
        className="object-contain"
      />
    ),
    bodyClass: "text-[14px] font-medium leading-[22.75px] text-[#a1a1a1]",
  },
] as const;

export function AboutView() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = rootRef.current;
    if (!root) return;

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      const heroEl = root.querySelector<HTMLElement>("[data-about-hero]");
      if (heroEl) {
        gsap.fromTo(
          heroEl,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: "power2.out",
            delay: 0.06,
          },
        );
      }

      gsap.utils.toArray<HTMLElement>("[data-about-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      mm.add("(min-width: 1024px)", () => {
        const inner = gsap.context(() => {
          const rows = gsap.utils.toArray<HTMLElement>(
            root.querySelectorAll("[data-about-desktop-row]"),
          );
          rows.forEach((row) => {
            const start = row.querySelector<HTMLElement>("[data-about-col='start']");
            const end = row.querySelector<HTMLElement>("[data-about-col='end']");
            if (!start || !end) return;
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: row,
                  start: "top 82%",
                  once: true,
                },
              })
              .fromTo(
                start,
                { x: -52, autoAlpha: 0 },
                { x: 0, autoAlpha: 1, duration: 0.85, ease: "power2.out" },
                0,
              )
              .fromTo(
                end,
                { x: 52, autoAlpha: 0 },
                { x: 0, autoAlpha: 1, duration: 0.85, ease: "power2.out" },
                0,
              );
          });
        }, root);
        return () => inner.revert();
      });
    }, root);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className={`bg-[#fafafa]`}>
      {/* Hero — mobile: headline + tagline centered; md+: Our Story + logo row (Figma 56-1964) */}
      <section className="relative min-h-[min(480px,72svh)] w-full overflow-hidden md:min-h-[min(720px,85vh)]">
        <Image
          src="/images/about/hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center hidden md:block"
          sizes="100vw"
        />
        <Image
          src="/images/about/hero-bg-mobile.png"
          alt=""
          fill
          priority
          className="object-cover object-center md:hidden"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-linear-to-b from-black/15 via-black/5 to-black/25 md:from-black/25 md:via-black/10 md:to-black/30"
          aria-hidden
        />

        <div
          data-about-hero
          className="relative z-10 mx-auto flex max-w-[1400px] flex-col px-4 pb-24 pt-12 md:text-center md:px-6 md:pb-36 md:pt-10 md:text-left lg:px-12"
        >
          <p className="hidden text-[12px] font-bold uppercase tracking-[2.4px] text-[#171717] drop-shadow-sm md:block">
            Our Story
          </p>

          <div className="mt-0 hidden items-end gap-4 md:mt-6 md:flex">
            <LinkBrandMark />
            <div className="mb-10 h-5 w-[60px] bg-black" aria-hidden />
          </div>

          <h1 className="mx-auto w-full md:w-auto max-w-[903px] font-unbounded text-[clamp(1.85rem,7.5vw,6rem)] uppercase leading-[0.92] tracking-[-0.05em] text-[#171717] drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)] md:mx-0 md:leading-[0.9] md:drop-shadow-sm">
            <span className="block">The Premium</span>
            <span className="block">Nicotine</span>
            <span className="block">Experience.</span>
          </h1>

          <p className="mt-8 text-[12px] font-bold uppercase tracking-[2.4px] text-[#171717] drop-shadow-[0_1px_2px_rgba(255,255,255,0.5)] sm:text-[14px] sm:tracking-[2.8px] md:mt-10 md:drop-shadow-sm">
            Keep It Nicozy.
          </p>
        </div>
      </section>

      {/* About card + product — mobile: white card with strong top radius overlapping hero */}
      <section className="relative z-20 -mt-12 px-4 sm:-mt-20 sm:px-6 md:-mt-24 lg:px-12">
        <div
          className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 rounded-t-[32px] rounded-b-[24px] border border-[rgba(229,229,229,0.6)] bg-white px-5 py-8 shadow-[0_8px_15px_rgba(0,0,0,0.04)] sm:gap-10 sm:rounded-[40px] sm:px-8 sm:py-10 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-12 lg:p-14"
          data-about-desktop-row
        >
          <h2 className="font-unbounded md:hidden text-3xl text-center font-normal uppercase tracking-[-1.2px] text-[#171717]">
            About NICOZY
          </h2>
          <div
            data-about-col="start"
            className="relative mx-auto aspect-[755/425] w-full max-w-[755px] lg:mx-0"
          >
            <Image
              src="/images/about/product-hero.png"
              alt="Nicozy tins and pouches"
              fill
              className="rounded-[20px] object-cover sm:rounded-[24px]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div data-about-col="end" className="min-w-0 text-left">
            <h2 className="font-unbounded hidden md:block text-[clamp(1.5rem,4.5vw,2.5rem)] font-normal uppercase tracking-[-1.2px] text-[#171717]">
              About NICOZY
            </h2>
            <div className="mt-5 space-y-4 text-[14px] leading-[23px] text-[#737373] sm:mt-6">
              <p>
                Nicozy is a North American brand created by a team with extensive experience in the
                nicotine pouch industry. We&apos;re not just professionals—we&apos;re pouch enthusiasts who care
                deeply about the products we make.
              </p>
              <p>
                By staying closely connected with our community, we constantly gather feedback and refine
                our products. From pouch quality to flavor innovation, every improvement is driven by real
                user experience.
              </p>
              <p>
                Our ambition is simple: to challenge the ordinary and redefine what a great nicotine pouch
                can be—bringing modern users a smoother, better, and more enjoyable Nicozy experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars — mobile: single column stack (Figma 56-1964) */}
      <section className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              data-about-reveal
              className={`relative flex min-h-[240px] flex-col overflow-hidden rounded-[28px] p-8 shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)] sm:min-h-[280px] sm:rounded-[36px] sm:p-10 lg:min-h-[300px] lg:rounded-[40px] ${p.bg}`}
            >
              <div
                className="pointer-events-none absolute -right-10 -top-10 size-48 rounded-full bg-white/20 blur-[40px]"
                aria-hidden
              />
              <div className="relative z-10 flex size-11 items-center justify-center rounded-2xl bg-white/20 sm:size-12">
                {p.icon}
              </div>
              <h3 className="relative z-10 mt-8 font-unbounded text-xl font-normal tracking-[-0.5px] text-white sm:mt-10 sm:text-2xl sm:tracking-[-0.6px]">
                {p.title.toUpperCase()}
              </h3>
              <div className={`relative z-10 mt-3 ${p.bodyClass}`}>{p.body}</div>
            </div>
          ))}
        </div>
      </section>

      <div data-about-reveal>
        <AboutFaq />
      </div>
    </div>
  );
}

function LinkBrandMark() {
  return (
    <div className="shrink-0 drop-shadow-sm">
      <Image src="/images/logo.svg" alt="" width={400} height={145} className="h-auto w-[min(100%,320px)]" />
    </div>
  );
}
