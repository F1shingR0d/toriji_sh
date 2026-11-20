import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { INITIAL_ARTICLES, ArticleItem } from "@/data/articles-data";

const ARTICLES_FILE_PATH = path.join(process.cwd(), "src", "data", "articles.json");

async function readArticles(): Promise<ArticleItem[]> {
  try {
    const raw = await fs.readFile(ARTICLES_FILE_PATH, "utf-8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed;
    }
    return INITIAL_ARTICLES;
  } catch {
    return INITIAL_ARTICLES;
  }
}

async function writeArticles(articles: ArticleItem[]): Promise<void> {
  try {
    await fs.writeFile(ARTICLES_FILE_PATH, JSON.stringify(articles, null, 2), "utf-8");
  } catch {
    // Fallback if filesystem is read-only in a deployed serverless environment
  }
}

export async function GET() {
  const articles = await readArticles();
  return NextResponse.json({ articles });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const current = await readArticles();

    const newArticle: ArticleItem = {
      id: body.id || `article-${Date.now()}`,
      title: {
        en: body.title?.en || "Untitled Article",
        zh: body.title?.zh || body.title?.en || "未命名文章",
      },
      subtitle: {
        en: body.subtitle?.en || "",
        zh: body.subtitle?.zh || body.subtitle?.en || "",
      },
      category: {
        en: body.category?.en || "JOURNAL",
        zh: body.category?.zh || body.category?.en || "最新动态",
      },
      date: body.date || new Date().toISOString().split("T")[0],
      readTime: {
        en: body.readTime?.en || "3 min read",
        zh: body.readTime?.zh || "3 分钟阅读",
      },
      author: body.author || "Tori-Ji Editorial",
      image: body.image || "/images/yakitori-open-fire.jpg",
      featured: Boolean(body.featured),
      published: body.published !== undefined ? Boolean(body.published) : true,
      content: {
        en: body.content?.en || "",
        zh: body.content?.zh || body.content?.en || "",
      },
    };

    const updated = current.map((item) =>
      newArticle.featured ? { ...item, featured: false } : item
    );

    const nextList = [newArticle, ...updated];
    await writeArticles(nextList);

    return NextResponse.json({ articles: nextList, created: newArticle });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to publish article", details: String(error) },
      { status: 400 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    if (Array.isArray(body.articles)) {
      await writeArticles(body.articles);
      return NextResponse.json({ articles: body.articles });
    }

    const updatedArticle: ArticleItem = body.article;
    if (!updatedArticle || !updatedArticle.id) {
      return NextResponse.json({ error: "Missing article id" }, { status: 400 });
    }

    const current = await readArticles();
    const nextList = current.map((item) => {
      if (item.id === updatedArticle.id) {
        return updatedArticle;
      }
      if (updatedArticle.featured) {
        return { ...item, featured: false };
      }
      return item;
    });

    await writeArticles(nextList);
    return NextResponse.json({ articles: nextList });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update article", details: String(error) },
      { status: 400 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "Missing id" }, { status: 400 });
    }

    const current = await readArticles();
    const filtered = current.filter((item) => item.id !== id);

    // Ensure at least one published article is marked featured if any exist
    if (filtered.length > 0 && !filtered.some((a) => a.featured && a.published)) {
      const firstPub = filtered.find((a) => a.published);
      if (firstPub) firstPub.featured = true;
    }

    await writeArticles(filtered);
    return NextResponse.json({ articles: filtered });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete article", details: String(error) },
      { status: 400 }
    );
  }
}
