const items = [
  "0% Tobacco",
  "20 Pouches Per Can",
  "Long Lasting Flavor",
  "Cyber-Grade Quality",
  "Fast Shipping",
];

const SEGMENTS = 4;

function MarqueeChunk({ id }: { id: number }) {
  return (
    <div
      className="flex shrink-0 items-center gap-4 pr-4 text-[9px] font-bold uppercase tracking-[0.12em] text-white sm:gap-8 sm:pr-8 sm:text-[11px]"
      aria-hidden={id > 0}
    >
      {items.map((label) => (
        <span key={label} className="flex items-center gap-4 whitespace-nowrap sm:gap-8">
          <span>{label}</span>
          <span className="text-white/55" aria-hidden>
            #
          </span>
        </span>
      ))}
    </div>
  );
}

export function HomeMarquee() {
  return (
    <div
      className="border-y border-white/15 py-3.5 sm:py-5"
      style={{
        background: "linear-gradient(90deg, #DF696E 0%, #87BCCB 100%)",
      }}
    >
      <div className="relative overflow-hidden">
        <div
          className="flex w-max flex-nowrap gap-0 will-change-transform"
          style={{
            ["--marquee-segments" as string]: SEGMENTS,
            animation: "nicozy-marquee 38s linear infinite",
          }}
        >
          {Array.from({ length: SEGMENTS }, (_, i) => (
            <MarqueeChunk key={i} id={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
