/**
 * Expense – Minimalist Multi-language & Navigation Engine (i18n.js)
 * Languages: English (en), 简体中文 (zh), Bahasa Melayu (ms)
 */

const translations = {
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.features": "Features",
        "nav.autodetect": "Auto-Detect",
        "nav.manual": "Manual",
        "nav.privacy": "Privacy",
        "nav.contact": "Contact",
        "nav.docsBtn": "Documentation",
        "nav.supportBtn": "Support",

        // Index - Hero
        "hero.tag": "100% Local SQLite · Zero Cloud · Zero Telemetry",
        "hero.title": "Your Money. Your Privacy.<br>Zero Cloud. 100% Local.",
        "hero.subtitle": "An offline-first financial ledger designed for Malaysia. Capture payment notifications from Touch 'n Go, MAE, CIMB, and bank alerts with zero data leaving your device.",
        "hero.btnManual": "Explore User Manual",
        "hero.btnPrivacy": "Privacy Architecture",
        "hero.btnContact": "Contact Developer",

        // Index - Features
        "features.tag": "Architecture",
        "features.title": "Core Capabilities",
        "feat1.num": "01 / DATABASE",
        "feat1.title": "Embedded SQLite Engine",
        "feat1.desc": "Records are stored exclusively in an embedded local SQLite database. Exact integer sen precision with zero remote database synchronization.",
        "feat2.num": "02 / CAPTURE",
        "feat2.title": "Notification Auto-Detect",
        "feat2.desc": "Captures payment alerts from Touch 'n Go, MAE Maybank, CIMB, Boost, and bank SMS in memory without broad SMS read permissions.",
        "feat3.num": "03 / SPLIT",
        "feat3.title": "Bill Splits & Reimbursements",
        "feat3.desc": "Advance shared expenses with fractional splits (1/2, 2/3, 3/4). Tracks receivables separately without inflating personal monthly expenditure.",
        "feat4.num": "04 / MERGE",
        "feat4.title": "Fuel Pre-Auth Auto-Merge",
        "feat4.desc": "Pre-authorized pump holds (RON95) and refund changes are matched on the same day and consolidated into exact net spending with one tap.",
        "feat5.num": "05 / INBOX",
        "feat5.title": "Drafts Review Deck",
        "feat5.desc": "Momentum snap card deck for captured drafts, heuristic category matching, duplicate warnings, and cross-app transfer merge prompts.",
        "feat6.num": "06 / REPAIR",
        "feat6.title": "Tri-Lingual & Self-Healing",
        "feat6.desc": "Full support for English, 简体中文, and Bahasa Malaysia. Built-in ledger calibration recalculates account balances atomically.",

        // Index - Setup
        "setup.tag": "Setup",
        "setup.title": "Enabling Auto-Detect",
        "setup.step1": "STEP 01",
        "setup.step1Title": "Toggle in Settings",
        "setup.step1Desc": "Open Mine in Expense and turn ON the Auto-Detect Notifications switch.",
        "setup.step2": "STEP 02",
        "setup.step2Title": "Grant Notification Access",
        "setup.step2Desc": "In Android System Settings, locate Expense under Notification Access and select Allow.",
        "setup.step3": "STEP 03",
        "setup.step3Title": "Battery Optimization",
        "setup.step3Desc": "Under Mine → Background Autostart Guide, set battery optimization to unrestricted for Xiaomi, Samsung, OPPO, or vivo.",

        // Index - Table
        "comp.tag": "Comparison",
        "comp.title": "Offline-First vs Cloud Accounting",
        "comp.thCrit": "Criterion",
        "comp.thExpense": "Expense (v5.0)",
        "comp.thCloud": "Cloud Expense Apps",
        "comp.row1Label": "Data Storage",
        "comp.row1Exp": "100% LOCAL SQLITE",
        "comp.row1Cloud": "REMOTE CLOUD",
        "comp.row2Label": "Account Requirement",
        "comp.row2Exp": "NO REGISTRATION",
        "comp.row2Cloud": "MANDATORY SIGN-UP",
        "comp.row3Label": "Telemetry & Analytics",
        "comp.row3Exp": "ZERO TELEMETRY",
        "comp.row3Cloud": "TRACKERS & AD NETWORKS",
        "comp.row4Label": "SMS Access",
        "comp.row4Exp": "NO READ_SMS PERMISSION",
        "comp.row4Cloud": "REQUIRES READ_SMS",
        "comp.row5Label": "Offline Operation",
        "comp.row5Exp": "FULLY OFFLINE",
        "comp.row5Cloud": "INTERNET REQUIRED",

        // Index - Benchmarks
        "bench.tag": "Performance",
        "bench.title": "Hardware & Power Benchmarks",

        // Contact & Footer
        "contact.tag": "Inquiries",
        "contact.title": "Developer Support",
        "contact.desc": "For feedback, technical questions, or bug reports:",
        "footer.tag": "EXPENSE · VERSION 5.0 · MALAYSIA",
        "mobile.menu": "Menu",
        "mobile.tocPrompt": "Jump to Section...",

        // Manual Sidebar Items
        "manual.sidebarHead": "Sections",
        "manual.s01": "Architecture",
        "manual.s02": "First Launch",
        "manual.s03": "Navigation",
        "manual.s04": "Logging & Keypad",
        "manual.s05": "Categories",
        "manual.s06": "Accounts & Debts",
        "manual.s07": "Bill Splits",
        "manual.s08": "Analytics",
        "manual.s09": "Budget Tracking",
        "manual.s10": "Auto-Detect",
        "manual.s11": "Drafts Deck",
        "manual.s12": "Fuel Refund",
        "manual.s13": "Transfer Merge",
        "manual.s14": "Setup Q&A",
        "manual.s15": "OEM Autostart",
        "manual.s16": "Preferences",
        "manual.s17": "Data & Migration",
        "manual.s18": "Hardware Benchmarks",
        "manual.s19": "Privacy Governance",
        "manual.s20": "Future Roadmap",
        "manual.s21": "Contact & Support"
    },

    zh: {
        // Navigation
        "nav.home": "首页",
        "nav.features": "核心功能",
        "nav.autodetect": "自动记账",
        "nav.manual": "用户手册",
        "nav.privacy": "隐私政策",
        "nav.contact": "联系开发",
        "nav.docsBtn": "使用手册",
        "nav.supportBtn": "获取支持",

        // Index - Hero
        "hero.tag": "100% 本地 SQLITE · 零云端 · 零数据追踪",
        "hero.title": "你的资产，完全私有。<br>零云端，100% 本地运行。",
        "hero.subtitle": "专为马来西亚打造的本地优先个人记账应用。自动识别 Touch 'n Go、MAE Maybank、CIMB 等银行与电子钱包支付通知，零数据离机，保障绝对隐私。",
        "hero.btnManual": "查阅用户手册",
        "hero.btnPrivacy": "隐私安全架构",
        "hero.btnContact": "联系开发者",

        // Index - Features
        "features.tag": "技术架构",
        "features.title": "核心能力与特性",
        "feat1.num": "01 / 本地数据库",
        "feat1.title": "100% 嵌入式 SQLite 引擎",
        "feat1.desc": "所有流水明细、账户余额与预算配置仅保存在手机本地物理 SQLite 数据库中。以整数分（sen）存储，杜绝浮点精度误差，无需云端同步。",
        "feat2.num": "02 / 智能识别",
        "feat2.title": "通知监听原生自动记账",
        "feat2.desc": "实时捕获 Touch 'n Go、MAE、CIMB、Boost 及银行短信通知并在内存中完成解析，无需申请宽泛的短信读取权限。",
        "feat3.num": "03 / 垫付分摊",
        "feat3.title": "AA 聚餐分账与一键还款冲减",
        "feat3.desc": "聚餐垫付支持 1/2、2/3、3/4 快捷分摊比例。应收款独立建账，不虚增个人单月开销，还款一键入账冲减。",
        "feat4.num": "04 / 智能合并",
        "feat4.title": "加油预扣与找零退款自动合并",
        "feat4.desc": "加油站（RON95）预授权扣款与后续找零退款智能关联，一键合并为净支出（如 RM 80 预扣 + RM 5.34 退款 ➔ RM 74.66 实际支出），不产生虚假收入。",
        "feat5.num": "05 / 待办箱",
        "feat5.title": "3D 滚轮卡片待办箱",
        "feat5.desc": "捕获的交易生成待审草稿卡片，支持启发式智能分类、同日重复记账预警以及 60 秒跨软件转账一键合并识别。",
        "feat6.num": "06 / 维护修复",
        "feat6.title": "三语支持与原子自愈校准",
        "feat6.desc": "完整支持 English、简体中文与 Bahasa Malaysia。内置原子自愈工具，一键从有效流水中重算校准全账本账户余额。",

        // Index - Setup
        "setup.tag": "配置指引",
        "setup.title": "3 步开启自动识别记账",
        "setup.step1": "步骤 01",
        "setup.step1Title": "在应用内开启开关",
        "setup.step1Desc": "打开应用内「个人中心（Mine）」标签页，开启「自动识别记账」开关。",
        "setup.step2": "步骤 02",
        "setup.step2Title": "授予通知使用权",
        "setup.step2Desc": "在安卓系统设置的「通知使用权（Notification Access）」中找到 Expense 并点击允许。",
        "setup.step3": "步骤 03",
        "setup.step3Title": "设置后台保活无限制",
        "setup.step3Desc": "参考「后台保活与自启动指南」，针对小米、三星、OPPO、vivo 等机型设置电池策略为无限制。",

        // Index - Table
        "comp.tag": "对比分析",
        "comp.title": "本地优先 vs 传统云端记账",
        "comp.thCrit": "对比维度",
        "comp.thExpense": "Expense (v5.0)",
        "comp.thCloud": "传统云端记账应用",
        "comp.row1Label": "数据存储位置",
        "comp.row1Exp": "100% 本地 SQLITE",
        "comp.row1Cloud": "第三方云端服务器",
        "comp.row2Label": "账户注册要求",
        "comp.row2Exp": "无需注册 / 无需邮箱",
        "comp.row2Cloud": "强制手机号/邮箱注册",
        "comp.row3Label": "数据追踪与 SDK",
        "comp.row3Exp": "零追踪 / 零遥测 SDK",
        "comp.row3Cloud": "集成广告与行为分析追踪",
        "comp.row4Label": "短信权限获取",
        "comp.row4Exp": "不索取 READ_SMS 权限",
        "comp.row4Cloud": "强制要求完整短信读取权限",
        "comp.row5Label": "离线运行能力",
        "comp.row5Exp": "完全离线可用",
        "comp.row5Cloud": "必须连接互联网",

        // Index - Benchmarks
        "bench.tag": "实测性能",
        "bench.title": "真实硬件与功耗基准",

        // Contact & Footer
        "contact.tag": "联系与咨询",
        "contact.title": "开发者技术支持",
        "contact.desc": "如有任何反馈、功能建议或 Bug 汇报，请直接联系开发者：",
        "footer.tag": "EXPENSE · 5.0 版本 · 马来西亚隐私记账",
        "mobile.menu": "菜单",
        "mobile.tocPrompt": "快速跳转章节...",

        // Manual Sidebar Items
        "manual.sidebarHead": "章节目录",
        "manual.s01": "架构与隐私",
        "manual.s02": "首次启动",
        "manual.s03": "导航与视图",
        "manual.s04": "记账与键盘",
        "manual.s05": "分类体系",
        "manual.s06": "账户与负债",
        "manual.s07": "AA 垫付分账",
        "manual.s08": "统计分析",
        "manual.s09": "预算管理",
        "manual.s10": "自动记账",
        "manual.s11": "待办箱卡片",
        "manual.s12": "加油退款合并",
        "manual.s13": "转账识别合并",
        "manual.s14": "常见问题",
        "manual.s15": "机型保活指南",
        "manual.s16": "偏好设置",
        "manual.s17": "数据迁移与备份",
        "manual.s18": "硬件与功耗基准",
        "manual.s19": "隐私保护准则",
        "manual.s20": "未来规划",
        "manual.s21": "联系与支持"
    },

    ms: {
        // Navigation
        "nav.home": "Utama",
        "nav.features": "Fungsi",
        "nav.autodetect": "Auto-Kesan",
        "nav.manual": "Manual",
        "nav.privacy": "Privasi",
        "nav.contact": "Hubungi",
        "nav.docsBtn": "Dokumentasi",
        "nav.supportBtn": "Bantuan",

        // Index - Hero
        "hero.tag": "100% SQLite Tempatan · Tanpa Awan · Tanpa Telemetri",
        "hero.title": "Wang Anda. Privasi Anda.<br>Tanpa Awan. 100% Tempatan.",
        "hero.subtitle": "Pengurus kewangan peribadi luar talian khas untuk Malaysia. Tangkap notifikasi pembayaran daripada Touch 'n Go, MAE, CIMB, dan amaran bank tanpa sebarang data keluar dari peranti anda.",
        "hero.btnManual": "Terokai Manual Pengguna",
        "hero.btnPrivacy": "Arkitektur Privasi",
        "hero.btnContact": "Hubungi Pembangun",

        // Index - Features
        "features.tag": "Arkitektur",
        "features.title": "Keupayaan Utama",
        "feat1.num": "01 / PANGKALAN DATA",
        "feat1.title": "Enjin SQLite Terbenam",
        "feat1.desc": "Semua rekod disimpan secara eksklusif dalam pangkalan data SQLite tempatan. Ketepatan sen integer tepat tanpa penyegerakan awan.",
        "feat2.num": "02 / TANGKAP",
        "feat2.title": "Auto-Kesan Notifikasi",
        "feat2.desc": "Mengesan amaran pembayaran daripada Touch 'n Go, MAE, CIMB, Boost, dan SMS bank dalam memori tanpa kebenaran membaca SMS.",
        "feat3.num": "03 / KONGSI BIL",
        "feat3.title": "Kongsi Bil & Bayaran Balik",
        "feat3.desc": "Mendahulukan perbelanjaan bersama dengan pecahan nisbah (1/2, 2/3, 3/4). Menjejaki belum terima secara berasingan tanpa mengembung perbelanjaan bulanan peribadi.",
        "feat4.num": "04 / GABUNG",
        "feat4.title": "Gabung Auto Bayaran Balik Minyak",
        "feat4.desc": "Pra-kebenaran pam minyak (RON95) dan baki pulangan dipadankan pada hari yang sama dan digabungkan menjadi perbelanjaan bersih tepat dengan 1 ketikan.",
        "feat5.num": "05 / PETI MASUK",
        "feat5.title": "Dek Kad Semakan Draf",
        "feat5.desc": "Dek kad momentum untuk draf yang ditangkap, pemadanan kategori pintar, amaran duplikasi, dan cadangan gabung pindahan antara aplikasi.",
        "feat6.num": "06 / PEMULIHAN",
        "feat6.title": "Tri-Bahasa & Kalibrasi Kendiri",
        "feat6.desc": "Sokongan penuh untuk Bahasa Inggeris, Bahasa Cina, dan Bahasa Melayu. Alat penentukuran lejar terbina dalam mengira semula baki akaun secara tepat.",

        // Index - Setup
        "setup.tag": "Persediaan",
        "setup.title": "Mengaktifkan Auto-Kesan",
        "setup.step1": "LANGKAH 01",
        "setup.step1Title": "Aktifkan dalam Tetapan",
        "setup.step1Desc": "Buka tab Mine dalam Expense dan hidupkan suis Auto-Detect Notifications.",
        "setup.step2": "LANGKAH 02",
        "setup.step2Title": "Beri Akses Notifikasi",
        "setup.step2Desc": "Dalam Tetapan Sistem Android, cari Expense di bawah Akses Notifikasi dan pilih Benarkan.",
        "setup.step3": "LANGKAH 03",
        "setup.step3Title": "Pengecualian Bateri",
        "setup.step3Desc": "Di bawah Mine → Panduan Autostart, tetapkan pengoptimuman bateri kepada tanpa sekatan untuk Xiaomi, Samsung, OPPO, atau vivo.",

        // Index - Table
        "comp.tag": "Perbandingan",
        "comp.title": "Luar Talian vs Aplikasi Awan",
        "comp.thCrit": "Kriteria",
        "comp.thExpense": "Expense (v5.0)",
        "comp.thCloud": "Aplikasi Perbelanjaan Awan",
        "comp.row1Label": "Lokasi Penyimpanan Data",
        "comp.row1Exp": "100% SQLITE TEMPATAN",
        "comp.row1Cloud": "PELAYAN AWAN JAUH",
        "comp.row2Label": "Keperluan Pendaftaran",
        "comp.row2Exp": "TIADA PENDAFTARAN",
        "comp.row2Cloud": "PENDAFTARAN WAJIB",
        "comp.row3Label": "Penjejakan & SDK",
        "comp.row3Exp": "SIFAR TELEMETRI",
        "comp.row3Cloud": "PENJEJAK & RANGKAIAN IKLAN",
        "comp.row4Label": "Akses SMS",
        "comp.row4Exp": "TIADA KEBENARAN READ_SMS",
        "comp.row4Cloud": "MEMERLUKAN AKSES PENUH SMS",
        "comp.row5Label": "Operasi Luar Talian",
        "comp.row5Exp": "SEPENUHNYA LUAR TALIAN",
        "comp.row5Cloud": "MEMERLUKAN INTERNET",

        // Index - Benchmarks
        "bench.tag": "Prestasi",
        "bench.title": "Tanda Aras Perkakasan & Kuasa",

        // Contact & Footer
        "contact.tag": "Pertanyaan",
        "contact.title": "Sokongan Pembangun",
        "contact.desc": "Untuk maklum balas, pertanyaan teknikal, atau laporan pepijat:",
        "footer.tag": "EXPENSE · VERSI 5.0 · MALAYSIA",
        "mobile.menu": "Menu",
        "mobile.tocPrompt": "Lompat ke Seksyen...",

        // Manual Sidebar Items
        "manual.sidebarHead": "Seksyen",
        "manual.s01": "Arkitektur",
        "manual.s02": "Pelancaran Pertama",
        "manual.s03": "Navigasi",
        "manual.s04": "Merekod & Papan Kekunci",
        "manual.s05": "Kategori",
        "manual.s06": "Akaun & Liabiliti",
        "manual.s07": "Kongsi Bil",
        "manual.s08": "Statistik",
        "manual.s09": "Pengurusan Bajet",
        "manual.s10": "Auto-Kesan",
        "manual.s11": "Peti Masuk Draf",
        "manual.s12": "Bayaran Balik Minyak",
        "manual.s13": "Gabung Pindahan",
        "manual.s14": "Soal Jawab",
        "manual.s15": "Panduan Autostart",
        "manual.s16": "Keutamaan",
        "manual.s17": "Data & Migrasi",
        "manual.s18": "Tanda Aras Perkakasan",
        "manual.s19": "Tadbir Urus Privasi",
        "manual.s20": "Peta Hala Tuju",
        "manual.s21": "Hubungi & Bantuan"
    }
};

