// hooks/useScrollFlip180.js
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function useScrollList() {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!listRef.current) return;
    const items = listRef.current.querySelectorAll('li');
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(items, {
      y: 40,           // 从下方向上 40px
      opacity: 0,      // 透明度
      duration: 0.6,   // 单个动画时长
      stagger: 0.2,    // 每个 item 间隔 0.2 s
      ease: 'power2.out',
      },
      {
        y: 0, opacity: 1, scale: 1,      // 结束
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        keyframes: {
          scale: [0.6, 1, 0.8, 1, 0.9, 1],
          rotation: [0, 10, 0, -10, 0, 0],
          opacity: [0, 1]
        }
      }
    );                          
    ScrollTrigger.create({
      trigger: listRef.current,
      start:   'top 80%',     // 元素底部仍在视口顶部之上
      onEnterBack: () => tl.play(),  // 完整进入时一次性播放
      onEnter: () => tl.play(),  // 完整进入时一次性播放
      once: true,                // 只触发一次
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return listRef;
}