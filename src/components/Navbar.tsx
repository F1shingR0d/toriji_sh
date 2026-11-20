"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface NavbarProps {
  onOpenReserve: () => void;
}

export default function Navbar({ onOpenReserve }: NavbarProps) {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#menu", label: t("Menu", "菜单") },
    { href: "#experience", label: t("Story", "关于") },
    { href: "#omakase", label: t("Events", "家宴") },
    { href: "#drinks", label: t("Drinks", "酒单") },
    { href: "#journal", label: t("Journal", "专栏") },
    { href: "#location", label: t("Visit", "寻访") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[#171717]/95 backdrop-blur-md py-4 border-b border-[#C69A50]/25"
          : "bg-[#171717]/80 backdrop-blur-sm py-6 border-b border-[#F2E9D9]/10"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-10">
        {/* Wordmark */}
        <a
          href="#top"
          className="text-sm sm:text-base font-medium tracking-[0.32em] uppercase text-[#F2E9D9] transition-opacity hover:opacity-80"
        >
          TORI-JI
        </a>

        {/* Desktop Nav Links (Inter Medium 13-15px) */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-9"
        >
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-nav-link text-[#F2E9D9]/75 transition-colors duration-300 hover:text-[#C69A50]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Quiet Right Controls */}
        <div className="flex items-center gap-5">
          <button
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            aria-label="Switch Language"
            className="text-xs font-medium tracking-[0.14em] text-[#F2E9D9]/70 transition-colors hover:text-[#F2E9D9]"
          >
            <span className={lang === "en" ? "text-[#C69A50]" : ""}>EN</span>
            <span className="mx-1.5 text-[#F2E9D9]/25">/</span>
            <span className={lang === "zh" ? "text-[#C69A50]" : ""}>中文</span>
          </button>

          <button
            onClick={onOpenReserve}
            className="bg-[#B52B27] px-5 py-2.5 text-btn-label text-[#F2E9D9] transition-opacity duration-300 hover:opacity-90"
          >
            {t("Reserve", "预订")}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
            className="flex lg:hidden h-9 w-9 items-center justify-center text-[#F2E9D9]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#171717] border-t border-[#C69A50]/25 px-6 py-8">
          <div className="flex flex-col space-y-5">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-nav-link text-[#F2E9D9]/85 hover:text-[#C69A50]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
