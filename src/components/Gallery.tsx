import { Button } from '@/components/ui/button';
import { Briefcase, GitBranch, Building, Users, Code2, Star, ExternalLink, Zap } from 'lucide-react';

// 太空站项目案例
const projects = [
  {
    id: 1,
    title: '智能客服AI集成',
    type: '企业解决方案',
    company: '某电商平台',
    description: '集成GPT-4、文心一言等多模型，实现智能客服自动化，响应时间降低80%。',
    tools: ['GPT-4', '语音识别', '情感分析'],
    impact: '月处理100万+咨询',
    color: 'from-blue-500/20 to-cyan-500/20',
    badgeColor: 'bg-blue-500/20 text-blue-300',
  },
  {
    id: 2,
    title: 'AI代码助手开源项目',
    type: '开发者工具',
    company: '开源社区',
    description: '基于CodeLlama开发的VS Code插件，支持智能代码补全、错误检测、自动重构。',
    tools: ['CodeLlama', 'VS Code API', 'TypeScript'],
    impact: 'GitHub 5k+ Stars',
    color: 'from-purple-500/20 to-pink-500/20',
    badgeColor: 'bg-purple-500/20 text-purple-300',
  },
  {
    id: 3,
    title: '医疗影像分析系统',
    type: '医疗AI',
    company: '某三甲医院',
    description: '使用深度学习模型进行CT影像自动分析，辅助医生诊断肺部疾病。',
    tools: ['ResNet-50', 'PyTorch', 'DICOM处理'],
    impact: '诊断准确率提升25%',
    color: 'from-green-500/20 to-emerald-500/20',
    badgeColor: 'bg-green-500/20 text-green-300',
  },
  {
    id: 4,
    title: 'AI内容创作平台',
    type: '媒体与营销',
    company: '新媒体机构',
    description: '整合文生图、文生视频、文案生成，为内容团队提供一站式创作工具。',
    tools: ['Stable Diffusion', 'GPT-4', 'DALL-E 3'],
    impact: '内容产出效率提升300%',
    color: 'from-yellow-500/20 to-orange-500/20',
    badgeColor: 'bg-yellow-500/20 text-yellow-300',
  },
  {
    id: 5,
    title: '金融风控AI系统',
    type: '金融科技',
    company: '某银行',
    description: '实时交易监控与欺诈检测，集成多个AI模型进行风险评估与预警。',
    tools: ['XGBoost', '时序分析', '异常检测'],
    impact: '欺诈识别率99.2%',
    color: 'from-red-500/20 to-rose-500/20',
    badgeColor: 'bg-red-500/20 text-red-300',
  },
  {
    id: 6,
    title: '教育个性化学习系统',
    type: '教育科技',
    company: '在线教育平台',
    description: '基于学生学习行为数据，动态调整教学内容与难度，实现个性化学习路径。',
    tools: ['推荐算法', '知识图谱', '学习分析'],
    impact: '学生成绩平均提升18%',
    color: 'from-indigo-500/20 to-violet-500/20',
    badgeColor: 'bg-indigo-500/20 text-indigo-300',
  },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-gradient-to-b from-background/80 to-gray-950/80">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl text-white">
            太空站
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
              星际项目展览舱
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-300">
            探索基于AI太空站构建的杰出项目，从企业级解决方案到创新开源工具。
          </p>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button variant="default" className="bg-blue-600 hover:bg-blue-700 border-0">
            全部项目
          </Button>
          <Button variant="outline" className="border-blue-500/50 text-blue-300 hover:bg-blue-950/50">
            <Briefcase className="size-4 mr-2" />
            企业方案
          </Button>
          <Button variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-950/50">
            <GitBranch className="size-4 mr-2" />
            开源项目
          </Button>
          <Button variant="outline" className="border-green-500/50 text-green-300 hover:bg-green-950/50">
            <Building className="size-4 mr-2" />
            行业应用
          </Button>
          <Button variant="outline" className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-950/50">
            <Code2 className="size-4 mr-2" />
            开发者工具
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 transition-all hover:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm"
            >
              {/* 项目背景渐变 */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30`} />
              
              <div className="relative p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <Star className="size-4 text-yellow-400 fill-yellow-400" />
                    </div>
                    <div className="mt-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm ${project.badgeColor}">
                      {project.type}
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="hover:bg-gray-800">
                    <ExternalLink className="size-4 text-gray-400" />
                  </Button>
                </div>
                
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Building className="size-4" />
                    <span className="text-sm">{project.company}</span>
                  </div>
                  <p className="mt-3 text-gray-300">{project.description}</p>
                </div>
                
                <div className="mt-6">
                  <div className="text-sm text-gray-400">核心AI工具：</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6 flex items-center justify-between border-t border-gray-800 pt-4">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Zap className="size-4 text-yellow-400" />
                    <span className="text-sm">成果：{project.impact}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                    查看案例研究
                  </Button>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
                <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 border-0">
                  类似项目咨询
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" variant="outline" className="px-8 py-6 border-blue-500/50 text-blue-300 hover:bg-blue-950/50">
            探索完整项目库 (500+案例)
          </Button>
        </div>
        
        <div className="mt-20 rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-900/30 to-transparent p-8 md:p-12 backdrop-blur-sm">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-white">🚀 你的项目也可以在这里闪耀</h3>
              <p className="mt-2 text-gray-300">
                "我们使用AI太空站的API和工具集，在3个月内构建了完整的智能客服系统，开发效率提升了60%。"
              </p>
              <div className="mt-4 flex items-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                <div>
                  <div className="font-bold text-white">张伟 · 技术总监</div>
                  <div className="text-sm text-gray-400">某电商平台 • AI太空站企业用户</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20" />
              <div className="aspect-square rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
              <div className="aspect-square rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20" />
              <div className="aspect-square rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}