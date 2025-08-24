// hooks/useScrollFlip180.js
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function useScrollFlip180() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const tl = gsap.timeline({ paused: true });
    tl.fromTo(
      ref.current,
      { rotateY: 0, filter: 'blur(0)' },         // 初始状态
      { rotateY: 180, filter: 'blur(1px)', duration: 0.5 }, // 第一段
    )
      .set(ref.current, { rotateY: 0, filter: 'blur(0px)' });                            // 第二段瞬间回 0°

    ScrollTrigger.create({
      trigger: ref.current,
      start:   'center center',     // 元素底部仍在视口顶部之上
      onEnterBack: () => tl.play(),  // 完整进入时一次性播放
      onEnter: () => tl.play(),  // 完整进入时一次性播放
      once: true,                // 只触发一次
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return ref;
}