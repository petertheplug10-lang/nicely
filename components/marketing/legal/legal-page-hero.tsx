import type { ReactNode } from "react";

export function LegalPageHero({
  title,
  children,
  heading = "standard",
  className,
}: {
  title: string;
  children: ReactNode;
  /** Figma mobile: Terms & Age use 32px titles; Privacy & Refund use 36px. */
  heading?: "standard" | "compact";
  className?: string;
}) {
  const titleClass =
    heading === "compact"
      ? "font-unbounded text-[32px] font-normal leading-10 tracking-[-0.9px] text-[#171717] sm:text-[clamp(2rem,5vw,3.75rem)] sm:leading-[1.1] sm:tracking-[-1.5px]"
      : "font-unbounded text-4xl font-normal leading-10 tracking-[-0.9px] text-[#171717] sm:text-[clamp(2rem,5vw,3.75rem)] sm:leading-[1.1] sm:tracking-[-1.5px]";

  return (
    <header className={`max-w-3xl ${className ?? ""}`}>
      <h1 className={titleClass}>{title}</h1>
      <div className="mt-6 text-lg font-light leading-[29.25px] text-[#737373]">{children}</div>
    </header>
  );
}
