export function GalleryChapterHeading({ title }: { title: string }) {
  return (
    <div className="border-b border-[rgba(229,229,229,0.5)] pb-4 sm:pb-6">
      <h2 className="font-unbounded text-[clamp(1.5rem,5.5vw,3rem)] font-normal tracking-[-1.2px] text-[#171717]">
        {title}
      </h2>
    </div>
  );
}
