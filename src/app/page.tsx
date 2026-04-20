import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Gallery from '@/components/Gallery';
import FAQ from '@/components/FAQ';
import WaitlistForm from '@/components/WaitlistForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-background">
      <HeroSection />
      <Features />
      <Gallery />
      <Pricing />
      
      {/* 等待列表部分 */}
      <section className="py-20 bg-gradient-to-b from-gray-950/80 to-background/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl text-white">
              抢先加入
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
                AI太空站早期访问
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
              成为首批探索者，享受专属福利与优先技术支持。
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <WaitlistForm />
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-blue-500/30 bg-blue-950/20 p-6 text-center backdrop-blur-sm">
              <div className="text-2xl font-bold text-blue-300 mb-2">终身折扣</div>
              <p className="text-sm text-gray-300">早期用户享受永久订阅折扣</p>
            </div>
            <div className="rounded-xl border border-purple-500/30 bg-purple-950/20 p-6 text-center backdrop-blur-sm">
              <div className="text-2xl font-bold text-purple-300 mb-2">优先支持</div>
              <p className="text-sm text-gray-300">专属技术支持通道与快速响应</p>
            </div>
            <div className="rounded-xl border border-green-500/30 bg-green-950/20 p-6 text-center backdrop-blur-sm">
              <div className="text-2xl font-bold text-green-300 mb-2">参与设计</div>
              <p className="text-sm text-gray-300">投票决定新功能与产品方向</p>
            </div>
          </div>
        </div>
      </section>
      
      <FAQ />
      
      <footer className="py-12 text-center text-sm text-gray-400 border-t border-gray-800 mt-12 bg-gray-950/90 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <p>© 2026 AI太空站 版权所有，渝ICP备2026006660号</p>
          <p className="mt-2">中国首个AI工具生态枢纽平台 · 连接100+AI模型与工具</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs">
            <a href="#" className="text-gray-400 hover:text-white hover:underline">服务协议</a>
            <a href="#" className="text-gray-400 hover:text-white hover:underline">隐私政策</a>
            <a href="#" className="text-gray-400 hover:text-white hover:underline">Cookie政策</a>
            <a href="#" className="text-gray-400 hover:text-white hover:underline">内容规范</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
