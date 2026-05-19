import { PolicyIconBadge } from "@/components/marketing/legal/policy-icon-badge";

export function PrivacyRightsCard() {
  return (
    <section className="rounded-[32px] border border-[#f5f5f5] bg-white p-6 shadow-[0_8px_15px_rgba(0,0,0,0.03)] sm:p-8 lg:p-10">
      <PolicyIconBadge src="/images/legal/privacy/rights.svg" className="bg-[rgba(223,105,110,0.1)]" />
      <h2 className="mt-6 font-unbounded text-xl font-normal tracking-[-0.5px] text-[#171717]">
        6. Your Rights
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-[26px] text-[#737373]">
        You may request access, correction, or deletion of your personal data by contacting us. We are
        committed to ensuring you have control over your information.
      </p>
    </section>
  );
}
