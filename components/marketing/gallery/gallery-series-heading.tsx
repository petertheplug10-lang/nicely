export function GallerySeriesHeading({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 pl-2">
      <span
        className="h-6 w-1.5 shrink-0 rounded-full bg-[#df696e] shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.1)] sm:h-7 sm:w-2"
        aria-hidden
      />
      <h3 className="font-unbounded text-lg font-normal tracking-[-0.5px] text-[#171717] sm:text-2xl sm:tracking-[-0.6px]">
        {title}
      </h3>
    </div>
  );
}
