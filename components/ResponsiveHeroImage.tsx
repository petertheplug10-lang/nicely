"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Lottie from "react-lottie";
import animationData from "./animation.json";

interface ResponsiveHeroImageProps {
  className?: string;
}

export default function ResponsiveHeroImage({
  className = "",
}: ResponsiveHeroImageProps) {
  // 状态管理
  const [hasScrolled, setHasScrolled] = useState(false);
  const [firstImageOpacity, setFirstImageOpacity] = useState(1);
  const [secondImageOpacity, setSecondImageOpacity] = useState(0);
  const [secondImageLoaded, setSecondImageLoaded] = useState(false);
  
  const lottieInstanceRef = useRef<any>(null);
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const imageCheckIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Lottie动画配置
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleLottieRef = (instance: any) => {
    lottieInstanceRef.current = instance;
  };

  // 处理第二张图片加载完成
  const handleSecondImageLoad = () => {
    setSecondImageLoaded(true);
    
    // 如果已经过了滚动触发点但图片还没显示，立即显示
    if (hasScrolled && secondImageOpacity === 0) {
      setSecondImageOpacity(1);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // 只在第一次滚动超过阈值时触发
      if (!hasScrolled && window.scrollY > 10) { // 增加阈值，避免误触发
        setHasScrolled(true);

        // 第一张图片淡出 (500ms)
        setFirstImageOpacity(0);
        
        // 检查图片是否已加载
        if (secondImageLoaded) {
          // 如果已加载，延迟5秒后显示
          animationTimeoutRef.current = setTimeout(() => {
            setSecondImageOpacity(1);
          }, 4000);
        } 
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // 增加一个安全机制：如果页面加载后5秒内没有滚动，也触发图片切换
    const safetyTimeout = setTimeout(() => {
      if (!hasScrolled) {
        handleScroll(); // 手动触发滚动处理
      }
    }, 5000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
      if (imageCheckIntervalRef.current) {
        clearInterval(imageCheckIntervalRef.current);
      }
      clearTimeout(safetyTimeout);
    };
  }, [hasScrolled, secondImageLoaded]);

  // 当hasScrolled状态变为true时，确保第二张图片最终会显示
  useEffect(() => {
    if (hasScrolled && secondImageOpacity === 0) {
      // 如果15秒后第二张图片仍未显示，强制显示
      const safetyTimeout = setTimeout(() => {
        setSecondImageOpacity(1);
      }, 4000);
      
      return () => clearTimeout(safetyTimeout);
    }
  }, [hasScrolled, secondImageOpacity]);

  // 确保z-index在所有设备上一致
  const imageZIndex = {
    first: 10,
    second: 11
  };


  return (
    <>
      <div className={`relative w-full bg-black ${className}`}>
        {/* 移动端 */}
        <div className="block md:hidden">
          <div className="relative w-full aspect-[4/3]">
            {/* 动画作为背景一直播放 */}
            <div className="absolute inset-0 z-0">
              <Lottie
                options={defaultOptions}
                height="100%"
                width="100%"
                isClickToPauseDisabled={true}
                ref={handleLottieRef}
              />
            </div>

            {/* 第一张图片 */}
            <Image
              src="/img/Pasted-Graphic.png"
              alt="Hero Image"
              fill
              className="object-cover object-center transition-opacity duration-700"
              style={{ opacity: firstImageOpacity, zIndex: imageZIndex.first }}
              priority
              sizes="100vw"
            />

            {/* 第二张图片 */}
            <Image
              src="/img/banner2.png"
              alt="Second Hero Image"
              fill
              className="object-cover object-center transition-opacity duration-700"
              style={{ opacity: secondImageOpacity, zIndex: imageZIndex.second }}
              onLoadingComplete={handleSecondImageLoad}
              sizes="100vw"
              // 确保图片始终会加载
              loading="eager"
            />
          </div>
        </div>

        {/* 平板端 */}
        <div className="hidden md:block lg:hidden">
          <div className="relative w-full aspect-[3/2]">
            {/* 动画背景 */}
            <div className="absolute inset-0 z-0">
              <Lottie options={defaultOptions} height="100%" width="100%" isClickToPauseDisabled={true} ref={handleLottieRef} />
            </div>

            <Image
              src="/img/Pasted-Graphic.png"
              alt="Hero Image"
              fill
              className="object-cover object-center transition-opacity duration-700"
              style={{ opacity: firstImageOpacity, zIndex: imageZIndex.first }}
              priority
              sizes="100vw"
            />

            <Image
              src="/img/banner2.png"
              alt="Second Hero Image"
              fill
              className="object-cover object-center transition-opacity duration-700"
              style={{ opacity: secondImageOpacity, zIndex: imageZIndex.second }}
              onLoadingComplete={handleSecondImageLoad}
              sizes="100vw"
              loading="eager"
            />
          </div>
        </div>

        {/* 桌面端 */}
        <div className="hidden lg:block">
          <div className="relative w-full h-[500px]">
            <div className="absolute inset-0 z-0">
              <Lottie options={defaultOptions} height="100%" width="100%" isClickToPauseDisabled={true} ref={handleLottieRef} />
            </div>

            <Image
              src="/img/Pasted-Graphic.png"
              alt="Hero Image"
              fill
              className="object-cover object-center transition-opacity duration-700"
              style={{ opacity: firstImageOpacity, zIndex: imageZIndex.first }}
              priority
              sizes="100vw"
            />

            <Image
              src="/img/banner2.png"
              alt="Second Hero Image"
              fill
              className="object-cover object-center transition-opacity duration-700"
              style={{ opacity: secondImageOpacity, zIndex: imageZIndex.second }}
              onLoadingComplete={handleSecondImageLoad}
              sizes="100vw"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </>
  );
}
