import { LegalCtaLink } from "@/components/marketing/legal/legal-cta-link";
import { PolicyIconBadge } from "@/components/marketing/legal/policy-icon-badge";

const EMAIL = "serviceteam@nicozyclub.com";

export function RefundClaimCard() {
  return (
    <section className="flex flex-col items-center gap-8 rounded-[32px] border border-[#f5f5f5] bg-white p-6 text-center shadow-[0_8px_15px_rgba(0,0,0,0.03)] sm:p-8 lg:col-span-12 lg:flex-row lg:items-center lg:justify-between lg:p-12 lg:text-left">
      <div className="w-full max-w-xl">
        <div className="flex justify-center lg:justify-start">
          <PolicyIconBadge
            src="/images/legal/refund/claim.svg"
            className="border border-[#f5f5f5] bg-[#fafafa] shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.1)]"
          />
        </div>
        <h2 className="mt-6 font-unbounded text-xl font-normal tracking-[-0.6px] text-[#171717]">
          4. Claim Process
        </h2>
        <p className="mt-4 text-base leading-6 text-[#737373]">
          To request support, please email us and include your order details and photos of the issue.
        </p>
        <p className="mt-4 text-base leading-6 text-[#737373]">Contact us at:</p>
        <p className="mt-1">
          <a
            href={`mailto:${EMAIL}`}
            className="text-base font-medium text-[#171717] underline-offset-2 hover:underline"
          >
            {EMAIL}
          </a>
        </p>
      </div>
      <LegalCtaLink
        href={`mailto:${EMAIL}`}
        label="Email Support Team"
        arrowSrc="/images/legal/refund/arrow.svg"
      />
    </section>
  );
}
