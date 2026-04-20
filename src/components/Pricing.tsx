import { Button } from '@/components/ui/button';
import { Check, Star, Rocket, Satellite, Users, Building } from 'lucide-react';

const orbits = [
  {
    name: '探索者轨道',
    subtitle: '免费体验',
    price: '免费',
    period: '永久',
    description: '适合个人学习与小型项目',
    features: [
      '10,000 API调用/月',
      '5个基础AI模型访问',
      '个人项目空间',
      '社区支持',
      '基础数据分析',
      '公开API文档',
    ],
    cta: '发射免费账户',
    popular: false,
    color: 'border-blue-500/50',
    bgColor: 'bg-blue-950/20',
    icon: <Satellite className="size-6 text-blue-400" />,
    note: '无需信用卡，立即开始',
  },
  {
    name: '开发者轨道',
    subtitle: '个人专业版',
    price: '¥199',
    period: '每月',
    description: '适合独立开发者与自由职业者',
    features: [
      '100,000 API调用/月',
      '50+AI模型完全访问',
      '优先API队列',
      '高级数据分析工具',
      'API调用监控',
      '电子邮件支持',
      '自定义工作流',
      'SDK与CLI工具',
    ],
    cta: '开始14天免费试用',
    popular: true,
    color: 'border-purple-500 shadow-lg shadow-purple-500/20',
    bgColor: 'bg-purple-950/30',
    icon: <Rocket className="size-6 text-purple-400" />,
    note: '14天无条件退款保证',
  },
  {
    name: '团队轨道',
    subtitle: '协作专业版',
    price: '¥699',
    period: '每月',
    description: '适合初创团队与中小型企业',
    features: [
      '500,000 API调用/月',
      '所有AI模型 + 定制模型',
      '5个团队席位',
      '团队协作空间',
      '高级权限管理',
      '专属Slack频道支持',
      'SLA 99.5%可用性',
      '自定义集成支持',
      '数据导出与备份',
    ],
    cta: '联系团队销售',
    popular: false,
    color: 'border-cyan-500/50',
    bgColor: 'bg-cyan-950/20',
    icon: <Users className="size-6 text-cyan-400" />,
    note: '按需增加席位与调用量',
  },
];

export default function Pricing() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-gray-950" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl text-white">
            选择你的
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
              太空站轨道
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-300">
            透明定价，无隐藏费用。根据你的需求选择合适的轨道，随时升级或降级。
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {orbits.map((orbit) => (
            <div
              key={orbit.name}
              className={`relative rounded-2xl border-2 ${orbit.color} ${orbit.bgColor} p-8 transition-transform hover:scale-[1.02] backdrop-blur-sm`}
            >
              {orbit.popular && (
                <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1.5 text-sm font-medium text-white">
                  <Star className="size-3 fill-current" />
                  最受欢迎
                </div>
              )}
              
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {orbit.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{orbit.name}</h3>
                <div className="mt-1 text-sm text-gray-400">{orbit.subtitle}</div>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-white">{orbit.price}</span>
                  {orbit.period !== '永久' && (
                    <span className="text-gray-400">/{orbit.period}</span>
                  )}
                </div>
                <p className="mt-2 text-gray-300">{orbit.description}</p>
              </div>
              
              <div className="mt-8">
                <Button
                  className={`w-full py-6 text-lg ${orbit.popular ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0' : 'variant-outline border-blue-500/50 text-blue-300 hover:bg-blue-950/50'}`}
                  size="lg"
                >
                  {orbit.cta}
                </Button>
              </div>
              
              <div className="mt-8 space-y-4">
                {orbit.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-5 flex-shrink-0 text-green-400" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-800">
                <div className="text-center text-sm text-gray-400">
                  {orbit.note}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-900/30 to-transparent p-8 md:p-12 backdrop-blur-sm">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-white">🚀 企业舰队轨道</h3>
              <p className="mt-2 text-gray-300">
                需要定制调用量、私有化部署、专属AI模型或企业级SLA？我们的企业解决方案可随您的业务扩展。
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="size-5 text-green-400" />
                  <span className="text-gray-300">无限API调用量</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="size-5 text-green-400" />
                  <span className="text-gray-300">定制AI模型训练</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="size-5 text-green-400" />
                  <span className="text-gray-300">私有化部署选项</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="size-5 text-green-400" />
                  <span className="text-gray-300">专属客户成功经理</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="size-5 text-green-400" />
                  <span className="text-gray-300">SLA 99.9%可用性保证</span>
                </div>
              </div>
              <Button className="mt-6 border-blue-500/50 text-blue-300 hover:bg-blue-950/50" variant="outline">
                预约产品演示
              </Button>
            </div>
            <div className="rounded-xl border border-blue-500/30 bg-gray-900/50 p-6 backdrop-blur-sm">
              <div className="text-center">
                <Building className="size-12 mx-auto text-blue-400 mb-4" />
                <div className="text-3xl font-bold text-white">定制报价</div>
                <div className="text-gray-400 mt-2">根据使用量、团队规模与需求定制</div>
                <div className="mt-6 text-sm text-gray-300">
                  典型企业客户月费：¥5,000 - ¥50,000+
                </div>
                <Button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0">
                  联系企业销售
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400">
            所有轨道均包含社区访问、定期模型更新与基础支持。
            <br />
            需要帮助选择？ <a href="#" className="text-blue-400 hover:underline">比较所有功能 →</a>
          </p>
        </div>
      </div>
    </section>
  );
}