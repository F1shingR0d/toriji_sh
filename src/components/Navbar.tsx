"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Flame, Globe, Instagram } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { RESTAURANT_INFO } from "@/data/toriji-data";

interface NavbarProps {
  onOpenReserve: () => void;
}

export default function Navbar({ onOpenReserve }: NavbarProps) {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#experience", label: t("Story", "品牌故事") },
    { href: "#menu", label: t("Signature Food", "招牌料理") },
    { href: "#yakitori", label: t("Binchotan", "备长炭烧鸟") },
    { href: "#omakase", label: t("Experiences", "家宴与发办") },
    { href: "#drinks", label: t("Drinks", "特调与酒单") },
    { href: "#awards", label: t("Awards", "荣誉奖项") },
    { href: "#community", label: t("Community", "社群夜生活") },
    { href: "#location", label: t("Find Us", "门店位置") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0a09]/95 backdrop-blur-md border-b border-[#26201b] py-3 shadow-2xl"
          : "bg-gradient-to-b from-[#0b0a09]/90 via-[#0b0a09]/60 to-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Official Wordmark Logo */}
        <a href="#top" className="group flex items-center gap-3 shrink-0">
          <img
            src="/images/logo-wordmark-transparent.png"
            alt="TORI-JI Official Logo"
            className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="hidden 2xl:flex flex-col border-l border-[#302923] pl-3 whitespace-nowrap">
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#e8a849]">
              {t("JAPANESE × FILIPINO IZAKAYA", "日菲融合烧鸟居酒屋")}
            </span>
            <span className="text-[11px] text-[#a89f91] tracking-wider">
              549 XINHUI RD · SHANGHAI
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-4 xl:gap-5">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[11px] font-mono uppercase tracking-[0.12em] text-[#d5cdc0] transition hover:text-[#e8a849]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions: Language Switcher + IG + Reserve CTA */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Bilingual EN / 中文 Toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            aria-label="Toggle language between English and Chinese"
            className="whitespace-nowrap flex items-center gap-1.5 border border-[#322b24] bg-[#161310]/90 px-2.5 py-1.5 text-xs font-mono tracking-wider text-[#f5efe6] transition hover:border-[#e8a849]"
          >
            <Globe className="h-3.5 w-3.5 text-[#e8a849] shrink-0" />
            <span className={lang === "en" ? "text-[#e8a849] font-bold" : "text-[#a89f91]"}>EN</span>
            <span className="text-[#4a4036]">/</span>
            <span className={lang === "zh" ? "text-[#e8a849] font-bold" : "text-[#a89f91]"}>中文</span>
          </button>

          <a
            href={RESTAURANT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Official Tori-Ji Instagram @toriji_sh"
            className="hidden sm:flex h-8 w-8 items-center justify-center border border-[#322b24] bg-[#161310]/90 text-[#f5efe6] transition hover:border-[#d93829] hover:text-[#e8a849]"
          >
            <Instagram className="h-4 w-4" />
          </a>

          <button
            onClick={onOpenReserve}
            className="flex items-center gap-1.5 bg-[#d93829] px-3.5 sm:px-4 py-2 text-xs font-mono uppercase tracking-[0.16em] font-semibold text-white transition hover:bg-[#b82b1e] shadow-lg shadow-[#d93829]/20"
          >
            <Flame className="h-3.5 w-3.5 text-[#fde047]" />
            <span>{t("Reserve", "立即预订")}</span>
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
            className="flex lg:hidden h-9 w-9 items-center justify-center border border-[#322b24] bg-[#161310] text-[#f5efe6]"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-b border-[#2a241e] bg-[#0e0c0a] px-6 py-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="border border-[#241f1a] bg-[#15120f] px-3.5 py-2.5 text-xs font-mono uppercase tracking-wider text-[#f5efe6] hover:border-[#e8a849]"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-[#241f1a] flex items-center justify-between text-xs font-mono text-[#a89f91]">
            <span>{t("WED–MON · 5PM – LATE", "周三至周一 · 17:00至深夜")}</span>
            <a
              href={RESTAURANT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e8a849] underline"
            >
              @toriji_sh
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
