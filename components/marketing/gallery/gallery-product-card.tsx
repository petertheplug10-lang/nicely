import Image from "next/image";
import type { PouchProduct } from "@/components/marketing/gallery/gallery-data";
import { isRemoteGalleryImage } from "@/components/marketing/gallery/build-gallery-from-products";

export function GalleryProductCard({ product }: { product: PouchProduct }) {
  const remote = isRemoteGalleryImage(product.imageSrc);

  return (
    <article className="overflow-hidden rounded-[20px] border border-[rgba(229,229,229,0.6)] bg-white shadow-sm sm:rounded-[28px] lg:rounded-[32px]">
      <div className="relative h-[140px] overflow-hidden border-b border-[#f5f5f5] bg-[rgba(237,237,237,0.8)] sm:h-[200px] lg:h-[235px]">
        {remote ? (
          // eslint-disable-next-line @next/next/no-img-element -- API cover URLs
          <img
            src={product.imageSrc}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        ) : (
          <Image
            src={product.imageSrc}
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 45vw, (max-width: 1280px) 40vw, 314px"
          />
        )}
      </div>
      <div className="p-3 sm:p-5 lg:p-6">
        <h4 className="text-sm font-semibold leading-tight tracking-[-0.3px] text-[#171717] sm:text-lg lg:text-xl">
          {product.name}
        </h4>
        <p className="mt-2 line-clamp-3 text-[11px] font-medium leading-snug text-[#737373] sm:mt-3 sm:line-clamp-none sm:text-sm sm:leading-[22.75px]">
          {product.description}
        </p>
        <div className="mt-4 sm:mt-6">
          <p className="text-[9px] font-semibold uppercase tracking-[0.5px] text-[#a1a1a1] sm:text-[10px]">
            Strengths
          </p>
          <div className="mt-1.5 flex flex-wrap gap-1 sm:mt-2 sm:gap-2">
            {product.strengths.map((s) => (
              <span
                key={s}
                className="rounded-lg bg-[#f5f5f5] px-1.5 py-0.5 text-[10px] font-semibold text-[#525252] sm:rounded-[10px] sm:px-2.5 sm:py-1 sm:text-xs"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
