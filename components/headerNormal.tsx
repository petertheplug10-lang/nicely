"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// 导航链接数据
const navigationLinks = [
  {
    id: 1,
    label: "HOME",
    href: "/",
  },
  {
    id: 2,
    label: "POUCH SERIES",
    href: "/products",
  },
  {
    id: 3,
    label: "VERIFICATION",
    href: "/verification",
  },
  {
    id: 4,
    label: "CONTACT US",
    href: "/contact-us",
  },
];

export default function HeaderNormal() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black px-4 py-4 sticky top-0 z-50">
      <div className="w-[1000px] max-w-full mx-auto flex justify-between items-center">
        {/* Left Side - Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image src="/img/footer-logo.png" alt="logo" width={96} height={34} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 md:space-x-9">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.id}
                href={link.href} 
                className={`transition-colors duration-200 uppercase text-sm tracking-wide ${
                  isActive 
                    ? "text-[#EAAA63] font-bold" 
                    : "text-white hover:text-gray-300 font-medium"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2 translate-x-[0px]' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-14 left-0 w-full bg-black border-t border-gray-700">
          <div className="relative px-4 py-4 shadow-amber-50">
            {/* Navigation Links */}
            <nav className="flex flex-col space-y-4">
              {navigationLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={link.id}
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className={`transition-colors duration-200 uppercase text-sm font-medium tracking-wide py-3 px-4 rounded ${
                      isActive 
                        ? "text-[#EAAA63] font-bold bg-gray-800" 
                        : "text-white hover:text-gray-300 font-medium"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}