/**
 * Appends or updates the ?lang= parameter on all internal HTML links.
 * Ensures seamless state transfer across pages even on file:/// local browsing.
 */
function updateInternalLinks(lang) {
    document.querySelectorAll("a[href]").forEach(a => {
        const rawHref = a.getAttribute("href");
        if (!rawHref || rawHref.startsWith("mailto:") || rawHref.startsWith("http://") || rawHref.startsWith("https://")) {
            return;
        }

        // If it's a relative link to an html file or anchor
        if (rawHref.includes(".html") || rawHref.startsWith("index.html") || rawHref.startsWith("manual.html") || rawHref.startsWith("privacy.html")) {
            try {
                const parts = rawHref.split("#");
                const pathAndQuery = parts[0];
                const hash = parts.length > 1 ? "#" + parts[1] : "";

                const fileParts = pathAndQuery.split("?");
                const baseFile = fileParts[0];

                const searchParams = new URLSearchParams(fileParts[1] || "");
                searchParams.set("lang", lang);

                a.setAttribute("href", baseFile + "?" + searchParams.toString() + hash);
            } catch (e) {}
        }
    });
}

function applyLanguage(lang) {
    const validLang = (lang === "zh" || lang === "ms") ? lang : "en";
    const dict = translations[validLang];

    document.documentElement.setAttribute("data-lang", validLang);
    document.documentElement.lang = validLang;
    
    if (document.body) {
        document.body.setAttribute("data-lang", validLang);
    }

    // Update all elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    // Update all elements with data-i18n-html
    document.querySelectorAll("[data-i18n-html]").forEach(el => {
        const key = el.getAttribute("data-i18n-html");
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });

    // Update active class on language toggle buttons
    document.querySelectorAll(".lang-btn").forEach(btn => {
        const btnLang = btn.getAttribute("data-lang");
        btn.classList.toggle("active", btnLang === validLang);
    });

    // Update URL query parameters on all internal navigation links
    updateInternalLinks(validLang);

    // Save to localStorage
    try {
        localStorage.setItem("site_lang", validLang);
    } catch (e) {}

    // Update browser URL query string without reloading
    try {
        if (window.history && window.history.replaceState) {
            const url = new URL(window.location.href);
            url.searchParams.set("lang", validLang);
            window.history.replaceState(null, "", url.pathname.split("/").pop() + url.search + url.hash);
        }
    } catch (e) {}
}

