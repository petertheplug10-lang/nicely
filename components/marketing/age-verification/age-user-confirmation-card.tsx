import { PolicyBulletList } from "@/components/marketing/legal/policy-bullet-list";
import { PolicyIconBadge } from "@/components/marketing/legal/policy-icon-badge";

export function AgeUserConfirmationCard() {
  return (
    <section className="rounded-[32px] border border-[#f3efe6] bg-[#fdfbf7] p-6 shadow-[0_8px_15px_rgba(0,0,0,0.02)] sm:p-8 lg:col-span-4 lg:p-10">
      <PolicyIconBadge src="/images/legal/age/confirm.svg" className="bg-white" />
      <h2 className="mt-6 font-unbounded text-xl font-normal tracking-[-0.5px] text-[#171717]">
        3. User Confirmation
      </h2>
      <p className="mt-4 text-sm leading-5 text-[#737373]">By accessing this website, you confirm that:</p>
      <div className="mt-6">
        <PolicyBulletList
          dotColor="teal"
          items={[
            "You meet the legal age requirement in your jurisdiction",
            "You are legally allowed to purchase and use nicotine products",
            <>
              You understand that nicotine is an <strong className="font-bold">addictive substance</strong>
            </>,
          ]}
        />
      </div>
    </section>
  );
}
