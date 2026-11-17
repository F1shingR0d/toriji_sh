"use client";

import React from "react";
import { Award, Flame, MapPin, ArrowUpRight, Utensils, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { MANIFESTO_LINES, RESTAURANT_INFO } from "@/data/toriji-data";

interface HeroSectionProps {
  onOpenReserve: () => void;
}

export default function HeroSection({ onOpenReserve }: HeroSectionProps) {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-24 sm:pt-28 bg-[#0b0a09]"
    >
      {/* Atmospheric Background Image with Editorial Gradient Mask */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src="/images/yakitori-open-fire.jpg"
          alt="Open-fire binchotan yakitori skewers grilling at Tori-Ji Shanghai"
          className="h-full w-full object-cover object-center opacity-35 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0a09] via-[#0b0a09]/85 to-[#0b0a09]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a09] via-transparent to-[#0b0a09]/80" />
      </div>

      {/* Main Editorial Grid */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Brand Identity & Story Lead */}
          <div className="lg:col-span-7 space-y-6">
            {/* Verified Award Pill */}
            <a
              href="#awards"
              className="inline-flex items-center gap-2.5 border border-[#e8a849]/40 bg-[#18130e]/90 px-3.5 py-1.5 text-xs font-mono uppercase tracking-[0.14em] text-[#e8a849] transition hover:border-[#e8a849]"
            >
              <Award className="h-4 w-4 text-[#d93829] shrink-0" />
              <span>
                {t(
                  "Winner · Japanese Restaurant of the Year · That's Shanghai Awards 2025",
                  "2025 That's Shanghai 年度最佳日本料理餐厅大奖得主"
                )}
              </span>
            </a>

            {/* Official Brush Logo + Display Title */}
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <img
                  src="/images/logo-wordmark-transparent.png"
                  alt="TORI-JI Hand-Brushed Wordmark"
                  className="h-14 sm:h-20 w-auto object-contain drop-shadow-[0_6px_24px_rgba(217,56,41,0.28)]"
                />
                <span className="border-l border-[#332b22] pl-4 font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-[#a89f91]">
                  烧鸟大师 · 居酒屋
                  <br />
                  <span className="text-[#e8a849]">SHANGHAI, CHINA</span>
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.04] text-[#f5efe6]">
                {t("Japanese-Filipino", "日式备长炭烧鸟")}
                <span className="block font-serif italic font-normal text-[#e8a849] mt-1">
                  {t("Izakaya & Late-Night Soul.", "× 菲律宾灵魂小酒馆")}
                </span>
              </h1>
            </div>

            <p className="max-w-2xl text-base sm:text-lg text-[#c7bfb2] leading-relaxed">
              {t(
                "Where honest binchotan charcoal yakitori meets bold Manila street flavors, three-language love-letter cocktails, and the warmest late-night crowd on Shanghai's Xinhui Road.",
                "当忠于炭火的日式手工烧鸟，遇上热烈奔放的马尼拉街头风味、三语情书特调鸡尾酒，以及上海普陀新会路最温暖的深夜社群。"
              )}
            </p>

            {/* Key Metadata Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 max-w-2xl">
              <div className="border-l-2 border-[#d93829] bg-[#14110e]/85 pl-3 py-1.5">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#a89f91]">
                  {t("CRAFT", "核心技艺")}
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#f5efe6]">
                  {t("Binchotan Yakitori × Pinoy Grill", "备长炭烧鸟 × 菲式炭烤")}
                </div>
              </div>
              <div className="border-l-2 border-[#e8a849] bg-[#14110e]/85 pl-3 py-1.5">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#a89f91]">
                  {t("HOURS", "营业时间")}
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#f5efe6]">
                  {t("Wed – Mon · 5PM till Late", "周三至周一 · 17:00至深夜")}
                </div>
              </div>
              <div className="border-l-2 border-[#84cc16] bg-[#14110e]/85 pl-3 py-1.5">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#a89f91]">
                  {t("LOCATION", "门店坐标")}
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#f5efe6]">
                  {t("549 Xinhui Rd, Putuo", "普陀区新会路549号1-3室")}
                </div>
              </div>
            </div>

            {/* Verified CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#menu"
                className="inline-flex items-center gap-2.5 bg-[#d93829] px-6 py-3.5 text-xs sm:text-sm font-mono uppercase tracking-[0.18em] font-semibold text-white transition hover:bg-[#b82b1e] shadow-xl shadow-[#d93829]/25"
              >
                <Utensils className="h-4 w-4" />
                <span>{t("Explore Menu", "探索招牌菜单")}</span>
              </a>

              <button
                onClick={onOpenReserve}
                className="inline-flex items-center gap-2.5 border border-[#e8a849]/70 bg-[#171310]/90 px-6 py-3.5 text-xs sm:text-sm font-mono uppercase tracking-[0.18em] font-semibold text-[#f5efe6] transition hover:bg-[#e8a849] hover:text-[#0b0a09]"
              >
                <Flame className="h-4 w-4 text-[#e8a849]" />
                <span>{t("Reserve a Table", "预订席位")}</span>
              </button>

              <a
                href="#location"
                className="inline-flex items-center gap-2 border border-[#2f2822] bg-[#12100d]/80 px-5 py-3.5 text-xs sm:text-sm font-mono uppercase tracking-[0.16em] text-[#c7bfb2] transition hover:border-[#a89f91] hover:text-white"
              >
                <MapPin className="h-4 w-4 text-[#d93829]" />
                <span>{t("Find Us", "地址与导航")}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Overlapping Authentic Photo Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Frame: Storefront at Night with Red Chochin Lanterns & Noren */}
              <div className="relative z-10 overflow-hidden border border-[#2e2720] bg-[#141210] shadow-2xl">
                <img
                  src="/images/storefront-night.jpg"
                  alt="Tori-Ji storefront at 549 Xinhui Road at night with glowing mascot sign, noren curtain, and red chochin lanterns"
                  className="h-[420px] sm:h-[470px] w-full object-cover object-center transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a09]/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#e8a849]">
                      {t("549 XINHUI ROAD · PUTUO", "上海市普陀区新会路549号")}
                    </span>
                    <p className="text-sm font-semibold text-[#f5efe6]">
                      {t("Under the Red Chochin Lanterns", "红灯笼与暖帘后的深夜食堂")}
                    </p>
                  </div>
                  <a
                    href={RESTAURANT_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 border border-[#3a3128] bg-[#12100e]/90 px-2.5 py-1 text-[11px] font-mono text-[#e8a849] hover:border-[#e8a849]"
                  >
                    <span>@toriji_sh</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* Overlapping Secondary Frame: Master Griller Vené Seasoning Skewers */}
              <div className="hidden sm:block absolute -bottom-8 -left-12 z-20 w-48 border-2 border-[#e8a849]/50 bg-[#12100e] p-1.5 shadow-2xl">
                <img
                  src="/images/vene-master-griller.jpg"
                  alt="Co-Founder and Master Griller Venedict Labagriel seasoning yakitori skewers"
                  className="h-56 w-full object-cover object-top"
                />
                <div className="bg-[#12100e] pt-2 pb-1 px-1.5">
                  <div className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-[#e8a849]">
                    <Sparkles className="h-3 w-3 text-[#d93829]" />
                    <span>{t("MASTER GRILLER VENÉ", "主理人 VENÉ 掌炉")}</span>
                  </div>
                  <p className="text-[11px] text-[#c7bfb2] mt-0.5">
                    {t('"By hand. By fire. Smoke never lies."', '“手作穿串，直面炭火，烟火从不撒谎。”')}
                  </p>
                </div>
              </div>

              {/* Overlapping Top-Right Mascot Emblem Badge */}
              <div className="absolute -top-5 -right-3 sm:-right-5 z-20 flex items-center gap-2.5 border border-[#382f27] bg-[#12100e]/95 p-2.5 shadow-2xl">
                <img
                  src="/images/logo-mascot-badge.jpg"
                  alt="Tori-Ji Yakitori Master Mascot Emblem"
                  className="h-12 w-12 rounded-full object-cover border border-[#d93829]"
                />
                <div className="pr-1">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#d93829] font-bold">
                    烧鸟大师 · TORI-JI
                  </div>
                  <div className="text-xs font-semibold text-[#f5efe6]">
                    {t("Yakitori × Izakaya", "日菲融合烧鸟酒馆")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Manifesto Ticker (Real Interior Wall Text) */}
      <div className="relative z-10 border-y border-[#241f1a] bg-[#110f0c]/95 py-3 overflow-hidden">
        <div className="animate-marquee flex items-center gap-10 whitespace-nowrap font-mono text-xs tracking-[0.22em] text-[#a89f91]">
          {[...MANIFESTO_LINES, ...MANIFESTO_LINES].map((line, idx) => (
            <span key={idx} className="inline-flex items-center gap-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d93829]" />
              <span>{line}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
