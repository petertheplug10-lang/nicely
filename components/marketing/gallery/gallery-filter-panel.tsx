"use client";

import Image from "next/image";
import Link from "next/link";
import type { GalleryChapter } from "@/components/marketing/gallery/gallery-data";

type GalleryFilterPanelProps = {
  chapters: GalleryChapter[];
  strengthOptions: readonly string[];
  selectedStrengths: Set<string>;
  onToggleStrength: (mg: string) => void;
  /** Mobile drawer: close after in-page navigation */
  onCollectionNavigate?: () => void;
  strengthVariant?: "sidebar" | "drawer";
  collectionsTitle?: string;
  strengthTitle?: string;
};

export function GalleryFilterPanel({
  chapters,
  strengthOptions,
  selectedStrengths,
  onToggleStrength,
  onCollectionNavigate,
  strengthVariant = "sidebar",
  collectionsTitle = "Collections",
  strengthTitle = "Strength Options",
}: GalleryFilterPanelProps) {
  const afterNav = () => {
    onCollectionNavigate?.();
  };

  return (
    <div className={strengthVariant === "drawer" ? "space-y-8" : "space-y-6"}>
      <div className={strengthVariant === "drawer" ? "space-y-5" : "space-y-6"}>
        <h2
          className={
            strengthVariant === "drawer"
              ? "text-lg font-semibold tracking-[-0.4px] text-[#171717]"
              : "text-2xl font-semibold tracking-[-0.6px] text-[#171717]"
          }
        >
          {collectionsTitle}
        </h2>
        <nav className="flex flex-col gap-6 text-base" aria-label="Gallery collections">
          {chapters.map((ch) => (
            <div key={ch.id}>
              <Link
                href={`#${ch.id}`}
                className="font-semibold text-[#171717] hover:text-[#df696e]"
                onClick={afterNav}
              >
                {ch.title}
              </Link>
              <ul className="mt-3 space-y-2.5 border-l-2 border-[#ececec] pl-[18px]">
                {ch.series.map((s) => (
                  <li key={s.id}>
                    <Link
                      href={`#${s.id}`}
                      className="text-sm font-medium text-[#737373] hover:text-[#171717]"
                      onClick={afterNav}
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div
        className={
          strengthVariant === "drawer"
            ? "space-y-5 border-t border-[#ececec] pt-8"
            : "mt-10 space-y-6 border-t border-[#f5f5f5] pt-10"
        }
      >
        <h2
          className={
            strengthVariant === "drawer"
              ? "text-lg font-semibold tracking-[-0.4px] text-[#171717]"
              : "text-2xl font-semibold tracking-[-0.6px] text-[#171717]"
          }
        >
          {strengthTitle}
        </h2>
        <ul className="space-y-1">
          {strengthOptions.map((opt) => {
            const on = selectedStrengths.has(opt);
            if (strengthVariant === "drawer") {
              return (
                <li key={opt}>
                  <button
                    type="button"
                    onClick={() => onToggleStrength(opt)}
                    className="flex w-full items-center gap-3 rounded-lg py-2.5 text-left transition hover:opacity-85"
                  >
                    <span
                      className={`flex size-5 shrink-0 items-center justify-center rounded-full border-2 ${
                        on
                          ? "border-[#df696e] bg-[#df696e]"
                          : "border-[#d4d4d4] bg-transparent"
                      }`}
                      aria-hidden
                    >
                      {on ? <span className="size-2 rounded-full bg-white" /> : null}
                    </span>
                    <span className="text-sm font-medium text-[#525252]">{opt}</span>
                  </button>
                </li>
              );
            }
            return (
              <li key={opt}>
                <button
                  type="button"
                  onClick={() => onToggleStrength(opt)}
                  className="flex w-full items-center gap-3 rounded-lg py-1 text-left transition hover:opacity-80"
                >
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-[#e5e5e5] bg-[#fafafa]">
                    {on ? (
                      <Image
                        src="/images/gallery/check.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="size-5"
                      />
                    ) : null}
                  </span>
                  <span className="text-sm font-medium text-[#525252]">{opt}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
