# AI太空站部署指南

## 🚀 快速部署到 Vercel（推荐）

### 方法一：通过 GitHub 部署（最简单）
1. **创建 GitHub 仓库**
   ```bash
   # 在 GitHub 上创建新仓库：ai-space-station
   # 不要初始化 README、.gitignore 或 license
   ```

2. **推送代码到 GitHub**
   ```bash
   # 添加远程仓库
   git remote add origin https://github.com/你的用户名/ai-space-station.git
   
   # 推送代码
   git branch -M main
   git push -u origin main
   ```

3. **在 Vercel 部署**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub 登录
   - 点击 "Add New" → "Project"
   - 选择 ai-space-station 仓库
   - 配置环境变量（见下文）
   - 点击 "Deploy"

4. **配置环境变量**
   在 Vercel 项目设置 → Environment Variables 中添加：
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_xxxxxxxxxxxx
   CLERK_SECRET_KEY=sk_live_xxxxxxxxxxxx
   NEXT_PUBLIC_APP_URL=https://ai-space-station.vercel.app
   ```

### 方法二：使用 Vercel CLI 本地部署
1. **安装 Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```

3. **部署项目**
   ```bash
   cd ai-tool-clone
   vercel
   ```
   按提示操作，选择默认配置。

4. **设置生产环境变量**
   ```bash
   vercel env add NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
   vercel env add CLERK_SECRET_KEY
   ```

## 🔧 环境变量配置

### 必需配置
1. **Clerk 认证**（用户注册/登录系统）
   - 访问 [clerk.com](https://clerk.com) 注册账号
   - 创建新应用 → 选择 Next.js
   - 复制 Publishable Key 和 Secret Key
   - 添加到 Vercel 环境变量或本地 `.env.local` 文件

2. **本地开发环境**
   复制 `.env.example` 为 `.env.local`：
   ```bash
   cp .env.example .env.local
   ```
   编辑 `.env.local` 填入真实密钥。

## 📦 项目结构

```
ai-space-station/
├── src/app/                    # Next.js 应用路由
│   ├── api/waitlist/          # 等待列表 API
│   ├── dashboard/             # 用户控制台（受保护）
│   ├── sign-in/               # 登录页面
│   ├── sign-up/               # 注册页面
│   └── page.tsx               # 主页面
├── src/components/            # React 组件
│   ├── ui/                    # Shadcn/ui 组件
│   ├── WaitlistForm.tsx       # 等待列表表单
│   └── ...                    # 其他页面组件
├── middleware.ts              # Clerk 认证中间件
└── public/                    # 静态资源
```

## 🛠️ 已实现功能

### ✅ 已完成
1. **AI太空站主题网站** - 完整前端页面
   - 首页、功能展示、项目案例、定价、FAQ
   - 响应式设计，太空科技主题

2. **用户认证系统** - Clerk 集成
   - 注册/登录页面
   - 受保护的控制台页面
   - 用户管理中间件

3. **等待列表系统**
   - 表单提交（前端 + API）
   - 内存存储（可轻松替换为数据库）
   - 成功状态展示

4. **API 端点**
   - `POST /api/waitlist` - 加入等待列表
   - `GET /api/waitlist` - 获取等待人数

### 🚧 待开发（短期 1-2 周）

#### 1. 基础 API 网关（调用计数）
```typescript
// 计划功能：
// - API 密钥生成与管理
// - 调用次数限制与统计
// - 实时用量监控
```

**实现步骤：**
- 创建 `api/keys` 路由（生成、撤销 API 密钥）
- 创建 `api/usage` 路由（查看调用统计）
- 集成 Redis 或数据库存储调用次数

#### 2. Stripe/Paddle 支付集成
**Stripe 配置：**
```bash
# 安装依赖
npm install @stripe/stripe-js stripe

# 环境变量
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxx
STRIPE_SECRET_KEY=sk_live_xxx
```

**实现步骤：**
- 创建定价计划订阅页面
- 集成 Stripe Checkout 或 Elements
- 处理 Webhook（订阅成功/取消/更新）

#### 3. 基础管理后台
**功能规划：**
- 用户管理（查看、禁用、删除）
- 等待列表数据导出
- 收入统计（连接 Stripe）
- 系统状态监控

**技术实现：**
- 新建 `/admin` 路由（受管理员权限保护）
- 使用 Data Tables 展示数据
- 集成图表库（Recharts/Chart.js）

## 📈 数据存储方案

### 当前状态：内存存储（仅演示）
等待列表数据存储在内存中，重启会丢失。

### 推荐升级方案

#### 方案 A：Supabase（推荐）
```bash
# 安装
npm install @supabase/supabase-js

# 环境变量
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx
```

**优势：**
- 免费额度充足
- 实时数据库 + 认证
- 内置 Row Level Security

#### 方案 B：PostgreSQL + Prisma
```bash
# 安装
npm install prisma @prisma/client

# 初始化
npx prisma init
```

## 🚀 部署后操作

1. **验证部署**
   - 访问您的 Vercel 域名
   - 测试等待列表提交
   - 测试用户注册/登录

2. **配置 Clerk 回调 URL**
   - 登录 Clerk Dashboard
   - 添加回调 URL：`https://您的域名/api/auth/callback`
   - 添加重定向 URL：`https://您的域名/dashboard`

3. **监控与分析**
   - 设置 Vercel Analytics
   - 集成 Google Analytics 或 Umami
   - 配置错误监控（Sentry）

## 🔒 安全建议

1. **API 密钥管理**
   - 永远不要将密钥提交到 Git
   - 使用 Vercel 环境变量
   - 定期轮换密钥

2. **Clerk 配置**
   - 启用多因素认证（MFA）
   - 设置会话超时
   - 配置信任的域名

3. **数据保护**
   - 实施速率限制
   - 验证用户输入
   - 定期备份数据

## 📞 支持与故障排除

### 常见问题

**Q: 部署后 Clerk 认证失败**
A: 检查环境变量是否正确，确认回调 URL 已配置。

**Q: 等待列表数据丢失**
A: 内存存储仅用于演示，请尽快集成数据库。

**Q: 构建失败**
A: 检查 Node.js 版本（要求 >= 18），确保所有依赖正确安装。

### 获取帮助
- 查看 Next.js 文档：https://nextjs.org/docs
- Clerk 文档：https://clerk.com/docs
- Vercel 文档：https://vercel.com/docs

---

**下一步建议：**
1. 立即部署到 Vercel（30 分钟内可上线）
2. 配置 Clerk 获取真实密钥
3. 开始收集早期用户（等待列表）
4. 开发 API 网关和支付系统

项目已准备就绪，随时可以部署上线！