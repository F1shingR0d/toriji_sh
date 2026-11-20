"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { RESTAURANT_INFO } from "@/data/toriji-data";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#171717] text-[#F2E9D9] border-t border-[#C69A50]/20">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 py-14">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-[#F2E9D9]/10">
          <div className="space-y-2">
            <div className="text-sm font-medium tracking-[0.32em] uppercase text-[#F2E9D9]">
              TORI-JI IZAKAYA
            </div>
            <p className="font-editorial italic text-base text-[#C69A50]">
              {t(
                "The Art of Yakitori · Japanese × Filipino",
                "备长炭上的烧鸟艺术 · 日式匠心 × 菲律宾灵魂"
              )}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-medium uppercase tracking-[0.18em] text-[#F2E9D9]/70">
            <a href="#menu" className="hover:text-[#C69A50] transition-colors">
              {t("Menu", "菜单")}
            </a>
            <a href="#experience" className="hover:text-[#C69A50] transition-colors">
              {t("Story", "关于")}
            </a>
            <a href="#omakase" className="hover:text-[#C69A50] transition-colors">
              {t("Events", "家宴")}
            </a>
            <a href="#journal" className="hover:text-[#C69A50] transition-colors">
              {t("Journal", "专栏")}
            </a>
            <a
              href={RESTAURANT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C69A50] transition-colors"
            >
              @toriji_sh
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-[0.18em] text-[#F2E9D9]/45">
          <div>
            © {new Date().getFullYear()} TORI-JI SHANGHAI · 549 XINHUI ROAD
          </div>

          <a
            href="#top"
            className="inline-flex items-center gap-1.5 text-[#C69A50] hover:opacity-75 transition-opacity"
          >
            <span>{t("Top", "返回顶部")}</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
