import { LegalCtaLink } from "@/components/marketing/legal/legal-cta-link";
import { PolicyIconBadge } from "@/components/marketing/legal/policy-icon-badge";

const EMAIL = "serviceteam@nicozyclub.com";

export function PrivacyContactCard() {
  return (
    <section className="flex flex-col items-center gap-8 rounded-[32px] border border-[#f5f5f5] bg-white p-6 text-center shadow-[0_8px_15px_rgba(0,0,0,0.03)] sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:p-12 lg:text-left">
      <div className="w-full max-w-md">
        <div className="flex justify-center lg:justify-start">
          <PolicyIconBadge
            src="/images/legal/privacy/contact.svg"
            className="border border-[#f5f5f5] bg-[#fafafa] shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.1)]"
          />
        </div>
        <h2 className="mt-6 font-unbounded text-xl font-normal tracking-[-0.6px] text-[#171717]">
          7. Contact Us
        </h2>
        <p className="mt-4 text-base leading-6 text-[#737373]">For any privacy-related concerns, please contact:</p>
        <p className="mt-2">
          <a
            href={`mailto:${EMAIL}`}
            className="text-base font-bold text-[#171717] underline-offset-2 hover:underline"
          >
            {EMAIL}
          </a>
        </p>
      </div>
      <LegalCtaLink
        href={`mailto:${EMAIL}`}
        label="Contact Privacy Team"
        arrowSrc="/images/legal/privacy/arrow.svg"
      />
    </section>
  );
}
