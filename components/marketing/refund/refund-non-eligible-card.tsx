import { PolicyBulletList } from "@/components/marketing/legal/policy-bullet-list";
import { PolicyIconBadge } from "@/components/marketing/legal/policy-icon-badge";

export function RefundNonEligibleCard() {
  return (
    <section className="rounded-[32px] border border-[#f5f5f5] bg-white p-6 shadow-[0_8px_15px_rgba(0,0,0,0.03)] sm:p-8 lg:col-span-4 lg:p-10">
      <PolicyIconBadge src="/images/legal/refund/non-eligible.svg" className="bg-[#f5f5f5]" />
      <h2 className="mt-6 font-unbounded text-xl font-normal tracking-[-0.5px] text-[#171717]">
        5. Non-Eligible Cases
      </h2>
      <p className="mt-4 text-base leading-6 text-[#737373]">We do not accept returns for:</p>
      <div className="mt-6">
        <PolicyBulletList
          dotColor="neutral"
          items={[
            "Change of preference",
            "Opened or used products (non-defective)",
          ]}
        />
      </div>
    </section>
  );
}
