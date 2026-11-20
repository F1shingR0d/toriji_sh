"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { DRINKS } from "@/data/toriji-data";

export default function DrinksSection() {
  const { lang, t } = useLanguage();

  const koibumi = DRINKS[0];
  const otherDrinks = DRINKS.slice(1);

  return (
    <section
      id="drinks"
      className="py-28 sm:py-36 bg-[#171717] text-[#F2E9D9]"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#C69A50]/25">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#C69A50]">
              {t("Beverage Program", "特调与酒水单")}
            </p>
            <h2 className="mt-3 text-section-heading text-[#F2E9D9]">
              {t("Sours, Highballs & Koibumi", "紫苏情书、四季橘与沙瓦")}
            </h2>
          </div>

          <p className="max-w-md text-body-copy text-[#F2E9D9]/70">
            {t(
              "Crafted to cut cleanly through binchotan smoke—shochu sours, calamansi highballs, curated sake, and our three-language signature cocktail.",
              "专为平衡炭火烧鸟而调配——从鲜紫苏沙瓦、菲律宾四季橘金汤力、精选清酒，到镇店特调“恋文”。"
            )}
          </p>
        </div>

        {/* Signature Spotlight: Koibumi · 恋文 · Liham */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center border-b border-[#C69A50]/25">
          <div className="lg:col-span-6 grid grid-cols-2 gap-5">
            <div className="aspect-[3/4] overflow-hidden bg-[#171717]">
              <img
                src="/images/koibumi-cocktail-poster.jpg"
                alt="Koibumi · 恋文 · Liham signature cocktail"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden bg-[#171717] mt-8">
              <img
                src="/images/koibumi-shiso-sour.jpg"
                alt="Shiso Sour at Tori-Ji bar"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#B52B27]">
              {koibumi.badge[lang]}
            </p>

            <div>
              <p className="font-editorial italic text-xl text-[#C69A50]">
                恋文 · Liham
              </p>
              <h3 className="font-editorial text-4xl sm:text-5xl text-[#F2E9D9] mt-1 tracking-wide">
                KOIBUMI
              </h3>
            </div>

            <div className="h-px w-14 bg-[#C69A50]/60" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C69A50]">
              {koibumi.ingredients[lang]}
            </p>

            <p className="text-body-copy text-[#F2E9D9]/80">
              {koibumi.description[lang]}
            </p>

            <p className="font-editorial italic text-xl text-[#C69A50] pt-1">
              {t(
                "“Some things are better discovered than explained.”",
                "“有些事，亲自发现比解释更有意思。”"
              )}
            </p>
          </div>
        </div>

        {/* Quiet Minimalist Bar Menu Ledger */}
        <div className="pt-14 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {otherDrinks.map((drink) => (
            <div
              key={drink.id}
              className="border-b border-[#F2E9D9]/12 pb-8 space-y-2"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h4 className="text-subheading text-[#F2E9D9]">
                  {drink.name[lang]}
                </h4>
                <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C69A50]">
                  {drink.badge[lang]}
                </span>
              </div>
              <p className="text-xs uppercase tracking-[0.14em] text-[#B52B27]">
                {drink.ingredients[lang]}
              </p>
              <p className="text-sm text-[#F2E9D9]/70 leading-relaxed pt-1">
                {drink.description[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
