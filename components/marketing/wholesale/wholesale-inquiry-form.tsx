"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { useWholesaleInquiryMutation } from "@/lib/api/hooks/use-wholesale-inquiry-mutation";
import { toast } from "sonner";

function FieldLabel({ children, htmlFor }: { children: React.ReactNode; htmlFor: string }) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block pl-1 text-[12px] font-semibold uppercase tracking-[0.6px] text-[#737373]"
    >
      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-2xl border border-[#e5e5e5] bg-[#fafafa] px-4 py-3.5 text-sm text-[#171717] placeholder:text-[rgba(23,23,23,0.5)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171717] sm:px-5 sm:py-4 sm:text-base";

/** Must match backend `estimated_monthly_volume` choices. */
const ESTIMATED_MONTHLY_VOLUME_OPTIONS = [
  "500 - 1000 cans",
  "1000 - 5000 cans",
  "5000+ cans",
] as const;

export function WholesaleInquiryForm() {
  const { mutateAsync: submitWholesaleInquiry, isPending } = useWholesaleInquiryMutation();
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
    const formData = new FormData(e.target as HTMLFormElement);
    await submitWholesaleInquiry({
      company_name: formData.get("company") as string,
      city_state_country: formData.get("city") as string,
      business_email: formData.get("businessEmail") as string,
      estimated_monthly_volume: formData.get("volume") as string,
      additional_message: formData.get("message") as string,
    });
    (e.target as HTMLFormElement).reset();
    toast.success("Message sent successfully!");
    } catch (error) {
      toast.error((error as Error).message || "Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <div>
        <FieldLabel htmlFor="wh-company">Company Name</FieldLabel>
        <input
          id="wh-company"
          name="company"
          required
          type="text"
          autoComplete="organization"
          placeholder="Store Name LLC"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="wh-city">City/Region</FieldLabel>
          <input
            id="wh-city"
            name="city"
            required
            type="text"
            placeholder="New York, NY"
            className={inputClass}
          />
        </div>
        <div>
          <FieldLabel htmlFor="wh-biz-email">Business Email</FieldLabel>
          <input
            id="wh-biz-email"
            name="businessEmail"
            required
            type="email"
            autoComplete="email"
            placeholder="contact@storename.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <FieldLabel htmlFor="wh-volume">Estimated Monthly Volume</FieldLabel>
        <select
          id="wh-volume"
          name="volume"
          required
          defaultValue=""
          className={`${inputClass} cursor-pointer text-[#171717] invalid:text-[rgba(23,23,23,0.5)]`}
        >
          <option value="" disabled>
            Select a range
          </option>
          {ESTIMATED_MONTHLY_VOLUME_OPTIONS.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>

      <div>
        <FieldLabel htmlFor="wh-message">Additional Message</FieldLabel>
        <textarea
          id="wh-message"
          name="message"
          rows={5}
          required
          placeholder="Please describe your inquiry in detail..."
          className={`${inputClass} min-h-[153px] resize-none leading-6 sm:min-h-0`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#171717] px-8 text-white shadow-[0_4px_6px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.1)] transition hover:bg-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171717] sm:w-fit sm:px-10"
        disabled={isPending}
      >
        <span className="text-[14px] font-semibold leading-5 tracking-[0.35px]">
          {isPending ? "Sending..." : "Send Message"}
        </span>
        <Image
          src="/images/wholesale/icon-submit-arrow.svg"
          alt=""
          width={16}
          height={16}
          className="size-4 shrink-0"
        />
      </button>
    </form>
  );
}
