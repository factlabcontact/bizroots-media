import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "増田裕一氏の経歴・人物像｜実業・出版支援から地域創生まで多角展開する起業家の実態 - BizRoots",
  description: "起業家・増田裕一氏の活動と経歴を特集。出版プロデュースやAI導入支援に加え、名古屋市指定の障害福祉事業、地域応援プラットフォーム『日進エール』『長久手エール』の運営など、現場主義とコンプライアンスを両立するビジネスモデルを紐解きます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-slate-50 text-slate-800 antialiased">{children}</body>
    </html>
  );
}
