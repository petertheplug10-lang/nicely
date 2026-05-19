"use client";

import Image from "next/image";
import type { ComponentProps, ReactNode } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { BannerSlide, BannersPayload } from "@/lib/api/types";

import "swiper/css";

function sortSlides(slides: BannerSlide[]) {
  return [...slides].sort((a, b) => a.sort - b.sort);
}

/** 某一端无图时用另一端兜底，避免空白轮播 */
function slidesForViewport(
  data: BannersPayload,
  viewport: "mobile" | "desktop",
): BannerSlide[] {
  const primary = viewport === "mobile" ? data.mobile : data.pc;
  const fallback = viewport === "mobile" ? data.pc : data.mobile;
  const raw = primary.length > 0 ? primary : fallback;
  return sortSlides(raw);
}

export function hasBannerSwiperData(
  data: BannersPayload | null | undefined,
): data is BannersPayload {
  const pc = data?.pc?.length ?? 0;
  const mobile = data?.mobile?.length ?? 0;
  return pc > 0 || mobile > 0;
}

type BannerSwiperFrameProps = Omit<ComponentProps<"section">, "children"> & {
  /** 无有效轮播图时原样渲染 `children`（通常为整块静态 Hero）。有数据时由本组件包一层 `section` 并渲染 Swiper 背景，`children` 为前景。 */
  data: BannersPayload | null | undefined;
  children: ReactNode;
};

function HeroSlideImage({
  slide,
  objectPositionClass,
}: {
  slide: BannerSlide;
  objectPositionClass: string;
}) {
  const img = (
    // eslint-disable-next-line @next/next/no-img-element -- 远端 Banner URL，避免配置大量 remotePatterns
    <img
      src={slide.imageUrl}
      alt=""
      className={`h-full w-full max-h-[100svh] object-cover ${objectPositionClass}`}
      draggable={false}
    />
  );

  if (!slide.linkUrl) {
    return img;
  }

  return (
    <a
      href={slide.linkUrl}
      className="block outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-white"
    >
      {img}
    </a>
  );
}

function BannerSwiperLayer({
  slides,
  objectPositionClass,
  rotationMs,
  className,
}: {
  slides: BannerSlide[];
  objectPositionClass: string;
  rotationMs: number;
  className?: string;
}) {
  if (slides.length === 0) return null;

  return (
    <div className={`${className ?? ""}`}>
      <Swiper
        className="h-full w-full"
        modules={[Autoplay]}
        loop={slides.length > 1}
        autoplay={{
          delay: rotationMs,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        watchOverflow
      >
        {slides.map((slide) => (
          <SwiperSlide key={`${slide.sort}-${slide.imageUrl}`} className="!h-full">
            <div className="relative h-full w-full">
              <HeroSlideImage
                slide={slide}
                objectPositionClass={objectPositionClass}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export function BannerSwiperFrame({
  data,
  children,
  className,
  ...sectionProps
}: BannerSwiperFrameProps) {
  if (!hasBannerSwiperData(data)) {
    return <>{children}</>;
  }

  const rotationMs = Math.max(1, (data.rotationSeconds ?? 5) * 1000);
  const mobileSlides = slidesForViewport(data, "mobile");
  const pcSlides = slidesForViewport(data, "desktop");

  return (
    <section className={className} {...sectionProps}>
        <BannerSwiperLayer
          slides={mobileSlides}
          objectPositionClass="object-[center_22%]"
          rotationMs={rotationMs}
          className="md:hidden"
        />
        <BannerSwiperLayer
          slides={pcSlides}
          objectPositionClass="object-center"
          rotationMs={rotationMs}
          className="hidden md:block"
        />
    </section>
  );
}
