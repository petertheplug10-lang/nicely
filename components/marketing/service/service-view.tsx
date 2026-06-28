import Image from "next/image";
import Link from "next/link";
// import { Unbounded } from "next/font/google";
import { ServiceContactForm } from "@/components/marketing/service/service-contact-form";

export function ServiceView() {
  return (
    <div className={`relative bg-[#fafafa]`}>
      <div
        className="pointer-events-none absolute right-[10%] top-48 hidden size-[500px] rounded-full bg-[rgba(223,105,110,0.1)] blur-[100px] md:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 top-72 hidden size-[600px] rounded-full bg-[rgba(135,188,203,0.14)] blur-[120px] md:block"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-16 lg:pb-24 lg:pt-14">
        <header className="max-w-[768px]">
          <h1 className="font-unbounded text-[clamp(2rem,7.5vw,4.5rem)] font-normal leading-[1.05] tracking-[-1.4px] text-[#171717] sm:tracking-[-1.8px]">
            <span className="block">We&apos;d Love To</span>
            <span className="block">Hear From You</span>
          </h1>
          <p className="mt-5 max-w-xl text-base font-normal leading-relaxed text-[#737373] sm:mt-8 sm:text-xl sm:leading-[32.5px]">
            Dedicated support for the Nicozy community. Whether you have a question or just want to say
            hi, we&apos;re here for you.
          </p>
        </header>

        <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 lg:mt-16 lg:grid-cols-[minmax(0,516px)_minmax(0,1fr)] lg:items-start lg:gap-10">
          {/* Left column */}
          <div className="flex flex-col gap-5 sm:gap-6">
            {/* Contact card */}
            <div className="relative overflow-hidden rounded-[28px] bg-[#df696e] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)] sm:rounded-[40px] sm:p-10 lg:p-12">
              <div
                className="pointer-events-none absolute -right-16 -top-24 size-64 rounded-full bg-white/20 blur-[64px]"
                aria-hidden
              />
              <div className="relative z-10 flex size-12 items-center justify-center rounded-2xl bg-white/20 sm:size-14">
                <Image src="/images/service/icon-chat.svg" alt="" width={24} height={24} className="size-6" />
              </div>
              <h2 className="relative z-10 mt-6 font-unbounded text-2xl font-normal tracking-[-0.75px] text-white sm:mt-8 sm:text-[28px] sm:tracking-[-0.9px]">
                Contact Us
              </h2>
              <p className="relative z-10 mt-3 text-sm font-normal leading-[24px] text-white/90 sm:mt-4 sm:text-base sm:leading-[26px]">
                Reach us anytime at serviceteam@nicozyclub.com or use the form — our support team
                replies within 24 hours, Monday–Friday.
              </p>
              <p className="relative z-10 mt-6 text-[11px] font-semibold uppercase tracking-[1.2px] text-white/70 sm:mt-8 sm:text-[12px]">
                Customer service email
              </p>
              <a
                href="mailto:serviceteam@nicozyclub.com"
                className="relative z-10 mt-2 inline-block break-all border-b border-[rgba(255,255,255,0.3)] pb-1 text-lg font-medium text-white transition hover:text-white/90 sm:text-xl"
              >
                serviceteam@nicozyclub.com
              </a>
            </div>

            {/* Verify card — desktop: pill CTA; mobile Figma 56-182: stacked hint + Verify button */}
            <div className="relative min-h-0 w-full overflow-hidden rounded-[28px] bg-[#87bccb] shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)] sm:min-h-[349px] sm:rounded-[40px]">
              <div
                className="pointer-events-none absolute left-1/2 top-16 size-56 -translate-x-1/2 rounded-full bg-white/20 blur-[48px] sm:left-[min(356px,calc(100%-8rem))] sm:top-[189px] sm:size-64 sm:translate-x-0 lg:left-[min(356px,calc(100%-8rem))]"
                aria-hidden
              />
              <div className="relative z-10 flex flex-col gap-8 p-6 sm:gap-10 sm:p-12">
                <div className="relative mx-auto w-full max-w-[516px] lg:pr-[148px]">
                  <div className="mx-auto max-w-[320px] space-y-5 sm:max-w-[260px] sm:space-y-6 lg:mx-0">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-[rgba(255,255,255,0.2)] px-3.5">
                      <Image
                        src="/images/service/verify-header-icon.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="size-5"
                      />
                    </div>
                    <h2 className="font-unbounded text-2xl font-normal leading-tight tracking-[-0.5px] text-white sm:text-[28px] sm:leading-8 sm:tracking-[-0.6px]">
                      Verify Product
                    </h2>
                    <p className="text-[13px] font-medium leading-[22px] text-[rgba(255,255,255,0.9)] sm:text-[14px] sm:leading-[22.75px]">
                      Ensure your Nicozy is authentic. Scan the QR code on your product packaging.
                    </p>
                  </div>

                  <div className="relative mx-auto mt-8 flex size-[120px] shrink-0 sm:mt-10 sm:size-[132px] lg:absolute lg:right-0 lg:top-[67px] lg:mt-0">
                    <div className="relative flex size-full items-center justify-center rounded-[16.5px] border-[0.34px] border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.2)]">
                      <div
                        className="pointer-events-none absolute inset-[8.66px] rounded-[12.3px] border border-dashed border-[rgba(255,255,255,0.2)]"
                        aria-hidden
                      />
                      <div className="relative flex size-[92px] items-center justify-center rounded-[8.2px] bg-white shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] sm:size-[98px]">
                        <Image
                          src="/images/service/verify-qr-tile.svg"
                          alt=""
                          width={46}
                          height={46}
                          className="size-[46px]"
                        />
                        <div
                          className="pointer-events-none absolute left-[25px] top-[33px] z-10 h-0.5 w-[50px] bg-[#df696e] shadow-[0_0_4px_#df696e]"
                          aria-hidden
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile: two stacked controls (Figma 56-182) */}
                <div className="flex flex-col gap-3 lg:hidden">
                  <div className="flex min-h-[48px] items-center justify-center rounded-full border border-white/25 bg-white/15 px-4 py-3 text-center text-[11px] font-medium uppercase leading-snug tracking-[0.58px] text-white">
                    Scan the code with your phone
                  </div>
                  <Link
                    href="/#verify"
                    className="flex h-12 w-full items-center justify-center rounded-full bg-white text-[12px] font-bold uppercase tracking-[0.96px] text-black transition hover:bg-neutral-100"
                  >
                    Verify Now
                  </Link>
                </div>

                <div className="hidden h-12 w-full min-w-0 items-stretch overflow-hidden rounded-full bg-white lg:flex">
                  <span className="flex min-h-0 min-w-0 flex-1 items-center px-[15px] text-[12px] font-medium uppercase leading-[15px] tracking-[0.58px] text-[#99a1af] sm:px-5">
                    Scan the code with your phone
                  </span>
                  <div className="w-px shrink-0 self-stretch bg-black/[0.08]" aria-hidden />
                  <Link
                    href="/#verify"
                    className="flex h-full w-[134px] shrink-0 items-center justify-center text-center text-[12px] font-bold uppercase leading-[14px] tracking-[0.96px] text-black transition hover:bg-neutral-100"
                  >
                    Verify Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Form card */}
          <aside className="rounded-[28px] border border-[rgba(229,229,229,0.6)] bg-white p-5 shadow-[0_8px_15px_rgba(0,0,0,0.04)] sm:rounded-[40px] sm:p-10 lg:p-12">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <Image
                src="/images/service/icon-envelope.svg"
                alt=""
                width={24}
                height={24}
                className="size-5 shrink-0 sm:size-6"
              />
              <h2 className="font-unbounded text-2xl font-normal tracking-[-0.6px] text-[#171717] sm:text-[28px] sm:tracking-[-0.75px]">
                Send a Message
              </h2>
            </div>
            <div className="mt-6 sm:mt-8">
              <ServiceContactForm />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
