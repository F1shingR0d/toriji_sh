import initialArticlesJson from "./articles.json";

export interface ArticleItem {
  id: string;
  title: { en: string; zh: string };
  subtitle: { en: string; zh: string };
  category: { en: string; zh: string };
  date: string;
  readTime: { en: string; zh: string };
  author: string;
  image: string;
  featured: boolean;
  published: boolean;
  content: { en: string; zh: string };
}

export const INITIAL_ARTICLES: ArticleItem[] = initialArticlesJson as ArticleItem[];

export const ARTICLE_IMAGE_PRESETS = [
  {
    label: "Palabok Tsukemen",
    url: "/images/palabok-tsukemen.jpg",
  },
  {
    label: "Open-Fire Binchotan Yakitori",
    url: "/images/yakitori-open-fire.jpg",
  },
  {
    label: "Yakitori Skillet (Sisig Style)",
    url: "/images/yakitori-skillet-sisig.jpg",
  },
  {
    label: "Master Griller Vené",
    url: "/images/vene-master-griller.jpg",
  },
  {
    label: "Filipino Feast Supper Club",
    url: "/images/ig-filipino-feast-table.jpg",
  },
  {
    label: "Koibumi Signature Cocktail",
    url: "/images/koibumi-cocktail-poster.jpg",
  },
  {
    label: "That's Shanghai Award 2025",
    url: "/images/founders-award-2025.jpg",
  },
  {
    label: "Hand-Skewering Craft",
    url: "/images/chef-skewers-prep.jpg",
  },
];
