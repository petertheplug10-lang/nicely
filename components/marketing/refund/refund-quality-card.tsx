import Image from "next/image";
import { PolicyIconBadge } from "@/components/marketing/legal/policy-icon-badge";

export function RefundQualityCard() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-[#f5f5f5] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)] sm:p-8 lg:col-span-8 lg:p-10">
      <div className="pointer-events-none absolute right-8 top-8 opacity-[0.05]" aria-hidden>
        <div className="relative size-[192px]">
          <Image
            src="/images/legal/refund/shield-a.svg"
            alt=""
            fill
            className="object-contain"
            sizes="192px"
          />
        </div>
      </div>
      <PolicyIconBadge src="/images/legal/refund/quality.svg" className="bg-[rgba(135,188,203,0.1)]" />
      <h2 className="mt-6 font-unbounded text-xl font-normal tracking-[-0.6px] text-[#171717]">
        1. Quality Guarantee
      </h2>
      <p className="relative z-10 mt-4 max-w-xl text-base leading-[26px] text-[#737373]">
        If a product is confirmed to have a{" "}
        <strong className="font-bold text-[#171717]">manufacturing defect</strong>, we offer
        compensation to ensure you are fully satisfied with your purchase.
      </p>
    </section>
  );
}
