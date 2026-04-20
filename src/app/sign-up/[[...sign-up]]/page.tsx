import { SignUp } from "@clerk/nextjs";
import { Rocket, Satellite } from "lucide-react";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-6">
            <Rocket className="size-8 text-blue-400" />
            <Satellite className="size-8 text-purple-400" />
            <span className="text-2xl font-bold text-white">AI太空站</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">加入AI太空站</h1>
          <p className="text-gray-300">
            开启您的AI工具探索之旅，连接100+模型与工具
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/20 px-4 py-2 text-sm">
            <span className="text-blue-300">🚀 公安部备案 · 安全可信</span>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
          <SignUp
            appearance={{
              elements: {
                formButtonPrimary: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
                card: "bg-transparent shadow-none",
                headerTitle: "text-white",
                headerSubtitle: "text-gray-300",
                socialButtonsBlockButton: "border-gray-700 hover:bg-gray-800",
                formFieldLabel: "text-gray-300",
                formFieldInput: "bg-gray-800 border-gray-700 text-white",
                footerActionLink: "text-blue-400 hover:text-blue-300",
              },
            }}
          />
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400">
            已有账户？{" "}
            <Link href="/sign-in" className="text-blue-400 hover:underline font-medium">
              立即登录
            </Link>
          </p>
          <Link
            href="/"
            className="inline-block mt-4 text-sm text-gray-400 hover:text-white hover:underline"
          >
            ← 返回首页
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-lg font-bold text-white mb-4 text-center">注册即享</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-green-500/30 bg-green-950/20">
              <div className="text-lg font-bold text-green-300 mb-1">10,000次</div>
              <div className="text-sm text-gray-300">免费API调用</div>
            </div>
            <div className="p-4 rounded-xl border border-yellow-500/30 bg-yellow-950/20">
              <div className="text-lg font-bold text-yellow-300 mb-1">5个模型</div>
              <div className="text-sm text-gray-300">免费试用</div>
            </div>
            <div className="p-4 rounded-xl border border-blue-500/30 bg-blue-950/20">
              <div className="text-lg font-bold text-blue-300 mb-1">社区支持</div>
              <div className="text-sm text-gray-300">开发者论坛</div>
            </div>
            <div className="p-4 rounded-xl border border-purple-500/30 bg-purple-950/20">
              <div className="text-lg font-bold text-purple-300 mb-1">早期福利</div>
              <div className="text-sm text-gray-300">终身折扣</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}