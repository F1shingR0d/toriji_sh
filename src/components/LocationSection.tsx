"use client";

import React, { useState } from "react";
import { Copy, Check, Phone, ArrowUpRight } from "lucide-react";
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
      className="py-28 sm:py-36 bg-[#171717] text-[#F2E9D9]"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#C69A50]/25">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#C69A50]">
              {t("Visit & Reservations", "门店地址与预订")}
            </p>
            <h2 className="mt-3 text-section-heading text-[#F2E9D9]">
              {t("549 Xinhui Road, Shanghai", "上海普陀区新会路 549 号")}
            </h2>
          </div>

          <a
            href="https://uri.amap.com/search?keyword=%E4%B8%8A%E6%B5%B7%E5%B8%82%E6%99%AE%E9%99%80%E5%8C%BA%E6%96%B0%E4%BC%9A%E8%B7%AF549%E5%8F%B7&city=310000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-b border-[#C69A50] pb-1 text-btn-label text-[#C69A50] transition-opacity hover:opacity-75"
          >
            <span>{t("Open in Maps", "打开高德地图")}</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Main Asymmetric 2-Column Layout */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          {/* Left: Clean Hairline Details */}
          <div className="lg:col-span-6 space-y-10">
            {/* Address Block */}
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C69A50]">
                  {t("Address · DiDi / Taxi", "地址 · 滴滴导航")}
                </span>
                <button
                  onClick={() =>
                    copyToClipboard("上海市普陀区新会路549号1-3室", "didi-addr")
                  }
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] text-[#F2E9D9]/75 hover:text-[#C69A50] transition-colors"
                >
                  {copiedKey === "didi-addr" ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#C69A50]" />
                      <span className="text-[#C69A50]">{t("Copied", "已复制")}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>{t("Copy Address", "复制中文地址")}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="font-zh-heading text-2xl sm:text-3xl text-[#F2E9D9]">
                上海市普陀区新会路549号1-3室
              </div>
              <p className="text-sm sm:text-base text-[#F2E9D9]/75">
                Room 1–3, No. 549 Xinhui Road, Putuo District, Shanghai
              </p>
            </div>

            {/* Hours & Metro */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-[#F2E9D9]/12 text-sm">
              <div className="space-y-2">
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C69A50]">
                  {t("Hours", "营业时间")}
                </div>
                <p className="text-[#F2E9D9]/80 leading-relaxed">
                  {RESTAURANT_INFO.hours[lang]}
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C69A50]">
                  {t("Metro", "地铁出行")}
                </div>
                <p className="text-[#F2E9D9]/80 leading-relaxed">
                  {RESTAURANT_INFO.metro[lang]}
                </p>
              </div>
            </div>

            {/* Direct Reservations */}
            <div className="pt-8 border-t border-[#F2E9D9]/12 space-y-5">
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#B52B27]">
                {t("WeChat & Phone Reservations", "微信与电话预订")}
              </div>

              <div className="divide-y divide-[#F2E9D9]/12 border-t border-b border-[#F2E9D9]/12">
                {RESTAURANT_INFO.contacts.map((contact, idx) => {
                  const cleanId = contact.value.replace(/\s+/g, "");
                  const isCopied = copiedKey === `loc-wx-${idx}`;
                  return (
                    <div
                      key={idx}
                      className="py-4 flex flex-wrap items-center justify-between gap-4"
                    >
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.16em] text-[#F2E9D9]/55">
                          {contact.label[lang]}
                        </div>
                        <div className="mt-0.5 text-lg font-medium tracking-wider text-[#F2E9D9]">
                          {contact.value}
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => copyToClipboard(cleanId, `loc-wx-${idx}`)}
                          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] text-[#C69A50] hover:text-[#F2E9D9] transition-colors"
                        >
                          {isCopied ? (
                            <>
                              <Check className="h-3.5 w-3.5" />
                              <span>{t("Copied", "已复制")}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3.5 w-3.5" />
                              <span>{t("Copy WeChat", "复制微信号")}</span>
                            </>
                          )}
                        </button>

                        <a
                          href={`tel:${contact.raw}`}
                          className="inline-flex items-center gap-1.5 bg-[#B52B27] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#F2E9D9] transition-opacity hover:opacity-90"
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

          {/* Right: Ultra-Minimalist Architectural Map (Strict 4-Color Palette) */}
          <div className="lg:col-span-6">
            <div className="border border-[#C69A50]/25 bg-[#171717] p-4 sm:p-6">
              <svg
                viewBox="0 0 600 380"
                className="w-full h-auto"
                role="img"
                aria-label="Minimalist map showing Tori-Ji at 549 Xinhui Road near Changshou Road Station"
              >
                <rect width="600" height="380" fill="#171717" />
                <g stroke="#F2E9D9" strokeOpacity="0.06" strokeWidth="1">
                  <line x1="0" y1="76" x2="600" y2="76" />
                  <line x1="0" y1="152" x2="600" y2="152" />
                  <line x1="0" y1="228" x2="600" y2="228" />
                  <line x1="0" y1="304" x2="600" y2="304" />
                  <line x1="150" y1="0" x2="150" y2="380" />
                  <line x1="300" y1="0" x2="300" y2="380" />
                  <line x1="450" y1="0" x2="450" y2="380" />
                </g>

                {/* Changshou Road */}
                <path
                  d="M 30 98 L 570 78"
                  stroke="#F2E9D9"
                  strokeOpacity="0.14"
                  strokeWidth="18"
                  strokeLinecap="round"
                />
                <text
                  x="60"
                  y="102"
                  fill="#F2E9D9"
                  fillOpacity="0.5"
                  fontSize="10"
                  letterSpacing="2.5"
                >
                  CHANGSHOU ROAD · 长寿路
                </text>

                {/* Xinhui Road */}
                <path
                  d="M 30 242 L 570 222"
                  stroke="#C69A50"
                  strokeOpacity="0.28"
                  strokeWidth="22"
                  strokeLinecap="round"
                />
                <text
                  x="60"
                  y="246"
                  fill="#C69A50"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="2.5"
                >
                  XINHUI ROAD · 新会路
                </text>

                {/* Cross streets */}
                <path
                  d="M 190 20 L 210 360"
                  stroke="#F2E9D9"
                  strokeOpacity="0.1"
                  strokeWidth="14"
                />
                <path
                  d="M 435 20 L 455 360"
                  stroke="#F2E9D9"
                  strokeOpacity="0.1"
                  strokeWidth="14"
                />

                {/* Walking route */}
                <path
                  d="M 200 92 L 205 234 L 345 229"
                  fill="none"
                  stroke="#C69A50"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                />

                {/* Metro Pin */}
                <circle cx="200" cy="92" r="6" fill="#C69A50" />
                <text
                  x="218"
                  y="85"
                  fill="#C69A50"
                  fontSize="10"
                  letterSpacing="1.5"
                >
                  LINES 7 &amp; 13 · EXIT 5
                </text>
                <text x="218" y="100" fill="#F2E9D9" fillOpacity="0.8" fontSize="11">
                  Changshou Rd Station (长寿路站)
                </text>

                {/* TORI-JI Pin */}
                <circle cx="350" cy="229" r="18" fill="#B52B27" fillOpacity="0.28" />
                <circle
                  cx="350"
                  cy="229"
                  r="8"
                  fill="#B52B27"
                  stroke="#F2E9D9"
                  strokeWidth="2"
                />
                <rect
                  x="260"
                  y="148"
                  width="210"
                  height="52"
                  fill="#171717"
                  stroke="#C69A50"
                  strokeOpacity="0.7"
                  strokeWidth="1"
                />
                <text
                  x="276"
                  y="170"
                  fill="#F2E9D9"
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="2"
                >
                  TORI-JI · 549 XINHUI RD
                </text>
                <text x="276" y="187" fill="#C69A50" fontSize="10.5">
                  新会路549号1-3室 · 托利齐居酒屋
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
