import Image from "next/image";

export function AgeDisclaimerCard() {
  return (
    <section className="rounded-[32px] border border-[#f5f5f5] bg-white p-6 shadow-[0_10px_15px_-3px_rgba(229,229,229,0.2),0_4px_6px_-4px_rgba(229,229,229,0.2)] sm:p-8 lg:col-span-12 lg:p-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-[rgba(223,105,110,0.1)]">
          <Image
            src="/images/legal/age/disclaimer.svg"
            alt=""
            width={32}
            height={32}
            className="size-8"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="font-unbounded text-xl font-normal tracking-[-0.6px] text-[#171717]">
            7. Disclaimer
          </h2>
          <p className="mt-4 text-base leading-6 text-[#737373]">
            All products sold or displayed on this website are intended for{" "}
            <strong className="font-bold text-[#171717]">legal use only</strong>. By continuing to use
            this site, you agree that:
          </p>
          <div className="mt-6 rounded-[14px] border border-[#e5e5e5] bg-[#fafafa] px-6 py-4">
            <p className="text-base font-medium leading-6 text-[#404040]">
              You assume full responsibility for compliance with all applicable laws in your
              jurisdiction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
