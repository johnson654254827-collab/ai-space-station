# 🚀 AI太空站

**中国首个AI工具生态枢纽平台 · 公安部备案**

一个现代化的AI工具聚合平台，为开发者、创作者和企业提供一站式AI解决方案。整合100+AI模型与工具，提供统一的API接口、开发者工具和团队协作功能。

## ✨ 功能特性

### 🛰️ 核心模块
- **AI模型市场** - 发现、比较、试用100+AI模型
- **API集成中心** - 统一API密钥管理，实时调用监控
- **开发者工具舱** - 完整SDK、CLI工具、测试沙箱
- **资源轨道站** - 高质量数据集、预训练模型、教程文档
- **协作空间站** - 团队项目管理、版本控制、实时协作
- **数据分析舱** - 使用统计、性能监控、成本分析

### 🔐 安全合规
- ✅ 公安部备案 · 中国境内数据存储
- 🔒 银行级加密技术 · 端到端安全
- 📜 严格遵守《个人信息保护法》

### 💰 变现模式
- **SaaS订阅**（探索者/开发者/团队轨道）
- **API调用费**（阶梯定价，高频优惠）
- **平台服务费**（模型交易佣金、定制训练）
- **企业解决方案**（私有化部署、专属支持）

## 🏗️ 技术栈

### 前端
- **Next.js 16** - React 框架，App Router
- **TypeScript** - 类型安全
- **Tailwind CSS v4** - 实用优先的CSS框架
- **shadcn/ui + Base UI** - 组件库
- **Clerk** - 用户认证与管理

### 后端
- **Next.js API Routes** - 服务端API
- **Prisma** - 数据库ORM（待集成）
- **PostgreSQL/Supabase** - 数据库（待集成）

### 部署
- **Vercel** - 边缘部署，全球CDN
- **GitHub Actions** - CI/CD流水线

## 🚀 快速开始

### 环境要求
- Node.js >= 18
- npm 或 yarn
- Git

### 本地开发
```bash
# 克隆仓库
git clone https://github.com/你的用户名/ai-space-station.git
cd ai-space-station

# 安装依赖
npm install

# 配置环境变量
cp .env.example .env.local
# 编辑 .env.local 填入真实密钥

# 启动开发服务器
npm run dev
```

访问 http://localhost:3000 查看网站。

### 生产部署
详细部署指南请参阅 [DEPLOYMENT.md](./DEPLOYMENT.md)。

## 📁 项目结构

```
src/
├── app/                    # Next.js 应用路由
│   ├── api/               # API 端点
│   │   └── waitlist/      # 等待列表 API
│   ├── dashboard/         # 用户控制台（受保护）
│   ├── sign-in/           # 登录页面
│   ├── sign-up/           # 注册页面
│   └── page.tsx           # 主页面
├── components/            # React 组件
│   ├── ui/               # 基础 UI 组件
│   ├── HeroSection.tsx   # 首页英雄区
│   ├── Features.tsx      # 功能展示
│   ├── Gallery.tsx       # 项目案例
│   ├── Pricing.tsx       # 定价页面
│   ├── FAQ.tsx           # 常见问题
│   └── WaitlistForm.tsx  # 等待列表表单
├── lib/                  # 工具函数
└── middleware.ts         # 认证中间件
```

## 🔧 配置说明

### 环境变量
复制 `.env.example` 为 `.env.local` 并配置：

```env
# Clerk 认证
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxx
CLERK_SECRET_KEY=sk_test_xxx

# 应用配置
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000

# 数据库（待集成）
# DATABASE_URL="postgresql://user:pass@localhost:5432/db"
```

### Clerk 配置
1. 访问 [clerk.com](https://clerk.com) 注册账号
2. 创建新应用，选择 Next.js
3. 复制 Publishable Key 和 Secret Key
4. 配置回调 URL：`http://localhost:3000/api/auth/callback`

## 📈 开发路线图

### ✅ 已完成
- [x] AI太空站主题网站（前端）
- [x] 用户认证系统（Clerk 集成）
- [x] 等待列表系统（前端 + API）
- [x] 响应式设计，太空科技主题

### 🚧 短期开发（1-2周）
- [ ] 基础 API 网关（调用计数与限制）
- [ ] Stripe/Paddle 支付集成
- [ ] 基础管理后台
- [ ] 数据库集成（Supabase/PostgreSQL）

### 📅 中长期（1-3月）
- [ ] 完整开发者工具套件
- [ ] 模型市场 MVP
- [ ] 企业级功能（私有化部署、SLA）
- [ ] 移动端应用

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系与支持

- **项目维护者**：周鑫
- **备案信息**：AI太空站（公安部备案）
- **业务合作**：business@ai-space-station.com
- **技术支持**：support@ai-space-station.com

---

**AI太空站** - 连接AI宇宙的下一个前沿 🚀