"use client";

import Image from "next/image";
import { Unbounded } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const display = Unbounded({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-features-display",
});

type TextPanelVariant = "white" | "warm";

type FeatureRow = {
  layout: "text-image" | "image-text";
  /** Desktop / SEO kicker pill */
  kicker: string;
  /** Mobile hero label — Figma short uppercase (e.g. INNOVATION) */
  mobileKicker: string;
  titleLines: string[];
  body: string;
  icon: string;
  textVariant: TextPanelVariant;
  visual: "flavor" | "premium" | "organic";
  /** Figma: flavor 40%, premium/organic 30% */
  mobileOverlayStrength: "40" | "30";
};

const rows: FeatureRow[] = [
  {
    layout: "text-image",
    kicker: "NICOZY FLAVOR",
    mobileKicker: "INNOVATION",
    titleLines: ["Authentic Flavor", "Innovation"],
    body:
      "20+ bold flavors with new releases always in the works. We push the boundaries of taste to bring you the most authentic and satisfying experience possible.",
    icon: "/images/features/icon-flavor.svg",
    textVariant: "white",
    visual: "flavor",
    mobileOverlayStrength: "40",
  },
  {
    layout: "image-text",
    kicker: "NICOZY QUALITY",
    mobileKicker: "HIGH QUALITY",
    titleLines: ["Clean & Premium", "Pouches"],
    body:
      "Soft, full pouches designed for comfort and quality. Our premium materials ensure a smooth, irritation-free experience every single time.",
    icon: "/images/features/icon-quality.svg",
    textVariant: "warm",
    visual: "premium",
    mobileOverlayStrength: "30",
  },
  {
    layout: "text-image",
    kicker: "NICOZY INGREDIENTS",
    mobileKicker: "PURE INGREDIENTS",
    titleLines: ["Organic Nicotine"],
    body:
      "Smooth, long-lasting nicotine satisfaction for 20-40 minutes. We use only the highest quality organic salts for a clean, sustained release.",
    icon: "/images/features/icon-ingredients.svg",
    textVariant: "white",
    visual: "organic",
    mobileOverlayStrength: "30",
  },
];

