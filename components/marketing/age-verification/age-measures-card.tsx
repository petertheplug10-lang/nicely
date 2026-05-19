import { PolicyBulletList } from "@/components/marketing/legal/policy-bullet-list";
import { PolicyIconBadge } from "@/components/marketing/legal/policy-icon-badge";

export function AgeMeasuresCard() {
  return (
    <section className="rounded-[32px] border border-[#f5f5f5] bg-white p-6 shadow-[0_8px_15px_rgba(0,0,0,0.03)] sm:p-8 lg:col-span-4 lg:p-10">
      <PolicyIconBadge src="/images/legal/age/measures.svg" className="bg-[rgba(135,188,203,0.1)]" />
      <h2 className="mt-6 font-unbounded text-xl font-normal tracking-[-0.5px] text-[#171717]">
        5. Age Verification Measures
      </h2>
      <p className="mt-4 text-sm leading-5 text-[#737373]">We reserve the right to:</p>
      <div className="mt-4">
        <PolicyBulletList
          dotColor="neutral"
          items={[
            "Restrict access to our website",
            "Request age verification when necessary",
            "Refuse service or cancel orders that do not meet legal requirements",
          ]}
        />
      </div>
    </section>
  );
}
