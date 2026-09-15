# 💰 Expense — 本地优先隐私记账应用

<p align="center">
  <a href="./README.md">English</a> | <strong>简体中文</strong> | <a href="./README.ms.md">Bahasa Melayu</a>
</p>

<p align="center">
  <strong>Money talks. We listen.</strong><br>
  <em>Expense 官方项目网站 — 专为马来西亚打造的 100% 本地运行、零数据追踪记账应用 🇲🇾</em>
</p>

<p align="center">
  <a href="https://marcus-dev00.github.io/Expense/">
    <img src="https://img.shields.io/badge/线上站点-marcus--dev00.github.io-000000?style=for-the-badge" alt="线上站点">
  </a>
  <img src="https://img.shields.io/badge/版本-5.1%20(Build%2051)-000000?style=for-the-badge" alt="版本 5.1 Build 51">
  <img src="https://img.shields.io/badge/隐私-100%25_本地离线-000000?style=for-the-badge" alt="100% 本地隐私">
  <img src="https://img.shields.io/badge/测试-435项通过-000000?style=for-the-badge" alt="435 项测试通过">
</p>

---

## 🌐 线上网站

| 页面 | 地址 |
| :--- | :--- |
| 🏠 主页 | [marcus-dev00.github.io/Expense](https://marcus-dev00.github.io/Expense/) |
| 📖 用户手册 | [manual.html](https://marcus-dev00.github.io/Expense/manual.html) |
| 🔒 隐私政策 | [privacy.html](https://marcus-dev00.github.io/Expense/privacy.html) |

本仓库存放 Expense 的 **GitHub Pages 静态站点**（主页、用户手册、隐私政策）。应用本体是 100% 本地的 Android / PWA 记账工具 —— 零云端、零遥测、不索取 `READ_SMS`。

---

## ✨ 应用亮点（v5.1）

- **100% 离线 SQLite** —— 整数分（sen）精确记账、原子事务、加固迁移
- **通知自动记账** —— 75+ 大马银行/钱包白名单；OTP 与促销在内存中即被拒绝
- **待确认收件箱（3D 滚轮）** —— 批准、合并或驳回每一条捕获草稿
- **商户分类学习** —— 可信商户可在金额上限内自动入账
- **AA 分账、RON95 加油退款合并、60 秒跨软件转账合并**
- **动态二维码设备迁移** —— 气隙式全账本迁移
- **三语界面** —— English · 简体中文 · Bahasa Melayu
- **435 项自动化测试**（33 个 Vitest 套件）

---

## 📁 仓库结构

```text
index.html      # 产品主页（三语）
manual.html     # 20 章用户手册
privacy.html    # 隐私政策（三语）
style.css       # 设计系统（JetBrains Mono、纯黑极简）
i18n.js         # 多语言引擎与导航
README*.md      # 本说明文档
```

---

## 🚀 发布更新

本地改完后：

```bash
git add .
git commit -m "docs: 更新站点至 Expense v5.1"
git push origin main
```

GitHub Pages 直接托管 `main` 分支根目录。线上地址：`https://marcus-dev00.github.io/Expense/`

---

## 📄 许可与隐私

绝不收集、传输或变现任何财务数据。详见 [privacy.html](./privacy.html)。

**联系：** [marcus.dev00@outlook.com](mailto:marcus.dev00@outlook.com)

EXPENSE · VERSION 5.1 · MALAYSIA
