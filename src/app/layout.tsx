import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechCorp - 혁신적인 IT 솔루션",
  description: "최신 기술로 비즈니스의 미래를 선도합니다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-white">
            <div className="container mx-auto px-4">
              <div className="flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center">
                  <span className="text-xl font-bold text-gray-900">TechCorp</span>
                </Link>
                <div className="flex items-center space-x-8">
                  <Link href="/" className="text-sm font-semibold text-gray-600 hover:text-gray-900">
                    홈
                  </Link>
                  <Link href="/about" className="text-sm font-semibold text-gray-600 hover:text-gray-900">
                    회사소개
                  </Link>
                  <Link href="/services" className="text-sm font-semibold text-gray-600 hover:text-gray-900">
                    서비스
                  </Link>
                  <Link href="/contact" className="text-sm font-semibold text-gray-600 hover:text-gray-900">
                    문의하기
                  </Link>
                  <SearchBar />
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
