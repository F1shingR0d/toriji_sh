"use client";

import React, { useState } from "react";
import { X, Copy, Check, Phone, MapPin, Clock, MessageSquare, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { RESTAURANT_INFO } from "@/data/toriji-data";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const { lang, t } = useLanguage();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reservation-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg border border-[#2e2822] bg-[#12100e] p-6 sm:p-8 text-[#f5efe6] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center border border-[#2e2822] bg-[#1a1714] text-[#a89f91] transition hover:border-[#d93829] hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#e8a849]">
          <Sparkles className="h-3.5 w-3.5 text-[#d93829]" />
          <span>{t("TABLE & EVENT RESERVATIONS", "餐位及活动预订")}</span>
        </div>

        <h3 id="reservation-modal-title" className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight">
          {t("Reserve at TORI-JI", "预订 TORI-JI 席位")}
        </h3>

        <p className="mt-2 text-sm text-[#a89f91] leading-relaxed">
          {t(
            "Reservations for counter yakitori seating, group tables, Filipino Feast Supper Clubs, and 5-Course Yakitori Omakase nights are handled directly via WeChat or phone.",
            "吧台备长炭烧鸟席位、多人聚会餐桌、15席菲式家宴（Filipino Feast）及五道式烧鸟 Omakase 晚宴，均可通过官方微信或电话直接预订。"
          )}
        </p>

        {/* WeChat / Phone Numbers */}
        <div className="mt-6 space-y-3">
          {RESTAURANT_INFO.contacts.map((contact, idx) => {
            const cleanNumber = contact.value.replace(/\s+/g, "");
            const isCopied = copiedKey === `wechat-${idx}`;
            return (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-[#2a241e] bg-[#181512] p-4"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#a89f91]">
                    <MessageSquare className="h-3.5 w-3.5 text-[#84cc16]" />
                    <span>{contact.label[lang]}</span>
                  </div>
                  <div className="mt-1 font-mono text-lg font-semibold tracking-wider text-[#f5efe6]">
                    {contact.value}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyText(cleanNumber, `wechat-${idx}`)}
                    className="flex items-center gap-1.5 border border-[#3a322a] bg-[#221e1a] px-3.5 py-2 text-xs font-mono uppercase tracking-wider text-[#f5efe6] transition hover:border-[#e8a849] hover:bg-[#2b2520]"
                  >
                    {isCopied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-[#84cc16]" />
                        <span className="text-[#84cc16]">{t("Copied ID", "已复制微信号")}</span>
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
                    className="flex items-center gap-1.5 bg-[#d93829] px-3.5 py-2 text-xs font-mono uppercase tracking-wider text-white transition hover:bg-[#b82d20]"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>{t("Call", "拨打")}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Hours & Address Box */}
        <div className="mt-5 border-t border-[#26211c] pt-5 space-y-3 text-xs text-[#a89f91]">
          <div className="flex items-start gap-2.5">
            <Clock className="h-4 w-4 shrink-0 text-[#e8a849] mt-0.5" />
            <div>
              <span className="font-semibold text-[#f5efe6]">
                {t("Opening Hours: ", "营业时间：")}
              </span>
              {RESTAURANT_INFO.hours[lang]}
            </div>
          </div>

          <div className="flex items-start justify-between gap-2.5">
            <div className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 shrink-0 text-[#d93829] mt-0.5" />
              <div>
                <div className="font-semibold text-[#f5efe6]">{RESTAURANT_INFO.address.en}</div>
                <div className="mt-0.5 text-[#e8a849]">{RESTAURANT_INFO.address.zh}</div>
              </div>
            </div>
            <button
              onClick={() => copyText("上海市普陀区新会路549号1-3室", "addr")}
              className="shrink-0 border border-[#2e2822] px-2.5 py-1.5 font-mono text-[11px] text-[#f5efe6] hover:border-[#e8a849]"
            >
              {copiedKey === "addr" ? t("Copied!", "已复制") : t("Copy DiDi Address", "复制打车地址")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
