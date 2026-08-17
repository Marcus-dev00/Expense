# 💰 Expense — Offline-First Privacy Financial Tracker

<p align="center">
  <strong>English</strong> | <a href="./README.zh.md">简体中文</a> | <a href="./README.ms.md">Bahasa Melayu</a>
</p>

<p align="center">
  <img src="public/favicon.ico" alt="Expense Logo" width="80" height="80">
</p>

<p align="center">
  <strong>An offline-first, zero-telemetry personal expense manager built specifically for Malaysia 🇲🇾</strong>
</p>

<p align="center">
  <a href="https://github.com/marcuslzy0103-bit/expense-app/releases/latest">
    <img src="https://img.shields.io/github/v/release/marcuslzy0103-bit/expense-app?style=for-the-badge&color=000000" alt="Latest Release">
  </a>
  <a href="https://github.com/marcuslzy0103-bit/expense-app/releases/latest/download/app-release.apk">
    <img src="https://img.shields.io/badge/Download-Android_APK-000000?style=for-the-badge&logo=android&logoColor=white" alt="Download APK">
  </a>
  <img src="https://img.shields.io/badge/Privacy-100%25_Offline-000000?style=for-the-badge" alt="100% Offline Privacy">
</p>

---

## ⚡ Quick Links & Documentation

| Resource | Link | Description |
| :--- | :--- | :--- |
| 📱 **Direct APK Download** | [**Download Latest APK (v4.4)**](https://github.com/marcuslzy0103-bit/expense-app/releases/latest/download/app-release.apk) | Production Android APK build (Build 44) |
| 📦 **GitHub Releases** | [**View Releases**](https://github.com/marcuslzy0103-bit/expense-app/releases) | Release changelogs, assets, and Android App Bundles (.aab) |
| 📖 **User Manual** | [**User Manual Guide**](./github-site/manual.html) | Interactive 20-section comprehensive reference manual |
| 🔒 **Privacy Policy** | [**Privacy Architecture**](./github-site/privacy.html) | On-device processing and zero-telemetry standards |

---

## 🛡️ Core Capabilities

### 1. 100% Offline SQLite Architecture
- **Embedded Local Database**: All transactions, categories, budgets, and account records are stored strictly on your local physical device.
- **Zero Telemetry**: No tracking SDKs, no advertising frameworks, and zero remote analytics. 0 bytes of financial data leave your device.
- **Exact Sen Storage**: Monetary values are stored as integers in *sen* (cents) to eliminate floating-point math rounding issues (`RM 124.50` = `12450` sen).

### 2. Native Notification Auto-Detect Engine
- **Malaysian App Whitelist**: Automatic real-time capture for Touch 'n Go eWallet, MAE Maybank, CIMB Clicks, Boost, Boost Bank, RHB, Public Bank, GrabPay, Hong Leong, AmBank, Bank Islam, Alliance Bank, OCBC, UOB, HSBC, GXBank, WeChat Pay, Alipay, and DuitNow.
- **In-Memory Bank SMS Alert Parsing**: Evaluates bank transaction SMS in volatile memory using keyword filters (`RM`, `MYR`, `paid`, `spent`, `debited`, `credited`).
- **Zero SMS Read Permissions**: Uses Android's `NotificationListenerService`. **Does NOT request `READ_SMS` or `RECEIVE_SMS` permissions**.

### 3. Friend Split & Reimbursement Tracking
- **AA Bill Splitting**: Quick fractional shortcuts (`1/2`, `2/3`, `3/4`) or custom debtor amounts.
- **Receivable Ledger**: Separates self-expenses from pending receivables to avoid inflating your monthly spending reports.
- **One-Tap Settlement**: Settle repaid amounts directly into your chosen receiving account with an automatic offset entry.

### 4. Fuel Pre-Auth (RON95) Auto-Merge
- **Hold & Refund Reconciliation**: Petrol pre-authorization holds (e.g. RM 80.00) and unpumped refund changes (e.g. RM 5.34) are recognized on the same day and merged into exact net expenditure (`RM 74.66`) with zero artificial income entries.

### 5. 60-Second Cross-App Transfer Consolidation
- **Reload Detection**: Detects bidirectional transactions occurring within 60 seconds (e.g., reloading TNG eWallet via CIMB Clicks) and prompts: *"Merge as Transfer: CIMB → TNG eWallet"*.

### 6. Atomic Self-Healing Recalibration
- **Ledger Audit & Balance Repair**: Single-tap calibration recalculates account balances directly from non-deleted ledger transactions with correct Credit Card liability sign inversion (`is_liability = 1`).

### 7. Tri-Lingual Support & Themes
- **Languages**: English, 简体中文 (Simplified Chinese), and Bahasa Malaysia (Malay) with instant runtime switching.
- **Appearance**: System Default, Light Theme, and Dark Theme.

---

## 🛠️ Technology Stack

- **Core**: Vanilla JavaScript (ES6 Modules), HTML5, Vanilla CSS3.
- **Mobile Runtime**: CapacitorJS 8 (`@capacitor/core`, `@capacitor/android`).
- **Database Backend**:
  - **Native Android**: `@capacitor-community/sqlite` (CapacitorSQLite).
  - **Web Preview**: `sql.js` (WebAssembly) backed by `localStorage`.
- **Native Android Bridge**: Java `NotificationListenerService` + `NotificationPlugin`.
- **Testing**: Vitest (21 test files, 151 unit & regression tests).

---

## 💻 Local Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm / npx
- Android Studio (for native Android builds)

### Installation & Run

```bash
# 1. Clone the repository
git clone https://github.com/marcuslzy0103-bit/expense-app.git
cd expense-app

# 2. Install dependencies
npm install

# 3. Start local Vite preview server
npm run dev

# 4. Run automated test suite
npm test

# 5. Build production bundle
npm run build
```

---

## 📄 License & Privacy

This project is built under privacy-first standards. Zero financial data is ever collected or transmitted.
