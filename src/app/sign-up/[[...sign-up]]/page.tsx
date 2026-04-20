import { Rocket, Satellite } from "lucide-react";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 mb-6">
            <Rocket className="size-8 text-blue-400" />
            <Satellite className="size-8 text-purple-400" />
            <span className="text-2xl font-bold text-white">AI太空站</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">🚀 成为首批探索者</h1>
          <p className="text-gray-300 mb-6">
            加入AI太空站等待列表，获取平台上线后的优先访问权与专属福利
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/20 px-4 py-2 text-sm">
            <span className="text-blue-300">🚀 公安部备案 · 安全可信</span>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm mb-8">
          <div className="space-y-6">
            <div className="text-left">
              <h3 className="text-xl font-bold text-white mb-4">等待列表福利</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="size-6 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                    <span className="text-green-400 text-sm">✓</span>
                  </div>
                  <div>
                    <div className="font-medium text-white">终身订阅折扣</div>
                    <p className="text-sm text-gray-300">早期用户享受永久价格优惠</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="size-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5">
                    <span className="text-blue-400 text-sm">✓</span>
                  </div>
                  <div>
                    <div className="font-medium text-white">优先技术支持</div>
                    <p className="text-sm text-gray-300">专属客服通道与快速响应</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="size-6 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5">
                    <span className="text-purple-400 text-sm">✓</span>
                  </div>
                  <div>
                    <div className="font-medium text-white">参与功能设计</div>
                    <p className="text-sm text-gray-300">投票决定新功能与产品方向</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="size-6 rounded-full bg-yellow-500/20 flex items-center justify-center mt-0.5">
                    <span className="text-yellow-400 text-sm">✓</span>
                  </div>
                  <div>
                    <div className="font-medium text-white">独家内测资格</div>
                    <p className="text-sm text-gray-300">优先体验新功能与模型</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-gray-700">
              <h4 className="text-lg font-bold text-white mb-3">加入方式</h4>
              <p className="text-gray-300 text-sm mb-4">
                在首页填写等待列表表单，我们将在平台上线时第一时间通知您
              </p>
              <Link
                href="/#waitlist"
                className="inline-block w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 py-3 font-medium text-white hover:from-blue-700 hover:to-purple-700"
              >
                前往等待列表表单
              </Link>
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
          
          <div className="col-span-2 mt-6">
            <p className="text-gray-400 text-sm">
              AI太空站 · 公安部备案 · 中国首个AI工具生态枢纽平台
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}