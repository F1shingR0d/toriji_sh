"use client";

import React from "react";
import { MessageCircleHeart, Music, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CommunityWallSection() {
  const { t } = useLanguage();

  const wallNotes = [
    {
      langTag: "TAGALOG / ENGLISH · POLAROID WALL NOTE",
      quote:
        "\"Guys!!! Dapat Nyong puntahan to! If U're in Shanghai & Have not been in Tori Ji WHAT ARE U DOING HERE\"",
      translation: t(
        "Handwritten by Filipino guests on the Tori-Ji Polaroid wall ('Guys! You HAVE to visit this place!')",
        "菲律宾食客在店内照片墙上的手写留言（“大家一定要来这里！如果你在上海还没来过 Tori-Ji，你还在等什么！”）"
      ),
    },
    {
      langTag: "RUSSIAN · POLAROID WALL NOTE",
      quote:
        "\"Холодная Асашка и чудесное обслуживание! Спасибо за ужин! Вы лучшие ♥ Из России с любовью ♥\"",
      translation: t(
        "\"Ice-cold Asahi and wonderful service! Thank you for dinner! You are the best — From Russia with love ♥\"",
        "俄罗斯食客手写便签：“冰爽的朝日生啤与绝佳的服务！感谢今晚的晚餐，你们是最棒的！”"
      ),
    },
    {
      langTag: "CHINESE · POLAROID WALL NOTE",
      quote: "“老板娘人超好，烧鸟巨好吃！下次还要带朋友一起来！”",
      translation: t(
        "\"The owner is so warm and welcoming, and the yakitori is insanely delicious! Bringing more friends next time!\"",
        "上海本地食客在照片墙上的真实手写好评"
      ),
    },
  ];

  return (
    <section
      id="community"
      className="relative py-24 sm:py-32 bg-[#0e0c0a] border-b border-[#251f19] bg-grain"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[#e8a849]">
              <MessageCircleHeart className="h-4 w-4 text-[#d93829]" />
              <span>{t("07 · SOCIAL & COMMUNITY HUB", "07 · 照片墙、音乐与社群夜生活")}</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#f5efe6] leading-[1.1]">
              {t("A Wall of Polaroids,", "一面写满四种语言的拍立得墙，")}
              <span className="block font-serif italic font-normal text-[#e8a849] mt-1">
                {t("Four Languages & Late-Night KTV.", "让陌生人变成老友的深夜酒馆。")}
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#a89f91] leading-relaxed">
              {t(
                "Step inside 549 Xinhui Road and you'll immediately spot the 3D TORI-JI sign above hundreds of customer Polaroids and handwritten sticky notes in English, Tagalog, Chinese, and Russian.",
                "走进新会路 549 号，首先映入眼帘的便是立体 TORI-JI 标志下贴满整面墙的食客拍立得合影，以及用中文、英文、塔加洛语和俄语手写的温暖留言。"
              )}
            </p>
          </div>
        </div>

        {/* Main Polaroid Wall Feature + Secondary Event Shots */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Large Authentic Polaroid Wall Photo */}
          <div className="lg:col-span-8 relative overflow-hidden border border-[#2e2720] bg-[#141210]">
            <img
              src="/images/interior-community-wall.jpg"
              alt="Tori-Ji interior customer Polaroid wall with 3D TORI-JI cutout sign, handwritten notes in Tagalog, Chinese, English, and Russian, and the black manifesto poster"
              className="h-full min-h-[380px] sm:min-h-[480px] w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a09]/90 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#e8a849]">
                  {t("REAL INTERIOR WALL · 549 XINHUI ROAD", "店内真实拍立得留言墙 · 新会路549号")}
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-[#f5efe6]">
                  {t("Hundreds of Nights, One Shared Table", "数百个微醺夜晚，同一张温暖餐桌")}
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column: Live Events & Pop-Ups */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex-1 overflow-hidden border border-[#2e2720] bg-[#141210]">
              <img
                src="/images/ig-social-events-crowd.jpg"
                alt="POV: Attended Tori-Ji's Social Events — guests dancing and celebrating inside Tori-Ji"
                className="h-56 w-full object-cover object-center"
              />
              <div className="p-5">
                <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#e8a849]">
                  <Music className="h-3.5 w-3.5 text-[#d93829]" />
                  <span>{t("WEEKLY SOCIAL NIGHTS", "每周主题社交派对")}</span>
                </div>
                <h4 className="mt-1.5 text-lg font-bold text-[#f5efe6]">
                  {t("Tori-Ji Unplugged, Trivia & KTV", "原声星期六 · 趣味问答与深夜 KTV")}
                </h4>
                <p className="mt-1.5 text-xs text-[#a89f91] leading-relaxed">
                  {t(
                    "From Saturday live acoustic sessions and quiz nights to late-night KTV, board games, and LAV Candles scent workshops.",
                    "从周六不插电现场音乐（Tori-Ji Unplugged）、趣味问答夜，到晚餐后的 KTV 欢唱、桌游以及 LAV 手作香薰蜡烛工坊。"
                  )}
                </p>
              </div>
            </div>

            <div className="overflow-hidden border border-[#2e2720] bg-[#141210]">
              <img
                src="/images/ig-laowaijie-bbq-fest.jpg"
                alt="Tori-Ji sold-out pop-up at the Laowaijie BBQ Festival in Shanghai"
                className="h-44 w-full object-cover object-center"
              />
              <div className="p-4">
                <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#84cc16]">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>{t("SHANGHAI FESTIVALS", "上海美食节人气快闪")}</span>
                </div>
                <p className="mt-1 text-xs text-[#c7bfb2]">
                  {t(
                    "Sold out 2 days in a row at the Laowaijie BBQ Festival with exclusive festival skewers & ribs.",
                    "亮相上海老外街 BBQ 美食节，限定炭烤肋排与烧鸟连续两日火爆售罄。"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Verbatim Handwritten Notes Transcribed from the Wall */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {wallNotes.map((note, idx) => (
            <div
              key={idx}
              className="border border-[#2a231c] bg-[#13100d] p-6 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#e8a849]">
                  {note.langTag}
                </span>
                <p className="mt-3 font-serif italic text-base sm:text-lg text-[#f5efe6] leading-relaxed">
                  {note.quote}
                </p>
              </div>
              <p className="mt-4 pt-3 border-t border-[#221c17] text-xs text-[#a89f91]">
                {note.translation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
