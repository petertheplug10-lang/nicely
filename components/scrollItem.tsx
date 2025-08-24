// components/ScrollOneByOne.tsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

interface ItemProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  start?: string;
  onComplete?: () => void;
}

export default function ScrollItem({ children, className, start='top 85%', onComplete }: ItemProps) {
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // 初始隐藏
    gsap.set(ref.current, { opacity: 0, y: 60 });

    ScrollTrigger.create({
      trigger: ref.current,
      start,        // 元素顶部到视口 85%
      once: true,           // 只想播一次就加这行
      onEnter: () => {
        gsap.from(ref.current, {
          opacity: 0,
          y: 60,
          scale: 0.4,
          duration: 0.6,
          ease: 'back.out(1.7)',
          onComplete: () => {
            onComplete && onComplete();
          }
        });
        gsap.to(ref.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.7)'
        });
      },
      
      onEnterBack: () => {
        gsap.to(ref.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.7)'
        });
      },
    });
  }, []);

  return (
    <li
      ref={ref}
      className={className}
    >
      {children}
    </li>
  );
}