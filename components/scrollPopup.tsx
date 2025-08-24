// components/ScrollPopup.tsx
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Cookies from "js-cookie";

// 只在客户端注册一次
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Props {
  children: React.ReactNode;
  triggerSelector?: string;   // 触发的元素（默认当前弹窗本身）
  hidden?: boolean;
}



const ScrollPopup = forwardRef<HTMLDivElement, Props>(
  ({ children, triggerSelector, hidden }, ref) => {
    const popupRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => popupRef.current!);
    useEffect(() => {
      console.log(Cookies.get('popup'))
      if (!popupRef.current || Cookies.get('popup') === 'close') return;
      // 先把弹窗藏起来
      gsap.set(popupRef.current, { autoAlpha: 0, scale: 0.85 });

      // 创建 ScrollTrigger
      ScrollTrigger.create({
        trigger: triggerSelector || popupRef.current,
        start: 'top 80%',  // 离开可视区
        once: true,                 // 只弹一次
        onEnter: () => {
          gsap.to(popupRef.current, {
            autoAlpha: 1, 
            width: '100vw',
            height: '100vh',
            scale: 1,
            duration: 1,
            ease: 'back.out(1.7)'
          });
        }
      });

      return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, [triggerSelector]);

    return (
      <div
        ref={popupRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '0',
          height: '0',
          translate: '0 0',
          zIndex: 9999,
          background: 'rgba(0,0,0,0.5)',
          opacity: hidden ? 0 : 1,
          boxShadow: '0 12px 32px rgba(0,0,0,.25)'
        }}
      >
        {children}
      </div>
    );
  }
)

export default ScrollPopup;