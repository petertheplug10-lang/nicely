"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { useContactMutation } from "@/lib/api/hooks/use-contact-mutation";
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

export function ServiceContactForm() {
  const { mutateAsync: submitContact, isPending } = useContactMutation();
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
    const formData = new FormData(e.target as HTMLFormElement);
    await submitContact({
      name: formData.get("firstName") as string + " " + formData.get("lastName") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    });
    (e.target as HTMLFormElement).reset();
    toast.success("Message sent successfully!");
    } catch (error) {
      toast.error((error as Error).message || "Something went wrong. Please try again.");
    }
  }

  return (
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
    </form>
  );
}
