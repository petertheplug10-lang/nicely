import type { ReactNode } from "react";

const dot = {
  teal: "bg-[#87bccb]",
  coral: "bg-[#df696e]",
  neutral: "bg-[#d4d4d4]",
  muted: "bg-[#a1a1a1]",
} as const;

export function PolicyBulletList({
  items,
  dotColor = "teal",
}: {
  items: ReactNode[];
  dotColor?: keyof typeof dot;
}) {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2">
          <span className={`mt-2 size-1.5 shrink-0 rounded-full ${dot[dotColor]}`} aria-hidden />
          <div className="min-w-0 text-base leading-[26px] text-[#525252]">{item}</div>
        </li>
      ))}
    </ul>
  );
}
