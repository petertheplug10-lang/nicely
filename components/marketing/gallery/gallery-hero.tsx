type GalleryHeroProps = {
  onOpenMobileFilters?: () => void;
};

export function GalleryHero({ onOpenMobileFilters }: GalleryHeroProps) {
  return (
    <section className="relative isolate flex min-h-[300px] w-full items-center justify-center bg-linear-to-r from-[#df696e] to-[#87bccb] px-4 py-14 text-center sm:min-h-[320px] sm:px-6 sm:py-16">
      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-3 sm:gap-4">
        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-medium tracking-[0.3px] text-white sm:px-4 sm:py-2 sm:text-xs">
          Explore The Collection
        </span>
        <h1 className="font-unbounded text-[clamp(2.25rem,9vw,4.5rem)] font-normal leading-none tracking-[-1.8px] text-white">
          The Gallery
        </h1>
        <p className="px-1 text-base leading-relaxed text-[#ececec] sm:text-lg sm:text-[#d4d4d4]">
          Discover our complete range of premium pouches &amp; lifestyle apparel.
        </p>
        <p className="px-1 -mt-4 text-base leading-relaxed text-[#ececec] sm:text-lg sm:text-[#d4d4d4]">
        Official product showcase only. For purchases, please visit the Shop page.
        </p>
      </div>

      {onOpenMobileFilters ? (
        <button
          type="button"
          className="absolute -bottom-5 right-5 z-20 flex size-14 items-center justify-center rounded-full bg-[#87bccb] text-white shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition hover:brightness-105 active:scale-95 lg:hidden"
          aria-label="Open filters"
          onClick={onOpenMobileFilters}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
            aria-hidden
          >
            <path
              d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      ) : null}
    </section>
  );
}
