import { SignIn } from "@clerk/nextjs";
import { Rocket } from "lucide-react";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <Rocket className="size-8 text-blue-400" />
            <span className="text-2xl font-bold text-white">AI太空站</span>
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">欢迎回到太空站</h1>
          <p className="text-gray-300">
            登录您的账户，继续探索AI宇宙
          </p>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
          <SignIn
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
            还没有账户？{" "}
            <Link href="/sign-up" className="text-blue-400 hover:underline font-medium">
              立即注册
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
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-4 rounded-xl border border-blue-500/30 bg-blue-950/20">
              <div className="text-2xl font-bold text-blue-300">100+</div>
              <div className="text-sm text-gray-300">AI模型</div>
            </div>
            <div className="p-4 rounded-xl border border-purple-500/30 bg-purple-950/20">
              <div className="text-2xl font-bold text-purple-300">50K+</div>
              <div className="text-sm text-gray-300">开发者</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}