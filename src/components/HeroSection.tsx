import { Button } from '@/components/ui/button';
import { ArrowRight, Satellite, Rocket, Cpu, Globe, Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* 透明遮罩，让背景显示但不会太亮 */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-900/60 to-gray-950/80 backdrop-blur-sm" />
      
      {/* 前景光晕效果 - 更柔和 */}
      <div className="absolute top-20 left-10 size-64 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 size-80 bg-purple-600/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 bg-cyan-500/3 rounded-full blur-3xl" />
      
      {/* 动态星星 - 增强效果 */}
      <div className="absolute top-1/4 left-1/4 size-1.5 bg-white rounded-full animate-pulse shadow-[0_0_8px_#ffffff]" />
      <div className="absolute top-1/3 right-1/3 size-1 bg-blue-300 rounded-full animate-pulse delay-300 shadow-[0_0_6px_#93c5fd]" />
      <div className="absolute bottom-1/4 left-1/3 size-2 bg-cyan-300 rounded-full animate-pulse delay-500 shadow-[0_0_10px_#67e8f9]" />
      <div className="absolute top-10 right-1/4 size-1 bg-purple-300 rounded-full animate-pulse delay-700 shadow-[0_0_6px_#c4b5fd]" />
      <div className="absolute bottom-1/3 left-10 size-1.5 bg-blue-400 rounded-full animate-pulse delay-1000 shadow-[0_0_8px_#60a5fa]" />
      
      <div className="container relative mx-auto px-4 text-center">
        
        <h1 className="mx-auto max-w-5xl text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
          探索
          <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent mt-2 neon-glow">
            AI宇宙的
          </span>
          <span className="block mt-2 text-white neon-glow">
            下一个前沿
          </span>
        </h1>
        
        <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-300">
          中国首个AI工具生态枢纽站 · 连接100+AI模型与工具 · 为开发者与创作者提供一站式AI解决方案
        </p>
        
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="gap-2 px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 shadow-[0_0_30px_rgba(59,130,246,0.7)] hover:shadow-[0_0_50px_rgba(59,130,246,0.9)] transition-all duration-300 animate-pulse-slow border border-blue-400/30 hover:border-blue-300/50">
            <Rocket className="size-5 animate-bounce-slow" />
            立即发射 · 免费试用
            <ArrowRight className="size-5 animate-pulse" />
          </Button>
          <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-blue-500/50 text-blue-300 hover:bg-blue-950/50">
            <Globe className="size-5" />
            探索AI工具星系
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-xl border border-blue-500/50 bg-blue-950/40 p-6 text-center backdrop-blur-sm shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:border-blue-400/70 hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-blue-300 neon-glow">100+</div>
            <div className="text-sm text-blue-200/90 mt-2">AI模型与工具</div>
          </div>
          <div className="rounded-xl border border-purple-500/50 bg-purple-950/40 p-6 text-center backdrop-blur-sm shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:border-purple-400/70 hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-purple-300 neon-glow">50K+</div>
            <div className="text-sm text-purple-200/90 mt-2">注册开发者</div>
          </div>
          <div className="rounded-xl border border-cyan-500/50 bg-cyan-950/40 p-6 text-center backdrop-blur-sm shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:border-cyan-400/70 hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-cyan-300 neon-glow">10M+</div>
            <div className="text-sm text-cyan-200/90 mt-2">API调用/月</div>
          </div>
          <div className="rounded-xl border border-green-500/50 bg-green-950/40 p-6 text-center backdrop-blur-sm shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:border-green-400/70 hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-green-300 neon-glow">24/7</div>
            <div className="text-sm text-green-200/90 mt-2">太空站运营</div>
          </div>
        </div>
      </div>
    </section>
  );
}