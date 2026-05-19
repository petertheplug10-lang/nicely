import Image from "next/image";
import type { LifestyleProduct } from "@/components/marketing/gallery/gallery-data";
import { isRemoteGalleryImage } from "@/components/marketing/gallery/build-gallery-from-products";

export function GalleryLifestyleCard({ item }: { item: LifestyleProduct }) {
  const remote = isRemoteGalleryImage(item.imageSrc);

  return (
    <article className="h-full overflow-hidden rounded-[24px] border border-[rgba(229,229,229,0.6)] bg-white shadow-sm sm:rounded-[28px] lg:rounded-[32px]">
      <div className="relative h-[220px] overflow-hidden border-b border-[#f5f5f5] bg-[rgba(250,250,250,0.8)] sm:h-[280px] lg:h-[340px]">
        {remote ? (
          // eslint-disable-next-line @next/next/no-img-element -- API cover URLs
          <img
            src={item.imageSrc}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        ) : (
          <Image
            src={item.imageSrc}
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 78vw, (max-width: 1280px) 40vw, 380px"
          />
        )}
      </div>
      <div className="flex flex-col gap-4 p-4 sm:gap-9 sm:p-6">
        <h4 className="text-base font-semibold leading-snug tracking-[-0.4px] text-[#171717] sm:text-xl sm:tracking-[-0.5px]">
          {item.name}
        </h4>
      </div>
    </article>
  );
}
