"use client"; // 添加客户端组件标记
import React, { useRef } from 'react';
import Lottie from 'lottie-react';
// 确保你的动画文件路径正确
import transitionAnimation from './animation-2.json';

// 独立的Lottie动画组件（500px高，循环播放）
const LoopAnimation = () => {
  // 动画实例引用（可选，如需后续控制可保留）
  const animationRef = useRef(null);

  // 动画加载完成回调（可选，可用于初始化配置）
  const handleAnimationLoaded = (anim) => {
    animationRef.current = anim;
    // 显式设置循环（确保动画持续循环）
    anim.loop = true;
    // 确保动画自动播放
    anim.play();
  };

  return (
    <div 
      className="animation-container"
      // 固定500px高度，设置边框和居中样式（可选，便于查看）
      style={{
        width: '63%',
        margin: '0 auto',   // 可选：水平居中
        overflow: 'hidden', // 防止动画超出容器
      }}
    >
      <Lottie
        animationData={transitionAnimation}
        // 核心配置：自动播放+循环
        autoplay={true}
        loop={true}
        // 动画加载回调
        onLoaded={handleAnimationLoaded}
        // 动画样式：填充容器
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover', // 保持动画比例并填充容器
        }}
        // 可选：添加加载状态提示
        fallback={<div></div>}
      />
    </div>
  );
};

export default LoopAnimation;