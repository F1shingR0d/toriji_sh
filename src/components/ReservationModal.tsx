"use client";

import React, { useState } from "react";
import { X, Copy, Check, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { RESTAURANT_INFO } from "@/data/toriji-data";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({
  isOpen,
  onClose,
}: ReservationModalProps) {
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#171717]/85 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reservation-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#F2E9D9] p-8 sm:p-12 text-[#171717] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-6 top-6 text-[#171717]/60 transition-colors hover:text-[#B52B27]"
        >
          <X className="h-5 w-5" />
        </button>

        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B52B27]">
          {t("Reservations", "席位预订")}
        </p>

        <h3
          id="reservation-modal-title"
          className="mt-2 font-editorial text-3xl sm:text-4xl text-[#171717]"
        >
          {t("Reserve at Tori-Ji", "预订 TORI-JI 席位")}
        </h3>

        <p className="mt-3 text-sm text-[#171717]/75 leading-relaxed">
          {t(
            "Counter seating, group tables, Filipino Feast Supper Clubs, and 5-Course Yakitori Omakase nights are arranged directly via WeChat or phone.",
            "吧台烧鸟席位、聚会餐桌、15席芭蕉叶菲式家宴及五道式烧鸟 Omakase 晚宴，均可通过官方微信或电话预订。"
          )}
        </p>

        {/* Clean Hairline Contacts */}
        <div className="mt-7 divide-y divide-[#C69A50]/35 border-t border-b border-[#C69A50]/35">
          {RESTAURANT_INFO.contacts.map((contact, idx) => {
            const cleanNumber = contact.value.replace(/\s+/g, "");
            const isCopied = copiedKey === `wechat-${idx}`;
            return (
              <div
                key={idx}
                className="py-4 flex flex-wrap items-center justify-between gap-4"
              >
                <div>
                  <div className="text-[11px] uppercase tracking-[0.16em] text-[#171717]/55">
                    {contact.label[lang]}
                  </div>
                  <div className="mt-0.5 text-lg font-medium tracking-wider text-[#171717]">
                    {contact.value}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => copyText(cleanNumber, `wechat-${idx}`)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#171717]/75 hover:text-[#B52B27] transition-colors"
                  >
                    {isCopied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-[#B52B27]" />
                        <span className="text-[#B52B27]">{t("Copied", "已复制")}</span>
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

        {/* Hours & Address */}
        <div className="mt-6 space-y-2 text-xs text-[#171717]/75">
          <div>
            <span className="font-semibold uppercase tracking-[0.16em] text-[#C69A50]">
              {t("Hours · ", "营业时间 · ")}
            </span>
            {RESTAURANT_INFO.hours[lang]}
          </div>
          <div className="flex items-center justify-between gap-3 pt-1">
            <div>
              <div className="text-[#171717] font-medium">
                {RESTAURANT_INFO.address.en}
              </div>
              <div className="text-[#171717]/65">{RESTAURANT_INFO.address.zh}</div>
            </div>
            <button
              onClick={() => copyText("上海市普陀区新会路549号1-3室", "addr")}
              className="shrink-0 border-b border-[#171717]/40 pb-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#171717] hover:border-[#B52B27] hover:text-[#B52B27]"
            >
              {copiedKey === "addr"
                ? t("Copied", "已复制")
                : t("Copy Address", "复制地址")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
