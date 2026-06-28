import Image from "next/image";
// import { Unbounded } from "next/font/google";
import { WholesaleInquiryForm } from "@/components/marketing/wholesale/wholesale-inquiry-form";

export function WholesaleView() {
  return (
    <div className={`relative overflow-x-hidden bg-[#fafafa]`}>
      <div
        className="pointer-events-none absolute left-[-30%] top-28 size-[500px] rounded-full bg-[rgba(223,105,110,0.1)] blur-[100px] sm:left-[-20%] md:left-auto md:right-[8%] md:top-56"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-0 top-12 size-[600px] rounded-full bg-[rgba(135,188,203,0.1)] blur-[120px] md:top-52"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-16 lg:pb-24 lg:pt-14">
        <header className="max-w-[768px]">
          <h1 className="font-unbounded text-4xl font-normal uppercase leading-[50px] tracking-[-1.2px] text-[#171717] sm:text-[clamp(2.5rem,6vw,4.5rem)] sm:leading-[1.05] sm:tracking-[-1.8px]">
            Wholesale
          </h1>
          <p className="mt-4 max-w-xl text-lg font-medium uppercase leading-[29px] tracking-[0.9px] text-[#737373] sm:mt-6 sm:text-xl sm:leading-[32.5px] sm:tracking-[1px]">
            Global distribution & partnership opportunities
          </p>
        </header>

        <div className="mt-10 grid gap-10 sm:mt-16 sm:gap-8 lg:grid-cols-[minmax(0,516px)_minmax(0,1fr)] lg:items-start lg:gap-10">
          <div className="flex flex-col gap-6">
            <section className="rounded-[40px] border border-[rgba(229,229,229,0.6)] bg-white p-8 shadow-[0_8px_15px_rgba(0,0,0,0.04)] sm:p-10 lg:p-12">
              <div className="flex size-12 items-center justify-center rounded-2xl border border-[#f5f5f5] bg-[#fafafa]">
                <Image
                  src="/images/wholesale/icon-business.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="size-5"
                />
              </div>
              <h2 className="mt-6 text-xl font-semibold leading-7 tracking-[-0.5px] text-[#171717] sm:mt-8 sm:text-2xl sm:leading-8 sm:tracking-[-0.6px]">
                For Business/Wholesale Inquiries
              </h2>
              <p className="mt-4 text-sm font-normal leading-[22.75px] text-[#737373] sm:text-base sm:leading-[26px]">
                If you want to grow distribution, add a clear contact. NICOZY offers premium quality
                nicotine pouches with market-leading flavor profiles and brand recognition.
              </p>
            </section>

            <section className="relative overflow-hidden rounded-[40px] bg-[#171717] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] sm:p-10 lg:p-12">
              <div
                className="pointer-events-none absolute left-[55%] top-[-96px] size-64 -translate-x-1/2 rounded-full bg-white/10 blur-3xl sm:left-auto sm:-right-12 sm:translate-x-0"
                aria-hidden
              />
              <div className="relative z-10">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[rgba(255,255,255,0.1)]">
                  <Image
                    src="/images/wholesale/icon-sales.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="size-5"
                  />
                </div>
                <h2 className="mt-6 text-2xl font-semibold uppercase leading-8 tracking-[-0.6px] text-white sm:text-[30px] sm:leading-9 sm:tracking-[-0.75px]">
                  Contact Our Sales Team
                </h2>
                <div className="mt-6 inline-flex rounded-full bg-[rgba(255,255,255,0.1)] px-3 py-1">
                  <span className="text-[12px] font-medium uppercase tracking-[1.2px] text-[#a1a1a1]">
                    Main Business
                  </span>
                </div>
                <div className="mt-4 border-b border-[rgba(255,255,255,0.3)] pb-1">
                  <a
                    href="mailto:wholesale@nicozyclub.com"
                    className="break-all text-xl font-medium capitalize text-white transition hover:text-white/90 sm:text-2xl sm:break-normal"
                  >
                    wholesale@nicozyclub.com
                  </a>
                </div>
                <div className="mt-6 rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] px-6 py-6 sm:mt-8">
                  <p className="text-xs font-medium uppercase leading-[19.5px] tracking-[1.2px] text-[#e5e5e5] sm:text-sm sm:leading-[22.75px] sm:tracking-[1.4px]">
                    Wholesale or partnership inquiry? Reach out today to start your journey with
                    NICOZY.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <aside className="rounded-[40px] border border-[rgba(229,229,229,0.6)] bg-white p-8 shadow-[0_8px_15px_rgba(0,0,0,0.04)] sm:p-10 md:h-full lg:p-12">
            <div className="flex items-center gap-3">
              <Image
                src="/images/wholesale/icon-form.svg"
                alt=""
                width={24}
                height={24}
                className="size-6 shrink-0"
              />
              <h2 className="text-2xl font-semibold uppercase leading-8 tracking-[-0.6px] text-[#171717] sm:text-[30px] sm:leading-9 sm:tracking-[-0.75px]">
                Inquiry Form
              </h2>
            </div>
            <div className="mt-6 sm:mt-8">
              <WholesaleInquiryForm />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
