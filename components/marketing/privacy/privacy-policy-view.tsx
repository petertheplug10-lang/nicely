import { LegalPageHero } from "@/components/marketing/legal/legal-page-hero";
import { PrivacyContactCard } from "@/components/marketing/privacy/privacy-contact-card";
import { PrivacyInformationCard } from "@/components/marketing/privacy/privacy-information-card";
import { PrivacyRightsCard } from "@/components/marketing/privacy/privacy-rights-card";
import { PrivacyRowThree } from "@/components/marketing/privacy/privacy-row-three";
import { PrivacyUseCard } from "@/components/marketing/privacy/privacy-use-card";

export function PrivacyPolicyView() {
  return (
    <div className="relative overflow-x-hidden bg-[#fafafa]">
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 pb-14 sm:px-6 sm:pb-20 sm:pt-10 lg:px-16 lg:pb-24 lg:pt-14">
        <LegalPageHero title="Privacy Policy" className="max-lg:pt-[60px] lg:pt-0">
          At Nicozy, your privacy is important to
          us. This Privacy Policy explains how we collect, use, and protect your information when you
          visit our website.
        </LegalPageHero>

        <div className="mt-10 flex flex-col gap-6 sm:mt-14">
          <div className="grid gap-6 lg:grid-cols-12">
            <PrivacyInformationCard />
            <PrivacyUseCard />
          </div>
          <PrivacyRowThree />
          <PrivacyRightsCard />
          <PrivacyContactCard />
        </div>
      </div>
    </div>
  );
}
