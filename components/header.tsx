"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { id: 1, label: "HOME", href: "/" },
    { id: 2, label: "POUCH SERIES", href: "/products" },
    { id: 3, label: "VERIFICATION", href: "/verification" },
    { id: 4, label: "CONTACT US", href: "/contact-us" },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  
  return (
    <div className="bg-black">
      <div className="px-4 text-center relative z-50 font-medium py-4 text-sm lg:text-base bg-white">
        <span className="font-bold text-base">WARNING:</span> This product contains nicotine. Nicotine is highly addictive. Only to be used by adults who are trying to quit smoking.
      </div>
      <div className="w-[1100px] max-w-full mx-auto relative">
        <div className="flex relative z-50 justify-between items-center px-4 py-4 gap-2 md:gap-10 lg:gap-2 flex-wrap">
          <div className="flex lg:gap-2 gap-1 flex-col">
            <div className="flex gap-4">
              <div className="hidden md:flex justify-center md:w-[40px] md:h-8 w-[40px] h-6 font-[14px] cursor-pointer items-center bg-[#f8e9d6] border-[3px] border-[#7F0D0D]">CO</div>
              <div
                className="flex md:w-[100px] rounded-[2px] justify-center uppercase font-semibold md:h-8 w-[70px] h-8 text-sm cursor-pointer items-center bg-[#f8e9d6] border-[2px] border-[#7F0D0D] relative group"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? "close" : "MENU"}
              </div>
            </div>
            <div className="hidden md:flex gap-2 items-center">
              <img className="md:w-[64px] w-[40px]" src="/img/arrows.png" alt="arrows" />
              <img className="hidden md:block md:w-[64px] w-[40px]" src="/img/arrows.png" alt="arrows" />
            </div>
            <div className="hidden lg:flex items-center gap-3">
              <div className="lg:w-[40px] lg:h-[40px] w-[30px] h-[30px] lg:border-[4px] border-2 border-[#F8E9D6] rounded-full flex items-center justify-center lg:text-[12px] text-[10px] text-[#F8E9D6] font-bold">NEW</div>
              <div className="lg:w-[40px] lg:h-[40px] w-[30px] h-[30px] lg:border-[4px] border-2 border-[#F8E9D6] rounded-full flex items-center justify-center lg:text-[20px] text-[14px] text-[#F8E9D6] font-bold">!</div>
            </div>
          </div>
          <div className="flex flex-1 justify-center items-center lg:gap-8 gap-2">
            <div className="lg:h-2 h-[2px] flex-1 min-w-[30px] max-w-[180px] bg-[#f8e9d6]" />
            <img className="lg:max-h-[120px] max-h-[60px] max-w-full" src="/img/header-logo.svg" alt="nicozy" />
            <div className="lg:h-2 h-[2px] flex-1 min-w-[30px] max-w-[180px] bg-[#f8e9d6]" />
          </div>
          <div className="flex gap-2 flex-col items-end ml-4">
            <img className="w-[50px] lg:w-[100px]" src="/img/icon4.png" alt="logo" />
            <img className="w-[60px] lg:w-[100px]" src="/img/header-bear.png" alt="logo" />
          </div>
        </div> 
        <div className={`bg-black/85 fixed left-0 right-0 h-[100vh] top-0 ${isMenuOpen ? "block" : "hidden"}`} onClick={() => setIsMenuOpen(false)} />
        <div className={`absolute top-full left-0 z-50 right-0 bg-black/90 md:border border-[#F5E7D4] rounded-lg p-4 min-w-[200px] ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="relative">
            <Image className="absolute bottom-20 left-[50%] translate-x-[-200%]" width={97} height={57} src="/img/header-bear.png" alt="bear" />
            <Image className="absolute top-20 left-[50%] translate-x-[100%]" width={84} height={59} src="/img/icon1.png" alt="animal" />
            <div className="space-y-9 py-4 md:py-12 flex flex-col items-center">
              {navigationLinks.map((link) => {
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="text-3xl font-bold uppercase text-[#F8E9D6]"
                  >
                    {link.id === 1 && <Image width={104} height={52} src="/img/title/home.svg" alt="nicozy" />}
                    {link.id !== 1 && link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}