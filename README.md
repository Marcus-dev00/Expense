# 💰 Expense — Offline-First Privacy Financial Tracker

<p align="center">
  <strong>English</strong> | <a href="./README.zh.md">简体中文</a> | <a href="./README.ms.md">Bahasa Melayu</a>
</p>

<p align="center">
  <strong>Money talks. We listen.</strong><br>
  <em>Official project website for Expense — an offline-first, zero-telemetry personal expense manager built for Malaysia 🇲🇾</em>
</p>

<p align="center">
  <a href="https://marcus-dev00.github.io/Expense/">
    <img src="https://img.shields.io/badge/Live_Site-marcus--dev00.github.io-000000?style=for-the-badge" alt="Live Site">
  </a>
  <img src="https://img.shields.io/badge/Version-5.1%20(Build%2051)-000000?style=for-the-badge" alt="Version 5.1 Build 51">
  <img src="https://img.shields.io/badge/Privacy-100%25_Offline-000000?style=for-the-badge" alt="100% Offline Privacy">
  <img src="https://img.shields.io/badge/Tests-435%20Passed-000000?style=for-the-badge" alt="435 Tests Passed">
</p>

---

## 🌐 Live Website

| Page | URL |
| :--- | :--- |
| 🏠 Home | [marcus-dev00.github.io/Expense](https://marcus-dev00.github.io/Expense/) |
| 📖 User Manual | [manual.html](https://marcus-dev00.github.io/Expense/manual.html) |
| 🔒 Privacy Policy | [privacy.html](https://marcus-dev00.github.io/Expense/privacy.html) |

This repository contains the **static GitHub Pages site** (homepage, user manual, privacy policy) for Expense. The app itself is a 100% local Android / PWA expense tracker — zero cloud, zero telemetry, no `READ_SMS`.

---

## ✨ App Highlights (v5.1)

- **100% offline SQLite** — integer *sen* precision, atomic transactions, hardened migrations
- **Notification auto-detect** — 75+ Malaysian bank / eWallet whitelist; OTP & promos rejected in memory
- **Pending inbox (3D drum wheel)** — approve, merge, or dismiss every captured draft
- **Merchant learning** — trusted merchants can auto-approve under a spend cap
- **AA splits, RON95 fuel refund merge, 60s cross-app transfer consolidation**
- **Dynamic QR device migration** — air-gapped full ledger transfer
- **Tri-lingual UI** — English · 简体中文 · Bahasa Melayu
- **435 automated tests** across 33 Vitest suites

---

## 📁 Repository Structure

```text
index.html      # Product homepage (tri-lingual)
manual.html     # 20-section user manual
privacy.html    # Privacy policy (tri-lingual)
style.css       # Design system (JetBrains Mono, pure black)
i18n.js         # Language engine + navigation
README*.md      # This documentation
```

---

## 🚀 Publish Updates

After editing files locally:

```bash
git add .
git commit -m "docs: update site to Expense v5.1"
git push origin main
```

GitHub Pages serves the `main` branch root. Live URL: `https://marcus-dev00.github.io/Expense/`

---

## 📄 License & Privacy

Zero financial data is ever collected, transmitted, or monetized. See [privacy.html](./privacy.html).

**Contact:** [marcus.dev00@outlook.com](mailto:marcus.dev00@outlook.com)

EXPENSE · VERSION 5.1 · MALAYSIA
