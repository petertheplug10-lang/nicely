import { PolicyBulletList } from "@/components/marketing/legal/policy-bullet-list";
import { PolicyIconBadge } from "@/components/marketing/legal/policy-icon-badge";

export function TermsCardsTop() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <section className="rounded-[32px] border border-[#f5f5f5] bg-white p-6 shadow-[0_8px_15px_rgba(0,0,0,0.03)] sm:p-8 lg:p-10">
        <PolicyIconBadge src="/images/legal/terms/01.svg" className="bg-[rgba(135,188,203,0.1)]" />
        <h2 className="mt-6 font-unbounded text-xl font-normal tracking-[-0.5px] text-[#171717]">
          1. Eligibility
        </h2>
        <p className="mt-4 text-base leading-6 text-[#737373]">
          You must be of legal age in your jurisdiction to use nicotine products.
        </p>
      </section>

      <section className="rounded-[32px] border border-[#f5f5f5] bg-white p-6 shadow-[0_8px_15px_rgba(0,0,0,0.03)] sm:p-8 lg:p-10">
        <PolicyIconBadge src="/images/legal/terms/02.svg" className="bg-[rgba(223,105,110,0.1)]" />
        <h2 className="mt-6 font-unbounded text-xl font-normal tracking-[-0.5px] text-[#171717]">
          2. Product Information
        </h2>
        <p className="mt-4 text-base leading-6 text-[#737373]">
          All content on this site is for informational purposes only. We do not guarantee product
          availability or accuracy at all times.
        </p>
      </section>

      <section className="rounded-[32px] border border-[#F3EFE6] bg-[#FDFBF7] p-6 shadow-[0_8px_15px_rgba(0,0,0,0.03)] sm:p-8 lg:p-10">
        <PolicyIconBadge
          src="/images/legal/terms/03.svg"
          className="border border-[#f5f5f5] bg-[#fafafa]"
        />
        <h2 className="mt-6 font-unbounded text-xl font-normal tracking-[-0.5px] text-[#171717]">
          3. Use of Website
        </h2>
        <p className="mt-4 text-base leading-6 text-[#737373]">You agree not to:</p>
        <div className="mt-4">
          <PolicyBulletList
            dotColor="teal"
            items={[
              "Use the website for illegal purposes",
              "Attempt to interfere with website functionality",
              "Misuse any content or intellectual property",
            ]}
          />
        </div>
      </section>
    </div>
  );
}
