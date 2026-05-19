"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type HomeScrollRevealProps = {
  children: React.ReactNode;
};

export function HomeScrollReveal({ children }: HomeScrollRevealProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>("[data-home-reveal]");
      targets.forEach((target, index) => {
        gsap.fromTo(
          target,
          { y: 36, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.75,
            ease: "power2.out",
            delay: index * 0.03,
            scrollTrigger: {
              trigger: target,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            },
          },
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return <div ref={rootRef}>{children}</div>;
}

