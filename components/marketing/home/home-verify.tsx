"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Html5QrcodePlugin from "./scan";
import { Unbounded } from "next/font/google";

const display = Unbounded({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-verify-display",
});

export function HomeVerify() {
  const [isScanning, setIsScanning] = useState(false);
  const handleScan = () => {
    setIsScanning(true);
  }

  const handleScanSuccess = (decodedText: string) => {
    setIsScanning(false);
    location.href = decodedText;
  }

  const handleScanError = (error: any) => {
    console.error(error);
  }

  const handleScanClose = () => {
    setIsScanning(false);
  }

  useEffect(() => {
    if (isScanning) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    }
  }, [isScanning]);


  if (isScanning) {
    return (
      <div onClick={handleScanClose} className="fixed text-white flex items-center justify-center top-0 left-0 w-screen h-screen bg-black z-50">
        <Html5QrcodePlugin qrCodeSuccessCallback={handleScanSuccess} qrCodeErrorCallback={handleScanError} />
      </div>
    )
  }

  return (
    <section
      id="verify"
      className={`scroll-mt-28 border-b border-[rgba(229,229,229,0.6)] bg-white py-12 sm:py-20 lg:py-24 ${display.variable}`}
      aria-labelledby="verify-heading"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[28px] border border-[rgba(229,229,229,0.6)] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:rounded-[40px]">
          <div className="flex min-h-[min(520px,100%)] flex-col lg:min-h-[535px] lg:flex-row">
            {/* Left: copy + CTA */}
            <div className="relative flex flex-1 flex-col justify-center border-[#c1c1c1] px-6 py-10 sm:px-12 sm:py-14 lg:border-r-[2.667px] lg:border-dashed lg:px-20 lg:py-16">
              <div className="inline-flex h-[34px] w-fit items-center gap-2 rounded-full bg-[#d46060] pl-[19px] pr-5">
                <Image
                  src="/images/verify/secure-check-icon.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="size-4 shrink-0"
                />
                <span className="text-[12px] font-bold uppercase leading-4 tracking-[1.2px] text-white">
                  Secure Check
                </span>
              </div>

              <h2
                id="verify-heading"
                className="mt-6 font-unbounded text-[clamp(2rem,5vw,3.125rem)] font-normal uppercase leading-[1.1] tracking-tight text-[#1c1b18] sm:text-[50px] sm:leading-[60px]"
              >
                <span className="block">Product</span>
                <span className="block">Verification</span>
              </h2>

              <div className="mt-8 flex max-w-[508px] flex-col overflow-hidden md:rounded-[11px] md:border border-[#d1d5dc] bg-white md:shadow-sm sm:flex-row">
                <label className="sr-only" htmlFor="verify-scan-hint">
                  Scan the code with your phone
                </label>
                <input
                  id="verify-scan-hint"
                  readOnly
                  placeholder="SCAN THE CODE WITH YOUR PHONE"
                  className="max-md:border max-md:rounded-2xl border-[#d1d5dc] min-h-[52px] min-w-0 flex-1 cursor-default border-0 bg-transparent px-4 py-3 text-[12px] font-medium uppercase tracking-wider text-[#99a1af] placeholder:text-[#99a1af] focus:outline-none sm:min-h-[56px] sm:px-[18px] sm:text-[14px]"
                />
                <button
                  type="button"
                  onClick={handleScan}
                  className="mt-3 md:mt-0 max-md:rounded-2xl inline-flex min-h-[52px] w-full shrink-0 items-center justify-center border-t border-[#e5e7eb] bg-black px-5 text-[13px] font-bold uppercase tracking-[1.1px] text-white transition hover:bg-neutral-900 sm:min-h-[56px] sm:w-auto sm:min-w-[157px] sm:border-t-0"
                >
                  Verify Now
                </button>
              </div>

              <p className="mt-8 max-w-lg text-[14px] font-normal uppercase leading-[22.75px] tracking-[1.4px] text-[#1c1b18]/60">
                Each Nicozy product is equipped with a unique QR code. Designed for a single scan,
                guaranteeing the authenticity and integrity of your purchase.
              </p>
            </div>

            {/* Right: QR visual */}
            <div className="relative flex min-h-[280px] w-full shrink-0 items-center justify-center bg-[#87bccb] px-8 py-14 lg:min-h-0 lg:w-[38%] lg:max-w-[405px] lg:py-0">
              <div className="relative flex size-64 items-center justify-center rounded-[32px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.2)] sm:size-[256px]">
                <div
                  className="absolute inset-4 rounded-[24px] border-2 border-dashed border-[rgba(255,255,255,0.2)]"
                  aria-hidden
                />
                <div className="relative size-[191px] rounded-2xl bg-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]">
                  <div className="absolute left-1/2 top-[33%] z-10 h-0.5 w-24 -translate-x-1/2 bg-[#df696e] shadow-[0_0_8px_#df696e]" aria-hidden />
                  <div className="flex h-full items-center justify-center p-8">
                    <Image
                      src="/images/verify/qr-icon.svg"
                      alt="QR code illustration"
                      width={88}
                      height={88}
                      className="size-[88px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
