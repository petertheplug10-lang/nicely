import Image from "next/image";

export function PolicyIconBadge({
  src,
  alt = "",
  className,
}: {
  src: string;
  alt?: string;
  className: string;
}) {
  return (
    <div
      className={`flex size-12 shrink-0 items-center justify-center rounded-2xl px-3 ${className}`}
    >
      <Image src={src} alt={alt} width={24} height={24} className="size-6" />
    </div>
  );
}
