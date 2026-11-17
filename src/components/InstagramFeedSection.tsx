"use client";

import React from "react";
import { Instagram, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { IG_FEED_ITEMS, RESTAURANT_INFO } from "@/data/toriji-data";

export default function InstagramFeedSection() {
  const { lang, t } = useLanguage();

  return (
    <section
      id="instagram"
      className="relative py-24 sm:py-32 bg-[#0b0a09] border-b border-[#251f19]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#251f19] pb-10">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[#e8a849]">
              <Instagram className="h-4 w-4 text-[#d93829]" />
              <span>{t("08 · OFFICIAL INSTAGRAM CHRONICLE", "08 · 官方 INSTAGRAM 动态精选")}</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#f5efe6]">
              @toriji_sh
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#a89f91]">
              {t(
                "Authentic captures from our official Instagram—new dishes, weekly supper clubs, and late nights on Xinhui Road.",
                "来自 @toriji_sh 官方账号的真实影像记录——主厨新菜、每周菲式家宴与新会路深夜日常。"
              )}
            </p>
          </div>

          <a
            href={RESTAURANT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#e8a849] bg-[#161310] px-5 py-3 text-xs font-mono uppercase tracking-[0.18em] font-semibold text-[#e8a849] transition hover:bg-[#e8a849] hover:text-[#0b0a09]"
          >
            <Instagram className="h-4 w-4" />
            <span>{t("Follow @toriji_sh on Instagram", "前往 Instagram 关注 @toriji_sh")}</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Curated 8-Tile Visual Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {IG_FEED_ITEMS.map((post) => (
            <a
              key={post.id}
              href={RESTAURANT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between overflow-hidden border border-[#29221b] bg-[#13100d] transition hover:border-[#e8a849]/70"
            >
              <div className="relative h-72 w-full overflow-hidden bg-[#0b0a09]">
                <img
                  src={post.image}
                  alt={post.caption[lang]}
                  className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13100d] via-transparent to-transparent opacity-80" />
                <span className="absolute top-3 left-3 bg-[#0b0a09]/90 border border-[#e8a849]/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#e8a849]">
                  {post.tag}
                </span>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-[#c7bfb2] leading-relaxed line-clamp-3">
                  {post.caption[lang]}
                </p>
                <div className="mt-3 pt-2.5 border-t border-[#221c16] flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-[#e8a849]">
                  <span>@toriji_sh</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
