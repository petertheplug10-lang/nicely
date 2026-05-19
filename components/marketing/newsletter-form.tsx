"use client";

import type { FormEvent } from "react";

function ArrowSubmitIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M4 10h12M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NewsletterForm() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mt-6 flex max-w-[420px] items-center gap-2"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="EMAIL ADDRESS"
        className="h-[50px] min-w-0 flex-1 rounded-full bg-[#f9f9f9] px-6 text-[14px] font-bold text-[#1c1b18] placeholder:text-[rgba(28,27,24,0.5)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1c1b18]"
      />
      <button
        type="submit"
        className="flex size-[49px] shrink-0 items-center justify-center rounded-full border-[2.67px] border-[#1c1b18] bg-[#1c1b18] text-[#fdfbf7] shadow-[2px_2px_0_0_#1c1b18] transition hover:bg-[#2a2824] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1c1b18]"
        aria-label="Subscribe"
      >
        <ArrowSubmitIcon className="size-5" />
      </button>
    </form>
  );
}
