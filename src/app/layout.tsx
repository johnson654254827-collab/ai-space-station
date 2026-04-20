import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI太空站 - 中国首个AI工具生态枢纽平台",
  description: "公安部备案的AI工具生态枢纽平台，整合100+AI模型与工具，为开发者与创作者提供一站式AI解决方案。",
  keywords: ["AI工具", "AI模型市场", "API集成", "开发者平台", "AI太空站", "公安部备案"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      appearance={{
        variables: {
          colorPrimary: "#3b82f6",
          colorText: "#ffffff",
          colorBackground: "#0f172a",
          colorInputBackground: "#1e293b",
        },
        elements: {
          formButtonPrimary: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
        },
      }}
    >
      <html
        lang="zh-CN"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col bg-gray-950 text-white">{children}</body>
      </html>
    </ClerkProvider>
  );
}
