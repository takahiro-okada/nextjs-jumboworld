import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/layouts/Header";
import Footer from "./_components/layouts/Footer";
import { Noto_Sans_JP } from "next/font/google";

export const metadata: Metadata = {
  title:
    "JUMBO WORLD | 知多半島・半田市でシステム開発・Web制作・Shopify構築の支援",
  description:
    "知多半島・半田市の企業を中心に、JUMBO WORLDが高品質なWebサイト制作・Shopify ECサイト構築サービスを提供いたします。",
};

const NotoSansJP = Noto_Sans_JP({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${NotoSansJP.className} bg-[#F8F8F8]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
