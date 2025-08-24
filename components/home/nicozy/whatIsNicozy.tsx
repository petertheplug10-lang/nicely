'use client'
import One from "./one";
import Two from "./two";
import Three from "./three";
import ScrollPopup from "@/components/scrollPopup";
import { useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Cookies from "js-cookie";
import { useSuspenseQuery } from "@tanstack/react-query";
import { marketingOptions } from "@/query/marketing";

export default function WhatIsNicozy() {
  const popupRef = useRef<HTMLDivElement>(null);
  const { data: { data: {imgUrl} } } = useSuspenseQuery(marketingOptions)

  const showPopup = () => {
    if (!popupRef.current) return;
    setTimeout(() => {
      if (popupRef.current?.style.opacity === '1' || Cookies.get('popup') === 'close') return;
      gsap.set(popupRef.current, { autoAlpha: 0, scale: 0.85 });
      gsap.to(popupRef.current, {
        autoAlpha: 1,
        scale: 1,
        duration: 0.4,
        ease: 'back.out(1.7)'
      });
    }, 5000);
  }


  const hidePopup = () => {
    if (!popupRef.current) return;
    Cookies.set('popup', 'close', { expires: 1 });
    gsap.to(popupRef.current, {
      autoAlpha: 0,
      scale: 0.85,
      duration: 1,
      ease: 'back.out(1.7)'
    });
  } 
  return (
    <div className="w-[1032px] max-w-full mx-auto px-4">
      <div className="flex pt-[105px] justify-between">
        <div className="flex gap-4 flex-col justify-between">
          <img src="/img/icon2.png" alt="logo" />
          <img className="w-[60%]" src="/img/icon5.png" alt="logo" />
        </div>
        <div className="flex">
          <img className="" src="/img/whatIsNicozy.png" alt="what is nicozy" />
        </div>
        <div className="flex gap-2 flex-col items-end ml-4">
          <img className="max-w-[70%]" src="/img/icon4.png" alt="logo" />
          <img className="" src="/img/icon1.png" alt="logo" />
        </div>
      </div>
      <ul className="flex gap-4 lg:gap-14 flex-col md:flex-row mt-10 lg:p-6 p-3 border border-[#f8e9d6] rounded-xl">
        <One />
        <Two />
        <Three onShow={showPopup} />
      </ul>
      <div id="whatIsNicozy" />
      {imgUrl && (
      <ScrollPopup ref={popupRef} hidden={true} triggerSelector="#whatIsNicozy">
        <div className="w-full h-full flex items-end md:items-center justify-center">
          <div className="relative">
            <Image src={"/img/close.svg"} alt="close" width={32} height={32} className="absolute -top-10 md:top-4 right-4 cursor-pointer" onClick={hidePopup} />
            <Image src={imgUrl} alt="what is nicozy" width={800} height={1032} />
            </div>
          </div>
        </ScrollPopup>
      )}
    </div>
  )
}