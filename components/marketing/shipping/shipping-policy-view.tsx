import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
// import { Unbounded } from "next/font/google";

function IconBadge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex size-12 shrink-0 items-center justify-center rounded-2xl px-3 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

function CheckRow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-[#e5e5e5] bg-white text-[10px] font-medium leading-[15px] text-[#a1a1a1] sm:size-8 sm:text-xs sm:shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.1)]">
        ✓
      </span>
      <span className="text-base font-medium leading-6 text-[#525252]">{label}</span>
    </div>
  );
}

export function ShippingPolicyView() {
  return (
    <div className={`relative overflow-x-hidden bg-[#fafafa]`}>
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-10 md:pt-10 lg:px-16 lg:pb-24 lg:pt-14">
        <header className="max-w-3xl">
          <h1 className="font-unbounded text-4xl font-normal leading-10 tracking-[-0.9px] text-[#171717] sm:text-[clamp(2rem,5vw,3.75rem)] sm:leading-[1.1] sm:tracking-[-1.5px]">
            Shipping Policy
          </h1>
          <p className="mt-6 text-lg font-light leading-[29.25px] text-[#737373] sm:mt-6">
            At NICOZY, we aim to provide fast and reliable shipping across Canada and the United States.
            Here&apos;s everything you need to know about our delivery process.
          </p>
        </header>

        <div className="mt-10 grid gap-6 sm:mt-14 lg:grid-cols-12 lg:gap-6">
          {/* 1. Shipping Coverage */}
          <section className="relative overflow-hidden rounded-[32px] border border-[#f5f5f5] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)] sm:p-8 lg:col-span-8 lg:p-10">
            <div
              className="pointer-events-none absolute right-8 top-8 opacity-[0.05]"
              aria-hidden
            >
              <div className="relative size-[192px]">
                <Image
                  src="/images/shipping/globe-v3.svg"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="192px"
                />
              </div>
            </div>

            <IconBadge className="bg-[rgba(135,188,203,0.1)]">
              <Image
                src="/images/shipping/icon-coverage.svg"
                alt=""
                width={24}
                height={24}
                className="size-6"
              />
            </IconBadge>
            <h2 className="mt-6 font-unbounded text-xl font-normal tracking-[-0.6px] text-[#171717] lg:text-2xl">
              1. Shipping Coverage
            </h2>
            <p className="mt-4 text-base leading-6 text-[#737373]">
              We currently ship to the following regions:
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <div className="inline-flex h-[53px] w-fit items-center gap-2 rounded-full bg-[#fafafa] px-5 sm:h-[54px]">
                <span className="text-[30px] leading-none">🇨🇦</span>
                <span className="text-base font-medium text-[#404040]">Canada</span>
              </div>
              <div className="inline-flex h-[53px] w-fit items-center gap-2 rounded-full bg-[#fafafa] px-5 sm:h-[54px]">
                <span className="text-[30px] leading-none">🇺🇸</span>
                <span className="text-base font-medium text-[#404040]">United States</span>
              </div>
            </div>
          </section>

          {/* 2. Processing Time */}
          <section className="rounded-[32px] border border-[#f5f5f5] bg-white p-6 shadow-[0_8px_15px_rgba(0,0,0,0.03)] sm:p-8 lg:col-span-4 lg:p-10">
            <IconBadge className="border border-[#f5f5f5] bg-[#fafafa]">
              <Image
                src="/images/shipping/icon-clock.svg"
                alt=""
                width={24}
                height={24}
                className="size-6"
              />
            </IconBadge>
            <h2 className="mt-6 font-unbounded text-xl font-normal tracking-[-0.5px] text-[#171717]">
              2. Processing Time
            </h2>
            <ul className="mt-6 flex flex-col gap-4">
              <li className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#df696e]" aria-hidden />
                <p className="text-base leading-[26px] text-[#525252]">
                  Orders are typically processed within{" "}
                  <strong className="font-bold text-[#525252]">1 business day</strong>
                </p>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#df696e]" aria-hidden />
                <p className="text-base leading-[26px] text-[#525252]">
                  Orders placed on weekends or holidays will be processed the next business day
                </p>
              </li>
            </ul>
          </section>

          {/* 3. Shipping Carriers */}
          <section className="rounded-[32px] border border-[#f5f5f5] bg-white p-6 shadow-[0_8px_15px_rgba(0,0,0,0.03)] sm:p-8 lg:col-span-8 lg:p-10">
            <IconBadge className="border border-[#f5f5f5] bg-[#fafafa]">
              <Image
                src="/images/shipping/icon-carriers.svg"
                alt=""
                width={24}
                height={24}
                className="size-6"
              />
            </IconBadge>
            <h2 className="mt-6 font-unbounded text-xl font-normal tracking-[-0.6px] text-[#171717] lg:text-2xl">
              3. Shipping Carriers
            </h2>
            <p className="mt-4 text-base leading-6 text-[#737373]">
              We work with trusted logistics partners to ensure smooth delivery:
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="rounded-3xl border border-[#f5f5f5] bg-[#fafafa] px-6 pb-6 pt-6">
                <p className="flex items-baseline gap-2 border-b border-transparent text-[#171717]">
                  <span className="text-[22px] leading-none">🇨🇦</span>
                  <span className="text-sm font-bold uppercase tracking-[1.4px]">Canada</span>
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  <CheckRow label="Canada Post" />
                  <CheckRow label="UPS Canada" />
                  <CheckRow label="UniUni" />
                </div>
              </div>
              <div className="rounded-3xl border border-[#f5f5f5] bg-[#fafafa] px-6 pb-6 pt-6">
                <p className="flex items-baseline gap-2 text-[#171717]">
                  <span className="text-[22px] leading-none">🇺🇸</span>
                  <span className="text-sm font-bold uppercase tracking-[1.4px]">United States</span>
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-[#e5e5e5] bg-white text-[10px] font-medium leading-[15px] text-[#a1a1a1] sm:mt-1 sm:size-8 sm:text-xs sm:shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
                      ✓
                    </span>
                    <span className="text-base font-medium leading-6 text-[#525252]">
                      United States Postal Service (USPS)
                    </span>
                  </div>
                  <CheckRow label="UPS Ground" />
                  <p className="pl-9 text-xs leading-4 text-[#a1a1a1] sm:pl-11">
                    (for cross-border transport, final delivery handled by USPS)
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Delivery Time */}
          <section className="rounded-[32px] border border-transparent bg-[#fdf5f5] p-6 shadow-[0_8px_15px_rgba(0,0,0,0.02)] sm:p-8 lg:col-span-4 lg:border-[rgba(223,105,110,0.1)] lg:bg-[rgba(223,105,110,0.05)] lg:p-10">
            <IconBadge className="bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/shipping/icon-delivery.svg"
                alt=""
                width={24}
                height={24}
                className="size-6"
              />
            </IconBadge>
            <h2 className="mt-6 font-unbounded text-xl font-normal tracking-[-0.5px] text-[#171717]">
              4. Delivery Time
            </h2>
            <div className="mt-6 flex flex-col gap-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-[1.4px] text-[#171717]">
                  Canada
                </p>
                <p className="mt-3 inline-block rounded-[14px] border border-white bg-white px-5 py-2.5 text-base font-medium leading-6 text-[#404040]">
                  2–7 business days
                </p>
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-[1.4px] text-[#171717]">
                  United States
                </p>
                <p className="mt-3 inline-block rounded-[14px] border border-white bg-white px-5 py-2.5 text-base font-medium leading-6 text-[#404040]">
                  3–8 business days
                </p>
              </div>
              <p className="text-xs italic leading-[19.5px] text-[#737373]">
                * Delivery times may vary depending on location, customs processing, and carrier
                conditions.
              </p>
            </div>
          </section>

          {/* 5. Cross-Border */}
          <section className="relative overflow-hidden rounded-[32px] bg-[#87bccb] p-6 shadow-[0_20px_40px_rgba(135,188,203,0.2)] sm:p-8 lg:col-span-8 lg:p-10 lg:shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
            <div
              className="pointer-events-none absolute left-1/2 top-[-40px] size-64 -translate-x-1/2 rounded-full bg-white/10 blur-3xl lg:left-auto lg:-right-10 lg:-top-10 lg:translate-x-0"
              aria-hidden
            />
            <div className="relative z-10 flex flex-wrap items-center gap-3">
              <IconBadge className="border border-white/20 bg-white/20">
                <Image
                  src="/images/shipping/icon-notice.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="size-6"
                />
              </IconBadge>
              <span className="rounded-full border border-white/30 bg-white/20 px-3 py-1.5 text-xs font-bold uppercase tracking-[1.2px] text-white">
                Important Notice
              </span>
            </div>
            <h2 className="relative z-10 mt-6 font-unbounded text-xl font-normal tracking-[-0.6px] text-white lg:text-2xl">
              5. Cross-Border Shipping
            </h2>
            <p className="relative z-10 mt-4 text-lg font-normal leading-7 text-white/80 lg:text-white">
              For U.S. orders, please note our transport flow:
            </p>
            {/* Mobile Figma 56-372: vertical flow + ↓; desktop: horizontal */}
            <div className="relative z-10 mt-8 flex flex-col items-center gap-4 rounded-2xl border border-white/30 bg-white/20 p-6 lg:flex-row lg:items-stretch lg:gap-6 lg:border-white/10 lg:bg-white/5">
              <div className="w-full min-w-0 flex-1 text-center text-white lg:text-left">
                <p className="text-sm leading-5 text-white/70">Step 1</p>
                <p className="mt-1 font-unbounded text-lg font-normal leading-7">UPS Ground</p>
                <p className="mt-1 text-xs leading-4 text-white/70">Cross-border transport</p>
              </div>
              <div
                className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-base leading-6 text-white/80 lg:hidden"
                aria-hidden
              >
                ↓
              </div>
              <div
                className="hidden h-px w-8 shrink-0 self-center bg-[rgba(255,255,255,0.2)] lg:block"
                role="presentation"
              />
              <div className="w-full min-w-0 flex-1 text-center text-white lg:text-left">
                <p className="text-sm leading-5 text-white/70">Step 2</p>
                <p className="mt-1 font-unbounded text-lg font-normal leading-7">USPS</p>
                <p className="mt-1 text-xs leading-4 text-white/70">Final delivery</p>
              </div>
            </div>
            <p className="relative z-10 mt-8 text-sm leading-5 text-white/90">
              This may result in <strong className="font-bold text-white">two tracking updates</strong>
              , which is completely normal.
            </p>
          </section>

          {/* 6. Delays */}
          <section className="rounded-[32px] border border-[#f5f5f5] bg-white p-6 shadow-[0_8px_15px_rgba(0,0,0,0.03)] sm:p-8 lg:col-span-4 lg:p-10">
            <IconBadge className="bg-[rgba(135,188,203,0.1)]">
              <Image
                src="/images/shipping/icon-delays.svg"
                alt=""
                width={24}
                height={24}
                className="size-6"
              />
            </IconBadge>
            <h2 className="mt-6 font-unbounded text-xl font-normal tracking-[-0.5px] text-[#171717]">
              6. Delays
            </h2>
            <p className="mt-4 text-base leading-6 text-[#737373]">
              Shipping times may be affected by:
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Weather conditions", "Customs clearance", "Carrier delays", "Peak seasons"].map(
                (t) => (
                  <span
                    key={t}
                    className="inline-flex rounded-[14px] border border-[#e5e5e5] bg-white px-4 py-2 text-sm leading-5 text-[#525252] shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.1)]"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </section>

          {/* 7. Lost or Delayed */}
          <section className="flex flex-col items-center gap-8 rounded-[32px] border border-[#f5f5f5] bg-white p-8 text-center shadow-[0_8px_15px_rgba(0,0,0,0.03)] lg:col-span-12 lg:flex-row lg:items-center lg:justify-between lg:p-12 lg:text-left">
            <div className="w-full max-w-xl lg:max-w-xl">
              <div className="flex justify-center lg:justify-start">
                <IconBadge className="bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.1)]">
                  <Image
                    src="/images/shipping/icon-lost.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="size-6"
                  />
                </IconBadge>
              </div>
              <h2 className="mt-6 font-unbounded text-2xl font-normal tracking-[-0.6px] text-[#171717] lg:text-2xl">
                7. Lost or Delayed Packages
              </h2>
              <p className="mt-4 text-base leading-6 text-[#737373]">
                If your package is delayed or missing:
              </p>
              <ul className="mt-6 flex flex-col gap-3 text-left">
                <li className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#a1a1a1]" aria-hidden />
                  <p className="text-base leading-6 text-[#525252]">
                    Please contact us at{" "}
                    <a
                      href="mailto:serviceteam@nicozyclub.com"
                      className="font-bold text-[#525252] underline-offset-2 hover:underline"
                    >
                      serviceteam@nicozyclub.com
                    </a>
                  </p>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#a1a1a1]" aria-hidden />
                  <p className="text-base leading-6 text-[#525252]">
                    Our support team will assist you promptly
                  </p>
                </li>
              </ul>
            </div>
            <Link
              href="mailto:serviceteam@nicozyclub.com"
              className="inline-flex h-14 w-full max-w-[220px] shrink-0 items-center justify-center gap-2 rounded-full bg-black px-8 text-base font-medium leading-6 text-white shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)] transition hover:bg-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:h-14 lg:w-auto lg:max-w-none lg:rounded-[14px] lg:gap-3"
            >
              Contact Support
              <Image
                src="/images/shipping/icon-contact-arrow.svg"
                alt=""
                width={16}
                height={16}
                className="size-4"
              />
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
