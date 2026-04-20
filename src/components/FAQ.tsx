"use client";

import { useState } from 'react';
import { ChevronDown, MessageCircleQuestion, FileText, CreditCard, Shield, Rocket, Satellite, Cpu, Database, Code } from 'lucide-react';

const faqs = [
  {
    question: 'AI太空站是什么？',
    answer: 'AI太空站是中国首个AI工具生态枢纽平台。我们整合了100+AI模型与工具，为开发者、创作者和企业提供一站式AI解决方案，涵盖文本生成、图像创作、代码开发、数据分析等多个领域。',
  },
  {
    question: '平台支持哪些AI模型？',
    answer: '我们整合了国内外主流AI模型，包括OpenAI GPT系列、文心一言、通义千问、智谱GLM、Stable Diffusion、MidJourney（通过API）、Claude、Gemini等。同时支持自定义模型部署与训练。',
  },
  {
    question: 'API调用如何计费？',
    answer: '采用按调用量计费模式。免费轨道：10,000次/月；开发者轨道：100,000次/月；团队轨道：500,000次/月。超出部分按阶梯价格计费，具体价格可在定价页面查看。',
  },
  {
    question: '是否支持私有化部署？',
    answer: '是的。企业舰队轨道提供私有化部署选项，支持本地服务器、私有云或混合云部署。我们提供完整的部署指导、技术支持和定期更新服务。',
  },
  {
    question: '如何保障数据安全与隐私？',
    answer: '我们通过公安部备案，采用银行级加密技术。用户数据存储在中国大陆境内服务器，严格遵循《个人信息保护法》。API调用支持端到端加密，敏感数据可选择本地处理。',
  },
  {
    question: '开发者可以获得哪些工具支持？',
    answer: '我们提供完整的开发者套件：REST API、Python/JavaScript SDK、CLI工具、Webhook支持、实时监控、错误诊断、性能分析工具，以及详细的API文档和示例代码库。',
  },
  {
    question: '是否支持团队协作？',
    answer: '团队轨道提供完整的协作功能：多用户管理、权限分级、项目空间共享、实时协同编辑、版本控制、使用统计、成本分摊报告等。',
  },
  {
    question: '付款方式有哪些？',
    answer: '支持支付宝、微信支付、银联、信用卡（Visa/Mastercard）、企业银行转账。月付、季付、年付可选，年付享受8折优惠。企业客户可申请定制账单周期。',
  },
];

const resources = [
  {
    icon: <FileText className="size-5" />,
    title: '快速上手指南',
    description: '5分钟了解如何集成API与使用AI工具',
  },
  {
    icon: <Code className="size-5" />,
    title: '开发者文档',
    description: '完整的API参考、SDK示例与最佳实践',
  },
  {
    icon: <Database className="size-5" />,
    title: '模型库指南',
    description: '100+AI模型特性对比与选择建议',
  },
  {
    icon: <Shield className="size-5" />,
    title: '安全合规',
    description: '公安部备案信息、数据安全政策与合规说明',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-gradient-to-b from-background/80 to-gray-950/80" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl text-white">
            常见问题与
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
              太空站指南
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-300">
            关于AI太空站的所有疑问，这里都有答案。
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-3xl">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-800 last:border-b-0"
            >
              <button
                className="flex w-full items-center justify-between py-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <ChevronDown
                  className={`size-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all ${openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'}`}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <h3 className="text-center text-2xl font-bold text-white">🛰️ 太空站资源中心</h3>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 transition-colors hover:border-blue-500/50 backdrop-blur-sm"
              >
                <div className="text-blue-400">{resource.icon}</div>
                <h4 className="mt-4 font-bold text-white">{resource.title}</h4>
                <p className="mt-2 text-sm text-gray-300">{resource.description}</p>
                <button className="mt-4 text-sm text-blue-400 hover:underline">
                  查看详情 →
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-900/30 to-transparent p-8 md:p-12 backdrop-blur-sm">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white">🚀 需要更多帮助？</h3>
            <p className="mx-auto mt-2 max-w-2xl text-gray-300">
              我们的太空站支持团队随时为您服务。平均响应时间：工作日2小时内。
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <button className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 font-medium text-white hover:from-blue-700 hover:to-purple-700 border-0">
                联系太空站支持
              </button>
              <button className="rounded-full border border-blue-500/50 bg-gray-900/50 px-8 py-3 font-medium text-blue-300 hover:bg-blue-950/50 backdrop-blur-sm">
                加入开发者社区
              </button>
            </div>
            <p className="mt-6 text-sm text-gray-400">
              或直接发送邮件至 <span className="font-medium text-blue-300">support@ai-space-station.com</span>
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400">
            © 2026 AI太空站 版权所有，渝ICP备2026006660号
            <br />
            <a href="#" className="hover:underline text-gray-300">服务协议</a> • 
            <a href="#" className="mx-2 hover:underline text-gray-300">隐私政策</a> • 
            <a href="#" className="hover:underline text-gray-300">Cookie政策</a> • 
            <a href="#" className="mx-2 hover:underline text-gray-300">内容规范</a>
          </p>
        </div>
      </div>
    </section>
  );
}