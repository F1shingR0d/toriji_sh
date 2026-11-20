"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { AWARDS_AND_PRESS } from "@/data/toriji-data";

export default function ExperienceSection() {
  const { lang, t } = useLanguage();

  const pillars = [
    {
      num: "01",
      title: t("Binchotan Precision", "备长炭火的诚实美学"),
      body: t(
        "Every skewer—from chicken oyster and neck to velvety liver and handmade tsukune—is butchered by hand each afternoon and seared over glowing charcoal.",
        "从稀有鸡生蚝、鸡颈肉到招牌奶油鸡肝与手打月见鸡肉棒，每一串皆于每日下午手工分切穿制，在备长炭火上精准炙烤。"
      ),
    },
    {
      num: "02",
      title: t("Filipino Soul", "马尼拉风味的灵感共鸣"),
      body: t(
        "Heirloom Filipino warmth meets Tokyo izakaya craft: calamansi-kissed Chicken Inasal, sizzling Yakitori Sisig, and Palabok Tsukemen.",
        "菲律宾家常温暖与东京居酒屋技艺相融：四季橘烤鸡排、铁板烧鸟西西格，以及菲式鲜虾帕拉博克沾面。"
      ),
    },
    {
      num: "03",
      title: t("Unhurried Hospitality", "新会路上的深夜相聚"),
      body: t(
        "Founded by Czarina and Vené Labagriel, Tori-Ji is built as an intimate neighborhood table where every guest feels at home.",
        "由 Czarina 与 Vené 夫妻共同创立，Tori-Ji 是新会路上一张充满温度的餐桌，让每一位食客都如归家中。"
      ),
    },
  ];

  return (
    <section
      id="experience"
      className="py-28 sm:py-36 bg-[#171717] text-[#F2E9D9]"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        {/* Story Narrative + Clean Editorial Portraits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#C69A50]">
              {t("Our Story & Craft", "品牌故事与匠心")}
            </p>

            <h2 className="text-section-heading text-[#F2E9D9]">
              {t(
                "Built by Hand, by Fire.",
                "以手作与炭火筑梦。"
              )}
            </h2>

            <div className="h-px w-16 bg-[#C69A50]/60" />

            <p className="text-body-copy text-[#F2E9D9]/80">
              {t(
                "Founded in Shanghai by husband-and-wife duo Czarina and Venedict 'Vené' Labagriel, Tori-Ji began with a quiet promise: to build something honest of their own, so they would never live with 'what ifs.'",
                "由定居上海的菲律宾夫妻 Czarina 与 Vené Labagriel 共同创立，Tori-Ji 始于一个简单而坚定的约定：亲手打造一间诚实的小店，只为人生不留遗憾。"
              )}
            </p>

            <p className="text-body-copy text-[#F2E9D9]/70">
              {t(
                "Less than a year after lighting the first coals on Xinhui Road, Tori-Ji was named Japanese Restaurant of the Year at the 23rd That's Shanghai Food & Drink Awards.",
                "在新会路点燃第一炉炭火不到一年，Tori-Ji 便荣膺第23届《That's Shanghai》“年度最佳日本料理餐厅”大奖。"
              )}
            </p>

            <blockquote className="pt-4 border-l border-[#C69A50] pl-6">
              <p className="font-editorial italic text-2xl sm:text-[26px] leading-snug text-[#F2E9D9]">
                {t(
                  "“We make it here. By hand. By fire. Not rushed. Fire is honest. Smoke never lies.”",
                  "“手作穿串，直面炭火，从不仓促。炭火诚实，烟火从不撒谎。”"
                )}
              </p>
              <footer className="mt-3 text-[11px] uppercase tracking-[0.24em] text-[#C69A50]">
                — CZARINA &amp; VENÉ LABAGRIEL
              </footer>
            </blockquote>
          </div>

          {/* Right Clean Dual Portraits (No Heavy Borders) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-6 sm:gap-8 items-start">
            <figure className="space-y-3">
              <div className="aspect-[3/4] overflow-hidden bg-[#171717]">
                <img
                  src="/images/vene-master-griller.jpg"
                  alt="Master Griller Vené at the binchotan charcoal grill"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <figcaption className="text-[11px] uppercase tracking-[0.2em] text-[#C69A50]">
                {t("Master Griller Vené", "主理人 Vené")}
              </figcaption>
            </figure>

            <figure className="space-y-3 mt-12">
              <div className="aspect-[3/4] overflow-hidden bg-[#171717]">
                <img
                  src="/images/founders-award-2025.jpg"
                  alt="Czarina and Vené holding the Japanese Restaurant of the Year award"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="text-[11px] uppercase tracking-[0.2em] text-[#C69A50]">
                {t("That's Shanghai 2025", "年度最佳日料大奖")}
              </figcaption>
            </figure>
          </div>
        </div>

        {/* 3 Minimalist Pillars */}
        <div className="mt-24 pt-14 border-t border-[#C69A50]/25 grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((pillar) => (
            <div key={pillar.num} className="space-y-3">
              <span className="text-xs font-semibold tracking-[0.24em] text-[#C69A50]">
                {pillar.num}
              </span>
              <h3 className="text-subheading text-[#F2E9D9]">{pillar.title}</h3>
              <p className="text-sm text-[#F2E9D9]/70 leading-relaxed">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>

        {/* Minimalist Recognition & Press Ledger */}
        <div className="mt-20 pt-14 border-t border-[#F2E9D9]/12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#C69A50] mb-8">
            {t("Recognition & Press", "权威荣誉与报道")}
          </p>
          <div className="divide-y divide-[#F2E9D9]/12 border-t border-b border-[#F2E9D9]/12">
            {AWARDS_AND_PRESS.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#C69A50] shrink-0 w-24">
                    {item.year}
                  </span>
                  <div>
                    <h4 className="font-editorial text-xl sm:text-2xl text-[#F2E9D9] group-hover:text-[#C69A50] transition-colors">
                      {item.title[lang]}
                    </h4>
                    <p className="text-xs text-[#F2E9D9]/55 mt-0.5">
                      {item.organization}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-[#C69A50] shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
