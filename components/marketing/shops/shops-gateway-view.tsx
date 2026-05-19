"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ResolvePayload = {
  supported: boolean;
  url: string | null;
  country: string | null;
};

export function ShopsGatewayView() {
  const [error, setError] = useState<string | null>(null);
  const [unsupported, setUnsupported] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/shops/resolve", { cache: "no-store" })
      .then(async (res) => {
        if (!res.ok) throw new Error("resolve_failed");
        return res.json() as Promise<ResolvePayload>;
      })
      .then((data) => {
        if (cancelled) return;
        if (!data.supported) {
          setUnsupported(true);
          return;
        }
        if (!data.url) throw new Error("missing_url");
        window.location.replace(data.url);
      })
      .catch(() => {
        if (!cancelled) setError("We couldn’t open the shop. Please try again.");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="flex min-h-[50vh] flex-col items-center justify-center gap-6 px-6 py-24 text-center">
      {error ? (
        <>
          <p className="max-w-md text-sm font-medium uppercase tracking-[0.12em] text-[#6a7282]">
            {error}
          </p>
          <Link
            href="/shops"
            className="inline-flex h-10 items-center justify-center rounded-full bg-black px-6 text-[10px] font-bold uppercase tracking-wide text-white transition hover:bg-neutral-800"
          >
            Retry
          </Link>
        </>
      ) : unsupported ? (
        <div
          className="flex max-w-lg flex-col gap-5"
          role="status"
          aria-live="polite"
        >
          <h1 className="font-unbounded text-2xl font-normal tracking-tight text-[#171717] sm:text-3xl">
            We’re not in your region yet
          </h1>
          <p className="text-[15px] leading-relaxed text-[#4b5563]">
            Right now our online store ships only to the{" "}
            <span className="font-medium text-[#171717]">United States</span> and{" "}
            <span className="font-medium text-[#171717]">Canada</span>. If you’re
            elsewhere, we can’t take your order through the shop at this time—we’re
            expanding when we can.
          </p>
          <p className="text-sm text-[#6b7280]">
            Questions? Our team is happy to help.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/"
              className="inline-flex h-10 items-center justify-center rounded-full bg-black px-6 text-[10px] font-bold uppercase tracking-wide text-white transition hover:bg-neutral-800"
            >
              Back to home
            </Link>
            <Link
              href="/service"
              className="inline-flex h-10 items-center justify-center rounded-full border border-[#e5e7eb] bg-white px-6 text-[10px] font-bold uppercase tracking-wide text-[#171717] transition hover:border-[#d1d5db]"
            >
              Contact us
            </Link>
          </div>
        </div>
      ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element -- external local asset served by app/api/loading-gateway */}
          <img
            src="/images/loading.gif"
            alt="Loading"
            className="w-50 object-contain"
            role="status"
          />
        </>
      )}
    </main>
  );
}
