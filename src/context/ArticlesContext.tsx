"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { INITIAL_ARTICLES, ArticleItem } from "@/data/articles-data";

const STORAGE_KEY = "toriji_articles_v1";

interface ArticlesContextType {
  articles: ArticleItem[];
  publishedArticles: ArticleItem[];
  latestArticle: ArticleItem | null;
  loading: boolean;
  publishArticle: (article: Omit<ArticleItem, "id"> & { id?: string }) => Promise<ArticleItem>;
  updateArticle: (article: ArticleItem) => Promise<void>;
  deleteArticle: (id: string) => Promise<void>;
  setFeaturedArticle: (id: string) => Promise<void>;
  resetArticles: () => Promise<void>;
}

const ArticlesContext = createContext<ArticlesContextType | undefined>(undefined);

export function ArticlesProvider({ children }: { children: React.ReactNode }) {
  const [articles, setArticles] = useState<ArticleItem[]>(INITIAL_ARTICLES);
  const [loading, setLoading] = useState<boolean>(true);

  const syncLocal = (list: ArticleItem[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch {
      // ignore storage quota errors
    }
  };

  const fetchArticles = useCallback(async () => {
    try {
      const res = await fetch("/api/articles", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data.articles) && data.articles.length > 0) {
          setArticles(data.articles);
          syncLocal(data.articles);
          setLoading(false);
          return;
        }
      }
    } catch {
      // fallback to localStorage
    }

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setArticles(parsed);
        }
      }
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const publishArticle = async (
    input: Omit<ArticleItem, "id"> & { id?: string }
  ): Promise<ArticleItem> => {
    const newArticle: ArticleItem = {
      ...input,
      id: input.id || `article-${Date.now()}`,
    };

    const nextList = [
      newArticle,
      ...articles.map((item) =>
        newArticle.featured ? { ...item, featured: false } : item
      ),
    ];

    setArticles(nextList);
    syncLocal(nextList);

    try {
      const res = await fetch("/api/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newArticle),
      });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data.articles)) {
          setArticles(data.articles);
          syncLocal(data.articles);
        }
      }
    } catch {
      // local state already updated
    }

    return newArticle;
  };

  const updateArticle = async (updated: ArticleItem) => {
    const nextList = articles.map((item) => {
      if (item.id === updated.id) return updated;
      if (updated.featured) return { ...item, featured: false };
      return item;
    });

    setArticles(nextList);
    syncLocal(nextList);

    try {
      await fetch("/api/articles", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ article: updated }),
      });
    } catch {
      // local state already updated
    }
  };

  const deleteArticle = async (id: string) => {
    const filtered = articles.filter((item) => item.id !== id);
    if (filtered.length > 0 && !filtered.some((a) => a.featured && a.published)) {
      const firstPub = filtered.find((a) => a.published);
      if (firstPub) firstPub.featured = true;
    }

    setArticles(filtered);
    syncLocal(filtered);

    try {
      await fetch(`/api/articles?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
    } catch {
      // local state already updated
    }
  };

  const setFeaturedArticle = async (id: string) => {
    const target = articles.find((a) => a.id === id);
    if (!target) return;
    await updateArticle({ ...target, featured: true, published: true });
  };

  const resetArticles = async () => {
    setArticles(INITIAL_ARTICLES);
    syncLocal(INITIAL_ARTICLES);
    try {
      await fetch("/api/articles", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ articles: INITIAL_ARTICLES }),
      });
    } catch {
      // ignore
    }
  };

  const publishedArticles = articles.filter((a) => a.published);
  const latestArticle =
    publishedArticles.find((a) => a.featured) || publishedArticles[0] || null;

  return (
    <ArticlesContext.Provider
      value={{
        articles,
        publishedArticles,
        latestArticle,
        loading,
        publishArticle,
        updateArticle,
        deleteArticle,
        setFeaturedArticle,
        resetArticles,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
}

export function useArticles() {
  const context = useContext(ArticlesContext);
  if (!context) {
    throw new Error("useArticles must be used within an ArticlesProvider");
  }
  return context;
}
