"use client";

import type { FormEvent } from "react";
import Image from "next/image";
import { Unbounded } from "next/font/google";
import { toast } from "sonner";
import { useContactMutation } from "@/lib/api/hooks/use-contact-mutation";

const display = Unbounded({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-contact-display",
});

/** API requires `subject`; home block has no subject field. */
const HOME_CONTACT_SUBJECT = "[Nicozy Club] New Customer Inquiry";

export function HomeContact() {
  const { mutateAsync: submitContact, isPending } = useContactMutation();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    if (!name || !email || !message) return;

    try {
      await submitContact({
        name,
        email,
        subject: HOME_CONTACT_SUBJECT,
        message,
      });
      form.reset();
      toast.success("Message sent successfully!");
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : "Something went wrong. Please try again.";
      toast.error(msg);
    }
  }

  const fieldClass =
    "w-full rounded-[14px] border-0 bg-white px-6 py-4 text-base font-bold tracking-[0.8px] text-[#1c1b18] placeholder:text-[rgba(28,27,24,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1c1b18]";

  return (
    <section
      className={`border-b border-solid border-[#1c1b18] bg-white px-4 pb-px pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-28 ${display.variable}`}
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto grid max-w-[1320px] gap-12 pb-16 lg:grid-cols-2 lg:items-start lg:gap-24 lg:pb-20">
        <div className="min-w-0">
          <h2
            id="contact-heading"
            className="font-unbounded text-[clamp(2.5rem,6vw,3.75rem)] font-normal uppercase leading-none tracking-tight text-[#1c1b18] sm:leading-[60px]"
          >
            <span className="block">Stay</span>
            <span className="block">Connected</span>
          </h2>

          <p className="mt-10 max-w-[500px] text-base font-normal leading-[22.75px] text-[#525252]">
            Have any questions, partnership inquiries, or just want to say hi? Our team is available
            24/7. Join the NICOZY community for the latest trends and exclusive benefits.
          </p>

          <ul className="mt-10 flex flex-col gap-8" role="list">
            <li className="flex items-center gap-6">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#df696e]">
                <Image
                  src="/images/contact/icon-email.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="size-6"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[12px] font-bold uppercase leading-4 tracking-[1.2px] text-[#1c1b18]/60">
                  Customer Service
                </p>
                <a
                  href="mailto:serviceteam@nicozyclub.com"
                  className="mt-1 inline-block text-lg font-bold leading-7 text-[#1c1b18] underline decoration-solid underline-offset-2 hover:text-[#1c1b18]/80"
                >
                  serviceteam@nicozyclub.com
                </a>
              </div>
            </li>
            <li className="flex items-center gap-6">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#df696e]">
                <Image
                  src="/images/contact/icon-wholesale.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="size-6"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[12px] font-bold uppercase leading-4 tracking-[1.2px] text-[#1c1b18]/60">
                  Wholesale Inquiries
                </p>
                <a
                  href="mailto:wholesale@nicozy.com"
                  className="mt-1 inline-block text-lg font-bold leading-7 text-[#1c1b18] underline decoration-solid underline-offset-2 hover:text-[#1c1b18]/80"
                >
                  wholesale@nicozy.com
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className="rounded-[28px] bg-[#f9f9f9] p-6 sm:rounded-[40px] sm:p-10 md:p-11">
          <form onSubmit={onSubmit} className="flex flex-col gap-6">
            <label className="sr-only" htmlFor="contact-name">
              Your name
            </label>
            <input
              id="contact-name"
              name="name"
              required
              placeholder="Your Name*"
              className={`${fieldClass} min-h-[61px]`}
            />
            <label className="sr-only" htmlFor="contact-email">
              Your email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              placeholder="Your Email*"
              className={`${fieldClass} min-h-[61px]`}
            />
            <label className="sr-only" htmlFor="contact-message">
              Your message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              placeholder="Your Message..."
              className={`${fieldClass} min-h-[133px] resize-none py-4 leading-6`}
            />
            <button
              type="submit"
              disabled={isPending}
              className="mt-1 flex min-h-[57px] w-full items-center justify-center rounded-full border-[2.667px] border-[#1c1b18] bg-[#1c1b18] px-8 py-4 text-center text-sm font-bold uppercase leading-5 tracking-[2.1px] text-[#fdfbf7] transition hover:bg-[#2a2824] disabled:pointer-events-none disabled:opacity-60"
            >
              {isPending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
