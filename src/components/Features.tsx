import { Database, Code, Cpu, Cloud, Terminal, BarChart, Package, Server, Satellite, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: <Database className="size-8" />,
    title: 'AI模型市场',
    description: '发现、比较、试用100+AI模型，从文生图到代码生成，一站式模型探索与交易平台。',
    color: 'border-blue-500/50 hover:border-blue-500',
    bgColor: 'bg-blue-950/30',
    iconColor: 'text-blue-400',
  },
  {
    icon: <Code className="size-8" />,
    title: 'API集成中心',
    description: '统一API密钥管理，实时调用监控，自动文档生成，支持100+AI服务的标准化接口。',
    color: 'border-purple-500/50 hover:border-purple-500',
    bgColor: 'bg-purple-950/30',
    iconColor: 'text-purple-400',
  },
  {
    icon: <Cpu className="size-8" />,
    title: '开发者工具舱',
    description: '完整SDK、CLI工具、测试沙箱、调试器，为开发者提供全流程AI应用开发支持。',
    color: 'border-cyan-500/50 hover:border-cyan-500',
    bgColor: 'bg-cyan-950/30',
    iconColor: 'text-cyan-400',
  },
  {
    icon: <Package className="size-8" />,
    title: '资源轨道站',
    description: '高质量数据集、预训练模型、教程文档、最佳实践，加速你的AI项目研发。',
    color: 'border-green-500/50 hover:border-green-500',
    bgColor: 'bg-green-950/30',
    iconColor: 'text-green-400',
  },
  {
    icon: <Cloud className="size-8" />,
    title: '协作空间站',
    description: '团队项目管理、版本控制、实时协作、权限管理，打造高效AI研发工作流。',
    color: 'border-yellow-500/50 hover:border-yellow-500',
    bgColor: 'bg-yellow-950/30',
    iconColor: 'text-yellow-400',
  },
  {
    icon: <BarChart className="size-8" />,
    title: '数据分析舱',
    description: '使用统计、性能监控、成本分析、A/B测试，数据驱动优化AI应用效果。',
    color: 'border-pink-500/50 hover:border-pink-500',
    bgColor: 'bg-pink-950/30',
    iconColor: 'text-pink-400',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-gray-950" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl text-white">
            探索
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
              AI太空站核心模块
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-300">
            从模型发现到生产部署，从个人学习到企业级应用，我们提供完整的AI工具生态链。
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl border ${feature.color} ${feature.bgColor} p-8 transition-all hover:shadow-xl hover:shadow-[${feature.iconColor}]/20 backdrop-blur-sm`}
            >
              <div className={`absolute -top-4 left-8 rounded-full border ${feature.color} bg-gray-900 p-3 group-hover:bg-gray-800`}>
                <div className={feature.iconColor}>{feature.icon}</div>
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">{feature.title}</h3>
              <p className="mt-2 text-gray-300">{feature.description}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
              <div className="mt-4 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">
                进入模块 →
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-900/30 to-transparent p-8 md:p-12 backdrop-blur-sm">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-white">🚀 立即启动免费轨道</h3>
              <p className="mt-2 text-gray-300">
                无需信用卡，立即获得AI太空站基础访问权限。体验100+AI工具的无限可能。
              </p>
              <Button className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 px-8 py-6 text-lg">
                <Rocket className="size-5 mr-2" />
                发射免费账户
              </Button>
            </div>
            <div className="rounded-xl border border-blue-500/30 bg-gray-900/50 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Satellite className="size-6 text-blue-400" />
                </div>
                <div>
                  <div className="font-medium text-white">免费轨道包含</div>
                  <div className="text-sm text-gray-300">
                    10,000 API调用/月 • 5个AI模型试用 • 基础数据分析 • 社区支持
                  </div>
                </div>
              </div>
              <div className="mt-4 text-xs text-gray-400">
                升级到付费轨道解锁无限调用、高级模型、团队协作和企业级功能
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}