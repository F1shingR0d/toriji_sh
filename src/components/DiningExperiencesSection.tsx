"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
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
      className="py-28 sm:py-36 bg-[#F2E9D9] text-[#171717]"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#C69A50]/35">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#B52B27]">
              {t("Gatherings & Events", "私享家宴与主厨发办")}
            </p>
            <h2 className="mt-3 text-section-heading text-[#171717]">
              {t("Omakase & Supper Clubs", "五道式烧鸟与芭蕉叶家宴")}
            </h2>
          </div>

          <p className="max-w-md text-body-copy text-[#171717]/70">
            {t(
              "Intimate 15-seat banana-leaf feasts, 5-course yakitori omakase progressions, and acoustic Saturday nights.",
              "定期呈献 15 席芭蕉叶菲式长桌家宴、五道式烧鸟 Omakase 晚宴，以及周六不插电原声之夜。"
            )}
          </p>
        </div>

        {/* Clean Borderless Editorial Rows */}
        <div className="divide-y divide-[#C69A50]/30">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.id}
              className="py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              <div className="lg:col-span-5 overflow-hidden aspect-[4/3] bg-[#171717]">
                <img
                  src={exp.image}
                  alt={exp.title[lang]}
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.03]"
                />
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.22em]">
                  <span className="text-[#C69A50]">0{idx + 1}</span>
                  <span className="h-px w-6 bg-[#C69A50]/50" />
                  <span className="text-[#B52B27]">{exp.tag[lang]}</span>
                </div>

                <h3 className="font-editorial text-3xl sm:text-4xl text-[#171717] leading-tight">
                  {exp.title[lang]}
                </h3>

                <p className="text-sm font-medium text-[#C69A50]">
                  {exp.subtitle[lang]}
                </p>

                <p className="text-body-copy text-[#171717]/75 max-w-xl">
                  {exp.description[lang]}
                </p>

                <div className="pt-3">
                  <button
                    onClick={onOpenReserve}
                    className="group inline-flex items-center gap-2.5 border-b border-[#B52B27] pb-1 text-btn-label text-[#B52B27] transition-opacity hover:opacity-75"
                  >
                    <span>{t("Inquire & Reserve", "咨询与预订席位")}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
