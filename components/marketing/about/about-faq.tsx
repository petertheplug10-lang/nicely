"use client";

import Image from "next/image";
import { useState } from "react";

const ROW_BG = [
  "bg-[rgba(223,223,223,0.2)]",
  "bg-[rgba(223,223,223,0.3)]",
  "bg-[rgba(223,223,223,0.4)]",
  "bg-[rgba(223,223,223,0.6)]",
  "bg-[rgba(223,223,223,0.8)]",
  "bg-[#dfdfdf]",
] as const;

const faqs = [
  {
    q: "What are Nicozy nicotine pouches?",
    a: "Nicozy nicotine pouches are small, white, smokeless products placed between the gum and lip. They deliver nicotine without tobacco leaf, smoke, or vapor.",
  },
  {
    q: "Do Nicozy nicotine pouches contain tobacco?",
    a: "Nicozy nicotine pouches do not contain tobacco leaf. They use extracted nicotine along with plant-based fillers and flavorings.",
  },
  {
    q: "How do you use a Nicozy pouch?",
    a: "You place the Nicozy pouch under your upper lip and let it sit. The nicotine absorbs through the gums. There’s no chewing, spitting, or inhaling.",
  },
  {
    q: "How long does a Nicozy pouch last?",
    a: "Most pouches last 10–20 minutes; Nicozy pouches can last 20–40 minutes, depending on user preference.",
  },
  {
    q: "Are Nicozy nicotine pouches safer than smoking or vaping?",
    a: "They avoid smoke and vapor, which eliminates exposure to combustion byproducts. However, they still contain nicotine, which is addictive. For personalized health advice, people should speak with a healthcare professional.",
  },
  {
    q: "Can Nicozy pouches help you quit smoking?",
    a: "Some people use them as part of a transition away from cigarettes, but they are not approved as smoking cessation products. A healthcare provider can offer guidance on quitting strategies.",
  },
];

export function AboutFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="border-t border-neutral-100 bg-white px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="text-left font-unbounded text-[clamp(2rem,6vw,3rem)] font-normal uppercase tracking-[-0.08em] text-[#171717] sm:text-center sm:text-[48px]">
          FAQ
        </h2>

        <div className="mt-8 flex flex-col gap-2 sm:mt-10 sm:gap-1.5">
          {faqs.map((item, index) => {
            const open = openIndex === index;
            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-2xl sm:rounded-xl ${ROW_BG[index] ?? ROW_BG[ROW_BG.length - 1]}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  className="flex w-full items-start gap-3 px-4 py-4 text-left sm:gap-4 sm:px-6 sm:py-6"
                  aria-expanded={open}
                  aria-controls={`about-faq-panel-${index}`}
                  id={`about-faq-trigger-${index}`}
                >
                  <span className="flex-1 pt-0.5 text-[15px] font-extrabold uppercase leading-snug tracking-[-0.4px] text-[#171717] sm:text-[18px] sm:leading-7 sm:tracking-[-0.45px] md:text-[20px]">
                    {item.q}
                  </span>
                  <span className="relative mt-0.5 size-5 shrink-0 sm:mt-1">
                    <Image
                      src="/images/about/faq-plus.svg"
                      alt=""
                      width={20}
                      height={20}
                      className={`absolute inset-0 size-5 transition-opacity duration-200 ease-out ${open ? "opacity-0" : "opacity-100"}`}
                      aria-hidden
                    />
                    <Image
                      src="/images/about/faq-minus.svg"
                      alt=""
                      width={20}
                      height={20}
                      className={`absolute inset-0 size-5 transition-opacity duration-200 ease-out ${open ? "opacity-100" : "opacity-0"}`}
                      aria-hidden
                    />
                  </span>
                </button>
                <div
                  id={`about-faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`about-faq-trigger-${index}`}
                  className={`grid motion-safe:transition-[grid-template-rows] motion-safe:duration-300 motion-safe:ease-out motion-reduce:transition-none ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div
                      className={`motion-safe:transition-[opacity,transform] motion-safe:duration-200 motion-safe:ease-out motion-reduce:transition-none ${open ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"}`}
                      aria-hidden={!open}
                    >
                      <p className="max-w-[728px] px-4 pb-4 pl-4 text-[14px] font-normal leading-relaxed text-[#737373] sm:px-6 sm:pb-5 sm:pl-[37px] sm:leading-[18px]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
