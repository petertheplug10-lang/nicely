import { PolicyIconBadge } from "@/components/marketing/legal/policy-icon-badge";

export function PrivacyRowThree() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <section className="rounded-[32px] border border-[#f5f5f5] bg-white p-6 shadow-[0_8px_15px_rgba(0,0,0,0.03)] sm:p-8 lg:p-10">
        <PolicyIconBadge src="/images/legal/privacy/cookies.svg" className="bg-[rgba(223,105,110,0.1)]" />
        <h2 className="mt-6 font-unbounded text-xl font-normal tracking-[-0.5px] text-[#171717]">
          3. Cookies
        </h2>
        <p className="mt-4 text-base leading-[26px] text-[#737373]">
          We use cookies to enhance your browsing experience. By using our website, you consent to the
          use of cookies.
        </p>
      </section>

      <section className="relative overflow-hidden rounded-[32px] border border-[#f5f5f5] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)] sm:p-8 lg:p-10">
        <div
          className="pointer-events-none absolute -right-4 -top-16 size-32 rounded-full bg-[rgba(223,105,110,0.1)] blur-3xl"
          aria-hidden
        />
        <PolicyIconBadge src="/images/legal/privacy/third-party.svg" className="bg-[rgba(223,105,110,0.1)]" />
        <h2 className="mt-6 font-unbounded text-xl font-normal tracking-[-0.5px] text-[#171717]">
          4. Third-Party Services
        </h2>
        <p className="mt-4 text-base leading-[26px] text-[#737373]">
          We may use third-party services (such as analytics or email systems) that collect and
          process data on our behalf.
        </p>
      </section>

      <section className="rounded-[32px] border border-[rgba(135,188,203,0.1)] bg-[rgba(135,188,203,0.05)] p-6 shadow-[0_8px_15px_rgba(0,0,0,0.02)] sm:p-8 lg:p-10">
        <PolicyIconBadge src="/images/legal/privacy/protect.svg" className="bg-white" />
        <h2 className="mt-6 font-unbounded text-xl font-normal tracking-[-0.5px] text-[#171717]">
          5. Data Protection
        </h2>
        <p className="mt-4 text-base leading-[26px] text-[#737373]">
          We take reasonable steps to protect your data but cannot guarantee absolute security.
        </p>
      </section>
    </div>
  );
}
