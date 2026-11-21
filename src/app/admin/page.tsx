"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Edit3,
  Eye,
  Lock,
  LogOut,
  Plus,
  RotateCcw,
  Sparkles,
  Star,
  Trash2,
  Upload,
} from "lucide-react";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import { ArticlesProvider, useArticles } from "@/context/ArticlesContext";
import { ARTICLE_IMAGE_PRESETS, ArticleItem } from "@/data/articles-data";

const ADMIN_PASSCODE = "toriji2026";
const AUTH_SESSION_KEY = "toriji_admin_authed";

function AdminDashboardInner() {
  const { lang, setLang, t } = useLanguage();
  const {
    articles,
    latestArticle,
    publishArticle,
    updateArticle,
    deleteArticle,
    setFeaturedArticle,
    resetArticles,
  } = useArticles();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcodeInput, setPasscodeInput] = useState("");
  const [authError, setAuthError] = useState("");

  // Editor state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [titleEn, setTitleEn] = useState("");
  const [titleZh, setTitleZh] = useState("");
  const [subtitleEn, setSubtitleEn] = useState("");
  const [subtitleZh, setSubtitleZh] = useState("");
  const [categoryEn, setCategoryEn] = useState("OMAKASE & CULINARY STORY");
  const [categoryZh, setCategoryZh] = useState("主厨发办与料理故事");
  const [date, setDate] = useState(() => new Date().toISOString().split("T")[0]);
  const [readTimeEn, setReadTimeEn] = useState("3 min read");
  const [readTimeZh, setReadTimeZh] = useState("3 分钟阅读");
  const [author, setAuthor] = useState("Czarina & Vené Labagriel");
  const [image, setImage] = useState(ARTICLE_IMAGE_PRESETS[0].url);
  const [featured, setFeatured] = useState(true);
  const [published, setPublished] = useState(true);
  const [contentEn, setContentEn] = useState("");
  const [contentZh, setContentZh] = useState("");
  const [showChineseFields, setShowChineseFields] = useState(false);
  const [statusBanner, setStatusBanner] = useState<string | null>(null);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(AUTH_SESSION_KEY) === "true") {
        setIsAuthenticated(true);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcodeInput.trim() === ADMIN_PASSCODE) {
      setIsAuthenticated(true);
      setAuthError("");
      try {
        sessionStorage.setItem(AUTH_SESSION_KEY, "true");
      } catch {
        // ignore
      }
    } else {
      setAuthError(
        t(
          "Incorrect passcode. Please try again.",
          "密码不正确，请重试。"
        )
      );
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPasscodeInput("");
    try {
      sessionStorage.removeItem(AUTH_SESSION_KEY);
    } catch {
      // ignore
    }
  };

  const clearForm = () => {
    setEditingId(null);
    setTitleEn("");
    setTitleZh("");
    setSubtitleEn("");
    setSubtitleZh("");
    setCategoryEn("OMAKASE & CULINARY STORY");
    setCategoryZh("主厨发办与料理故事");
    setDate(new Date().toISOString().split("T")[0]);
    setReadTimeEn("3 min read");
    setReadTimeZh("3 分钟阅读");
    setAuthor("Czarina & Vené Labagriel");
    setImage(ARTICLE_IMAGE_PRESETS[0].url);
    setFeatured(true);
    setPublished(true);
    setContentEn("");
    setContentZh("");
  };

  const handleEditSelect = (article: ArticleItem) => {
    setEditingId(article.id);
    setTitleEn(article.title.en);
    setTitleZh(article.title.zh);
    setSubtitleEn(article.subtitle.en);
    setSubtitleZh(article.subtitle.zh);
    setCategoryEn(article.category.en);
    setCategoryZh(article.category.zh);
    setDate(article.date);
    setReadTimeEn(article.readTime.en);
    setReadTimeZh(article.readTime.zh);
    setAuthor(article.author);
    setImage(article.image);
    setFeatured(article.featured);
    setPublished(article.published);
    setContentEn(article.content.en);
    setContentZh(article.content.zh);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!titleEn.trim() || !contentEn.trim()) return;

    const payload = {
      title: {
        en: titleEn.trim(),
        zh: titleZh.trim() || titleEn.trim(),
      },
      subtitle: {
        en: subtitleEn.trim() || titleEn.trim(),
        zh: subtitleZh.trim() || subtitleEn.trim() || titleEn.trim(),
      },
      category: {
        en: categoryEn.trim() || "JOURNAL",
        zh: categoryZh.trim() || categoryEn.trim() || "最新动态",
      },
      date,
      readTime: {
        en: readTimeEn.trim() || "3 min read",
        zh: readTimeZh.trim() || "3 分钟阅读",
      },
      author: author.trim() || "Tori-Ji Editorial",
      image: image.trim() || ARTICLE_IMAGE_PRESETS[0].url,
      featured,
      published,
      content: {
        en: contentEn.trim(),
        zh: contentZh.trim() || contentEn.trim(),
      },
    };

    if (editingId) {
      await updateArticle({ id: editingId, ...payload });
      setStatusBanner(
        t("Article updated and live on the website.", "文章已更新并同步至网站前台。")
      );
    } else {
      await publishArticle(payload);
      setStatusBanner(
        t("New article published and live on the website.", "新文章已成功发布并同步至首页。")
      );
    }

    clearForm();
    setTimeout(() => setStatusBanner(null), 5000);
  };

  const categoryPresets = [
    { en: "OMAKASE & CULINARY STORY", zh: "主厨发办与料理故事" },
    { en: "EVENTS & GATHERINGS", zh: "私享家宴活动" },
    { en: "PRESS & MILESTONE", zh: "荣誉与里程碑" },
    { en: "SEASONAL MENU", zh: "季节限定菜单" },
    { en: "ANNOUNCEMENT", zh: "门店公告" },
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#171717] text-[#F2E9D9] flex flex-col justify-between">
        <header className="border-b border-[#C69A50]/20 py-6 px-6 sm:px-10">
          <div className="mx-auto max-w-5xl flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#F2E9D9]/75 hover:text-[#C69A50] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>{t("Back to Website", "返回网站")}</span>
            </Link>
            <img
              src="/images/logo-wordmark-transparent.png"
              alt="TORI-JI Official Logo"
              className="h-7 w-auto object-contain"
            />
          </div>
        </header>

        <main className="mx-auto w-full max-w-md px-6 py-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#C69A50]">
              <Lock className="h-3.5 w-3.5 text-[#B52B27]" />
              <span>{t("Editorial Portal", "内容发布后台")}</span>
            </div>

            <h1 className="font-editorial text-4xl text-[#F2E9D9]">
              {t("Tori-Ji Journal Admin", "Tori-Ji 文章管理")}
            </h1>

            <p className="text-sm text-[#F2E9D9]/65 leading-relaxed">
              {t(
                "Sign in to publish a latest article, announce omakase nights, or curate editorial stories.",
                "登录后台以发布最新文章、预告 Omakase 晚宴或管理专栏内容。"
              )}
            </p>

            <form onSubmit={handleLogin} className="pt-2 space-y-5">
              <div>
                <label
                  htmlFor="admin-passcode"
                  className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C69A50] mb-2"
                >
                  {t("Passcode", "管理密码")}
                </label>
                <input
                  id="admin-passcode"
                  type="password"
                  autoComplete="off"
                  value={passcodeInput}
                  onChange={(e) => setPasscodeInput(e.target.value)}
                  placeholder="••••••••••"
                  className="w-full border-b border-[#C69A50]/50 bg-transparent px-1 py-3 text-base text-[#F2E9D9] placeholder-[#F2E9D9]/30 focus:border-[#C69A50] focus:outline-none"
                />
              </div>

              {authError && (
                <p className="text-xs text-[#B52B27] font-medium">{authError}</p>
              )}

              <button
                type="submit"
                className="w-full bg-[#B52B27] py-3.5 text-btn-label text-[#F2E9D9] transition-opacity hover:opacity-90"
              >
                {t("Enter Studio", "进入后台")}
              </button>
            </form>
          </div>
        </main>

        <footer className="py-6 text-center text-[11px] uppercase tracking-[0.22em] text-[#F2E9D9]/40 border-t border-[#F2E9D9]/10">
          TORI-JI IZAKAYA · SHANGHAI
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F2E9D9] text-[#171717]">
      {/* Minimalist Charcoal Admin Header */}
      <header className="sticky top-0 z-30 border-b border-[#C69A50]/25 bg-[#171717] text-[#F2E9D9] py-4 px-6 sm:px-10">
        <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <Link
              href="/#journal"
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#C69A50] hover:text-[#F2E9D9] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>{t("Live Site", "返回首页")}</span>
            </Link>
            <span className="h-3.5 w-px bg-[#F2E9D9]/20" />
            <span className="text-xs font-medium tracking-[0.26em] uppercase text-[#F2E9D9]">
              TORI-JI · ADMIN
            </span>
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={() => setLang(lang === "en" ? "zh" : "en")}
              className="text-xs font-medium tracking-[0.14em] text-[#F2E9D9]/75 hover:text-[#C69A50]"
            >
              {lang === "en" ? "EN / 中文" : "中文 / EN"}
            </button>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] text-[#F2E9D9]/65 hover:text-[#B52B27] transition-colors"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span>{t("Sign Out", "退出")}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 sm:px-10 py-14 sm:py-16 space-y-20">
        {/* Status Notification */}
        {statusBanner && (
          <div className="flex items-center justify-between gap-4 bg-[#171717] text-[#F2E9D9] border-l-2 border-[#B52B27] px-6 py-4">
            <div className="flex items-center gap-3 text-sm">
              <CheckCircle2 className="h-4 w-4 text-[#C69A50] shrink-0" />
              <span>{statusBanner}</span>
            </div>
            <Link
              href="/#journal"
              className="shrink-0 text-xs font-semibold uppercase tracking-[0.16em] text-[#C69A50] hover:text-[#F2E9D9]"
            >
              {t("View Live →", "前往查看 →")}
            </Link>
          </div>
        )}

        {/* Currently Featured Banner */}
        {latestArticle && (
          <div className="pb-8 border-b border-[#C69A50]/35 flex flex-col sm:flex-row sm:items-end justify-between gap-5">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#B52B27]">
                <Star className="h-3.5 w-3.5 fill-[#B52B27]" />
                <span>
                  {t("Live Featured Article", "当前首页置顶最新文章")}
                </span>
              </div>
              <div className="font-editorial text-2xl sm:text-3xl text-[#171717]">
                {latestArticle.title[lang]}
              </div>
              <div className="text-xs uppercase tracking-[0.16em] text-[#171717]/55">
                {latestArticle.date} · {latestArticle.category[lang]}
              </div>
            </div>

            <button
              onClick={() => handleEditSelect(latestArticle)}
              className="shrink-0 inline-flex items-center gap-2 border-b border-[#171717] pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#171717] hover:border-[#B52B27] hover:text-[#B52B27] transition-colors"
            >
              <Edit3 className="h-3.5 w-3.5" />
              <span>{t("Edit Current Latest", "编辑此文章")}</span>
            </button>
          </div>
        )}

        {/* Section 1: Minimalist Composer + Live Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          {/* Composer */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-end justify-between pb-6 border-b border-[#C69A50]/35">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B52B27]">
                  {editingId
                    ? t("Editing Dispatch", "正在编辑")
                    : t("New Dispatch", "发布新文章")}
                </p>
                <h1 className="mt-2 font-editorial text-3xl sm:text-4xl text-[#171717]">
                  {editingId
                    ? t("Update Article", "更新文章")
                    : t("Publish Latest Article", "撰写最新文章")}
                </h1>
              </div>

              {editingId && (
                <button
                  type="button"
                  onClick={clearForm}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#171717]/70 hover:text-[#B52B27]"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>{t("New Article", "新建文章")}</span>
                </button>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#171717]/70 mb-2">
                  {t("Headline *", "标题 *")}
                </label>
                <input
                  type="text"
                  required
                  value={titleEn}
                  onChange={(e) => setTitleEn(e.target.value)}
                  placeholder={t(
                    "e.g. Autumn 5-Course Yakitori Omakase",
                    "输入文章标题..."
                  )}
                  className="w-full border-b border-[#171717]/25 bg-transparent py-2.5 text-base text-[#171717] placeholder-[#171717]/35 focus:border-[#171717] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#171717]/70 mb-2">
                  {t("Subtitle / Summary", "副标题 / 导语")}
                </label>
                <input
                  type="text"
                  value={subtitleEn}
                  onChange={(e) => setSubtitleEn(e.target.value)}
                  placeholder={t(
                    "Brief editorial summary...",
                    "简短导语摘要..."
                  )}
                  className="w-full border-b border-[#171717]/25 bg-transparent py-2.5 text-sm text-[#171717] placeholder-[#171717]/35 focus:border-[#171717] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#171717]/70 mb-2">
                    {t("Category", "分类")}
                  </label>
                  <select
                    value={categoryEn}
                    onChange={(e) => {
                      const found = categoryPresets.find(
                        (c) => c.en === e.target.value
                      );
                      setCategoryEn(e.target.value);
                      if (found) setCategoryZh(found.zh);
                    }}
                    className="w-full border-b border-[#171717]/25 bg-[#F2E9D9] py-2.5 text-xs font-medium text-[#171717] focus:border-[#171717] focus:outline-none"
                  >
                    {categoryPresets.map((c) => (
                      <option key={c.en} value={c.en}>
                        {c.en}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#171717]/70 mb-2">
                    {t("Date", "日期")}
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full border-b border-[#171717]/25 bg-transparent py-2 text-xs text-[#171717] focus:border-[#171717] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#171717]/70 mb-2">
                    {t("Author", "作者")}
                  </label>
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full border-b border-[#171717]/25 bg-transparent py-2 text-xs text-[#171717] focus:border-[#171717] focus:outline-none"
                  />
                </div>
              </div>

              {/* Cover Photograph */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#171717]/70">
                    {t("Cover Photograph", "封面照片")}
                  </label>
                  <label className="cursor-pointer inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#B52B27] hover:opacity-75">
                    <Upload className="h-3.5 w-3.5" />
                    <span>{t("Upload Photo", "上传照片")}</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                  {ARTICLE_IMAGE_PRESETS.map((preset) => (
                    <button
                      key={preset.url}
                      type="button"
                      onClick={() => setImage(preset.url)}
                      title={preset.label}
                      className={`aspect-square overflow-hidden border-2 transition-opacity ${
                        image === preset.url
                          ? "border-[#B52B27] opacity-100"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={preset.url}
                        alt={preset.label}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Body */}
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#171717]/70 mb-2">
                  {t(
                    "Article Body * (Blank line between paragraphs)",
                    "正文内容 *（段落间空一行）"
                  )}
                </label>
                <textarea
                  rows={7}
                  required
                  value={contentEn}
                  onChange={(e) => setContentEn(e.target.value)}
                  placeholder={t(
                    "Write your culinary story or event announcement...",
                    "在此输入文章正文..."
                  )}
                  className="w-full border border-[#C69A50]/45 bg-transparent p-4 text-sm text-[#171717] leading-relaxed focus:border-[#171717] focus:outline-none"
                />
              </div>

              {/* Optional Chinese Fields */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setShowChineseFields(!showChineseFields)}
                  className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C69A50] hover:text-[#171717]"
                >
                  {showChineseFields
                    ? t("− Hide Optional Chinese Fields", "− 收起中文选填项")
                    : t(
                        "+ Add Optional Chinese Translation",
                        "+ 添加中文翻译（留空自动沿用英文）"
                      )}
                </button>

                {showChineseFields && (
                  <div className="mt-5 space-y-4 border-l border-[#C69A50] pl-5">
                    <input
                      type="text"
                      value={titleZh}
                      onChange={(e) => setTitleZh(e.target.value)}
                      placeholder="中文标题 (Optional)"
                      className="w-full border-b border-[#171717]/25 bg-transparent py-2 text-sm text-[#171717] focus:border-[#171717] focus:outline-none"
                    />
                    <input
                      type="text"
                      value={subtitleZh}
                      onChange={(e) => setSubtitleZh(e.target.value)}
                      placeholder="中文副标题 (Optional)"
                      className="w-full border-b border-[#171717]/25 bg-transparent py-2 text-sm text-[#171717] focus:border-[#171717] focus:outline-none"
                    />
                    <textarea
                      rows={4}
                      value={contentZh}
                      onChange={(e) => setContentZh(e.target.value)}
                      placeholder="中文正文 (Optional)"
                      className="w-full border border-[#C69A50]/45 bg-transparent p-3 text-sm text-[#171717] focus:border-[#171717] focus:outline-none"
                    />
                  </div>
                )}
              </div>

              {/* Options */}
              <div className="flex flex-wrap items-center gap-8 pt-2">
                <label className="inline-flex items-center gap-2.5 cursor-pointer text-xs font-semibold uppercase tracking-[0.12em] text-[#171717]">
                  <input
                    type="checkbox"
                    checked={featured}
                    onChange={(e) => setFeatured(e.target.checked)}
                    className="h-4 w-4 accent-[#B52B27]"
                  />
                  <span>
                    {t("Pin as Latest Featured Article", "设为首页置顶最新文章")}
                  </span>
                </label>

                <label className="inline-flex items-center gap-2.5 cursor-pointer text-xs font-semibold uppercase tracking-[0.12em] text-[#171717]">
                  <input
                    type="checkbox"
                    checked={published}
                    onChange={(e) => setPublished(e.target.checked)}
                    className="h-4 w-4 accent-[#171717]"
                  />
                  <span>{t("Published", "公开显示")}</span>
                </label>
              </div>

              {/* Submit */}
              <div className="pt-4 flex items-center gap-4">
                <button
                  type="submit"
                  className="bg-[#B52B27] px-8 py-3.5 text-btn-label text-[#F2E9D9] transition-opacity hover:opacity-90"
                >
                  {editingId
                    ? t("Save Changes", "保存更改")
                    : t("Publish Latest Article", "立即发布")}
                </button>

                {editingId && (
                  <button
                    type="button"
                    onClick={clearForm}
                    className="border-b border-[#171717]/40 pb-0.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#171717]/75 hover:text-[#171717]"
                  >
                    {t("Cancel", "取消")}
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Live Magazine Preview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C69A50]">
              <Eye className="h-3.5 w-3.5 text-[#B52B27]" />
              <span>{t("Live Editorial Preview", "实时杂志排版预览")}</span>
            </div>

            <div className="bg-[#171717] text-[#F2E9D9] p-7 sm:p-9 space-y-6">
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#171717]">
                <img
                  src={image || ARTICLE_IMAGE_PRESETS[0].url}
                  alt="Cover preview"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em]">
                {featured && (
                  <span className="text-[#B52B27]">
                    {t("Latest Article", "最新发布")}
                  </span>
                )}
                {featured && <span className="text-[#C69A50]">·</span>}
                <span className="text-[#C69A50]">
                  {categoryEn || "JOURNAL"}
                </span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl text-[#F2E9D9] leading-tight">
                {titleEn ||
                  t("Your Headline Appears Here", "文章主标题实时预览")}
              </h3>

              <p className="text-sm text-[#F2E9D9]/75 leading-relaxed">
                {subtitleEn ||
                  t(
                    "Clean Inter Regular summary paired with Cormorant Garamond editorial typography.",
                    "简洁优雅的导语摘要预览。"
                  )}
              </p>

              <div className="pt-4 border-t border-[#C69A50]/25 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-[#C69A50]">
                <span>{date}</span>
                <span>{author}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Archive Management Ledger */}
        <div className="pt-14 border-t border-[#C69A50]/35">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C69A50]">
                {t("Archive", "文章列表")}
              </p>
              <h2 className="mt-2 font-editorial text-3xl text-[#171717]">
                {t("Manage Articles", "管理已发布文章")} ({articles.length})
              </h2>
            </div>

            <button
              type="button"
              onClick={resetArticles}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#171717]/60 hover:text-[#B52B27] transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>{t("Reset Defaults", "恢复默认文章")}</span>
            </button>
          </div>

          <div className="divide-y divide-[#C69A50]/30 border-t border-b border-[#C69A50]/30">
            {articles.map((item) => {
              const isLatest = latestArticle?.id === item.id;
              return (
                <div
                  key={item.id}
                  className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="flex items-start gap-5">
                    <img
                      src={item.image}
                      alt={item.title[lang]}
                      className="h-20 w-28 object-cover bg-[#171717] shrink-0"
                    />
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em]">
                        {isLatest && (
                          <span className="text-[#B52B27]">
                            {t("Latest Featured", "当前置顶")}
                          </span>
                        )}
                        {isLatest && <span className="text-[#C69A50]">·</span>}
                        <span className="text-[#C69A50]">
                          {item.category[lang]}
                        </span>
                        <span className="text-[#171717]/45 font-normal">
                          · {item.date}
                        </span>
                      </div>

                      <h3 className="font-editorial text-2xl text-[#171717]">
                        {item.title[lang]}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-5 shrink-0">
                    {!isLatest && (
                      <button
                        type="button"
                        onClick={() => setFeaturedArticle(item.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#C69A50] hover:text-[#B52B27] transition-colors"
                      >
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>{t("Pin Latest", "设为置顶")}</span>
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => handleEditSelect(item)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#171717] hover:text-[#B52B27] transition-colors"
                    >
                      <Edit3 className="h-3.5 w-3.5" />
                      <span>{t("Edit", "编辑")}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => deleteArticle(item.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#B52B27]/80 hover:text-[#B52B27] transition-colors"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      <span>{t("Delete", "删除")}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default function AdminPage() {
  return (
    <LanguageProvider>
      <ArticlesProvider>
        <AdminDashboardInner />
      </ArticlesProvider>
    </LanguageProvider>
  );
}
