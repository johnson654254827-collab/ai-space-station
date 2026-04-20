import { Button } from '@/components/ui/button';
import { ArrowRight, Satellite, Rocket, Cpu, Globe, Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-gray-950 to-background">
      {/* Space background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      <div className="absolute top-20 left-10 size-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 size-80 bg-purple-600/10 rounded-full blur-3xl" />
      
      {/* Stars */}
      <div className="absolute top-1/4 left-1/4 size-1 bg-white rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-1/3 size-1 bg-blue-300 rounded-full animate-pulse delay-300" />
      <div className="absolute bottom-1/4 left-1/3 size-1.5 bg-cyan-300 rounded-full animate-pulse delay-500" />
      
      <div className="container relative mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-background/80 px-4 py-2 text-sm backdrop-blur-sm mb-6">
          <Satellite className="size-4 text-blue-400" />
          <span className="text-blue-300">🚀 已获公安部备案 · AI太空站</span>
          <Zap className="size-4 text-yellow-400" />
        </div>
        
        <h1 className="mx-auto max-w-5xl text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
          探索
          <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent mt-2">
            AI宇宙的
          </span>
          <span className="block mt-2">
            下一个前沿
          </span>
        </h1>
        
        <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-300">
          中国首个AI工具生态枢纽站 · 连接100+AI模型与工具 · 为开发者与创作者提供一站式AI解决方案
        </p>
        
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="gap-2 px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0">
            <Rocket className="size-5" />
            立即发射 · 免费试用
            <ArrowRight className="size-5" />
          </Button>
          <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-blue-500/50 text-blue-300 hover:bg-blue-950/50">
            <Globe className="size-5" />
            探索AI工具星系
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-xl border border-blue-500/30 bg-blue-950/30 p-6 text-center backdrop-blur-sm">
            <div className="text-3xl font-bold text-blue-300">100+</div>
            <div className="text-sm text-blue-200/80">AI模型与工具</div>
          </div>
          <div className="rounded-xl border border-purple-500/30 bg-purple-950/30 p-6 text-center backdrop-blur-sm">
            <div className="text-3xl font-bold text-purple-300">50K+</div>
            <div className="text-sm text-purple-200/80">注册开发者</div>
          </div>
          <div className="rounded-xl border border-cyan-500/30 bg-cyan-950/30 p-6 text-center backdrop-blur-sm">
            <div className="text-3xl font-bold text-cyan-300">10M+</div>
            <div className="text-sm text-cyan-200/80">API调用/月</div>
          </div>
          <div className="rounded-xl border border-green-500/30 bg-green-950/30 p-6 text-center backdrop-blur-sm">
            <div className="text-3xl font-bold text-green-300">24/7</div>
            <div className="text-sm text-green-200/80">太空站运营</div>
          </div>
        </div>
      </div>
    </section>
  );
}