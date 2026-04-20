import { UserButton } from "@clerk/nextjs";
import { Rocket, Cpu, Database, Zap, BarChart, Settings } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-background">
      {/* 导航栏 */}
      <nav className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Rocket className="size-6 text-blue-400" />
              <span className="text-xl font-bold text-white">AI太空站控制台</span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-gray-300 hover:text-white hover:underline text-sm"
              >
                返回首页
              </Link>
              <UserButton />
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* 欢迎部分 */}
        <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-900/30 to-transparent p-8 mb-8 backdrop-blur-sm">
          <h1 className="text-3xl font-bold text-white mb-2">🚀 欢迎回到控制台</h1>
          <p className="text-gray-300 mb-6">
            您正在管理AI太空站资源。查看API用量、管理模型、监控性能。
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="rounded-lg bg-blue-500/20 px-4 py-2">
              <div className="text-sm text-blue-300">当前轨道</div>
              <div className="font-bold text-white">探索者轨道</div>
            </div>
            <div className="rounded-lg bg-purple-500/20 px-4 py-2">
              <div className="text-sm text-purple-300">API调用剩余</div>
              <div className="font-bold text-white">8,247 / 10,000</div>
            </div>
            <div className="rounded-lg bg-green-500/20 px-4 py-2">
              <div className="text-sm text-green-300">活跃模型</div>
              <div className="font-bold text-white">3 / 5</div>
            </div>
          </div>
        </div>

        {/* 功能模块 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/dashboard/api"
            className="group rounded-2xl border border-gray-800 bg-gray-900/50 p-6 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <Zap className="size-8 text-yellow-400" />
              <h3 className="text-xl font-bold text-white">API管理</h3>
            </div>
            <p className="text-gray-300 mb-4">
              查看调用统计、生成API密钥、设置使用限制。
            </p>
            <div className="text-sm text-blue-400 group-hover:underline">
              管理API →
            </div>
          </Link>

          <Link
            href="/dashboard/models"
            className="group rounded-2xl border border-gray-800 bg-gray-900/50 p-6 transition-all hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="size-8 text-purple-400" />
              <h3 className="text-xl font-bold text-white">模型市场</h3>
            </div>
            <p className="text-gray-300 mb-4">
              浏览100+AI模型，试用、比较、集成到您的项目。
            </p>
            <div className="text-sm text-purple-400 group-hover:underline">
              探索模型 →
            </div>
          </Link>

          <Link
            href="/dashboard/analytics"
            className="group rounded-2xl border border-gray-800 bg-gray-900/50 p-6 transition-all hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <BarChart className="size-8 text-green-400" />
              <h3 className="text-xl font-bold text-white">数据分析</h3>
            </div>
            <p className="text-gray-300 mb-4">
              查看使用统计、性能监控、成本分析报告。
            </p>
            <div className="text-sm text-green-400 group-hover:underline">
              查看分析 →
            </div>
          </Link>

          <Link
            href="/dashboard/projects"
            className="group rounded-2xl border border-gray-800 bg-gray-900/50 p-6 transition-all hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <Database className="size-8 text-cyan-400" />
              <h3 className="text-xl font-bold text-white">项目管理</h3>
            </div>
            <p className="text-gray-300 mb-4">
              创建和管理AI项目，团队协作，版本控制。
            </p>
            <div className="text-sm text-cyan-400 group-hover:underline">
              管理项目 →
            </div>
          </Link>

          <Link
            href="/dashboard/billing"
            className="group rounded-2xl border border-gray-800 bg-gray-900/50 p-6 transition-all hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <Settings className="size-8 text-yellow-400" />
              <h3 className="text-xl font-bold text-white">账户设置</h3>
            </div>
            <p className="text-gray-300 mb-4">
              管理订阅、付款方式、团队成员、通知偏好。
            </p>
            <div className="text-sm text-yellow-400 group-hover:underline">
              账户设置 →
            </div>
          </Link>

          <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-4">升级轨道</h3>
            <p className="text-gray-300 mb-6">
              解锁更多API调用、高级模型、团队协作功能。
            </p>
            <Link
              href="/pricing"
              className="inline-block w-full text-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 py-3 font-medium text-white hover:from-blue-700 hover:to-purple-700"
            >
              查看定价计划
            </Link>
          </div>
        </div>

        {/* 快速提示 */}
        <div className="mt-12 rounded-2xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
          <h3 className="text-xl font-bold text-white mb-4">🚀 快速开始</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-gray-700">
              <div className="text-lg font-bold text-white mb-2">1. 获取API密钥</div>
              <p className="text-sm text-gray-300">
                在API管理页面生成您的第一个API密钥。
              </p>
            </div>
            <div className="p-4 rounded-xl border border-gray-700">
              <div className="text-lg font-bold text-white mb-2">2. 选择模型</div>
              <p className="text-sm text-gray-300">
                浏览模型市场，找到适合您项目的AI模型。
              </p>
            </div>
            <div className="p-4 rounded-xl border border-gray-700">
              <div className="text-lg font-bold text-white mb-2">3. 开始集成</div>
              <p className="text-sm text-gray-300">
                使用我们的SDK或直接调用REST API。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}