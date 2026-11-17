"use client";

import React from "react";
import { Wine, Sparkles, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { DRINKS } from "@/data/toriji-data";

export default function DrinksSection() {
  const { lang, t } = useLanguage();

  const koibumi = DRINKS[0];
  const otherDrinks = DRINKS.slice(1);

  return (
    <section
      id="drinks"
      className="relative py-24 sm:py-32 bg-[#0e0c0a] border-b border-[#251f19]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#251f19] pb-10">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[#e8a849]">
              <Wine className="h-4 w-4 text-[#d93829]" />
              <span>{t("05 · BEVERAGE & BAR PROGRAM", "05 · 特调鸡尾酒、沙瓦与清酒")}</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#f5efe6]">
              {t("Sours, Highballs & Love Letters", "紫苏情书、四季橘与微醺沙瓦")}
            </h2>
          </div>

          <p className="max-w-xl text-sm sm:text-base text-[#a89f91] leading-relaxed">
            {t(
              "Designed to cut through rich binchotan smoke and sizzling sisig—featuring shochu sours, Philippine calamansi highballs, curated sake, and our three-language signature cocktail: Koibumi · 恋文 · Liham.",
              "专为平衡炭火烧鸟与铁板料理的浓郁脂香而设计——从鲜果沙瓦、菲律宾四季橘金汤力、精选日本酒，到以三种语言命名的镇店特调“恋文 · Koibumi · Liham”。"
            )}
          </p>
        </div>

        {/* Signature Spotlight: KOIBUMI · 恋文 · Liham */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-[#3a2220] bg-gradient-to-br from-[#160f0e] via-[#110e0c] to-[#0b0a09] p-6 sm:p-10">
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="overflow-hidden border border-[#2e2520] bg-[#0b0a09]">
              <img
                src="/images/koibumi-cocktail-poster.jpg"
                alt="Koibumi · 恋文 · Liham signature cocktail poster with shiso leaf and red love letter envelope"
                className="h-80 sm:h-96 w-full object-cover object-center transition duration-700 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden border border-[#2e2520] bg-[#0b0a09]">
              <img
                src="/images/koibumi-shiso-sour.jpg"
                alt="Koibumi Shiso Sour cocktail in front of Tori-Ji drink menu board"
                className="h-80 sm:h-96 w-full object-cover object-center transition duration-700 hover:scale-105"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 border border-[#d93829]/50 bg-[#d93829]/15 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-[#e8a849]">
              <Mail className="h-3.5 w-3.5 text-[#d93829]" />
              <span>{koibumi.badge[lang]}</span>
            </div>

            <div className="space-y-1">
              <div className="font-serif italic text-xl sm:text-2xl text-[#e8a849]">
                恋文 · Liham
              </div>
              <h3 className="text-4xl sm:text-5xl font-extrabold tracking-wider text-[#f5efe6]">
                KOIBUMI
              </h3>
            </div>

            <div className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-[#84cc16] border-l-2 border-[#84cc16] pl-3">
              {koibumi.ingredients[lang]}
            </div>

            <p className="text-sm sm:text-base text-[#c7bfb2] leading-relaxed">
              {koibumi.description[lang]}
            </p>

            <div className="border border-[#2b231d] bg-[#14110e] p-4">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#f5efe6]">
                &ldquo;SOME THINGS ARE BETTER DISCOVERED THAN EXPLAINED.&rdquo;
              </p>
              <p className="text-xs text-[#e8a849] mt-1">
                有些事，亲自发现比解释更有意思。
              </p>
            </div>
          </div>
        </div>

        {/* Verified Sours, Highballs & Bar Menu Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherDrinks.map((drink) => (
            <div
              key={drink.id}
              className="flex flex-col justify-between border border-[#28221c] bg-[#13100d] p-6 transition hover:border-[#e8a849]/50"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#e8a849]">
                    {drink.badge[lang]}
                  </span>
                  <Sparkles className="h-3.5 w-3.5 text-[#d93829]" />
                </div>

                <h4 className="mt-3 text-xl font-bold text-[#f5efe6]">
                  {drink.name[lang]}
                </h4>

                <div className="mt-1.5 font-mono text-xs text-[#84cc16]">
                  {drink.ingredients[lang]}
                </div>

                <p className="mt-3 text-xs sm:text-sm text-[#a89f91] leading-relaxed">
                  {drink.description[lang]}
                </p>
              </div>

              {drink.image && (
                <div className="mt-5 h-44 w-full overflow-hidden border border-[#241e18]">
                  <img
                    src={drink.image}
                    alt={drink.name[lang]}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
