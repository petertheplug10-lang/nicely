import { PolicyIconBadge } from "@/components/marketing/legal/policy-icon-badge";
import Image from "next/image";

export function AgeMinimumAgeCard() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-[#f5f5f5] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)] sm:p-8 lg:col-span-8 lg:p-10">
      <div
        className="pointer-events-none absolute -right-12 top-0 size-48 rounded-full bg-[rgba(135,188,203,0.12)] blur-3xl"
        aria-hidden
      />
      <Image src="/images/legal/age/max-age.svg" alt="Max Age" width={128} height={128} className="size-32 absolute top-8 right-8 opacity-10" />
      <PolicyIconBadge src="/images/legal/age/min-age.svg" className="bg-[rgba(135,188,203,0.1)]" />
      <h2 className="mt-6 font-unbounded text-xl font-normal tracking-[-0.6px] text-[#171717]">
        1. Minimum Age Requirements
      </h2>
      <p className="relative z-10 mt-4 max-w-2xl text-base leading-6 text-[#737373]">
        To purchase, access, or use Nicozy products, you must meet the legal age requirements in your
        jurisdiction:
      </p>
      <div className="relative z-10 mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex items-center gap-4 rounded-2xl border border-[#f5f5f5] bg-[#fafafa] p-4 sm:p-6">
          <span className="text-[30px] leading-none">🇨🇦</span>
          <div>
            <p className="text-lg font-medium text-[#171717]">Canada</p>
            <p className="mt-1 text-sm leading-5 text-[#737373]">
              Minimum age is 19+ (or higher where applicable)
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-2xl border border-[#f5f5f5] bg-[#fafafa] p-4 sm:p-6">
          <span className="text-[30px] leading-none">🇺🇸</span>
          <div>
            <p className="text-lg font-medium text-[#171717]">United States</p>
            <p className="mt-1 text-sm leading-5 text-[#737373]">Minimum age is 21+</p>
          </div>
        </div>
      </div>
    </section>
  );
}
