import Image from "next/image";
import { PolicyIconBadge } from "@/components/marketing/legal/policy-icon-badge";

function SubCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-[#f5f5f5] bg-[#fafafa] px-5 pb-5 pt-5">
      <h3 className="text-lg font-medium text-[#171717]">{title}</h3>
      <p className="mt-2 text-sm leading-[22.75px] text-[#737373]">{body}</p>
    </div>
  );
}

export function PrivacyInformationCard() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-[#f5f5f5] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)] sm:p-8 lg:col-span-8 lg:p-10">
      <div
        className="pointer-events-none absolute right-6 top-6 opacity-[0.06]"
        aria-hidden
      >
        <Image
          src="/images/legal/privacy/db-base.svg"
          alt=""
          width={192}
          height={192}
          className="size-[192px] object-contain"
        />
      </div>
      <PolicyIconBadge src="/images/legal/privacy/collect.svg" className="bg-[rgba(135,188,203,0.1)]" />
      <h2 className="mt-6 font-unbounded text-2xl font-normal tracking-[-0.6px] text-[#171717]">
        1. Information We Collect
      </h2>
      <p className="mt-4 text-base leading-6 text-[#737373]">
        We may collect the following types of information:
      </p>
      <div className="relative z-10 mt-8 grid gap-4 sm:grid-cols-2">
        <SubCard
          title="Personal Information"
          body="Name, email address, and other details when you contact us."
        />
        <SubCard
          title="Device & Browsing"
          body="IP address, browser type, and pages visited on our site."
        />
      </div>
      <div className="relative z-10 mt-4">
        <SubCard
          title="Tracking Data"
          body="Cookies and other tracking technologies to enhance your experience."
        />
      </div>
    </section>
  );
}
