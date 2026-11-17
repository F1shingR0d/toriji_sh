"use client";

import React from "react";
import { Flame, HeartHandshake, Sparkles, Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ExperienceSection() {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Flame,
      tag: "01 · JAPANESE CRAFTSMANSHIP",
      title: t("Binchotan Precision, Cut by Hand", "手工穿串 · 备长炭火的诚实美学"),
      body: t(
        "Behind our glass-enclosed grill counter, every skewer—from prized chicken oyster and neck to velvety chicken liver and handmade tsukune—is butchered by hand, seasoned with patience in tare or shio, and seared over glowing charcoal.",
        "在透明玻璃环绕的炭火烤台后，从稀有鸡生蚝、鸡颈肉到绵密如鹅肝的鸡肝与手打月见鸡肉棒，每一串都由手工分切穿制，以耐心调味，在高温备长炭上炙烤出纯粹焦香。"
      ),
    },
    {
      icon: Sparkles,
      tag: "02 · FILIPINO SOUL",
      title: t("Heirloom Manila Flavors, Reimagined", "马尼拉街头灵魂的惊艳碰撞"),
      body: t(
        "We bridge Tokyo izakaya culture with the vibrant Filipino dishes we grew up loving: calamansi-kissed Boneless Chicken Inasal, sizzling cast-iron Yakitori Sisig Skillets, Peanut Butter Cheese Beef Skewers, and Palabok Tsukemen.",
        "我们将东京居酒屋文化与从小热爱的菲律宾家乡美味相融：四季橘腌制的无骨炭烤鸡腿排（Inasal）、铁板滋滋作响的烧鸟西西格（Sisig）、花生起司牛肉串，以及菲式鲜虾浓汤沾面。"
      ),
    },
    {
      icon: HeartHandshake,
      tag: "03 · SHANGHAI COMMUNITY",
      title: t("Shanghai's Most Social Izakaya", "上海最具人情味的深夜客厅"),
      body: t(
        "More than a dining room, Tori-Ji is a late-night gathering place on Xinhui Road—where 15-seat banana-leaf supper clubs, 5-course yakitori omakase nights, acoustic Saturdays, and KTV bring locals and expats to one shared table.",
        "Tori-Ji 不仅是一间餐厅，更是新会路上的深夜社群据点——15席芭蕉叶私享家宴、五道式烧鸟 Omakase、周六不插电现场音乐与深夜 KTV，让中外食客在同一张餐桌前成为朋友。"
      ),
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-20 sm:py-28 bg-[#0e0c0a] border-b border-[#221d18] bg-grain"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Narrative & Founders Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[#e8a849]">
              <span className="h-px w-8 bg-[#d93829]" />
              <span>{t("01 · THE TORI-JI STORY", "01 · 品牌与创始人故事")}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f5efe6] leading-[1.12]">
              {t("Built by Hand, by Fire—", "以手作与炭火筑梦——")}
              <span className="block font-serif italic font-normal text-[#e8a849] mt-1">
                {t("So We Don't Live with 'What Ifs.'", "只为人生不留“如果当初”的遗憾。")}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#c7bfb2] leading-relaxed">
              {t(
                "Tori-Ji was founded in Shanghai by husband-and-wife duo Czarina Labagriel and Venedict 'Vené' Labagriel. Originally from the Philippines, Czarina worked in Shanghai as a corporate Electronics Engineer for Chinese and French companies before she and Vené took a leap of faith to build an authentic Japanese-Filipino izakaya from scratch.",
                "Tori-Ji 由定居上海的菲律宾夫妻 Czarina Labagriel 与 Venedict “Vené” Labagriel 共同创立。Czarina 曾任中法跨国企业电子工程师，为了心中对美食与社群的热爱，她毅然告别职场，与身为烧鸟主理人的丈夫 Vené 一起，在普陀新会路从零打造了这家独一无二的日菲融合居酒屋。"
              )}
            </p>

            <p className="text-sm sm:text-base text-[#a89f91] leading-relaxed">
              {t(
                "At the grill counter, Vené leads the binchotan fire—earning Tori-Ji the title of Japanese Restaurant of the Year at the 23rd That's Shanghai Food & Drink Awards 2025. In the dining room, Czarina—profiled in That's Shanghai's '8 Badass Women of Shanghai F&B 2026'—orchestrates a warm, high-energy gathering place where every guest is treated like family.",
                "在炭火烤台前，主理人 Vené 亲自把控每一串烧鸟的火候，带领开店不到一年的 Tori-Ji 斩获第23届《That's Shanghai》“年度最佳日本料理餐厅”大奖；在餐厅前厅，入选《That's Shanghai》“2026上海餐饮界八位杰出女性”的 Czarina 则用如家般的热情，将这里打造成上海最具活力的美食社交空间。"
              )}
            </p>

            {/* Verbatim Founders Quote Box */}
            <blockquote className="relative border-l-2 border-[#d93829] bg-[#161310] p-5 sm:p-6">
              <Quote className="h-6 w-6 text-[#d93829]/50 mb-2" />
              <p className="font-serif italic text-lg sm:text-xl text-[#f5efe6] leading-relaxed">
                {t(
                  '"Two ordinary OFWs in Shanghai trying to build something of our own—so we don\'t live with \'what ifs.\' When people ask where you are, and you say \'I\'m at home\' while at Tori-Ji—that\'s everything we dreamed of."',
                  '“两个在上海打拼的普通人，努力打造属于我们自己的小店——只为人生不留‘如果当初’的遗憾。当客人在 Tori-Ji 回复朋友‘我在家呢’，这就是我们梦想成真的时刻。”'
                )}
              </p>
              <footer className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-[#e8a849]">
                — CZARINA & VENÉ LABAGRIEL, {t("CO-FOUNDERS OF TORI-JI", "TORI-JI 联合创始人")}
              </footer>
            </blockquote>
          </div>

          {/* Right Editorial Photo Collage */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4 items-center">
            <div className="col-span-7 space-y-4">
              <div className="overflow-hidden border border-[#2c251e] bg-[#15120f]">
                <img
                  src="/images/ig-founders-bund.jpg"
                  alt="Founders Czarina and Vené on the Shanghai Bund — Filipino Entrepreneurs in Shanghai"
                  className="h-72 sm:h-80 w-full object-cover object-center transition duration-500 hover:scale-105"
                />
                <div className="p-3 border-t border-[#251f19]">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e8a849]">
                    {t("PINNED MILESTONE", "创业里程碑")}
                  </span>
                  <p className="text-xs text-[#c7bfb2] mt-0.5">
                    {t("Filipino Entrepreneurs in Shanghai — Built from scratch", "在上海创业的菲律宾夫妻 · 从零打造的深夜居酒屋")}
                  </p>
                </div>
              </div>

              <div className="overflow-hidden border border-[#2c251e] bg-[#15120f]">
                <img
                  src="/images/interior-neon-counter.jpg"
                  alt="Glowing TORI-JI neon sign above the glass-enclosed yakitori bar counter"
                  className="h-52 w-full object-cover object-center transition duration-500 hover:scale-105"
                />
              </div>
            </div>

            <div className="col-span-5 space-y-4">
              <div className="overflow-hidden border border-[#e8a849]/40 bg-[#15120f]">
                <img
                  src="/images/founders-award-2025.jpg"
                  alt="Czarina and Vené Labagriel holding the That's Shanghai Japanese Restaurant of the Year 2025 trophy"
                  className="h-64 w-full object-cover object-center transition duration-500 hover:scale-105"
                />
                <div className="p-3 border-t border-[#251f19]">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#d93829] font-semibold">
                    THAT&apos;S SHANGHAI 2025
                  </span>
                  <p className="text-xs font-medium text-[#f5efe6] mt-0.5">
                    {t("Japanese Restaurant of the Year", "年度最佳日本料理餐厅")}
                  </p>
                </div>
              </div>

              <div className="border border-[#2c251e] bg-[#15120f] p-4 space-y-2">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#84cc16]">
                  {t("WALL MANIFESTO", "店内宣言墙")}
                </div>
                <p className="font-serif italic text-sm text-[#f5efe6] leading-snug">
                  &ldquo;We make it here. By hand. By fire. Not rushed. We trust the knife, the taste. Fire is honest. Smoke never lies.&rdquo;
                </p>
                <div className="text-[11px] font-mono text-[#a89f91]">
                  — 549 XINHUI RD INTERIOR WALL
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars Row */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="group border border-[#28221c] bg-[#13100d] p-6 sm:p-7 transition duration-300 hover:border-[#e8a849]/60"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#e8a849]">
                    {pillar.tag}
                  </span>
                  <Icon className="h-5 w-5 text-[#d93829] transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#f5efe6]">{pillar.title}</h3>
                <p className="mt-2.5 text-sm text-[#a89f91] leading-relaxed">{pillar.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
