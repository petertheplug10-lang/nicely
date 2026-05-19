export function NicotineWarningBar() {
  return (
    <div className="border-b relative z-99 border-neutral-200 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-4 text-center sm:px-6">
        <p className="md:text-3xl text-sm font-unbounded font-medium capitalize leading-snug text-[#171717]">
          WARNING: This product contains nicotine. <br /> Nicotine is an addictive chemical
        </p>
      </div>
    </div>
  );
}
