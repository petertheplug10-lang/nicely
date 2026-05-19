"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";

/** Desktop — matches existing site IA. */
const navDesktop = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/shops", label: "Shops" },
  { href: "/service", label: "Service" },
  { href: "/wholesale", label: "Wholesale" },
  { href: "/about", label: "About NICOZY" },
] as const;

/**
 * Mobile expanded menu — [Figma 56:1949](https://www.figma.com/design/iweV67Dx7ac31XD5Cu71XE/Nicozy?node-id=56-1949&m=dev).
 * Verification → home `#verify` block.
 */
const navMobile = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/shops", label: "Shops" },
  { href: "/service", label: "Service" },
  { href: "/wholesale", label: "Wholesale" },
  { href: "/#verify", label: "Verification" },
  { href: "/about", label: "About NICOZY" },
] as const;

function isNavItemActive(
  pathname: string | null,
  href: string,
  locationHash: string,
): boolean {
  if (pathname == null) return false;
  if (href === "/#verify") return pathname === "/" && locationHash === "#verify";
  if (href === "/") return pathname === "/" && locationHash !== "#verify";
  return pathname === href;
}

/** Below open header — portaled to `body` so `backdrop-blur` on header does not clip `fixed`. */
const MENU_SCRIM_Z = 90;

export function MarketingHeader() {
  const pathname = usePathname();
  const menuId = useId();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hash, setHash] = useState("");
  const [mounted, setMounted] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setHash(typeof window !== "undefined" ? window.location.hash : "");
  }, [pathname]);

  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  const menuScrim =
    mounted && menuOpen
      ? createPortal(
          <button
            type="button"
            className={`fixed inset-0 bg-[rgba(255,255,255,0.4)] backdrop-blur-[15.65px] lg:hidden`}
            style={{ zIndex: MENU_SCRIM_Z }}
            aria-label="Close menu"
            onClick={closeMenu}
          />,
          document.body,
        )
      : null;

  return (
    <header
      className={`sticky top-0 border-b border-[#f3f4f6] bg-white/90 backdrop-blur-md ${
        menuOpen ? "z-[100]" : "z-40"
      }`}
    >
      {/* Portal: fixed inside header was clipped — backdrop-filter on header creates a containing block for fixed children. */}
      {menuScrim}

      {/*
        Mobile collapsed bar — [Figma 56:2634](https://www.figma.com/design/iweV67Dx7ac31XD5Cu71XE/Nicozy?node-id=56-2634&m=dev):
        16px horizontal padding, logo ~94×36, 24×24 menu control, no Shop on bar.
      */}
      <div className="relative z-10 mx-auto lg:max-w-[90%] px-4 md:px-6 lg:px-8">
        <div className="flex h-[52px] items-center justify-between md:h-[84px]">
          <Link
            href="/"
            className="shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={closeMenu}
          >
            <Image
              src="/images/logo.svg"
              alt="Nicozy logo"
              width={94}
              height={36}
              className="h-9 w-[94px] object-contain object-left md:h-[46px] md:w-[125px]"
              priority
            />
          </Link>

          <nav
            className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-[0.1em] text-[#171717] lg:flex"
            aria-label="Primary"
          >
            {navDesktop.map((item) => {
              const active = isNavItemActive(pathname, item.href, hash);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative pb-1 hover:opacity-70"
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                  {active ? (
                    <span className="absolute bottom-0 left-0 right-0 mx-auto h-px w-9 bg-black" />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <Link
              href="/shops"
              className="hidden h-9 items-center justify-center rounded-full bg-black px-5 text-[11px] font-bold uppercase tracking-wide text-white transition hover:bg-neutral-800 lg:inline-flex"
            >
              Shop Now
            </Link>

            <button
              type="button"
              className="inline-flex size-6 flex-col items-center justify-center gap-[5px] text-black lg:hidden"
              aria-expanded={menuOpen}
              aria-controls={menuId}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span
                className={`h-px w-4 bg-current transition-transform duration-200 ${
                  menuOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-4 bg-current transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-px w-4 bg-current transition-transform duration-200 ${
                  menuOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile dropdown — Figma 56:1949 */}
        <div
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className={`absolute left-0 right-0 top-full z-50 border-b border-[#f3f4f6] bg-white shadow-[0px_20px_25px_rgba(0,0,0,0.1),0px_8px_10px_rgba(0,0,0,0.1)] transition-[visibility,opacity,transform] duration-200 lg:hidden ${
            menuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-1 opacity-0 pointer-events-none"
          }`}
        >
          <nav className="p-6" aria-label="Primary mobile">
            <ul className="flex flex-col gap-6">
              {navMobile.map((item) => {
                const active = isNavItemActive(pathname, item.href, hash);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block text-[14px] font-bold uppercase leading-5 tracking-[1.4px] text-black ${
                        active ? "underline decoration-2 underline-offset-8" : ""
                      }`}
                      aria-current={active ? "page" : undefined}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href="/shops"
              className="mt-6 flex h-12 w-full items-center justify-center rounded-full bg-black text-[12px] font-medium uppercase tracking-[1.4px] text-white transition hover:bg-neutral-800"
              onClick={closeMenu}
            >
              Shop Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
