"use client";

import Image from "next/image";
import { Unbounded } from "next/font/google";
import { useEffect, useId, useState } from "react";
import {
  AGE_REGION_COOKIE,
  type AgeRegion,
  parseAgeRegionCookie,
} from "@/lib/age-region";

const display = Unbounded({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-age-gate-display",
});

const STORAGE_KEY = "nicozy-age-verification";
const REMEMBER_MS = 30 * 24 * 60 * 60 * 1000;

function readDocumentCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const parts = `; ${document.cookie}`.split(`; ${name}=`);
  if (parts.length < 2) return undefined;
  const raw = parts.pop()?.split(";").shift();
  if (raw == null) return undefined;
  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
}

const REGION_COPY: Record<
  AgeRegion,
  { label: string; age: string; flag: string; blurb: string }
> = {
  CA: {
    label: "Canada",
    age: "19+",
    flag: "/images/age-gate/ca.svg",
    blurb: "In Canada, you must be 19 or older (or the minimum age in your province or territory) to purchase nicotine products.",
  },
  US: {
    label: "United States",
    age: "21+",
    flag: "/images/age-gate/us.svg",
    blurb: "In the United States, you must be 21 or older to purchase nicotine products.",
  },
};

function hasValidVerification(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw) as { exp?: number };
      if (typeof data.exp === "number" && Date.now() < data.exp) return true;
    }
  } catch {
    /* ignore */
  }
  try {
    if (window.sessionStorage.getItem(STORAGE_KEY) === "1") return true;
  } catch {
    /* ignore */
  }
  return false;
}

function persistVerification(rememberFor30Days: boolean) {
  try {
    if (rememberFor30Days) {
      const exp = Date.now() + REMEMBER_MS;
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ exp }));
      window.sessionStorage.removeItem(STORAGE_KEY);
    } else {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
      window.localStorage.removeItem(STORAGE_KEY);
    }
  } catch {
    /* ignore */
  }
}

type AgeVerificationModalProps = {
  /** From SSR `cookies()` — same value as `AGE_REGION_COOKIE` on first paint. */
  defaultRegion: AgeRegion;
};

export function AgeVerificationModal({ defaultRegion }: AgeVerificationModalProps) {
  const headingId = useId();
  const [open, setOpen] = useState(false);
  const [remember, setRemember] = useState(false);
  const [region, setRegion] = useState<AgeRegion>(defaultRegion);

  useEffect(() => {
    queueMicrotask(() => {
      const fromCookie = parseAgeRegionCookie(readDocumentCookie(AGE_REGION_COOKIE));
      if (fromCookie) setRegion(fromCookie);
      if (!hasValidVerification()) setOpen(true);
    });
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  const copy = REGION_COPY[region];

  function onConfirm() {
    persistVerification(remember);
    setOpen(false);
  }

  function onLeave() {
    window.location.href = "https://www.google.com";
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 p-4 backdrop-blur-[2px]"
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={headingId}
        className={`relative w-full max-w-[800px] rounded-[32px] border border-[#f5f5f5] bg-white shadow-[0_20px_30px_rgba(0,0,0,0.08)] ${display.variable}`}
      >
        <div className="px-8 pb-10 pt-12 sm:px-12 sm:pb-12 sm:pt-14">
          <h2
            id={headingId}
            className="text-center font-unbounded text-3xl font-normal uppercase leading-tight tracking-[-1px] text-[#171717] sm:text-[40px] sm:leading-[48px]"
          >
            Age verification
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal leading-7 text-[#737373]">
            By entering, you confirm you meet the legal age for nicotine products in your region.
          </p>

          <div className="mx-auto mt-8 flex max-w-md justify-center">
            <div className="flex w-full flex-col items-center rounded-[20px] border border-[rgba(245,245,245,0.5)] bg-[#fafafa] px-6 py-8 sm:py-10">
              <div className="relative size-10 sm:size-12">
                <Image src={copy.flag} alt="" fill className="object-contain" sizes="48px" />
              </div>
              <p className="mt-4 text-xs font-bold uppercase tracking-[1.2px] text-[#171717]">
                {copy.label}
              </p>
              <p className="mt-2 font-unbounded text-2xl font-normal text-[#404040] sm:text-[28px]">
                {copy.age}
              </p>
              <p className="mt-4 text-center text-sm leading-6 text-[#737373]">{copy.blurb}</p>
            </div>
          </div>

          <div className="mx-auto mt-8 flex max-w-[600px] flex-col gap-4 sm:mx-auto sm:flex-row">
            <button
              type="button"
              onClick={onConfirm}
              className="flex h-[54px] md:flex-1 items-center justify-center rounded-2xl bg-black text-sm font-bold uppercase tracking-[1.4px] text-white transition hover:bg-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171717]"
            >
              I am of legal age
            </button>
            <button
              type="button"
              onClick={onLeave}
              className="flex h-[54px] md:flex-1 items-center justify-center rounded-2xl border border-[#e5e5e5] bg-white text-sm font-bold uppercase tracking-[1.4px] text-[#525252] transition hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171717]"
            >
              Leave
            </button>
          </div>

          <label className="mx-auto mt-8 flex cursor-pointer items-center justify-center gap-3 select-none">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="size-5 shrink-0 rounded border border-[#d4d4d4] text-black focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:ring-offset-2"
            />
            <span className="text-center text-xs font-bold uppercase tracking-[1.2px] text-[#737373]">
              Remember me for 30 days
            </span>
          </label>

          <p className="mt-6 text-center text-[10px] font-semibold uppercase tracking-[1px] text-[#a1a1a1]">
            Nicozy nicotine pouches | Authentic experience
          </p>
        </div>
      </div>
    </div>
  );
}
