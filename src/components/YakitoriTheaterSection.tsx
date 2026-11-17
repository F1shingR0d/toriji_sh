"use client";

import React from "react";
import { Flame, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function YakitoriTheaterSection() {
  const { t } = useLanguage();

  const stages = [
    {
      step: "STAGE 01",
      title: t("Daily Hand-Butchery & Skewering", "每日手工分切与穿串"),
      desc: t(
        "Every afternoon before service opens at 5:00 PM, whole chickens, mushrooms, and vegetables are broken down by hand at our prep counter—stuffing shiitake caps and shishito peppers and threading each cut onto bamboo skewers for even heat.",
        "每天下午 17:00 营业前，后厨团队在吧台亲手分切整鸡与新鲜时蔬——手工将鲜嫩鸡肉糜填入香菇伞与青椒，顺应肌理穿入竹签，确保受热均匀。"
      ),
      image: "/images/chef-skewers-prep.jpg",
      caption: t("Hand-stuffing shiitake & shishito skewers before 5PM service", "营业前于吧台手工制作酿香菇与青椒串"),
    },
    {
      step: "STAGE 02",
      title: t("White-Hot Binchotan & Open Flame", "高温备长炭与明火炙烤"),
      desc: t(
        "Behind our glass-enclosed yakitori station, skewers are kissed by fierce charcoal heat—rendering chicken skin crisp and golden while locking in juices inside prized cuts like chicken oyster, neck, heart, and buttery liver.",
        "在透明玻璃环绕的烧鸟台内，高温备长炭瞬间锁住肉汁——让鸡皮烤至金黄酥脆，同时保留稀有鸡生蚝、鸡颈肉、鸡心与招牌奶油鸡肝的柔嫩多汁。"
      ),
      image: "/images/yakitori-open-fire.jpg",
      caption: t("Skewers searing over open charcoal flames at Tori-Ji", "在高温炭火上滋滋作响的招牌串烧"),
    },
    {
      step: "STAGE 03",
      title: t("Master Griller Vené's Tare & Shio", "主理人 Vené 的盐烤与秘制酱烤"),
      desc: t(
        "'At Tori-Ji, it's Vené.' With a flick of the wrist, Co-Founder & Master Griller Vené seasons each skewer with sea salt (shio), house tare glaze, or bold Filipino-inspired peanut cheese and calamansi finishes.",
        "“在 Tori-Ji，灵魂掌炉人是 Vené。” 联合创始人兼烧鸟大师 Vené 凭借精准火候与手腕韵律，为每一串烧鸟赋予海盐（盐烤）、秘制烧鸟汁（酱烤）或菲式花生芝士与四季橘的点睛风味。"
      ),
      image: "/images/vene-master-griller.jpg",
      caption: t("Co-Founder & Master Griller Venedict 'Vené' Labagriel in action", "联合创始人兼烧鸟大师 Vené 现场撒料炙烤"),
    },
  ];

  return (
    <section
      id="yakitori"
      className="relative py-24 sm:py-32 bg-[#100d0b] border-b border-[#26201a] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[#d93829]">
              <Flame className="h-4 w-4 text-[#e8a849]" />
              <span>{t("03 · OPEN-FIRE YAKITORI THEATER", "03 · 备长炭火剧场")}</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#f5efe6] leading-[1.1]">
              {t("Fire Is Honest.", "炭火从不撒谎，")}
              <span className="block font-serif italic font-normal text-[#e8a849] mt-1">
                {t("Smoke Never Lies.", "烟火见证真章。")}
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#a89f91] leading-relaxed">
              {t(
                "Watch the craft unfold through our glass-enclosed yakitori bar. No shortcuts, no rushing—just the knife, the charcoal, and the unmistakable aroma of binchotan smoke drifting through Xinhui Road.",
                "透过环绕式透明玻璃吧台，近距离观赏每一串烧鸟的诞生。不走捷径、从不仓促——只有刀工、炭火，以及弥漫在新会路夜色中的迷人炭香。"
              )}
            </p>
          </div>
        </div>

        {/* 3-Stage Visual Craft Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-7">
          {stages.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between border border-[#2c251e] bg-[#15120f] overflow-hidden"
            >
              <div>
                <div className="relative h-80 w-full overflow-hidden bg-[#0b0a09]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#15120f] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-[#0b0a09]/90 border border-[#e8a849]/40 px-3 py-1 font-mono text-xs tracking-[0.2em] text-[#e8a849]">
                    {item.step}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#f5efe6]">{item.title}</h3>
                  <p className="mt-3 text-sm text-[#a89f91] leading-relaxed">{item.desc}</p>
                </div>
              </div>

              <div className="px-6 py-3.5 border-t border-[#221c17] font-mono text-[11px] text-[#e8a849]/85">
                {item.caption}
              </div>
            </div>
          ))}
        </div>

        {/* Interior Manifesto Wall Banner + Be An Artist Frame */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-[#302820] bg-[#0b0a09] p-6 sm:p-10">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[#e8a849]">
              <ShieldCheck className="h-4 w-4 text-[#84cc16]" />
              <span>{t("THE TORI-JI MANIFESTO WALL", "TORI-JI 店内炭火宣言墙原文")}</span>
            </div>

            <div className="font-mono text-sm sm:text-base uppercase tracking-[0.12em] text-[#f5efe6] leading-relaxed space-y-2">
              <p className="text-[#e8a849] font-bold">
                &ldquo;WE MAKE IT HERE. BY HAND. BY FIRE. NOT RUSHED.
              </p>
              <p>
                WE TRUST THE KNIFE, THE TASTE. WE SEASON WITH PATIENCE. WE COOK WITH PRIDE. EAT SLOW.
              </p>
              <p className="text-[#d93829] font-bold">
                YAKITORI IS HONEST. FIRE IS HONEST. SMOKE NEVER LIES.
              </p>
              <p className="text-[#a89f91] text-xs sm:text-sm">
                FOR THE HUNGRY, FOR THE CURIOUS, FOR THE ONES WHO CAN TASTE THE DIFFERENCE. NIGHTS HERE FEEL LIKE WARM BOWLS. LIFE IS SHORT.&rdquo;
              </p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="overflow-hidden border border-[#2c251e] bg-[#141210]">
              <img
                src="/images/ig-vene-artist.jpg"
                alt="Be an artist — Master Griller Vené at the Tori-Ji yakitori grill counter with Daruma and menu strips"
                className="h-64 w-full object-cover object-center"
              />
              <div className="p-3 text-center font-mono text-xs text-[#e8a849]">
                {t('"Be an artist..." — Open Binchotan Counter', '“像艺术家一样炙烤……” —— 透明炭火吧台实景')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