function getInitialLanguage() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get("lang");
        if (langParam === "zh" || langParam === "ms" || langParam === "en") {
            return langParam;
        }
    } catch (e) {}

    try {
        const savedLang = localStorage.getItem("site_lang");
        if (savedLang === "zh" || savedLang === "ms" || savedLang === "en") {
            return savedLang;
        }
    } catch (e) {}

    return "en";
}

function initMobileMenu() {
    const menuBtn = document.querySelector(".menu-toggle-btn");
    const drawer = document.querySelector(".mobile-nav-drawer");

    if (menuBtn && drawer) {
        menuBtn.addEventListener("click", () => {
            drawer.classList.toggle("open");
            const isOpen = drawer.classList.contains("open");
            const curLang = document.documentElement.getAttribute("data-lang") || "en";
            menuBtn.textContent = isOpen ? "CLOSE" : (translations[curLang]["mobile.menu"] || "MENU");
        });

        drawer.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                drawer.classList.remove("open");
                const curLang = document.documentElement.getAttribute("data-lang") || "en";
                menuBtn.textContent = translations[curLang]["mobile.menu"] || "MENU";
            });
        });
    }
}

function initMobileToc() {
    const tocSelect = document.querySelector(".mobile-toc-select");
    if (tocSelect) {
        tocSelect.addEventListener("change", (e) => {
            const targetId = e.target.value;
            if (targetId) {
                const targetSec = document.getElementById(targetId);
                if (targetSec) {
                    targetSec.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    }
}

function initI18n() {
    const initialLang = getInitialLanguage();
    applyLanguage(initialLang);

    // Bind click events on language toggle buttons
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const chosenLang = btn.getAttribute("data-lang");
            applyLanguage(chosenLang);
        });
    });

    initMobileMenu();
    initMobileToc();
}

// Auto initialize on DOM ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initI18n);
} else {
    initI18n();
}
