"use client";

import React, { useState } from "react";
import {
  MapPin,
  Train,
  Clock,
  Phone,
  Copy,
  Check,
  Car,
  MessageSquare,
  Navigation,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { RESTAURANT_INFO } from "@/data/toriji-data";

export default function LocationSection() {
  const { lang, t } = useLanguage();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2200);
  };

  return (
    <section
      id="location"
      className="relative py-24 sm:py-32 bg-[#0e0c0a] border-b border-[#251f19] bg-grain"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#251f19] pb-10">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[#e8a849]">
              <MapPin className="h-4 w-4 text-[#d93829]" />
              <span>{t("09 · LOCATION, HOURS & RESERVATIONS", "09 · 门店地址、营业时间与预订")}</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#f5efe6]">
              {t("Find Us on Xinhui Road", "相聚普陀新会路 549 号")}
            </h2>
          </div>

          <div className="font-mono text-xs text-[#e8a849]">
            {RESTAURANT_INFO.coordinates.display}
          </div>
        </div>

        {/* Main Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address, DiDi / Taxi Card, Metro, Hours & WeChat Booking */}
          <div className="lg:col-span-6 space-y-6">
            {/* Bilingual Taxi / DiDi Card */}
            <div className="border-2 border-[#e8a849]/50 bg-[#15120f] p-6">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#e8a849]">
                  <Car className="h-4 w-4 text-[#d93829]" />
                  <span>{t("TAXI / DIDI DRIVER CARD", "打车 / 滴滴导航地址卡")}</span>
                </div>
                <button
                  onClick={() =>
                    copyToClipboard("上海市普陀区新会路549号1-3室", "didi-addr")
                  }
                  className="inline-flex items-center gap-1.5 border border-[#3a3128] bg-[#1e1a15] px-3 py-1.5 font-mono text-xs text-[#f5efe6] transition hover:border-[#e8a849]"
                >
                  {copiedKey === "didi-addr" ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#84cc16]" />
                      <span className="text-[#84cc16]">{t("Copied!", "已复制")}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-[#e8a849]" />
                      <span>{t("Copy Chinese Address", "复制中文地址")}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-4 text-2xl sm:text-3xl font-bold tracking-wide text-[#f5efe6]">
                上海市普陀区新会路549号1-3室
              </div>
              <div className="mt-1 text-sm sm:text-base text-[#e8a849]">
                Room 1–3, No. 549 Xinhui Road, Putuo District, Shanghai
              </div>
              <div className="mt-2 font-mono text-xs text-[#a89f91]">
                {t(
                  "Chinese Name on Maps/Dianping: Tori-Ji·托利齐·烧鸟大师小酒馆·居酒屋（长寿路店）",
                  "高德 / 大众点评搜索：Tori-Ji·托利齐·烧鸟大师小酒馆·居酒屋（长寿路店）"
                )}
              </div>
            </div>

            {/* Metro & Opening Hours */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-[#2b241d] bg-[#13100d] p-5 space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#e8a849]">
                  <Train className="h-4 w-4 text-[#84cc16]" />
                  <span>{t("METRO DIRECTIONS", "地铁出行指南")}</span>
                </div>
                <p className="text-sm text-[#f5efe6] font-medium leading-relaxed">
                  {RESTAURANT_INFO.metro[lang]}
                </p>
              </div>

              <div className="border border-[#2b241d] bg-[#13100d] p-5 space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#e8a849]">
                  <Clock className="h-4 w-4 text-[#d93829]" />
                  <span>{t("OPENING HOURS", "营业时间")}</span>
                </div>
                <p className="text-sm text-[#f5efe6] font-medium leading-relaxed">
                  {RESTAURANT_INFO.hours[lang]}
                </p>
                <p className="font-mono text-[11px] text-[#a89f91]">
                  {t("Kitchen & Yakitori Grill till Late Night", "炭火烧鸟与酒水供应至深夜")}
                </p>
              </div>
            </div>

            {/* Verified WeChat & Phone Booking Cards */}
            <div className="border border-[#2b241d] bg-[#13100d] p-6 space-y-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#d93829]">
                  {t("DIRECT WECHAT & PHONE BOOKING", "官方微信与电话预订")}
                </span>
                <h3 className="mt-1 text-xl font-bold text-[#f5efe6]">
                  {t("Reserve Counter Seats, Group Tables or Events", "预订烧鸟吧台、聚会餐桌或主题家宴")}
                </h3>
              </div>

              <div className="space-y-3">
                {RESTAURANT_INFO.contacts.map((contact, idx) => {
                  const cleanId = contact.value.replace(/\s+/g, "");
                  const isCopied = copiedKey === `loc-wx-${idx}`;
                  return (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-[#251f19] bg-[#181410] p-4"
                    >
                      <div>
                        <div className="flex items-center gap-1.5 font-mono text-xs text-[#a89f91]">
                          <MessageSquare className="h-3.5 w-3.5 text-[#84cc16]" />
                          <span>{contact.label[lang]}</span>
                        </div>
                        <div className="mt-1 font-mono text-lg font-bold tracking-wider text-[#f5efe6]">
                          {contact.value}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => copyToClipboard(cleanId, `loc-wx-${idx}`)}
                          className="inline-flex items-center gap-1.5 border border-[#3a3128] bg-[#221d18] px-3.5 py-2 font-mono text-xs uppercase tracking-wider text-[#f5efe6] transition hover:border-[#e8a849]"
                        >
                          {isCopied ? (
                            <>
                              <Check className="h-3.5 w-3.5 text-[#84cc16]" />
                              <span className="text-[#84cc16]">{t("Copied", "已复制")}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3.5 w-3.5 text-[#e8a849]" />
                              <span>{t("Copy WeChat", "复制微信号")}</span>
                            </>
                          )}
                        </button>

                        <a
                          href={`tel:${contact.raw}`}
                          className="inline-flex items-center gap-1.5 bg-[#d93829] px-3.5 py-2 font-mono text-xs uppercase tracking-wider text-white transition hover:bg-[#b82b1e]"
                        >
                          <Phone className="h-3.5 w-3.5" />
                          <span>{t("Call", "拨打")}</span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Architectural Neighborhood Map + Storefront Guide */}
          <div className="lg:col-span-6 flex flex-col justify-between border border-[#2c251e] bg-[#13100d] overflow-hidden">
            {/* Architectural Stylized SVG Map of 549 Xinhui Road & Changshou Road Station */}
            <div className="relative flex-1 min-h-[360px] bg-[#0d0b09] p-6 flex flex-col justify-between overflow-hidden">
              {/* Map Grid Background */}
              <svg
                viewBox="0 0 600 380"
                className="w-full h-full object-cover"
                role="img"
                aria-label="Map showing Tori-Ji at 549 Xinhui Road near Changshou Road Metro Station Line 7 and Line 13"
              >
                <rect width="600" height="380" fill="#0d0b09" />
                {/* Subtle neighborhood grid */}
                <g stroke="#1d1814" strokeWidth="1">
                  <line x1="0" y1="70" x2="600" y2="70" />
                  <line x1="0" y1="140" x2="600" y2="140" />
                  <line x1="0" y1="210" x2="600" y2="210" />
                  <line x1="0" y1="280" x2="600" y2="280" />
                  <line x1="120" y1="0" x2="120" y2="380" />
                  <line x1="260" y1="0" x2="260" y2="380" />
                  <line x1="420" y1="0" x2="420" y2="380" />
                </g>

                {/* Major Roads */}
                {/* Changshou Road (长寿路) */}
                <path
                  d="M 40 95 L 560 75"
                  stroke="#2b241d"
                  strokeWidth="22"
                  strokeLinecap="round"
                />
                <text
                  x="70"
                  y="99"
                  fill="#8c8275"
                  fontSize="11"
                  fontFamily="monospace"
                  letterSpacing="2"
                >
                  CHANGSHOU ROAD · 长寿路
                </text>

                {/* Xinhui Road (新会路) */}
                <path
                  d="M 40 235 L 560 215"
                  stroke="#382e24"
                  strokeWidth="26"
                  strokeLinecap="round"
                />
                <text
                  x="65"
                  y="240"
                  fill="#e8a849"
                  fontSize="12"
                  fontFamily="monospace"
                  fontWeight="bold"
                  letterSpacing="2"
                >
                  XINHUI ROAD · 新会路
                </text>

                {/* Shaanxi North Road / Xikang Road Cross Streets */}
                <path d="M 190 20 L 210 360" stroke="#26201a" strokeWidth="18" />
                <text
                  x="196"
                  y="340"
                  fill="#786f63"
                  fontSize="10"
                  fontFamily="monospace"
                >
                  CHANGDE RD · 常德路
                </text>

                <path d="M 430 20 L 450 360" stroke="#26201a" strokeWidth="18" />
                <text
                  x="435"
                  y="340"
                  fill="#786f63"
                  fontSize="10"
                  fontFamily="monospace"
                >
                  SHAANXI N. RD · 陕西北路
                </text>

                {/* Walking Route Dashed Line from Changshou Rd Exit 5 to 549 Xinhui Rd */}
                <path
                  d="M 200 90 L 205 228 L 335 223"
                  fill="none"
                  stroke="#84cc16"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                />

                {/* Changshou Road Metro Station Pin */}
                <circle cx="200" cy="90" r="9" fill="#84cc16" />
                <circle cx="200" cy="90" r="16" fill="none" stroke="#84cc16" strokeWidth="1.5" opacity="0.5" />
                <rect x="218" y="68" width="235" height="38" rx="2" fill="#15120f" stroke="#84cc16" strokeWidth="1" />
                <text x="228" y="84" fill="#84cc16" fontSize="10" fontFamily="monospace" fontWeight="bold">
                  METRO LINES 7 &amp; 13 · EXIT 5
                </text>
                <text x="228" y="98" fill="#f5efe6" fontSize="11" fontFamily="sans-serif">
                  Changshou Rd Stn (长寿路站5号口 · 步行500m)
                </text>

                {/* TORI-JI 549 Xinhui Road Pin */}
                <circle cx="345" cy="222" r="24" fill="#d93829" opacity="0.22" />
                <circle cx="345" cy="222" r="11" fill="#d93829" stroke="#f5efe6" strokeWidth="2.5" />
                <rect x="250" y="138" width="230" height="58" rx="2" fill="#16120e" stroke="#e8a849" strokeWidth="1.5" />
                <text x="264" y="158" fill="#e8a849" fontSize="12" fontFamily="monospace" fontWeight="bold">
                  ★ TORI-JI · 549 XINHUI RD
                </text>
                <text x="264" y="175" fill="#f5efe6" fontSize="11" fontFamily="sans-serif">
                  新会路549号1-3室 · 烧鸟大师居酒屋
                </text>
                <text x="264" y="189" fill="#a89f91" fontSize="9.5" fontFamily="monospace">
                  Look for the 4 red lanterns &amp; noren curtain
                </text>
              </svg>
            </div>

            {/* Bottom Storefront Visual Cue & External Map Launchers */}
            <div className="border-t border-[#26201a] bg-[#15120f] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src="/images/storefront-night.jpg"
                  alt="Tori-Ji storefront at 549 Xinhui Road"
                  className="h-16 w-16 object-cover border border-[#3a3128] shrink-0"
                />
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e8a849]">
                    {t("STREET LANDMARK", "街面标识")}
                  </div>
                  <p className="text-xs sm:text-sm text-[#f5efe6] font-medium">
                    {t(
                      "Look for our circular Yakitori Master lightbox & 4 glowing red chochin lanterns at 549 Xinhui Rd.",
                      "认准新会路 549 号门头圆形“烧鸟大师”灯箱、日式暖帘与四盏红灯笼。"
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="https://uri.amap.com/search?keyword=%E4%B8%8A%E6%B5%B7%E5%B8%82%E6%99%AE%E9%99%80%E5%8C%BA%E6%96%B0%E4%BC%9A%E8%B7%AF549%E5%8F%B7&city=310000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#e8a849] px-4 py-2.5 font-mono text-xs uppercase tracking-wider font-bold text-[#0b0a09] transition hover:bg-[#f5efe6]"
                >
                  <Navigation className="h-3.5 w-3.5" />
                  <span>{t("Open in Amap / Maps", "打开高德地图导航")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
