# 💰 Expense — 本地优先隐私记账应用

<p align="center">
  <a href="./README.md">English</a> | <strong>简体中文</strong> | <a href="./README.ms.md">Bahasa Melayu</a>
</p>

<p align="center">
  <img src="public/favicon.ico" alt="Expense Logo" width="80" height="80">
</p>

<p align="center">
  <strong>专为马来西亚打造的 100% 本地运行、零数据追踪的个人记账利器 🇲🇾</strong>
</p>

<p align="center">
  <a href="https://github.com/marcuslzy0103-bit/expense-app/releases/latest">
    <img src="https://img.shields.io/github/v/release/marcuslzy0103-bit/expense-app?style=for-the-badge&color=000000" alt="最新版本">
  </a>
  <a href="https://github.com/marcuslzy0103-bit/expense-app/releases/latest/download/app-release.apk">
    <img src="https://img.shields.io/badge/下载-Android_APK-000000?style=for-the-badge&logo=android&logoColor=white" alt="下载 APK">
  </a>
  <img src="https://img.shields.io/badge/隐私-100%25_本地离线-000000?style=for-the-badge" alt="100% 本地隐私">
</p>

---

## ⚡ 快速链接与文档

| 资源 | 链接 | 说明 |
| :--- | :--- | :--- |
| 📱 **APK 直接下载** | [**下载最新 APK (v4.4)**](https://github.com/marcuslzy0103-bit/expense-app/releases/latest/download/app-release.apk) | 安卓正式版安装包（Build 44） |
| 📦 **GitHub Releases** | [**查看发布页面**](https://github.com/marcuslzy0103-bit/expense-app/releases) | 所有版本更新日志、安装包与 Android App Bundle (.aab) |
| 📖 **用户完整手册** | [**查阅用户手册**](./github-site/manual.html) | 20 个完整章节的交互式操作与故障排查指南 |
| 🔒 **隐私政策与架构** | [**查阅隐私政策**](./github-site/privacy.html) | 100% 离线数据保护与零数据上报声明 |

---

## 🛡️ 核心功能与技术特色

### 1. 100% 嵌入式 SQLite 本地优先架构
- **完全本地存储**：所有流水明细、账户余额、分类与预算均保存在您手机本地物理 SQLite 数据库中。
- **零遥测与零追踪**：不包含任何云端同步、第三方广告 SDK 或行为统计分析组件，0 字节财务数据离机。
- **整数分（sen）存储**：所有货币金额在底层均以整数「分」进行精确运算与存储（如 `RM 124.50` 存为 `12450` sen），彻底杜绝浮点数计算误差。

### 2. 原生通知监听自动记账引擎
- **马来西亚主流应用白名单**：实时捕获 Touch 'n Go eWallet、MAE Maybank、CIMB Clicks、Boost、Boost Bank、RHB、Public Bank、GrabPay、Hong Leong、AmBank、Bank Islam、Alliance Bank、OCBC、UOB、HSBC、GXBank、WeChat Pay、Alipay、DuitNow 等支付通知。
- **短信内存级正则匹配**：基于 `NotificationListenerService` 在内存中匹配银行扣款短信（RM/MYR 关键字），非财务短信（个人聊天、OTP 验证码）在内存中立即丢弃。
- **零读取短信权限**：**完全不索取 `READ_SMS` 或 `RECEIVE_SMS` 敏感权限**。

### 3. AA 聚餐垫付与应收账款管理
- **快捷分账比例**：支持 `1/2`、`2/3`、`3/4` 一键快速切分或自定义金额与欠款人姓名。
- **应收账款独立记账**：垫付金额与自费金额清晰分离，垫付部分不计入个人月度开销统计。
- **一键冲减结算**：朋友还款时，一键选择收款账户平账，自动生成冲减记录。

### 4. 加油预扣（RON95）与退款智能合并
- **预扣与退款自动关联**：加油站预授权扣款（如 RM 80）与后续找零退款（如 RM 5.34）自动识别，一键合并为实际净支出（`RM 74.66`），不产生多余虚假收入流水。

### 5. 60 秒跨软件转账识别与合并
- **充值自动识别**：当 60 秒内出现金额相同的双向变动（如银行卡扣款 + TNG 钱包入账），系统主动提示：*“是否合并为转账：CIMB → TNG eWallet”*。

### 6. 原子级自愈校准工具
- **账本审计与余额校准**：内置一键修复工具，直接从全部有效流水中按整数分重算全账本余额，完美适配信用卡负债账户符号反转（`is_liability = 1`）。

### 7. 三语自由切换与主题外观
- **语言**：支持 English、简体中文、Bahasa Malaysia 无缝实时切换。
- **主题**：系统跟随、深色模式、浅色模式。

---

## 🛠️ 技术栈

- **前端技术**：原生 JavaScript（ES6 模块）、HTML5、原生 CSS3。
- **移动端运行时**：CapacitorJS 8 (`@capacitor/core`, `@capacitor/android`)。
- **双数据库引擎**：
  - **Android 原生端**：`@capacitor-community/sqlite` (CapacitorSQLite)。
  - **Web 预览端**：`sql.js` (WebAssembly) + `localStorage` 持久化。
- **原生桥接**：Java `NotificationListenerService` + `NotificationPlugin`。
- **自动化测试**：Vitest（21 个测试文件，151 个单元与回归测试）。

---

## 💻 本地开发与构建

### 环境要求
- Node.js (v18 或更高版本)
- npm / npx
- Android Studio（用于打包原生 Android 安装包）

### 运行步骤

```bash
# 1. 克隆代码仓库
git clone https://github.com/marcuslzy0103-bit/expense-app.git
cd expense-app

# 2. 安装依赖包
npm install

# 3. 启动本地 Vite 预览开发服务器
npm run dev

# 4. 运行全量单元测试
npm test

# 5. 打包生产网页资源
npm run build
```

---

## 📄 许可与隐私

本项目严格遵循本地优先与隐私保护标准。所有数据 100% 属于用户，绝不上报任何个人财务数据。
