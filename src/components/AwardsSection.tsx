"use client";

import React from "react";
import { Award, ArrowUpRight, Trophy } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { AWARDS_AND_PRESS } from "@/data/toriji-data";

export default function AwardsSection() {
  const { lang, t } = useLanguage();

  return (
    <section
      id="awards"
      className="relative py-24 sm:py-32 bg-[#0b0a09] border-b border-[#251f19]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Banner: Japanese Restaurant of the Year */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-[#e8a849]/35 bg-gradient-to-r from-[#17120d] via-[#120f0c] to-[#0b0a09] p-6 sm:p-12">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 border border-[#e8a849]/40 bg-[#e8a849]/10 px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-[#e8a849]">
              <Trophy className="h-4 w-4 text-[#d93829]" />
              <span>{t("06 · VERIFIED AWARDS & PRESS", "06 · 权威奖项与媒体报道")}</span>
            </div>

            <div className="font-mono text-xs sm:text-sm uppercase tracking-[0.24em] text-[#d93829] font-semibold">
              23RD THAT&apos;S SHANGHAI FOOD &amp; DRINK AWARDS 2025
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#f5efe6] leading-[1.1]">
              {t("Japanese Restaurant of the Year", "年度最佳日本料理餐厅")}
              <span className="block font-serif italic font-normal text-[#e8a849] mt-1">
                {t("Voted by Shanghai's Dining Community.", "上海食客口碑之选 · 实至名归")}
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#c7bfb2] leading-relaxed">
              {t(
                "Named Japanese Restaurant of the Year (People's Choice) at the 23rd That's Shanghai Food & Drink Awards 2025—celebrating Co-Founders Czarina & Venedict 'Vené' Labagriel's dedication to honest binchotan yakitori and Filipino-Japanese hospitality.",
                "在第23届《That's Shanghai》餐饮大奖（Food & Drink Awards 2025）中，Tori-Ji 荣膺“年度最佳日本料理餐厅（大众选择奖）”——致敬联合创始人 Czarina 与 Vené 对手工备长炭烧鸟与日菲待客之道的极致坚持。"
              )}
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="https://www.thatsmags.com/shanghai/post/40231/who-won-what-at-the-that-s-shanghai-food-drink-awards-2025"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#e8a849] bg-[#e8a849] px-5 py-2.5 text-xs font-mono uppercase tracking-[0.16em] font-bold text-[#0b0a09] transition hover:bg-[#f5efe6]"
              >
                <span>{t("Read That's Shanghai Awards List", "查看 That's Shanghai 官方获奖榜单")}</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="https://www.thatsmags.com/shanghai/post/40317/8-badass-women-of-shanghai-f-b-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#3a3128] bg-[#161310] px-5 py-2.5 text-xs font-mono uppercase tracking-[0.16em] text-[#f5efe6] transition hover:border-[#e8a849]"
              >
                <span>{t("Read 8 Badass Women of Shanghai F&B", "阅读《上海餐饮界八位杰出女性》专访")}</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Award Plaque & Trophy Photos */}
          <div className="lg:col-span-5 grid grid-cols-12 gap-4 items-center">
            <div className="col-span-7 overflow-hidden border border-[#e8a849]/40 bg-[#0b0a09]">
              <img
                src="/images/founders-award-2025.jpg"
                alt="Founders Vené and Czarina Labagriel holding the That's Shanghai Food & Drink Awards 2025 Japanese Restaurant of the Year plaque"
                className="h-72 sm:h-80 w-full object-cover object-center"
              />
            </div>
            <div className="col-span-5 overflow-hidden border border-[#2f2820] bg-[#0b0a09]">
              <img
                src="/images/ig-award-plaque.jpg"
                alt="Close-up of Tori-Ji's Japanese Restaurant of the Year trophy plaque"
                className="h-72 sm:h-80 w-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* 3 Recognition Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {AWARDS_AND_PRESS.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between border border-[#2a231c] bg-[#13100d] p-6 transition hover:border-[#e8a849]/50"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#e8a849]">
                  <span>{item.year}</span>
                  <Award className="h-4 w-4 text-[#d93829]" />
                </div>

                <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[#a89f91]">
                  {item.organization}
                </div>

                <h3 className="mt-2 text-xl font-bold text-[#f5efe6]">
                  {item.title[lang]}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#a89f91] leading-relaxed">
                  {item.description[lang]}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#221c17] flex items-center justify-between">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#e8a849] hover:underline"
                >
                  <span>{t("Verify Source", "查看权威来源")}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
