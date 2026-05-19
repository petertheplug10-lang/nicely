import { PolicyBulletList } from "@/components/marketing/legal/policy-bullet-list";
import { PolicyIconBadge } from "@/components/marketing/legal/policy-icon-badge";

export function PrivacyUseCard() {
  return (
    <section className="rounded-[32px] border border-[#f3efe6] bg-[#fdfbf7] p-6 shadow-[0_8px_15px_rgba(0,0,0,0.02)] sm:p-8 lg:col-span-4 lg:p-10">
      <PolicyIconBadge
        src="/images/legal/privacy/use.svg"
        className="bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.1)]"
      />
      <h2 className="mt-6 font-unbounded text-xl font-normal tracking-[-0.5px] text-[#171717]">
        2. How We Use Your Information
      </h2>
      <div className="mt-6">
        <PolicyBulletList
          dotColor="coral"
          items={[
            "Respond to inquiries and customer support requests",
            "Improve website performance and user experience",
            "Prevent fraud and ensure security",
          ]}
        />
      </div>
    </section>
  );
}