function TextPanel({
  kicker,
  titleLines,
  body,
  icon,
  textVariant,
}: Pick<FeatureRow, "kicker" | "titleLines" | "body" | "icon" | "textVariant">) {
  const bg = textVariant === "warm" ? "bg-[#f9f8f6]" : "bg-white";

  return (
    <div
      className={`relative flex min-h-[320px] md:h-full w-full flex-col overflow-hidden rounded-[28px] border border-[rgba(229,229,229,0.6)] shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:rounded-[40px] sm:min-h-[380px] lg:min-h-[426px] lg:max-w-[575px] lg:shrink-0 ${bg}`}
    >
      <div
        className="pointer-events-none absolute -right-8 -top-10 size-64 rounded-full opacity-50 blur-[64px]"
        style={{
          background:
            "linear-gradient(225deg, rgb(255,255,255) 0%, rgba(200,200,200,0.5) 50%, rgba(0,0,0,0) 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 flex flex-1 flex-col px-6 pb-8 pt-8 sm:px-12 sm:pb-12 sm:pt-12 lg:px-16 lg:pb-14 lg:pt-11">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-[#f5f5f5] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.1)]">
          <Image src={icon} alt="" width={24} height={24} className="size-6" />
        </div>

        <div className="mt-8 inline-flex h-7 items-center rounded-full bg-[#f5f5f5] px-3 py-1.5 w-fit">
          <span className="text-[12px] font-semibold uppercase tracking-[0.6px] text-[#525252]">
            {kicker}
          </span>
        </div>

        <h3
          className={`mt-4 font-unbounded text-[32px] font-normal leading-[42px] tracking-[-1.2px] text-[#171717] sm:text-[38px] sm:leading-[44px] lg:text-[42px] lg:leading-[46px]`}
        >
          {titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h3>

        <p className="mt-4 max-w-[446px] text-base font-normal leading-6 text-[#737373]">{body}</p>
      </div>
    </div>
  );
}

/** Full-bleed imagery for mobile stacked cards (same assets as desktop). */
function FeatureMobileBackground({ kind }: { kind: FeatureRow["visual"] }) {
  if (kind === "flavor") {
    return (
      <>
        <Image
          src="/images/features/flavor-base.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <Image
          src="/images/features/flavor-overlay.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </>
    );
  }
  if (kind === "premium") {
    return (
      <Image
        src="/images/features/premium-mobile.png"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
    );
  }
  return (
    <>
      <Image
        src="/images/features/organic-base.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <Image
        src="/images/features/organic-overlay.jpg"
        alt=""
        fill
        className="object-cover object-[45%_40%]"
        sizes="100vw"
      />
    </>
  );
}

/**
 * Mobile-only block — Figma nodes 56:1126, 56:1685, 56:1674:
 * cover image, dark scrim, centered icon + label + display title + bold body.
 */
function FeatureMobileCard({ row }: { row: FeatureRow }) {
  const scrim =
    row.mobileOverlayStrength === "40" ? "bg-black/40" : "bg-black/30";

  return (
    <article className="relative w-full overflow-hidden lg:hidden">
      <div className="relative aspect-[375/520] min-h-[480px] w-full sm:min-h-[520px]">
        <FeatureMobileBackground kind={row.visual} />
        <div className={`absolute inset-0 ${scrim}`} aria-hidden />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 py-14 text-center">
          <div className="flex flex-col items-center gap-3">
            <div
              className="flex size-8 shrink-0 items-center justify-center rounded-[10px] bg-[rgba(255,255,255,0.94)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]"
              aria-hidden
            >
              <Image src={row.icon} alt="" width={14} height={14} className="size-[14px]" />
            </div>
            <p className="text-[12px] font-bold uppercase leading-4 tracking-[1.2px] text-white">
              {row.mobileKicker}
            </p>
          </div>

          <h3 className="font-unbounded mt-8 max-w-[min(100%,407px)] text-[clamp(2.25rem,11vw,3.25rem)] font-normal leading-[1.02] tracking-[-1.8px] text-white">
            {row.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h3>

          <p className="mt-8 max-w-[295px] text-base font-bold leading-[22.75px] text-white">
            {row.body}
          </p>
        </div>
      </div>
    </article>
  );
}

function FlavorVisual() {
  return (
    <div className="relative min-h-[220px] w-full flex-1 overflow-hidden rounded-[28px] border border-[rgba(229,229,229,0.6)] shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:min-h-[280px] sm:rounded-[40px] lg:min-h-[455px]">
      <Image
        src="/images/features/flavor-base.jpg"
        alt="Nicozy cans in a colorful grid"
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 900px"
        priority
      />
      <Image
        src="/images/features/flavor-overlay.jpg"
        alt=""
        fill
        className="object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 900px"
      />
    </div>
  );
}

function PremiumVisual() {
  return (
    <div className="relative min-h-[220px] w-full flex-1 overflow-hidden rounded-[28px] border border-[rgba(229,229,229,0.6)] shadow-[0_8px_30px_rgba(0,0,0,0.04)] bg-[#050402] sm:min-h-[280px] sm:rounded-[40px] lg:min-h-[426px]">
      <Image
        src="/images/features/premium-pc.png"
        alt="Nicozy pouches on dark surface"
        fill
        className="object-cover object-[65%_center]"
        sizes="(max-width: 1024px) 100vw, 900px"
      />
    </div>
  );
}

function OrganicVisual() {
  return (
    <div className="relative min-h-[220px] w-full flex-1 overflow-hidden rounded-[28px] border border-[rgba(229,229,229,0.6)] shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:min-h-[280px] sm:rounded-[40px] lg:min-h-[426px]">
      <Image
        src="/images/features/organic-base.jpg"
        alt="Organic nicotine salts macro"
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 900px"
      />
      <Image
        src="/images/features/organic-overlay.jpg"
        alt=""
        fill
        className="object-cover object-[45%_40%]"
        sizes="(max-width: 1024px) 100vw, 900px"
      />
    </div>
  );
}

function RowVisual({ kind }: { kind: FeatureRow["visual"] }) {
  if (kind === "flavor") return <FlavorVisual />;
  if (kind === "premium") return <PremiumVisual />;
  return <OrganicVisual />;
}

export function HomeFeatures() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = sectionRef.current;
    if (!root) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const rows = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll("[data-features-desktop-row]"),
      );

      const ctx = gsap.context(() => {
        rows.forEach((row) => {
          const start = row.querySelector<HTMLElement>("[data-features-col='start']");
          const end = row.querySelector<HTMLElement>("[data-features-col='end']");
          if (!start || !end) return;

          gsap.timeline({
            scrollTrigger: {
              trigger: row,
              start: "top 82%",
              once: true,
            },
          })
            .fromTo(
              start,
              { x: -56, autoAlpha: 0 },
              { x: 0, autoAlpha: 1, duration: 0.85, ease: "power2.out" },
              0,
            )
            .fromTo(
              end,
              { x: 56, autoAlpha: 0 },
              { x: 0, autoAlpha: 1, duration: 0.85, ease: "power2.out" },
              0,
            );
        });
      }, root);

      return () => ctx.revert();
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="difference"
      className={`relative scroll-mt-28 overflow-hidden bg-[#fafafa] ${display.variable}`}
      aria-labelledby="features-heading"
    >
      <div
        className="pointer-events-none absolute left-[8%] top-24 size-64 rounded-full bg-[rgba(135,188,203,0.1)] blur-[100px] sm:size-96"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-32 right-[5%] size-64 rounded-full bg-[rgba(223,105,110,0.1)] blur-[100px] sm:size-96"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-0 pb-16 pt-12 sm:pb-24 sm:pt-20 lg:px-12 lg:pb-28 lg:pt-24">
        <header className="mx-auto flex max-w-[768px] px-6 lg:px-0 flex-col gap-6 text-center">
          <h2
            id="features-heading"
            className="font-unbounded text-3xl font-normal tracking-[-1.2px] text-[#171717] sm:text-[44px] sm:leading-[52px] md:text-[48px] md:leading-[48px]"
          >
            The NICOZY Difference
          </h2>
          <p className="text-lg font-normal leading-[26px] text-[#737373]">
            Crafted for those who demand more from their nicotine experience. We combine premium
            ingredients with innovative design.
          </p>
        </header>

        <div className="mt-12 flex flex-col gap-8 lg:mt-16 lg:gap-[60px]">
          {rows.map((row) => {
            const text = (
              <TextPanel
                kicker={row.kicker}
                titleLines={row.titleLines}
                body={row.body}
                icon={row.icon}
                textVariant={row.textVariant}
              />
            );
            const visual = <RowVisual kind={row.visual} />;

            return (
              <div key={row.kicker}>
                <FeatureMobileCard row={row} />

                <div
                  className="hidden flex-col gap-6 lg:flex lg:flex-row lg:items-stretch lg:gap-6"
                  data-features-desktop-row
                >
                  {row.layout === "text-image" ? (
                    <>
                      <div data-features-col="start" className="min-w-0 shrink-0">
                        {text}
                      </div>
                      <div data-features-col="end" className="min-w-0 flex-1">
                        {visual}
                      </div>
                    </>
                  ) : (
                    <>
                      <div data-features-col="start" className="min-w-0 flex-1">
                        {visual}
                      </div>
                      <div data-features-col="end" className="min-w-0 shrink-0">
                        {text}
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
