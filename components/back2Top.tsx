"use client";

import { useEffect, useState } from "react";

export default function Back2Top() {
  const [isVisible, setIsVisible] = useState(false);

  // 监听滚动事件
  useEffect(() => {
    const toggleVisibility = () => {
      // 当页面滚动超过300px时显示按钮
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // 添加滚动事件监听器
    window.addEventListener("scroll", toggleVisibility);

    // 清理函数
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // 平滑滚动到顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-[#F8E9D6] border-2 border-[#7F0D0D] text-[#7F0D0D] font-bold text-sm uppercase px-4 py-3 rounded-lg shadow-lg hover:bg-[#7F0D0D] hover:text-[#F8E9D6] transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
          aria-label="回到顶部"
        >
          <div className="flex flex-col items-center">
            <svg
              className="w-5 h-5 mb-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </div>
        </button>
      )}
    </>
  );
}