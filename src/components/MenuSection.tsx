"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { DISHES } from "@/data/toriji-data";

export default function MenuSection() {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<
    "all" | "fusion" | "yakitori" | "bowls"
  >("all");

  const categories = [
    { id: "all", label: t("All Signatures", "全部招牌") },
    { id: "fusion", label: t("Japanese × Filipino", "日菲融合") },
    { id: "yakitori", label: t("Binchotan Skewers", "备长炭烧鸟") },
    { id: "bowls", label: t("Nabe & Noodles", "锅物与面食") },
  ] as const;

  const filteredDishes =
    activeCategory === "all"
      ? DISHES
      : DISHES.filter((d) => d.category === activeCategory);

  const menuDirectory = [
    {
      group: t("Binchotan Yakitori", "备长炭烧鸟"),
      items: [
        t("Chicken Thigh — Momo", "鸡腿肉 · Momo"),
        t("Chicken Oyster — Soriresu", "稀有鸡生蚝 · Soriresu"),
        t("Chicken Neck — Seseri", "鸡颈肉 · Seseri"),
        t("Buttery Chicken Liver — Reba", "招牌奶油鸡肝 · Reba"),
        t("Handmade Tsukune w/ Onsen Egg", "温泉蛋月见手打鸡肉棒"),
        t("Chicken Heart & Soft Cartilage", "鸡心与鸡软骨"),
      ],
    },
    {
      group: t("Skewers & Izakaya Plates", "特色串烧与佐酒小食"),
      items: [
        t("Peanut Butter Cheese Beef", "花生起司牛肉串"),
        t("Salted Scallion Beef — Negishio", "特制盐葱牛肉串"),
        t("Pinoy Street BBQ Skewers", "菲式街头炭烤猪肉串"),
        t("Zucchini Mentaiko", "明太子炙烤栉瓜"),
        t("Stuffed Shiitake & Shishito", "手工鸡肉酿香菇与青椒"),
        t("Crispy Chicken Skin & Siomai", "香脆鸡皮芯片与手工烧卖"),
      ],
    },
    {
      group: t("Signature Mains & Bowls", "日菲融合主菜与暖锅"),
      items: [
        t("Yakitori Skillet — Pinoy Sisig", "铁板烧鸟西西格 · Sisig"),
        t("Palabok Tsukemen", "菲式鲜虾帕拉博克沾面"),
        t("Boneless Chicken Inasal", "无骨菲式炭烤鸡腿排饭"),
        t("Charcoal-Grilled Liempo", "菲式炭烤厚切五花肉"),
        t("Tori Nabe Chicken Hotpot", "冬日暖心日式鸡肉锅"),
        t("Tonkotsu Chashu Ramen", "浓汤豚骨叉烧拉面"),
      ],
    },
  ];

  return (
    <section
      id="menu"
      className="pb-28 sm:pb-36 bg-[#F2E9D9] text-[#171717]"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        {/* Quiet Editorial Header & Underline Category Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-[#C69A50]/35">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#C69A50]">
              {t("Culinary Selection", "招牌料理")}
            </p>
            <h2 className="mt-3 text-section-heading text-[#171717]">
              {t("From the Binchotan Grill", "炭火烧鸟与日菲料理")}
            </h2>
          </div>

          <div
            className="flex flex-wrap items-center gap-6 sm:gap-8"
            role="tablist"
            aria-label="Menu Categories"
          >
            {categories.map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`pb-2 text-btn-label transition-colors border-b-2 ${
                    active
                      ? "border-[#B52B27] text-[#171717]"
                      : "border-transparent text-[#171717]/50 hover:text-[#171717]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Clean Borderless 2-Column Editorial Dish Gallery */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-16">
          {filteredDishes.map((dish) => (
            <article key={dish.id} className="group flex flex-col">
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#171717]">
                <img
                  src={dish.image}
                  alt={dish.name[lang]}
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>

              <div className="mt-6 space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C69A50]">
                  {dish.badge[lang]}
                </p>

                <h3 className="text-subheading text-[#171717]">
                  {dish.name[lang]}
                </h3>

                <p className="text-sm text-[#B52B27]">
                  {dish.subtitle[lang]}
                </p>

                <p className="pt-1 text-body-copy text-[#171717]/75">
                  {dish.description[lang]}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Printed Fine-Dining Menu Ledger (Strict 4-Color Hairline Typography) */}
        <div className="mt-24 pt-16 border-t border-[#C69A50]/40">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#C69A50]">
                {t("Full Kitchen Ledger", "每日炭火名录")}
              </p>
              <h3 className="mt-2 font-editorial text-3xl sm:text-4xl text-[#171717]">
                {t("Prepared Fresh Daily", "每日手工分切现烤")}
              </h3>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#171717]/55">
              {t("Tare & Sea Salt · Binchotan Charcoal", "秘制酱烤与海盐 · 备长炭")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
            {menuDirectory.map((col, idx) => (
              <div key={idx} className="space-y-5">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B52B27]">
                  {col.group}
                </h4>
                <ul className="divide-y divide-[#C69A50]/25 border-t border-[#C69A50]/25">
                  {col.items.map((item, i) => (
                    <li
                      key={i}
                      className="py-3 text-sm text-[#171717]/85"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
