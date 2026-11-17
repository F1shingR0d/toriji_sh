"use client";

import React from "react";
import { Instagram, MapPin, Clock, Phone, ArrowUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { RESTAURANT_INFO } from "@/data/toriji-data";

export default function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-[#080706] border-t border-[#241e19] text-[#a89f91]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1f1a15]">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <img
                src="/images/logo-wordmark-transparent.png"
                alt="TORI-JI Official Logo"
                className="h-11 w-auto object-contain"
              />
              <img
                src="/images/logo-mascot-badge.jpg"
                alt="Tori-Ji Mascot Emblem"
                className="h-11 w-11 rounded-full object-cover border border-[#d93829]"
              />
            </div>

            <p className="text-sm text-[#c7bfb2] max-w-sm leading-relaxed">
              {t(
                "Award-winning Japanese × Filipino Izakaya in Shanghai. Handcrafted binchotan yakitori, soulful Manila street flavors, and Shanghai's warmest late-night community.",
                "斩获《That's Shanghai》年度最佳日料大奖的上海日菲融合烧鸟居酒屋。手工备长炭烧鸟、马尼拉街头灵魂料理，与新会路最温暖的深夜社群。"
              )}
            </p>

            <div className="font-mono text-xs text-[#e8a849]">
              {RESTAURANT_INFO.chineseName}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#e8a849]">
              {t("EXPLORE", "网站导航")}
            </h4>
            <ul className="space-y-2 text-xs font-mono uppercase tracking-wider">
              <li>
                <a href="#experience" className="hover:text-[#f5efe6] transition">
                  {t("01 · The Story & Founders", "01 · 品牌与创始人故事")}
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#f5efe6] transition">
                  {t("02 · Signature Food", "02 · 招牌料理菜单")}
                </a>
              </li>
              <li>
                <a href="#yakitori" className="hover:text-[#f5efe6] transition">
                  {t("03 · Binchotan Grill Theater", "03 · 备长炭火剧场")}
                </a>
              </li>
              <li>
                <a href="#omakase" className="hover:text-[#f5efe6] transition">
                  {t("04 · Omakase & Supper Clubs", "04 · 私享家宴与 Omakase")}
                </a>
              </li>
              <li>
                <a href="#drinks" className="hover:text-[#f5efe6] transition">
                  {t("05 · Koibumi & Drinks", "05 · 恋文特调与酒单")}
                </a>
              </li>
              <li>
                <a href="#awards" className="hover:text-[#f5efe6] transition">
                  {t("06 · Awards & Press", "06 · 荣誉奖项")}
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-[#f5efe6] transition">
                  {t("07 · Community Wall", "07 · 社群夜生活")}
                </a>
              </li>
            </ul>
          </div>

          {/* Visit & Contact Column */}
          <div className="lg:col-span-4 space-y-3 text-xs">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#e8a849]">
              {t("VISIT & RESERVE", "门店地址与预订")}
            </h4>

            <div className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 text-[#d93829] shrink-0 mt-0.5" />
              <div>
                <div className="text-[#f5efe6] font-medium">{RESTAURANT_INFO.address.en}</div>
                <div className="text-[#e8a849] mt-0.5">{RESTAURANT_INFO.address.zh}</div>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Clock className="h-4 w-4 text-[#e8a849] shrink-0 mt-0.5" />
              <span className="text-[#c7bfb2]">{RESTAURANT_INFO.hours[lang]}</span>
            </div>

            <div className="flex items-start gap-2.5">
              <Phone className="h-4 w-4 text-[#84cc16] shrink-0 mt-0.5" />
              <div className="font-mono text-[#f5efe6]">
                WeChat / Tel: 131 2207 7283 · 199 0178 0521
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-[#2d261f] bg-[#14110e] px-3.5 py-2 font-mono text-xs text-[#f5efe6] hover:border-[#e8a849]"
              >
                <Instagram className="h-3.5 w-3.5 text-[#d93829]" />
                <span>@toriji_sh</span>
              </a>

              <a
                href={RESTAURANT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-[#2d261f] bg-[#14110e] px-3.5 py-2 font-mono text-xs text-[#f5efe6] hover:border-[#e8a849]"
              >
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#7c7367]">
          <div>
            © {new Date().getFullYear()} TORI-JI SHANGHAI (上海托利齐餐饮管理服务有限公司). ALL RIGHTS RESERVED.
          </div>

          <a
            href="#top"
            className="inline-flex items-center gap-1.5 text-[#e8a849] hover:underline"
          >
            <span>{t("BACK TO TOP", "返回顶部")}</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
