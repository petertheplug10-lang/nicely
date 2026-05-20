"use client";

import type { ComponentProps, ReactNode } from "react";
import { useState } from "react";
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
  data: BannersPayload | null | undefined;
  /** 轮播第一帧（静态背景）；无接口数据时与 `foreground` 一起整块展示 */
  leadingSlide?: ReactNode;
  /** 叠在第一帧上的前景，仅在当前为第 1 帧时显示 */
  foreground?: ReactNode;
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
      className="block h-full w-full outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-white"
    >
      {img}
    </a>
  );
}

function BannerSwiperLayer({
  slides,
  leadingSlide,
  objectPositionClass,
  rotationMs,
  className,
  onActiveIndexChange,
}: {
  slides: BannerSlide[];
  leadingSlide?: ReactNode;
  objectPositionClass: string;
  rotationMs: number;
  className?: string;
  onActiveIndexChange: (index: number) => void;
}) {
  const slideCount = (leadingSlide ? 1 : 0) + slides.length;
  if (slideCount === 0) return null;

  return (
    <div className={className ?? ""}>
      <Swiper
        className="h-full w-full"
        modules={[Autoplay]}
        loop={slideCount > 1}
        autoplay={{
          delay: rotationMs,
          disableOnInteraction: false,
        }}
        autoplay={false}
        slidesPerView={1}
        watchOverflow
        onSlideChange={(swiper) => onActiveIndexChange(swiper.realIndex)}
      >
        {leadingSlide ? (
          <SwiperSlide key="leading" className="!h-full">
            <div className="relative h-full min-h-[inherit] w-full">{leadingSlide}</div>
          </SwiperSlide>
        ) : null}
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
  leadingSlide,
  foreground,
  className,
  ...sectionProps
}: BannerSwiperFrameProps) {
  const [showForeground, setShowForeground] = useState(true);
  const hasApiSlides = hasBannerSwiperData(data);

  if (!hasApiSlides) {
    if (!leadingSlide) return null;
    return (
      <section className={className} {...sectionProps}>
        {leadingSlide}
        {foreground}
      </section>
    );
  }

  const rotationMs = Math.max(1, (data.rotationSeconds ?? 5) * 1000);
  const mobileSlides = slidesForViewport(data, "mobile");
  const pcSlides = slidesForViewport(data, "desktop");

  return (
    <section className={className} {...sectionProps}>
      <div className="absolute inset-0 min-h-[inherit]">
        <BannerSwiperLayer
          slides={mobileSlides}
          leadingSlide={leadingSlide}
          objectPositionClass="object-cover object-center"
          rotationMs={rotationMs}
          className="h-full md:hidden"
          onActiveIndexChange={(index) => setShowForeground(index === 0)}
        />
        <BannerSwiperLayer
          slides={pcSlides}
          leadingSlide={leadingSlide}
          objectPositionClass="object-center"
          rotationMs={rotationMs}
          className="hidden h-full md:block"
          onActiveIndexChange={(index) => setShowForeground(index === 0)}
        />
      </div>
      {showForeground && foreground ? (
        <div className="pointer-events-none relative z-10 [&_a]:pointer-events-auto">
          {foreground}
        </div>
      ) : null}
    </section>
  );
}
