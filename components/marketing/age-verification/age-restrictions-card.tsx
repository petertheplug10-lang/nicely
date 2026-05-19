import Image from "next/image";
import { PolicyIconBadge } from "@/components/marketing/legal/policy-icon-badge";

function RestrictionTag({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex min-h-[58px] items-center gap-3 rounded-[14px] border border-[#f5f5f5] bg-[#fafafa] px-4 py-3 sm:min-h-[82px]">
      <Image src={icon} alt="" width={20} height={20} className="size-5 shrink-0" />
      <p className="text-base font-medium leading-6 text-[#404040]">{label}</p>
    </div>
  );
}

export function AgeRestrictionsCard() {
  return (
    <section className="rounded-[32px] border border-[#f5f5f5] bg-white p-6 shadow-[0_8px_15px_rgba(0,0,0,0.03)] sm:p-8 lg:col-span-8 lg:p-10">
      <PolicyIconBadge src="/images/legal/age/restrict.svg" className="bg-[rgba(223,105,110,0.1)]" />
      <h2 className="mt-6 font-unbounded text-xl font-normal tracking-[-0.6px] text-[#171717]">
        4. Restrictions
      </h2>
      <p className="mt-4 text-base leading-6 text-[#737373]">
        Nicozy products are <strong className="font-bold text-[#171717]">not intended for</strong>:
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <RestrictionTag
          icon="/images/legal/age/tag-warn.svg"
          label="Individuals below the legal age"
        />
        <RestrictionTag
          icon="/images/legal/age/pregnant.svg"
          label="Pregnant or breastfeeding individuals"
        />
        <RestrictionTag
          icon="/images/legal/age/tag-warn.svg"
          label="Individuals sensitive to nicotine"
        />
        <RestrictionTag icon="/images/legal/age/tag-warn.svg" label="Non-nicotine users" />
      </div>
    </section>
  );
}
