import { LegalPageHero } from "@/components/marketing/legal/legal-page-hero";
import { TermsCardsMiddle } from "@/components/marketing/terms/terms-cards-middle";
import { TermsCardsTop } from "@/components/marketing/terms/terms-cards-top";
import { TermsModificationsCard } from "@/components/marketing/terms/terms-modifications-card";

export function TermsOfServiceView() {
  return (
    <div className="relative overflow-x-hidden bg-[#fafafa]">
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-16 lg:pb-24 lg:pt-14">
        <LegalPageHero title="Terms of Service" heading="compact">
          By accessing or using the Nicozy website, you agree to the following terms.
        </LegalPageHero>

        <div className="mt-10 flex flex-col gap-6 sm:mt-14">
          <TermsCardsTop />
          <TermsCardsMiddle />
          <TermsModificationsCard />
        </div>
      </div>
    </div>
  );
}
