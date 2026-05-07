# 🚀 AI太空站

**一站式 AI 模型 API 聚合平台 · 493个模型 · 即充即用**

[![Website](https://img.shields.io/badge/网站-aispacestation.com.cn-cyan)](https://aispacestation.com.cn)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

AI太空站为开发者和创作者提供统一的 AI 模型 API 接入服务。一个 API Key 调用 Claude、GPT、DeepSeek、Gemini 等 493 个主流模型，按量计费，无需绑卡翻墙。

---

## ✨ 为什么选择 AI太空站

| 痛点 | AI太空站方案 |
|------|-------------|
| 海外模型支付难 | 微信支付，按量计费 |
| 多平台 Key 管理繁琐 | 一个 Key 接所有模型 |
| 封号风险 | 多 Key 自动轮换 |
| API 接入门槛高 | OpenAI 兼容格式，一行代码切换 |

---

## 🛰️ 核心功能

- **493 个模型** — Claude 4 Sonnet、GPT-5.2、DeepSeek-V3、Gemini 3.0、Qwen3-Max 等
- **统一 API** — OpenAI 兼容格式，支持 ChatBox、Cursor、LobeChat 等 7+ 个客户端
- **微信支付** — 扫码充值即用，15 元起充，按量扣费
- **实时监控** — Token 消耗、余额变动、调用日志一目了然
- **赠送活动** — 阶梯充值赠送，最高送 30%

---

## 🏗️ 技术栈

### 前端
- **Next.js 16** (App Router, Turbopack)
- **TypeScript** + **Tailwind CSS v4**
- 太空科技风格 UI，响应式设计

### 后端
- **Node.js** 自建 API Store
- **One API** 多模型网关
- **SQLite** (better-sqlite3) 数据持久化
- **Nginx** 反向代理 + HTTPS

### 基础设施
- **阿里云 ECS** (1C2G, Ubuntu 24.04)
- **PM2** 进程管理
- **Let's Encrypt** SSL 证书

---

## 🚀 快速接入

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://aispacestation.com.cn/v1",
    api_key="sk-your-key-here"
)

response = client.chat.completions.create(
    model="claude-sonnet-4-20250514",
    messages=[{"role": "user", "content": "你好"}]
)
print(response.choices[0].message.content)
```

更多接入方式见 [帮助中心](https://aispacestation.com.cn/help)。

---

## 📁 项目结构

```
├── src/
│   ├── app/                 # Next.js 页面路由
│   │   ├── dashboard/       # 用户控制台（充值/Key管理/消耗统计）
│   │   ├── models/          # 模型市场（493个模型展示）
│   │   ├── help/            # 帮助中心（7个客户端教程）
│   │   ├── docs/            # API 文档
│   │   ├── signup/          # 注册页
│   │   ├── login/           # 登录页
│   │   └── page.tsx         # 首页
│   └── components/          # 组件库
├── public/                  # 静态资源
└── skills/                  # 运维脚本
```

---

## 📊 项目现状

- **运行中**: 15 个注册用户，493 个模型在线
- **支付**: 微信支付已对接，充值赠送活动进行中
- **帮助中心**: 覆盖 OpenClaw、Cursor、LobeChat、ChatBox 等 7 个客户端
- **备案**: 渝ICP备2026006660号-1 · 渝公网安备 50010702506749号

---

## 🤝 贡献

欢迎提 Issue 和 PR。

---

## 📞 联系

- **维护者**: 周鑫 (Zhou Xin)
- **网站**: [aispacestation.com.cn](https://aispacestation.com.cn)
- **邮箱**: 654254827@qq.com

---

**AI太空站** — 让每个人都能用上最好的 AI 模型 🚀
