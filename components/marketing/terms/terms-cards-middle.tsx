import type { ReactNode } from "react";
import { PolicyIconBadge } from "@/components/marketing/legal/policy-icon-badge";

function LiabilityPill({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-[57px] items-center gap-3 rounded-[14px] border border-[#f5f5f5] bg-white px-4 py-4">
      <span className="size-2 shrink-0 rounded-full bg-[#df696e]" aria-hidden />
      <p className="text-base font-medium leading-6 text-[#404040]">{children}</p>
    </div>
  );
}

export function TermsCardsMiddle() {
  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <section className="relative overflow-hidden rounded-[32px] border border-[#f5f5f5] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)] sm:p-8 lg:col-span-4 lg:p-10">
        <div
          className="pointer-events-none absolute -right-8 -top-16 size-32 rounded-full bg-[rgba(135,188,203,0.1)] blur-3xl"
          aria-hidden
        />
        <PolicyIconBadge src="/images/legal/terms/04.svg" className="bg-[rgba(135,188,203,0.1)]" />
        <h2 className="mt-6 font-unbounded text-xl font-normal tracking-[-0.5px] text-[#171717]">
          4. Intellectual Property
        </h2>
        <p className="mt-4 text-base leading-6 text-[#737373]">
          All content, branding, and materials are owned by{" "}
          <span className="font-medium text-[#171717]">Nicozy</span> and may not be used without
          permission.
        </p>
      </section>

      <section className="rounded-[32px] border border-[#f5f5f5] bg-[rgba(69,145,167,0.05)] p-6 shadow-[0_8px_15px_rgba(0,0,0,0.02)] sm:p-8 lg:col-span-8 lg:p-10">
        <PolicyIconBadge src="/images/legal/terms/05.svg" className="bg-[rgba(135,188,203,0.1)]" />
        <h2 className="mt-6 font-unbounded text-xl font-normal tracking-[-0.5px] text-[#171717]">
          5. Limitation of Liability
        </h2>
        <p className="mt-4 text-base leading-6 text-[#737373]">Nicozy is not responsible for:</p>
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          <LiabilityPill>Improper product usage</LiabilityPill>
          <LiabilityPill>Health-related consequences</LiabilityPill>
          <LiabilityPill>Third-party misuse</LiabilityPill>
        </div>
      </section>
    </div>
  );
}
