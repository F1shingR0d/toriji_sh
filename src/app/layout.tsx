import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Inter,
  Noto_Serif_SC,
  Noto_Sans_SC,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  variable: "--font-noto-serif-sc",
  weight: ["500", "600", "700"],
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-noto-sans-sc",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title:
    "TORI-JI (托利齐) | The Art of Yakitori · Japanese × Filipino Izakaya in Shanghai",
  description:
    "Named Japanese Restaurant of the Year at the That's Shanghai Food & Drink Awards 2025. Experience handcrafted binchotan yakitori, Boneless Chicken Inasal, sizzling Yakitori Sisig Skillets, Palabok Tsukemen, and Koibumi cocktails at 549 Xinhui Road, Putuo District, Shanghai.",
  keywords: [
    "Tori-Ji Shanghai",
    "Tori-Ji Japanese Restaurant Shanghai",
    "Tori-Ji Izakaya",
    "toriji_sh",
    "Japanese Filipino restaurant Shanghai",
    "yakitori Shanghai",
    "Japanese restaurant Putuo Shanghai",
    "Filipino restaurant Shanghai",
    "549 Xinhui Road Shanghai",
    "托利齐 烧鸟大师 居酒屋",
  ],
  openGraph: {
    title: "TORI-JI | Japanese × Filipino Izakaya in Shanghai (@toriji_sh)",
    description:
      "Winner of Japanese Restaurant of the Year (That's Shanghai Food & Drink Awards 2025). Open-fire binchotan yakitori meets soulful Filipino flavors at 549 Xinhui Rd, Putuo, Shanghai.",
    url: "https://www.instagram.com/toriji_sh/",
    siteName: "TORI-JI Shanghai",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/yakitori-open-fire.jpg",
        width: 1200,
        height: 800,
        alt: "Open-fire binchotan yakitori at Tori-Ji Izakaya, Shanghai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TORI-JI | Japanese × Filipino Izakaya in Shanghai",
    description:
      "Winner: Japanese Restaurant of the Year (That's Shanghai Awards 2025). Binchotan yakitori, Filipino flavors & cocktails at 549 Xinhui Rd, Shanghai.",
    images: ["/images/yakitori-open-fire.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "TORI-JI (Tori-Ji·托利齐·烧鸟大师小酒馆·居酒屋)",
    alternateName: ["Tori-Ji Shanghai", "toriji_sh"],
    image: [
      "/images/yakitori-open-fire.jpg",
      "/images/yakitori-skillet-sisig.jpg",
      "/images/palabok-tsukemen.jpg",
    ],
    description:
      "Award-winning Japanese-Filipino izakaya in Shanghai serving open-fire binchotan yakitori, Boneless Chicken Inasal, sizzling Yakitori Skillet (Sisig style), Palabok Tsukemen, and signature shochu sours.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Room 1-3, No. 549 Xinhui Road, Putuo District",
      addressLocality: "Shanghai",
      addressCountry: "CN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.2415,
      longitude: 121.4408,
    },
    telephone: "+86-131-2207-7283",
    servesCuisine: ["Japanese", "Yakitori", "Izakaya", "Filipino"],
    award:
      "Japanese Restaurant of the Year — 23rd That's Shanghai Food & Drink Awards 2025",
    founder: [
      { "@type": "Person", name: "Czarina Labagriel" },
      { "@type": "Person", name: "Venedict Labagriel" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
          "Monday",
        ],
        opens: "17:00",
        closes: "02:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/toriji_sh/",
      "https://www.facebook.com/share/17GsLTKhLh/?mibextid=wwXIfr",
    ],
  };

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${notoSerifSC.variable} ${notoSansSC.variable}`}
    >
      <body className="antialiased selection:bg-[#B52B27] selection:text-[#F2E9D9]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
