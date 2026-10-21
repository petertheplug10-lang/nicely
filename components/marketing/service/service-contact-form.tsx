"use client";

import { type FormEvent } from "react";
import Image from "next/image";
import Script from "next/script";
import { useContactMutation } from "@/lib/api/hooks/use-contact-mutation";
import { getRecaptchaToken } from "@/lib/recaptcha";
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
  "w-full rounded-xl border border-[#e5e5e5] bg-[#fafafa] px-4 py-3.5 text-base text-[#171717] placeholder:text-[rgba(23,23,23,0.5)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171717] sm:rounded-2xl sm:px-5 sm:py-4";

const RECAPTCHA_ACTION = "contact";

export function ServiceContactForm() {
  const { mutateAsync: submitContact, isPending } = useContactMutation();
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      const formData = new FormData(form);
      const recaptcha_token = await getRecaptchaToken(RECAPTCHA_ACTION);
      await submitContact({
        name: `${formData.get("firstName") as string} ${formData.get("lastName") as string}`.trim(),
        email: formData.get("email") as string,
        subject: formData.get("subject") as string,
        message: formData.get("message") as string,
        recaptcha_token,
      });
      form.reset();
      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error((error as Error).message || "Something went wrong. Please try again.");
    }
  }

  return (
    <>
      {siteKey ? (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`}
          strategy="afterInteractive"
        />
      ) : null}

      <form onSubmit={onSubmit} className="flex flex-col gap-5 sm:gap-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          <div>
            <FieldLabel htmlFor="svc-first">First Name</FieldLabel>
            <input
              id="svc-first"
              name="firstName"
              required
              type="text"
              autoComplete="given-name"
              placeholder="Jane"
              className={inputClass}
            />
          </div>
          <div>
            <FieldLabel htmlFor="svc-last">Last Name</FieldLabel>
            <input
              id="svc-last"
              name="lastName"
              required
              type="text"
              autoComplete="family-name"
              placeholder="Doe"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <FieldLabel htmlFor="svc-email">Email Address</FieldLabel>
          <input
            id="svc-email"
            name="email"
            required
            type="email"
            autoComplete="email"
            placeholder="jane@example.com"
            className={inputClass}
          />
        </div>

        <div>
          <FieldLabel htmlFor="svc-subject">Subject</FieldLabel>
          <input
            id="svc-subject"
            name="subject"
            required
            type="text"
            placeholder="How can we help?"
            className={inputClass}
          />
        </div>

        <div>
          <FieldLabel htmlFor="svc-message">Message</FieldLabel>
          <textarea
            id="svc-message"
            name="message"
            rows={6}
            required
            placeholder="How can we help you today?"
            className={`${inputClass} resize-none leading-6 sm:min-h-[168px]`}
          />
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#171717] px-8 py-3.5 text-sm font-semibold tracking-[0.35px] text-white shadow-[0_4px_6px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.1)] transition hover:bg-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171717] sm:w-auto sm:self-start sm:px-10 sm:py-4"
          disabled={isPending}
        >
          {isPending ? "Sending..." : "Send Message"}
          <Image
            src="/images/service/icon-arrow-send.svg"
            alt=""
            width={16}
            height={16}
            className="size-4"
          />
        </button>

        <p className="text-[11px] leading-4 text-[#a1a1a1]">
          This site is protected by reCAPTCHA and the Google{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-[#737373]"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-[#737373]"
          >
            Terms of Service
          </a>{" "}
          apply.
        </p>
      </form>
    </>
  );
}
