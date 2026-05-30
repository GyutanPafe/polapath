import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "資金調達 個別相談会｜北千住｜POLAPATH - 即日対応・事業融資から個人の資金繰りまで",
  description:
    "北千住駅近くで7月19日開催。即日対応可能・秘密厳守。事業融資・つなぎ資金・個人の資金繰りから、消費者金融（アコム・アイフル等）やカードローンの審査落ち対策、借入の一本化・おまとめ相談まで、最適な資金調達方法を無料で個別提案。法人も個人も成功報酬型だから安心。",
  keywords: [
    "資金調達",
    "北千住",
    "事業融資",
    "相談",
    "足立区",
    "東京",
    "資金繰り",
    "即日対応",
    "秘密厳守",
    "つなぎ融資",
    "個人融資",
    "改善",
    "融資",
    "個人",
    "補助金",
    "助成金",
    "創業融資",
    "個別相談",
    "消費者金融",
    "アコム",
    "アイフル",
    "カードローン",
    "おまとめローン",
    "審査落ち",
    "他社借入",
    "借入一本化",
  ],
  openGraph: {
    title: "資金調達 個別相談会｜POLAPATH",
    description:
      "事業資金から個人の資金繰り、消費者金融（アコム・アイフル等）の審査落ち対策やおまとめ相談まで。最適な資金調達方法を無料で個別提案。北千住駅近くで7月19日開催。",
    type: "website",
    locale: "ja_JP",
    url: "https://polapath.jp",
    images: [
      {
        url: "https://polapath.jp/logo.png",
        width: 512,
        height: 512,
        alt: "POLAPATH Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "資金調達 個別相談会｜POLAPATH",
    description: "最適な資金調達方法を無料で個別提案。北千住駅近くで7月19日開催。",
    images: ["https://polapath.jp/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&family=Noto+Sans+JP:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD 構造化データ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "POLAPATH 資金調達 個別相談会",
              description:
                "事業資金から個人の資金繰りまで、一人ひとりに合った資金調達方法を無料で個別提案する相談会です。",
              startDate: "2026-07-19T10:00:00+09:00",
              endDate: "2026-07-19T18:00:00+09:00",
              location: {
                "@type": "Place",
                name: "北千住駅近くの貸し会議室",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "足立区",
                  addressRegion: "東京都",
                  addressCountry: "JP",
                },
              },
              isAccessibleForFree: true,
              organizer: {
                "@type": "Organization",
                name: "POLAPATH",
                email: "contact@gyutanpafe.com",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
