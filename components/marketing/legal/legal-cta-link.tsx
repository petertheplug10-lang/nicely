import Image from "next/image";
import Link from "next/link";

export function LegalCtaLink({
  href,
  label,
  arrowSrc,
}: {
  href: string;
  label: string;
  arrowSrc: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex h-14 w-full max-w-[280px] shrink-0 items-center justify-center gap-2 rounded-full bg-black px-8 text-base font-medium leading-6 text-white shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)] transition hover:bg-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:w-auto sm:max-w-none sm:gap-3 sm:rounded-[14px]"
    >
      {label}
      <Image src={arrowSrc} alt="" width={16} height={16} className="size-4" />
    </Link>
  );
}
