import { AgeDisclaimerCard } from "@/components/marketing/age-verification/age-disclaimer-card";
import { AgeLiabilityCard } from "@/components/marketing/age-verification/age-liability-card";
import { AgeLocalLawsCard } from "@/components/marketing/age-verification/age-local-laws-card";
import { AgeMeasuresCard } from "@/components/marketing/age-verification/age-measures-card";
import { AgeMinimumAgeCard } from "@/components/marketing/age-verification/age-minimum-age-card";
import { AgeRestrictionsCard } from "@/components/marketing/age-verification/age-restrictions-card";
import { AgeUserConfirmationCard } from "@/components/marketing/age-verification/age-user-confirmation-card";
import { LegalPageHero } from "@/components/marketing/legal/legal-page-hero";

export function AgeVerificationView() {
  return (
    <div className="relative overflow-x-hidden bg-[#fafafa]">
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 pb-14 sm:px-6 sm:pb-20 sm:pt-10 lg:px-16 lg:pb-24 lg:pt-14">
        <LegalPageHero title="Age Verification Policy" heading="compact" className="max-lg:pt-[60px] lg:pt-0">
          At Nicozy, we are committed to responsible
          marketing and the legal sale of nicotine products. Our products are intended{" "}
          <span className="font-normal text-[#171717]">strictly for adult consumers only</span>.
        </LegalPageHero>

        <div className="mt-10 grid gap-6 sm:mt-14 lg:grid-cols-12">
          <AgeMinimumAgeCard />
          <AgeLocalLawsCard />
          <AgeUserConfirmationCard />
          <AgeRestrictionsCard />
          <AgeMeasuresCard />
          <AgeLiabilityCard />
          <AgeDisclaimerCard />
        </div>
      </div>
    </div>
  );
}
