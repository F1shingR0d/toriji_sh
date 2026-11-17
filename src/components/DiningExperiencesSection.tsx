"use client";

import React from "react";
import { Users, Sparkles, Check, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { EXPERIENCES } from "@/data/toriji-data";

interface DiningExperiencesSectionProps {
  onOpenReserve: () => void;
}

export default function DiningExperiencesSection({
  onOpenReserve,
}: DiningExperiencesSectionProps) {
  const { lang, t } = useLanguage();

  return (
    <section
      id="omakase"
      className="relative py-24 sm:py-32 bg-[#0b0a09] border-b border-[#241e19] bg-grain"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#241e19] pb-10">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[#e8a849]">
              <Users className="h-4 w-4 text-[#d93829]" />
              <span>{t("04 · OMAKASE & SUPPER CLUBS", "04 · 私享家宴与五道式烧鸟发办")}</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#f5efe6]">
              {t("Curated Dining Experiences", "不止于晚餐的社群餐桌体验")}
            </h2>
          </div>

          <p className="max-w-xl text-sm sm:text-base text-[#a89f91] leading-relaxed">
            {t(
              "Beyond à la carte yakitori and izakaya plates, Tori-Ji hosts verified 5-Course Yakitori Omakase dinners, 15-seat Filipino Feast banana-leaf supper clubs, and weekend live-music nights.",
              "除了日常单点烧鸟与居酒料理，Tori-Ji 定期举办五道式烧鸟 Omakase 晚宴、15席限定的芭蕉叶菲式长桌家宴（Filipino Feast），以及周末原声音乐与跨界手作沙龙。"
            )}
          </p>
        </div>

        {/* Experiences Alternating Editorial Blocks */}
        <div className="mt-14 space-y-12">
          {EXPERIENCES.map((exp, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={exp.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border border-[#2c251e] bg-[#13100d]"
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-5 relative min-h-[320px] sm:min-h-[380px] overflow-hidden bg-[#0b0a09] ${
                    isReversed ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={exp.image}
                    alt={exp.title[lang]}
                    className="h-full w-full object-cover object-center transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13100d] via-transparent to-transparent opacity-65" />
                  <span className="absolute top-4 left-4 bg-[#d93829] px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] font-semibold text-white">
                    {exp.tag[lang]}
                  </span>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between ${
                    isReversed ? "lg:order-1" : ""
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#e8a849]">
                      <Sparkles className="h-3.5 w-3.5 text-[#d93829]" />
                      <span>{exp.tag[lang]}</span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-bold text-[#f5efe6]">
                      {exp.title[lang]}
                    </h3>

                    <p className="font-serif italic text-lg text-[#e8a849]">
                      {exp.subtitle[lang]}
                    </p>

                    <p className="text-sm sm:text-base text-[#c7bfb2] leading-relaxed">
                      {exp.description[lang]}
                    </p>

                    <ul className="pt-2 space-y-2">
                      {exp.highlights[lang].map((hl, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#f5efe6]"
                        >
                          <Check className="h-4 w-4 text-[#84cc16] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-5 border-t border-[#251f19] flex flex-wrap items-center justify-between gap-4">
                    <span className="font-mono text-xs text-[#a89f91]">
                      {t(
                        "Advance seat booking via WeChat recommended",
                        "席位有限，建议通过官方微信提前预订"
                      )}
                    </span>

                    <button
                      onClick={onOpenReserve}
                      className="inline-flex items-center gap-2 border border-[#e8a849] bg-[#1a1612] px-5 py-2.5 text-xs font-mono uppercase tracking-[0.16em] text-[#e8a849] transition hover:bg-[#e8a849] hover:text-[#0b0a09] font-semibold"
                    >
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{t("Inquire & Book via WeChat", "微信咨询与预订席位")}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
