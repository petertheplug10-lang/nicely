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
      className="flex shrink-0 items-center gap-8 pr-8 text-xs font-bold uppercase tracking-wide text-white"
      aria-hidden={id > 0}
    >
      {items.map((label) => (
        <span key={label} className="flex items-center gap-8 whitespace-nowrap">
          <span>{label}</span>
          <span className="text-white/55" aria-hidden>
            #
          </span>
        </span>
      ))}
    </div>
  );
}

type HomeMarqueeProps = {
  /** 嵌在 mobile hero 底部（Figma 56:1242） */
  embedded?: boolean;
};

export function HomeMarquee({ embedded = false }: HomeMarqueeProps) {
  return (
    <div
      className={
        embedded
          ? "flex h-[49px] items-center overflow-hidden border-y border-white/20"
          : "border-y border-white/15 py-3.5 sm:py-5"
      }
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
