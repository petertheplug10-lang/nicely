import { PolicyIconBadge } from "@/components/marketing/legal/policy-icon-badge";

export function TermsModificationsCard() {
  return (
    <section className="flex flex-col items-center rounded-[32px] border border-[#f5f5f5] bg-white p-6 text-center shadow-[0_8px_15px_rgba(0,0,0,0.03)] sm:p-8 lg:items-stretch lg:p-12 lg:text-left">
      <div className="flex justify-center lg:justify-start">
        <PolicyIconBadge
          src="/images/legal/terms/06.svg"
          className="border border-[#f5f5f5] bg-[#fafafa]"
        />
      </div>
      <h2 className="mt-6 font-unbounded text-xl font-normal tracking-[-0.6px] text-[#171717] lg:text-2xl">
        6. Modifications
      </h2>
      <p className="mt-4 max-w-xl text-base leading-6 text-[#737373]">
        We reserve the right to update these terms at any time.
      </p>
    </section>
  );
}
