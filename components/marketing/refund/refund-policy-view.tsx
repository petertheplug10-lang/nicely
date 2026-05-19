import { LegalPageHero } from "@/components/marketing/legal/legal-page-hero";
import { RefundClaimCard } from "@/components/marketing/refund/refund-claim-card";
import { RefundCompensationCard } from "@/components/marketing/refund/refund-compensation-card";
import { RefundEligibleCard } from "@/components/marketing/refund/refund-eligible-card";
import { RefundNonEligibleCard } from "@/components/marketing/refund/refund-non-eligible-card";
import { RefundQualityCard } from "@/components/marketing/refund/refund-quality-card";

export function RefundPolicyView() {
  return (
    <div className="relative overflow-x-hidden bg-[#fafafa]">
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 pb-14 sm:px-6 sm:pb-20 sm:pt-10 lg:px-16 lg:pb-24 lg:pt-14">
        <LegalPageHero title="Refund & Returns Policy" className="max-lg:pt-[60px] lg:pt-0">
          At <span className="font-medium text-[#171717]">Nicozy</span>, we stand behind the quality of
          our products. This policy outlines our guidelines for refunds and returns.
        </LegalPageHero>

        <div className="mt-10 grid gap-6 sm:mt-14 lg:grid-cols-12">
          <RefundQualityCard />
          <RefundCompensationCard />
          <RefundEligibleCard />
          <RefundNonEligibleCard />
          <RefundClaimCard />
        </div>
      </div>
    </div>
  );
}
