import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import StarsBackground from "@/components/StarsBackground";
import MouseFollower from "@/components/MouseFollower";
import AuthProvider from "@/components/AuthProvider";
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
      <html
        lang="zh-CN"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col bg-gray-950 text-white relative overflow-x-hidden">
          {/* 太空站科技背景 - 增强版 */}
          <div className="space-station-bg space-grid">
            {/* 全息网格 */}
            <div className="hologram-grid"></div>
            
            {/* 增强发光光晕 */}
            <div className="glow energy-pulse" style={{ top: '10%', left: '15%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)', filter: 'blur(60px)' }}></div>
            <div className="glow energy-pulse-purple" style={{ top: '60%', right: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)', filter: 'blur(70px)' }}></div>
            <div className="glow energy-pulse-cyan" style={{ bottom: '20%', left: '30%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)', filter: 'blur(50px)' }}></div>
            
            {/* 超新星爆炸效果 */}
            <div className="supernova" style={{ top: '20%', right: '20%', width: '100px', height: '100px', animationDelay: '0s' }}></div>
            <div className="supernova" style={{ bottom: '30%', left: '20%', width: '80px', height: '80px', animationDelay: '2s' }}></div>
            
            {/* 增强太空轨道环 */}
            <div className="orbit-ring slow energy-pulse" style={{ top: '30%', left: '30%', width: '800px', height: '800px', border: '2px solid rgba(59, 130, 246, 0.5)' }}></div>
            <div className="orbit-ring medium energy-pulse-purple" style={{ top: '40%', left: '40%', width: '600px', height: '600px', border: '2px solid rgba(139, 92, 246, 0.5)' }}></div>
            <div className="orbit-ring fast energy-pulse-cyan" style={{ top: '50%', left: '50%', width: '400px', height: '400px', border: '2px solid rgba(6, 182, 212, 0.5)' }}></div>
            
            {/* 增强数据流效果 */}
            <div className="data-stream-enhanced" style={{ left: '10%', animationDelay: '0s', animation: 'data-stream-flow-enhanced 3s linear infinite' }}></div>
            <div className="data-stream-enhanced" style={{ left: '25%', animationDelay: '0.3s', animation: 'data-stream-flow-enhanced 2.5s linear infinite' }}></div>
            <div className="data-stream-enhanced" style={{ left: '40%', animationDelay: '0.6s', animation: 'data-stream-flow-enhanced 4s linear infinite' }}></div>
            <div className="data-stream-enhanced" style={{ right: '10%', animationDelay: '0.9s', animation: 'data-stream-flow-enhanced 3.5s linear infinite' }}></div>
            <div className="data-stream-enhanced" style={{ right: '25%', animationDelay: '1.2s', animation: 'data-stream-flow-enhanced 2s linear infinite' }}></div>
            
            {/* 彗星效果 */}
            <div className="comet" style={{ top: '15%', left: '5%', animationDelay: '0s' }}></div>
            <div className="comet" style={{ top: '70%', left: '10%', animationDelay: '3s', transform: 'rotate(45deg)' }}></div>
            
            {/* 量子点效果 */}
            <div className="quantum-dot" style={{ top: '25%', left: '20%', animationDelay: '0s' }}></div>
            <div className="quantum-dot" style={{ top: '65%', left: '70%', animationDelay: '1s' }}></div>
            <div className="quantum-dot" style={{ top: '45%', left: '85%', animationDelay: '2s' }}></div>
            <div className="quantum-dot" style={{ top: '85%', left: '40%', animationDelay: '3s' }}></div>
            
            {/* 新增效果：增强光晕 */}
            <div className="glow enhanced" style={{ top: '40%', left: '60%', width: '600px', height: '600px', animationDelay: '1s' }}></div>
            <div className="glow spectrum" style={{ top: '80%', left: '80%', width: '400px', height: '400px', animationDelay: '2s' }}></div>
            
            {/* 新增效果：更多数据流 */}
            <div className="data-stream thick" style={{ left: '5%', animationDelay: '0.2s' }}></div>
            <div className="data-stream double" style={{ left: '50%', animationDelay: '0.7s' }}></div>
            <div className="data-stream binary" style={{ left: '75%', animationDelay: '1.1s' }}></div>
            <div className="data-stream thick" style={{ right: '5%', animationDelay: '1.4s' }}></div>
            <div className="data-stream double" style={{ right: '50%', animationDelay: '1.8s' }}></div>
            
            {/* 新增效果：额外轨道环 */}
            <div className="orbit-ring enhanced" style={{ top: '60%', left: '20%', width: '500px', height: '500px', animationDelay: '0s' }}></div>
            <div className="orbit-ring dashed" style={{ top: '20%', left: '70%', width: '300px', height: '300px', animationDelay: '1s' }}></div>
            
            {/* 增强扫描线效果 */}
            <div className="scanlines-enhanced"></div>
          </div>
          
          {/* 鼠标跟随效果 */}
          <MouseFollower />
          
          {/* 主要内容 */}
          <div className="relative z-10">
            <AuthProvider>
              {children}
            </AuthProvider>
          </div>
          
          {/* 动态生成星星 */}
          <StarsBackground />
        </body>
      </html>
  );
}
