"use client";

import React, { useRef } from 'react';
import Lottie from 'lottie-react';
import transitionAnimation from './animation-2.json';

const LoopAnimation = () => {
  const animationRef = useRef(null);

  const handleAnimationLoaded = (anim) => {
    animationRef.current = anim;
    anim.loop = true;
    anim.play();
  };

  return (
    <div 
      className="animation-container mx-auto overflow-hidden w-full md:w-[63%]"
      // md断点通常对应768px以上的设备，即PC端
    >
      <Lottie
        animationData={transitionAnimation}
        autoplay={true}
        loop={true}
        onLoaded={handleAnimationLoaded}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        fallback={<div></div>}
      />
    </div>
  );
};

export default LoopAnimation;
