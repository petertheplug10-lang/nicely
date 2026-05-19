import { PolicyIconBadge } from "@/components/marketing/legal/policy-icon-badge";

function ExampleCard({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-[#f3efe6] bg-white p-5">
      <div className="flex size-8 items-center justify-center rounded-full bg-[#f5f5f5] text-base font-medium text-[#171717]">
        {n}
      </div>
      <p className="text-lg font-medium leading-[27px] text-[#171717]">{title}</p>
    </div>
  );
}

export function RefundEligibleCard() {
  return (
    <section className="rounded-[32px] border border-[#f3efe6] bg-[#fdfbf7] p-6 shadow-[0_8px_15px_rgba(0,0,0,0.02)] sm:p-8 lg:col-span-8 lg:p-10">
      <PolicyIconBadge src="/images/legal/refund/eligible.svg" className="bg-white" />
      <h2 className="mt-6 font-unbounded text-xl font-normal tracking-[-0.6px] text-[#171717]">
        2. Eligible Issues
      </h2>
      <p className="mt-4 text-base leading-6 text-[#737373]">Examples include:</p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <ExampleCard n="1" title="Damaged packaging" />
        <ExampleCard n="2" title="Pouch leakage or burst" />
        <ExampleCard n="3" title="Abnormal product condition" />
      </div>
    </section>
  );
}
