import { PolicyIconBadge } from "@/components/marketing/legal/policy-icon-badge";

export function RefundCompensationCard() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-[#f5f5f5] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)] sm:p-8 lg:col-span-4 lg:p-10">
      <div
        className="pointer-events-none absolute -right-4 -top-16 size-32 rounded-full bg-[rgba(223,105,110,0.1)] blur-3xl"
        aria-hidden
      />
      <PolicyIconBadge src="/images/legal/refund/compensation.svg" className="bg-[rgba(223,105,110,0.1)]" />
      <h2 className="mt-6 font-unbounded text-xl font-normal tracking-[-0.5px] text-[#171717]">
        3. Compensation Policy
      </h2>
      <p className="mt-4 text-base leading-[26px] text-[#a1a1a1]">For each defective product, we provide:</p>
      <div className="mt-6 rounded-[14px] border border-white/10 bg-[rgba(187,187,187,0.05)] px-4 py-4">
        <p className="text-base font-medium leading-6 text-[#757575]">
          Replacement of a coupon per defective tin
        </p>
      </div>
    </section>
  );
}
