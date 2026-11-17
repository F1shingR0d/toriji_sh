"use client";

import React, { useState } from "react";
import { Flame, Sparkles, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { DISHES, DishItem } from "@/data/toriji-data";

export default function MenuSection() {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<"all" | "fusion" | "yakitori" | "bowls">("all");
  const [selectedDish, setSelectedDish] = useState<DishItem>(DISHES[0]);

  const categories = [
    { id: "all", label: t("All Signatures", "全部招牌") },
    { id: "fusion", label: t("Japanese × Filipino Fusion", "日菲创意融合") },
    { id: "yakitori", label: t("Binchotan Skewers", "备长炭串烧") },
    { id: "bowls", label: t("Hotpot, Ramen & Comfort", "锅物与深夜面食") },
  ] as const;

  const filteredDishes =
    activeCategory === "all"
      ? DISHES
      : DISHES.filter((d) => d.category === activeCategory);

  const fullCutIndex = [
    {
      group: t("Binchotan Chicken Yakitori (Tare / Shio)", "备长炭鸡肉烧鸟（秘制酱烤 / 海盐）"),
      items: [
        t("Chicken Thigh (Momo / 鸡腿肉)", "鸡腿肉 (Momo)"),
        t("Chicken Neck (Seseri / 鸡颈肉)", "鸡颈肉 (Seseri)"),
        t("Chicken Oyster (Soriresu / 稀有鸡生蚝)", "鸡生蚝 (Soriresu 稀有部位)"),
        t("Buttery Chicken Liver (Reba / 招牌绵密鸡肝)", "奶油鸡肝 (Reba 招牌必点)"),
        t("Chicken Heart (Hatsu / 鸡心)", "鸡心 (Hatsu)"),
        t("Soft Cartilage (Nankotsu / 鸡软骨)", "鸡软骨 (Nankotsu)"),
        t("Handmade Tsukune w/ Onsen Egg (月见手打鸡肉棒)", "温泉蛋月见手打鸡肉棒 (Tsukune)"),
        t("Crispy Chicken Skin Chips & Cabbage Salad", "香脆鸡皮芯片 & 居酒屋高丽菜沙拉"),
      ],
    },
    {
      group: t("Signature Beef, Pork & Vegetable Skewers", "招牌牛豚与野菜串烧"),
      items: [
        t("Peanut Butter Cheese Beef Skewers (花生起司牛肉串)", "花生起司牛肉串 (Peanut Cheese Beef)"),
        t("Special Salted Scallion Beef Skewers (特制盐葱牛肉串)", "特制盐葱牛肉串 (Negishio Beef)"),
        t("Pinoy BBQ Skewers & Yakinasal (菲式炭烤肉串)", "菲式街头烤肉串 (Pinoy BBQ & Yakinasal)"),
        t("Zucchini Mentaiko Skewers (明太子栉瓜串)", "明太子栉瓜串 (Zucchini Mentaiko)"),
        t("Chicken-Stuffed Shiitake & Shishito (手工鸡肉酿香菇/青椒)", "手工鸡肉酿香菇 & 酿青椒"),
        t("Cherry Tomato Wrapped in Bacon (培根卷小番茄)", "培根卷圣女果 & 鱼子酱扇贝串"),
      ],
    },
    {
      group: t("Japanese × Filipino Plates, Bowls & Brunch", "日菲融合主菜、锅物与假日早午餐"),
      items: [
        t("Yakitori Skillet — Pinoy Sisig Style (铁板烧鸟西西格)", "铁板烧鸟西西格 (Yakitori Skillet Sisig)"),
        t("Palabok Tsukemen (菲式鲜虾帕拉博克沾面)", "菲式鲜虾帕拉博克沾面 (Palabok Tsukemen)"),
        t("Boneless Chicken Inasal w/ Rice (无骨菲式炭烤鸡腿排饭)", "无骨菲式炭烤鸡腿排配香米饭 (Chicken Inasal)"),
        t("Charcoal-Grilled Liempo (菲式炭烤厚切五花肉)", "菲式炭烤厚切猪五花 (Grilled Liempo)"),
        t("Japanese Siomai — Pork, Shrimp & Mushroom (手工日式烧卖)", "菲式灵感手工猪肉鲜虾日式烧卖"),
        t("Tori Nabe Chicken Hotpot & Chashu Ramen (日式鸡肉锅 & 叉烧拉面)", "冬日暖心日式鸡肉锅 (Tori Nabe) & 豚骨叉烧拉面"),
        t("Holiday Brunch: Dorayaki Pulled Pork Burger & Salmon Pasta", "假日早午餐限定：铜锣烧手撕猪肉堡 & 奶油三文鱼意面"),
      ],
    },
  ];

  return (
    <section
      id="menu"
      className="relative py-24 sm:py-32 bg-[#0b0a09] border-b border-[#241e19]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#241e19] pb-10">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[#e8a849]">
              <Flame className="h-3.5 w-3.5 text-[#d93829]" />
              <span>{t("02 · CULINARY CENTERPIECE", "02 · 招牌料理与菜单")}</span>
            </div>
            <h2 className="mt-3 text-4xl sm:text-6xl font-extrabold tracking-tight text-[#f5efe6]">
              {t("Signature Food", "炭火烧鸟与日菲融合料理")}
            </h2>
          </div>

          <p className="max-w-xl text-sm sm:text-base text-[#a89f91] leading-relaxed">
            {t(
              "Every dish at Tori-Ji is rooted in two culinary traditions that love smoke, char, umami, and citrus: Japanese binchotan yakitori and soulful Filipino street food.",
              "Tori-Ji 的每一道料理都植根于同样痴迷炭火焦香、鲜味（Umami）与柑橘果酸的两种饮食文化：日本备长炭烧鸟与菲律宾街头灵魂美食。"
            )}
          </p>
        </div>

        {/* Interactive Featured Spotlight Viewer */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border border-[#2c251e] bg-[#13100d]">
          <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[460px] overflow-hidden bg-[#0b0a09]">
            <img
              src={selectedDish.image}
              alt={selectedDish.name[lang]}
              className="h-full w-full object-cover object-center transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a09]/90 via-transparent to-transparent" />
            <div className="absolute top-4 left-4 bg-[#d93829] px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] font-semibold text-white">
              {selectedDish.badge[lang]}
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#e8a849]">
                {t("AUTHENTIC TORI-JI PHOTOGRAPHY", "TORI-JI 实拍出品")}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#e8a849]">
                <Sparkles className="h-4 w-4 text-[#d93829]" />
                <span>{t("CHEF'S SPOTLIGHT", "主厨焦点推荐")}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold text-[#f5efe6] leading-tight">
                {selectedDish.name[lang]}
              </h3>

              <p className="font-mono text-xs sm:text-sm text-[#e8a849] border-l-2 border-[#d93829] pl-3 py-0.5">
                {selectedDish.subtitle[lang]}
              </p>

              <p className="text-sm sm:text-base text-[#c7bfb2] leading-relaxed pt-2">
                {selectedDish.description[lang]}
              </p>
            </div>

            {/* Quick Dish Selector Pills inside Spotlight */}
            <div className="mt-8 pt-6 border-t border-[#26201a]">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#a89f91] mb-3">
                {t("CLICK ANY DISH BELOW TO INSPECT:", "点击下方菜品切换大图预览：")}
              </div>
              <div className="flex flex-wrap gap-2">
                {DISHES.slice(0, 5).map((dish) => (
                  <button
                    key={dish.id}
                    onClick={() => setSelectedDish(dish)}
                    className={`px-3 py-1.5 text-xs font-mono transition border ${
                      selectedDish.id === dish.id
                        ? "border-[#e8a849] bg-[#e8a849] text-[#0b0a09] font-bold"
                        : "border-[#2e2720] bg-[#1a1612] text-[#c7bfb2] hover:border-[#e8a849]/50"
                    }`}
                  >
                    {dish.name[lang].split("(")[0].trim()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Menu Categories">
            {categories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 text-xs font-mono uppercase tracking-[0.16em] transition border ${
                  activeCategory === cat.id
                    ? "border-[#d93829] bg-[#d93829] text-white font-semibold"
                    : "border-[#2a231c] bg-[#14110e] text-[#a89f91] hover:border-[#e8a849]/50 hover:text-[#f5efe6]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <span className="font-mono text-xs text-[#a89f91]">
            {t(
              `Showing ${filteredDishes.length} verified Tori-Ji signatures`,
              `正在展示 ${filteredDishes.length} 道经过核实的 Tori-Ji 招牌菜品`
            )}
          </span>
        </div>

        {/* Editorial Dish Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDishes.map((dish) => {
            const isSelected = selectedDish.id === dish.id;
            return (
              <article
                key={dish.id}
                onClick={() => setSelectedDish(dish)}
                className={`group cursor-pointer flex flex-col justify-between border transition duration-300 ${
                  isSelected
                    ? "border-[#e8a849] bg-[#181410]"
                    : "border-[#26201a] bg-[#12100d] hover:border-[#e8a849]/60"
                }`}
              >
                <div>
                  <div className="relative h-64 w-full overflow-hidden bg-[#0b0a09]">
                    <img
                      src={dish.image}
                      alt={dish.name[lang]}
                      className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12100d] via-transparent to-transparent opacity-80" />
                    <span className="absolute top-3 left-3 border border-[#e8a849]/40 bg-[#0b0a09]/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#e8a849]">
                      {dish.badge[lang]}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-[#f5efe6] group-hover:text-[#e8a849] transition">
                      {dish.name[lang]}
                    </h3>
                    <p className="mt-1.5 font-mono text-[11px] text-[#e8a849]/90 leading-relaxed">
                      {dish.subtitle[lang]}
                    </p>
                    <p className="mt-3 text-xs text-[#a89f91] leading-relaxed line-clamp-4">
                      {dish.description[lang]}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-4 pt-2 border-t border-[#1f1a15] flex items-center justify-between text-[11px] font-mono text-[#e8a849]">
                  <span>{t("VIEW IN SPOTLIGHT", "点击查看大图详情")}</span>
                  <span>→</span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Complete Verified Menu Cut & Dish Directory */}
        <div className="mt-16 border border-[#2c251e] bg-[#12100d] p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#251f19] pb-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#d93829]">
                {t("VERIFIED KITCHEN INDEX", "已核实菜品与烧鸟部位名录")}
              </span>
              <h3 className="mt-1 text-2xl sm:text-3xl font-bold text-[#f5efe6]">
                {t("From the Binchotan Grill & Kitchen", "从备长炭烤台到铁板厨房")}
              </h3>
            </div>
            <span className="font-mono text-xs text-[#a89f91]">
              {t("Prepared fresh daily · No pre-made skewers", "每日新鲜现穿现烤 · 拒绝预制半成品")}
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {fullCutIndex.map((col, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-[#e8a849] border-l-2 border-[#d93829] pl-3">
                  {col.group}
                </h4>
                <ul className="space-y-2.5">
                  {col.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#c7bfb2]">
                      <CheckCircle2 className="h-4 w-4 text-[#e8a849] shrink-0 mt-0.5" />
                      <span>{item}</span>
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
