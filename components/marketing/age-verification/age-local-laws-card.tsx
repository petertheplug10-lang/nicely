import { PolicyIconBadge } from "@/components/marketing/legal/policy-icon-badge";

export function AgeLocalLawsCard() {
  return (
    <section className="relative overflow-hidden rounded-[32px] bg-[#df696e] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)] sm:p-8 lg:col-span-4 lg:p-10">
      <div
        className="pointer-events-none absolute -right-4 -top-16 size-32 rounded-full bg-white/20 blur-3xl"
        aria-hidden
      />
      <PolicyIconBadge src="/images/legal/age/globe.svg" className="bg-white/10" />
      <h2 className="mt-6 font-unbounded text-xl font-normal tracking-[-0.5px] text-white">
        2. Local Laws Take Priority
      </h2>
      <p className="mt-4 text-sm leading-[22.75px] text-white">
        Nicotine product regulations may vary by province, state, or local jurisdiction.
      </p>
      <div className="mt-6 rounded-[14px] border border-[rgba(223,105,110,0.3)] bg-white/20 p-4">
        <p className="text-sm font-medium leading-5 text-white">
          You are solely responsible for complying with all applicable laws in your area.
        </p>
      </div>
      <p className="mt-6 text-sm leading-[22.75px] text-white">
        If your local laws impose stricter age limits or restrictions, those laws will{" "}
        <strong className="font-bold">take precedence</strong> over the general guidelines stated
        above.
      </p>
    </section>
  );
}
