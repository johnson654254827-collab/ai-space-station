"use client";

import { signIn, useSession } from "next-auth/react";
import { Rocket, LogIn, Satellite } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignInPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-950 to-background flex items-center justify-center">
        <div className="text-center">
          <div className="size-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-300">加载中...</p>
        </div>
      </div>
    );
  }

  if (status === "authenticated") {
    return null; // 重定向中
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <Rocket className="size-8 text-blue-400" />
            <Satellite className="size-8 text-purple-400" />
            <span className="text-2xl font-bold text-white">AI太空站</span>
          </Link>
          <h1 className="text-3xl font-bold text-white mb-4">🚀 登录AI太空站</h1>
          <p className="text-gray-300 mb-6">
            使用GitHub账号登录，开启您的AI工具探索之旅
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/20 px-4 py-2 text-sm">
            <span className="text-blue-300">🔐 安全登录 · 公安部备案</span>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8 backdrop-blur-sm mb-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">GitHub 登录</h3>
              <p className="text-gray-300 mb-6">
                使用您的GitHub账号一键登录，安全便捷
              </p>
              <button
                onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
                className="w-full flex items-center justify-center gap-3 rounded-lg bg-gray-800 border border-gray-700 px-6 py-4 font-medium text-white hover:bg-gray-700 transition-colors group"
              >
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="size-6" />
                <span>使用 GitHub 账号登录</span>
                <LogIn className="size-5 text-gray-400 group-hover:text-white transition-colors" />
              </button>
            </div>

            <div className="pt-6 border-t border-gray-700">
              <h4 className="text-lg font-bold text-white mb-3">登录福利</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="size-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                    <span className="text-green-400 text-sm">✓</span>
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-white">10,000次免费API调用</div>
                    <p className="text-sm text-gray-300">立即开始使用AI模型</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="size-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5">
                    <span className="text-blue-400 text-sm">✓</span>
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-white">5个模型免费试用</div>
                    <p className="text-sm text-gray-300">体验不同AI模型能力</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="size-5 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5">
                    <span className="text-purple-400 text-sm">✓</span>
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-white">早期用户专属福利</div>
                    <p className="text-sm text-gray-300">终身折扣与优先支持</p>
                  </div>
                </div>
              </div>
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
            查看平台功能
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl border border-green-500/30 bg-green-950/20">
              <div className="text-lg font-bold text-green-300 mb-1">100+</div>
              <div className="text-sm text-gray-300">AI模型</div>
            </div>
            <div className="p-4 rounded-xl border border-yellow-500/30 bg-yellow-950/20">
              <div className="text-lg font-bold text-yellow-300 mb-1">50K+</div>
              <div className="text-sm text-gray-300">开发者</div>
            </div>
          </div>
          
          <p className="text-gray-400 text-sm">
            AI太空站 · 公安部备案 · 中国首个AI工具生态枢纽平台
          </p>
          <p className="text-gray-500 text-xs mt-2">
            通过GitHub OAuth安全认证，我们不会获取您的密码
          </p>
        </div>
      </div>
    </div>
  );
}