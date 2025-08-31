"use client";

import { useState, useEffect } from 'react';

export default function AgeVerificationModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 检查是否已经有年龄验证的 cookie
    const hasAgeVerification = document.cookie.includes('ageVerified=true');
    
    if (!hasAgeVerification) {
      setIsVisible(true);
    }
  }, []);

  const handleUnder18 = () => {
    // 返回上一页
    if (typeof window !== 'undefined') {
      history.back();
    }
  };

  const handle18OrOlder = () => {
    // 设置 cookie，有效期 1 年
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
  
    document.cookie = `ageVerified=true; expires=${expires.toUTCString()}; path=/; SameSite=Strict`;
    
    // 关闭弹窗
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/70 bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Age Verification Required
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="text-center mb-6">
          <p className="text-lg font-semibold text-gray-800 mb-4">
            To use this website you must be at least 19 years old
          </p>
          <p className="text-gray-600 mb-6">
            Please confirm your age to view content.
          </p>
        </div>

        {/* Buttons */}
        <div className="gap-3 flex justify-between md:flex-row flex-col mb-6">
          <button
            onClick={handleUnder18}
            className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            Under 19 years
          </button>
          <button
            onClick={handle18OrOlder}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            19 years or older
          </button>
        </div>
      </div>
    </div>
  );
}