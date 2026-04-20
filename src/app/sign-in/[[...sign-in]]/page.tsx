import { Rocket } from "lucide-react";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <Rocket className="size-8 text-blue-400" />
            <span className="text-2xl font-bold text-white">AI太空站</span>
          </Link>
          <h1 className="text-3xl font-bold text-white mb-4">🚀 认证系统即将上线</h1>
          <p className="text-gray-300 mb-6">
            AI太空站正在完善用户认证系统。目前网站完全公开访问，您可以：
          </p>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm mb-8">
          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 rounded-xl border border-blue-500/30 bg-blue-950/20">
              <div className="text-xl font-bold text-blue-300 mb-2">1. 浏览平台功能</div>
              <p className="text-sm text-gray-300">
                了解AI模型市场、API集成中心等核心模块
              </p>
            </div>
            <div className="p-4 rounded-xl border border-purple-500/30 bg-purple-950/20">
              <div className="text-xl font-bold text-purple-300 mb-2">2. 加入等待列表</div>
              <p className="text-sm text-gray-300">
                成为首批用户，享受专属福利与优先技术支持
              </p>
            </div>
            <div className="p-4 rounded-xl border border-green-500/30 bg-green-950/20">
              <div className="text-xl font-bold text-green-300 mb-2">3. 查看控制台预览</div>
              <p className="text-sm text-gray-300">
                访问仪表板了解平台界面和功能规划
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-medium text-white hover:from-blue-700 hover:to-purple-700 text-center"
          >
            返回首页
          </Link>
          <Link
            href="/dashboard"
            className="rounded-lg border border-gray-700 bg-gray-800 px-6 py-3 font-medium text-white hover:bg-gray-700 text-center"
          >
            查看控制台预览
          </Link>
          <Link
            href="/#waitlist"
            className="rounded-lg border border-green-700 bg-green-900/30 px-6 py-3 font-medium text-green-300 hover:bg-green-900/50 text-center"
          >
            加入等待列表
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            AI太空站 · 公安部备案 · 中国首个AI工具生态枢纽平台
          </p>
          <p className="text-gray-500 text-xs mt-2">
            用户认证系统将于正式上线时开放
          </p>
        </div>
      </div>
    </div>
  );
}