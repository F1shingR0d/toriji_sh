"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useArticles } from "@/context/ArticlesContext";

interface HeroSectionProps {
  onOpenReserve: () => void;
}

export default function HeroSection({ onOpenReserve }: HeroSectionProps) {
  const { lang, t } = useLanguage();
  const { latestArticle } = useArticles();

  return (
    <section id="top">
      {/* Full-Viewport Minimalist Charcoal Editorial Hero */}
      <div className="relative min-h-[92vh] flex flex-col justify-between bg-[#171717] text-[#F2E9D9] pt-28 overflow-hidden">
        {/* Soft Atmospheric Binchotan Fire Backdrop (No Storefront) */}
        <div className="pointer-events-none absolute inset-0">
          <img
            src="/images/yakitori-open-fire.jpg"
            alt="Binchotan charcoal yakitori embers at Tori-Ji"
            className="h-full w-full object-cover object-center opacity-22"
          />
          <div className="absolute inset-0 bg-[#171717]/72" />
        </div>

        {/* Centerpiece Typography */}
        <div className="relative z-10 my-auto mx-auto max-w-4xl px-6 sm:px-10 py-20 text-center">
          <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.34em] text-[#C69A50]">
            {t(
              "Japanese Restaurant of the Year 2025 · That's Shanghai",
              "2025《That's Shanghai》年度最佳日本料理餐厅"
            )}
          </p>

          <h1 className="mt-7 text-hero-heading text-[#F2E9D9]">
            {t("The Art of Yakitori", "备长炭上的烧鸟艺术")}
          </h1>

          <div className="mx-auto my-8 h-px w-28 bg-[#C69A50]/65" />

          <p className="font-editorial text-2xl sm:text-4xl text-[#C69A50] tracking-wide">
            {t("Japanese × Filipino", "日式匠心 × 菲律宾灵魂")}
          </p>

          <p className="mt-5 text-[11px] sm:text-xs font-medium uppercase tracking-[0.38em] text-[#F2E9D9]/70">
            TORI-JI IZAKAYA · SHANGHAI
          </p>

          {/* Clean Dual Actions */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
            <button
              onClick={onOpenReserve}
              className="bg-[#B52B27] px-8 py-3.5 text-btn-label text-[#F2E9D9] transition-opacity duration-300 hover:opacity-90"
            >
              {t("Reserve a Table", "预订席位")}
            </button>

            <a
              href="#menu"
              className="border border-[#F2E9D9]/35 px-8 py-3.5 text-btn-label text-[#F2E9D9] transition-colors duration-300 hover:border-[#C69A50] hover:text-[#C69A50]"
            >
              {t("Explore Menu", "探索菜单")}
            </a>
          </div>
        </div>

        {/* Quiet Bottom Dispatch Bar for Latest Article */}
        <div className="relative z-10 border-t border-[#C69A50]/20 bg-[#171717]/85">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 py-4 flex flex-wrap items-center justify-between gap-4 text-xs">
            {latestArticle ? (
              <a
                href="#journal"
                className="group flex items-center gap-3 min-w-0 max-w-2xl"
              >
                <span className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B52B27]">
                  {t("Latest", "最新")}
                </span>
                <span className="h-3 w-px bg-[#C69A50]/40 shrink-0" />
                <span className="truncate text-[#F2E9D9]/85 group-hover:text-[#C69A50] transition-colors">
                  {latestArticle.title[lang]}
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-[#C69A50] shrink-0 transition-transform group-hover:translate-x-1" />
              </a>
            ) : (
              <span className="text-[#F2E9D9]/60 uppercase tracking-[0.18em]">
                549 Xinhui Road · Putuo, Shanghai
              </span>
            )}

            <span className="hidden md:inline-block uppercase tracking-[0.2em] text-[#F2E9D9]/55">
              {t("Wed – Mon · 5:00 PM – Late", "周三至周一 · 17:00 至深夜")}
            </span>
          </div>
        </div>
      </div>

      {/* Serene Warm Cream Editorial Opening Statement */}
      <div className="bg-[#F2E9D9] text-[#171717] py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 sm:px-10 text-center space-y-6">
          <div className="mx-auto h-px w-16 bg-[#C69A50]" />
          <h2 className="text-subheading text-[#171717]">
            {t(
              "Where two cultures meet over the grill.",
              "当两种文化在炭火前温柔相遇。"
            )}
          </h2>
          <p className="text-body-copy text-[#171717]/75 max-w-2xl mx-auto">
            {t(
              "Discover Japanese yakitori with a Filipino twist, thoughtfully prepared by hand over white-hot binchotan charcoal and best enjoyed together.",
              "探索融入菲律宾风味灵感的日式手工烧鸟。每日亲手分切穿串，以备长炭火悉心炙烤，与挚友共度从容微醺的夜晚。"
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
