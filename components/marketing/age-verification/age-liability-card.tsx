import { PolicyIconBadge } from "@/components/marketing/legal/policy-icon-badge";

export function AgeLiabilityCard() {
  return (
    <section className="rounded-[32px] border border-[#f5f5f5] bg-white p-6 shadow-[0_8px_15px_rgba(0,0,0,0.03)] sm:p-8 lg:col-span-8 lg:p-10">
      <PolicyIconBadge src="/images/legal/age/liability.svg" className="bg-[#fdfbf7]" />
      <h2 className="mt-6 font-unbounded text-xl font-normal tracking-[-0.5px] text-[#171717]">
        6. Limitation of Liability
      </h2>
      <p className="mt-4 text-sm leading-5 text-[#737373]">To the fullest extent permitted by law:</p>
      <ul className="mt-6 flex flex-col gap-4">
        <li className="flex gap-2">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#a1a1a1]" aria-hidden />
          <p className="text-base leading-[26px] text-[#525252]">
            <strong className="font-bold">Nicozy does not assume responsibility</strong> for misuse of
            products
          </p>
        </li>
        <li className="flex gap-2">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#a1a1a1]" aria-hidden />
          <p className="text-base leading-[26px] text-[#525252]">
            Nicozy is <strong className="font-bold">not liable</strong> for any consequences arising
            from underage access or purchase
          </p>
        </li>
        <li className="flex gap-2">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#a1a1a1]" aria-hidden />
          <p className="text-base leading-[26px] text-[#525252]">
            Any violation of local laws is the{" "}
            <strong className="font-bold">sole responsibility of the user</strong>
          </p>
        </li>
      </ul>
    </section>
  );
}
