"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowUpRight, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useArticles } from "@/context/ArticlesContext";
import { ArticleItem } from "@/data/articles-data";

export default function JournalSection() {
  const { lang, t } = useLanguage();
  const { publishedArticles, latestArticle } = useArticles();
  const [readingArticle, setReadingArticle] = useState<ArticleItem | null>(null);

  const otherArticles = publishedArticles.filter(
    (a) => a.id !== latestArticle?.id
  );

  return (
    <section
      id="journal"
      className="py-28 sm:py-36 bg-[#F2E9D9] text-[#171717]"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 border-b border-[#C69A50]/35">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#B52B27]">
              {t("Journal & Dispatches", "专栏与最新文章")}
            </p>
            <h2 className="mt-3 text-section-heading text-[#171717]">
              {t("Latest from Tori-Ji", "Tori-Ji 志")}
            </h2>
          </div>

          <p className="text-xs uppercase tracking-[0.2em] text-[#171717]/55">
            {t("Stories, Omakase & News", "料理故事、发办预告与动态")}
          </p>
        </div>

        {/* Featured Latest Article — Pure Magazine Spread */}
        {latestArticle ? (
          <article className="py-14 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div
              onClick={() => setReadingArticle(latestArticle)}
              className="lg:col-span-6 cursor-pointer overflow-hidden aspect-[4/3] bg-[#171717]"
            >
              <img
                src={latestArticle.image}
                alt={latestArticle.title[lang]}
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.03]"
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em]">
                <span className="text-[#B52B27]">
                  {t("Latest Article", "最新发布")}
                </span>
                <span className="text-[#C69A50]">·</span>
                <span className="text-[#C69A50]">
                  {latestArticle.category[lang]}
                </span>
              </div>

              <h3
                onClick={() => setReadingArticle(latestArticle)}
                className="cursor-pointer font-editorial text-3xl sm:text-[42px] leading-[1.12] text-[#171717] hover:text-[#B52B27] transition-colors"
              >
                {latestArticle.title[lang]}
              </h3>

              <p className="text-body-copy text-[#171717]/75">
                {latestArticle.subtitle[lang]}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.16em] text-[#171717]/55">
                <span>{latestArticle.date}</span>
                <span>·</span>
                <span>{latestArticle.readTime[lang]}</span>
                <span>·</span>
                <span>{latestArticle.author}</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setReadingArticle(latestArticle)}
                  className="inline-flex items-center gap-2.5 bg-[#B52B27] px-7 py-3.5 text-btn-label text-[#F2E9D9] transition-opacity hover:opacity-90"
                >
                  <span>{t("Read Article", "阅读全文")}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </article>
        ) : (
          <div className="py-16 text-center text-sm text-[#171717]/60">
            {t("No articles published yet.", "暂无已发布文章。")}
          </div>
        )}

        {/* Archive Dispatches — Ultra-Minimalist Editorial Ledger */}
        {otherArticles.length > 0 && (
          <div className="pt-10 border-t border-[#C69A50]/35">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#C69A50] mb-6">
              {t("Archive", "往期精选")}
            </p>
            <div className="divide-y divide-[#C69A50]/25 border-t border-b border-[#C69A50]/25">
              {otherArticles.map((article) => (
                <article
                  key={article.id}
                  onClick={() => setReadingArticle(article)}
                  className="group cursor-pointer py-7 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center"
                >
                  <div className="md:col-span-3 flex items-center gap-3 text-xs uppercase tracking-[0.18em]">
                    <span className="text-[#171717]/55">{article.date}</span>
                  </div>

                  <div className="md:col-span-7 space-y-1">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C69A50]">
                      {article.category[lang]}
                    </div>
                    <h4 className="font-editorial text-2xl sm:text-3xl text-[#171717] group-hover:text-[#B52B27] transition-colors leading-snug">
                      {article.title[lang]}
                    </h4>
                  </div>

                  <div className="md:col-span-2 flex md:justify-end">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#B52B27]">
                      <span>{t("Read", "阅读")}</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Luxury Magazine Reader Modal */}
      {readingArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#171717]/85 backdrop-blur-sm p-4 sm:p-8 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          onClick={() => setReadingArticle(null)}
        >
          <div
            className="relative my-auto w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#F2E9D9] text-[#171717] p-8 sm:p-14 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setReadingArticle(null)}
              aria-label="Close article"
              className="sticky top-0 float-right flex h-10 w-10 items-center justify-center bg-[#F2E9D9] text-[#171717]/70 hover:text-[#B52B27] transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-4 pr-10">
              <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em]">
                <span className="text-[#B52B27]">{readingArticle.category[lang]}</span>
                <span className="text-[#C69A50]">·</span>
                <span className="text-[#171717]/60">{readingArticle.date}</span>
                <span className="text-[#C69A50]">·</span>
                <span className="text-[#171717]/60">{readingArticle.readTime[lang]}</span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-5xl text-[#171717] leading-[1.1]">
                {readingArticle.title[lang]}
              </h2>

              <p className="text-subheading text-[#171717]/80">
                {readingArticle.subtitle[lang]}
              </p>

              <p className="text-xs uppercase tracking-[0.18em] text-[#C69A50] font-semibold">
                {readingArticle.author}
              </p>
            </div>

            <div className="my-10 overflow-hidden aspect-[16/9] bg-[#171717]">
              <img
                src={readingArticle.image}
                alt={readingArticle.title[lang]}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="space-y-6 text-body-copy text-[#171717]/85">
              {readingArticle.content[lang]
                .split("\n\n")
                .filter(Boolean)
                .map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
            </div>

            <div className="mt-12 pt-8 border-t border-[#C69A50]/35 flex items-center justify-between">
              <span className="font-editorial italic text-xl text-[#C69A50]">
                TORI-JI Izakaya · Shanghai
              </span>
              <button
                onClick={() => setReadingArticle(null)}
                className="bg-[#171717] px-6 py-2.5 text-btn-label text-[#F2E9D9] hover:bg-[#B52B27] transition-colors"
              >
                {t("Close", "关闭")}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
