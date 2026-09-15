/**
 * Expense – Friendly multi-language & navigation engine
 * Languages: English (en), 简体中文 (zh), Bahasa Melayu (ms)
 */

const translations = {
    en: {
        "nav.home": "Home",
        "nav.features": "What it does",
        "nav.how": "How to start",
        "nav.manual": "Manual",
        "nav.privacy": "Privacy",
        "nav.contact": "Contact",
        "nav.docsBtn": "Read the manual",
        "mobile.menu": "Menu",
        "mobile.tocPrompt": "Jump to section...",

        "hero.tag": "100% on your phone · No cloud · No tracking",
        "hero.title": "Tracking expenses<br>shouldn't feel like work.",
        "hero.subtitle": "Expense is a money diary made for Malaysia. Payment alerts from banks and eWallets become neat entries you just confirm. Everything stays on your phone — no account, no upload.",
        "hero.btnHow": "Start in 3 steps",
        "hero.btnManual": "Open the manual",
        "hero.btnPrivacy": "How privacy works",
        "hero.pill1": "Data stays on device",
        "hero.pill2": "No sign-up needed",
        "hero.pill3": "English · 中文 · BM",
        "hero.mockArrow": "↓ Caught automatically, you confirm",
        "hero.mockLabel": "Today's entries",

        "features.tag": "Why people like it",
        "features.title": "The boring parts, handled",
        "feat1.num": "Auto-log",
        "feat1.pill": "Notification capture",
        "feat1.title": "Payment alerts become entries",
        "feat1.desc": "Alerts from 70+ Malaysian apps — TnG, Maybank, CIMB, Boost and more — turn into drafts. Glance, confirm, done. OTP codes and promo spam are discarded.",
        "feat2.num": "Truly local",
        "feat2.pill": "Zero upload",
        "feat2.title": "Your money, your phone",
        "feat2.desc": "No accounts, no cloud sync, no ad trackers. Moving to a new phone? Transfer the whole ledger with QR codes, fully offline.",
        "feat3.num": "Everyday helper",
        "feat3.pill": "Made for MY",
        "feat3.title": "Meals, fuel, transfers",
        "feat3.desc": "Split bills without polluting monthly spend. Petrol holds and refunds match up. Card charge + wallet top-up within 60 seconds? Suggest merging as a transfer.",

        "setup.tag": "Get started",
        "setup.title": "Up and running in 3 steps",
        "setup.desc": "No long tutorial. Open the app and follow along.",
        "setup.step1": "STEP 1",
        "setup.step1Title": "Pick a nickname & accounts",
        "setup.step1Desc": "First launch walks you through a name and the wallets/banks you actually use (TnG, Maybank…).",
        "setup.step2": "STEP 2",
        "setup.step2Title": "Turn on auto-detect",
        "setup.step2Desc": "Flip the switch under Me, then allow notification access. We only read payment notifications — not your SMS inbox.",
        "setup.step3": "STEP 3",
        "setup.step3Title": "Check the inbox after you pay",
        "setup.step3Desc": "Captures wait in a pending list. Confirm, merge, or dismiss — your call. Some phones also need battery/autostart tips; the manual covers brands.",

        "more.tag": "More thoughtful bits",
        "more.title": "Small things for daily life",
        "more1.num": "Privacy screen",
        "more1.pill": "One-tap mask",
        "more1.title": "Hide amounts when someone's looking",
        "more1.desc": "Peek mode turns figures into asterisks — safer on the train or at the office.",
        "more2.num": "Learns merchants",
        "more2.pill": "Gets smarter",
        "more2.title": "Confirmed once, remembered forever",
        "more2.desc": "Categories you confirm stick. Trusted merchants can even auto-approve under a spend cap you set.",
        "more3.num": "3 languages",
        "more3.pill": "EN · 中文 · BM",
        "more3.title": "Switch language anytime",
        "more3.desc": "Full English, Simplified Chinese, and Bahasa Melayu UI — dark mode included.",
        "more4.num": "Budget nudges",
        "more4.pill": "Local only",
        "more4.title": "Monthly & daily budgets with local reminders",
        "more4.desc": "Budgets live on your phone. Reminders fire locally — never through a server.",

        "privacy.tag": "Privacy",
        "privacy.title": "We can't see your ledger",
        "privacy.desc": "Expense has no server that could receive your spending. No SMS permission. Payment text is parsed in memory; OTPs and promos are dropped. Export a backup or wipe everything whenever you want.",
        "privacy.btn": "Read the privacy note",

        "bench.tag": "Under the hood (briefly)",
        "bench.title": "Light, fast, out of your way",
        "bench.desc": "Real-device measurements, no hype: almost no idle battery drain, and queries over 5,000 entries stay snappy. Full tables live in the manual.",
        "bench1.label": "24h battery",
        "bench1.desc": "Under half a percent overnight with no background services spinning.",
        "bench2.label": "Parse speed",
        "bench2.desc": "About 17 microseconds average per payment notification.",
        "bench3.label": "Automated tests",
        "bench3.desc": "435 tests across 33 suites — accounting rules checked again and again.",

        "contact.tag": "Say hello",
        "contact.title": "Talk to the developer",
        "contact.desc": "Feedback, ideas, and small bugs all welcome by email.",
        "footer.tag": "Expense · 5.1 · Malaysia",

        "manual.sidebarHead": "Sections",
        "manual.s01": "Architecture",
        "manual.s02": "First launch",
        "manual.s03": "Navigation",
        "manual.s04": "Logging & keypad",
        "manual.s05": "Categories",
        "manual.s06": "Accounts & cards",
        "manual.s07": "Bill splits",
        "manual.s08": "Analytics",
        "manual.s09": "Budgets",
        "manual.s10": "Auto-detect",
        "manual.s11": "Inbox deck",
        "manual.s12": "Fuel refunds",
        "manual.s13": "Transfer merge",
        "manual.s14": "Setup Q&A",
        "manual.s15": "Phone brand tips",
        "manual.s16": "Preferences",
        "manual.s17": "Backup & move",
        "manual.s18": "Performance",
        "manual.s19": "Privacy",
        "manual.s20": "Roadmap",
        "manual.s21": "Contact"
    },

    zh: {
        "nav.home": "首页",
        "nav.features": "能做什么",
        "nav.how": "怎么用",
        "nav.manual": "手册",
        "nav.privacy": "隐私",
        "nav.contact": "联系",
        "nav.docsBtn": "看看手册",
        "mobile.menu": "菜单",
        "mobile.tocPrompt": "跳转到章节…",

        "hero.tag": "100% 本地 · 不上云 · 不追踪",
        "hero.title": "记账，<br>不该这么累。",
        "hero.subtitle": "Expense 是专为马来西亚人做的记账本。银行和钱包的支付通知会自动变成流水，数据只留在你的手机里——不用注册，不上传云端。",
        "hero.btnHow": "三步开始用",
        "hero.btnManual": "阅读手册",
        "hero.btnPrivacy": "隐私怎么保障",
        "hero.pill1": "数据不出手机",
        "hero.pill2": "无需注册登录",
        "hero.pill3": "支持 EN / 中文 / BM",
        "hero.mockArrow": "↓ 自动识别，待你确认",
        "hero.mockLabel": "今日流水",

        "features.tag": "为什么好用",
        "features.title": "把麻烦事交给它",
        "feat1.num": "自动记账",
        "feat1.pill": "通知识别",
        "feat1.title": "付款通知，变成流水",
        "feat1.desc": "TnG、Maybank、CIMB、Boost 等 70+ 应用的支付提醒，会自动整理成草稿。你看一眼，点确认就行。验证码和广告短信会被直接丢掉。",
        "feat2.num": "真·本地",
        "feat2.pill": "零上传",
        "feat2.title": "钱和账，都归你",
        "feat2.desc": "没有账号体系，没有云端同步，也没有广告追踪。换手机可以用二维码把整本账本搬过去，全程离线。",
        "feat3.num": "日常好帮手",
        "feat3.pill": "大马场景",
        "feat3.title": "聚餐、加油、转账",
        "feat3.desc": "AA 分账不乱月度开销；加油预扣和退款自动对上；银行卡扣款 + 钱包入账，60 秒内提示合并成一笔转账。",

        "setup.tag": "上手",
        "setup.title": "三步就能开始",
        "setup.desc": "不用看长教程。打开应用，跟着做就好。",
        "setup.step1": "STEP 1",
        "setup.step1Title": "填个昵称，选常用账户",
        "setup.step1Desc": "第一次打开会有引导：起个名字，勾选你常用的钱包和银行卡（TnG、Maybank…）。",
        "setup.step2": "STEP 2",
        "setup.step2Title": "打开「自动记账」",
        "setup.step2Desc": "在「我的」里打开开关，再允许通知访问权限。我们只读支付通知，不读短信内容库。",
        "setup.step3": "STEP 3",
        "setup.step3Title": "付款后看一眼收件箱",
        "setup.step3Desc": "通知进来后会先放在待确认列表。确认、合并或忽略，都由你说了算。部分手机还要允许后台运行，手册里有各品牌教程。",

        "more.tag": "更多贴心功能",
        "more.title": "日常会用到的小事",
        "more1.num": "防窥",
        "more1.pill": "一键打码",
        "more1.title": "旁边有人时，金额可以藏起来",
        "more1.desc": "防窥模式把数字打成星号，地铁上、办公室里更安心。",
        "more2.num": "分类学习",
        "more2.pill": "越用越聪明",
        "more2.title": "认过一次的商户，下次自动归类",
        "more2.desc": "你确认过的分类会记下来；可信商户还可以在金额上限内自动入账。",
        "more3.num": "三语",
        "more3.pill": "EN · 中文 · BM",
        "more3.title": "界面语言随时切",
        "more3.desc": "English、简体中文、Bahasa Melayu 全套界面，深色模式也准备好了。",
        "more4.num": "预算提醒",
        "more4.pill": "本地通知",
        "more4.title": "月度 / 每日预算，超了会提醒",
        "more4.desc": "预算存在手机本地，提醒也是本地发的，不经过任何服务器。",

        "privacy.tag": "隐私",
        "privacy.title": "我们看不到你的账本",
        "privacy.desc": "Expense 没有服务器可以上传你的消费记录。不申请读短信权限，支付通知只在内存里解析，OTP 和促销信息直接丢弃。你随时可以导出备份，或一键清空。",
        "privacy.btn": "阅读隐私说明",

        "bench.tag": "实力（很克制地说）",
        "bench.title": "轻、快、不打扰",
        "bench.desc": "真机实测数据，不吹牛：后台几乎不耗电，5000 笔流水的查询也只要几毫秒。完整基准表在手册里。",
        "bench1.label": "后台耗电",
        "bench1.desc": "约 24 小时待机消耗，无常驻服务瞎跑。",
        "bench2.label": "通知解析",
        "bench2.desc": "平均一次支付通知文本识别速度。",
        "bench3.label": "自动化测试",
        "bench3.desc": "33 个测试套件全部通过，记账规则反复验证。",

        "contact.tag": "有话说",
        "contact.title": "找开发者聊聊",
        "contact.desc": "反馈、建议、小问题，都欢迎写邮件。",
        "footer.tag": "Expense · 5.1 · 马来西亚",

        "manual.sidebarHead": "章节",
        "manual.s01": "架构与隐私",
        "manual.s02": "首次启动",
        "manual.s03": "导航",
        "manual.s04": "记账与键盘",
        "manual.s05": "分类",
        "manual.s06": "账户与信用卡",
        "manual.s07": "AA 分账",
        "manual.s08": "统计",
        "manual.s09": "预算",
        "manual.s10": "自动记账",
        "manual.s11": "待确认箱",
        "manual.s12": "加油退款",
        "manual.s13": "转账合并",
        "manual.s14": "设置问答",
        "manual.s15": "各品牌手机",
        "manual.s16": "偏好设置",
        "manual.s17": "备份与迁移",
        "manual.s18": "性能",
        "manual.s19": "隐私说明",
        "manual.s20": "路线图",
        "manual.s21": "联系"
    },

    ms: {
        "nav.home": "Utama",
        "nav.features": "Apa fungsi",
        "nav.how": "Cara mula",
        "nav.manual": "Manual",
        "nav.privacy": "Privasi",
        "nav.contact": "Hubungi",
        "nav.docsBtn": "Baca manual",
        "mobile.menu": "Menu",
        "mobile.tocPrompt": "Pilih bahagian...",

        "hero.tag": "100% dalam telefon · Tiada awan · Tiada jejak",
        "hero.title": "Merekod perbelanjaan<br>tak semestinya penat.",
        "hero.subtitle": "Expense ialah buku duit untuk rakyat Malaysia. Notifikasi bayaran daripada bank dan eWallet bertukar menjadi entri yang anda sahkan sahaja. Semuanya kekal dalam telefon — tanpa akaun, tanpa muat naik.",
        "hero.btnHow": "Mula dalam 3 langkah",
        "hero.btnManual": "Buka manual",
        "hero.btnPrivacy": "Bagaimana privasi?",
        "hero.pill1": "Data kekal dalam peranti",
        "hero.pill2": "Tiada pendaftaran",
        "hero.pill3": "English · 中文 · BM",
        "hero.mockArrow": "↓ Ditangkap automatik, anda sahkan",
        "hero.mockLabel": "Entri hari ini",

        "features.tag": "Kenapa digemari",
        "features.title": "Bahagian membosankan, biar ia urus",
        "feat1.num": "Auto-log",
        "feat1.pill": "Tangkap notifikasi",
        "feat1.title": "Notifikasi bayaran jadi entri",
        "feat1.desc": "Amaran daripada 70+ aplikasi Malaysia — TnG, Maybank, CIMB, Boost dan lain-lain — menjadi draf. Lihat, sahkan, selesai. Kod OTP dan promosi dibuang.",
        "feat2.num": "Benar-benar lokal",
        "feat2.pill": "Sifar muat naik",
        "feat2.title": "Duit anda, telefon anda",
        "feat2.desc": "Tiada akaun, tiada sync awan, tiada perchure. Tukar telefon? Pindah keseluruhan buku besar dengan QR, 100% luar talian.",
        "feat3.num": "Pembantu harian",
        "feat3.pill": "Untuk Malaysia",
        "feat3.title": "Makan, minyak, pindahan",
        "feat3.desc": "Bahagi bil tanpa cemarkan belanja bulanan. Pegangan minyak & bayaran balik sepadan. Caj kad + top-up dompet dalam 60 saat? Cadangan gabung sebagai pindahan.",

        "setup.tag": "Mula guna",
        "setup.title": "Siap dalam 3 langkah",
        "setup.desc": "Tiada tutorial panjang. Buka aplikasi dan ikut sahaja.",
        "setup.step1": "LANGKAH 1",
        "setup.step1Title": "Nama & akaun pilihan",
        "setup.step1Desc": "Panduan kali pertama: pilih nama dan dompet/bank yang anda guna (TnG, Maybank…).",
        "setup.step2": "LANGKAH 2",
        "setup.step2Title": "Hidupkan auto-detect",
        "setup.step2Desc": "Buka suis di bawah Saya, kemudian benarkan akses notifikasi. Kami hanya baca notifikasi pembayaran — bukan peti masuk SMS.",
        "setup.step3": "LANGKAH 3",
        "setup.step3Title": "Semak inbox selepas bayar",
        "setup.step3Desc": "Tangkapan menunggu dalam senarai tertunggak. Sahkan, gabung, atau tolak — pilihan anda. Sesetengah telefon perlukan tip bateri/autostart; manual ada panduan jenama.",

        "more.tag": "Lebih banyak",
        "more.title": "Perkara kecil untuk hidup harian",
        "more1.num": "Skrin privasi",
        "more1.pill": "Topeng satu ketik",
        "more1.title": "Sembunyikan amaun bila ada orang",
        "more1.desc": "Mod peek tukar angka kepada tanda bintang — lebih selamat di LRT atau pejabat.",
        "more2.num": "Belajar peniaga",
        "more2.pill": "Lebih bijak",
        "more2.title": "Sekali sahkan, diingat selamanya",
        "more2.desc": "Kategori yang anda sahkan kekal. Peniaga dipercayai boleh auto-approve dalam had perbelanjaan anda.",
        "more3.num": "3 bahasa",
        "more3.pill": "EN · 中文 · BM",
        "more3.title": "Tukar bahasa bila-bila",
        "more3.desc": "UI penuh English, 简体中文, dan Bahasa Melayu — termasuk mod gelap.",
        "more4.num": "Nudge bajet",
        "more4.pill": "Lokal sahaja",
        "more4.title": "Bajet bulanan & harian dengan peringatan lokal",
        "more4.desc": "Bajet disimpan dalam telefon. Peringatan berjalan secara lokal — tidak melalui mana-mana pelayan.",

        "privacy.tag": "Privasi",
        "privacy.title": "Kami tak boleh lihat buku besar anda",
        "privacy.desc": "Expense tiada pelayan yang boleh menerima data perbelanjaan anda. Tiada kebenaran SMS. Teks pembayaran diproses dalam memori; OTP & promosi dibuang. Eksport sandaran atau kosongkan semuanya bila-bila.",
        "privacy.btn": "Baca nota privasi",

        "bench.tag": "Di sebalik tabir (ringkas)",
        "bench.title": "Ringan, pantas, tidak mengganggu",
        "bench.desc": "Ukuran peranti fizikal, tanpa hiperbola: hampir tiada bateri terbiar, pertanyaan kekal laju walaupun 5,000 entri. Jadual penuh dalam manual.",
        "bench1.label": "Bateri 24 jam",
        "bench1.desc": "Bawah setengah peratus semalaman tanpa perkhidmatan latar berputar.",
        "bench2.label": "Kelajuan parse",
        "bench2.desc": "Kira-kira 17 mikrosaat purata bagi setiap notifikasi pembayaran.",
        "bench3.label": "Ujian automatik",
        "bench3.desc": "435 ujian merentas 33 suite — perakaunan disemak berulang kali.",

        "contact.tag": "Katakan halo",
        "contact.title": "Bercakap dengan pembangun",
        "contact.desc": "Maklum balas, idea, dan bug kecil dialu-alukan melalui e-mel.",
        "footer.tag": "Expense · 5.1 · Malaysia",

        "manual.sidebarHead": "Bahagian",
        "manual.s01": "Arsitektur & privasi",
        "manual.s02": "Pelancaran pertama",
        "manual.s03": "Navigasi",
        "manual.s04": "Rekod & papan kekunci",
        "manual.s05": "Kategori",
        "manual.s06": "Akaun & kad",
        "manual.s07": "Bahagi bil",
        "manual.s08": "Analitik",
        "manual.s09": "Bajet",
        "manual.s10": "Auto-detect",
        "manual.s11": "Deck inbox",
        "manual.s12": "Bayaran balik minyak",
        "manual.s13": "Gabung pindahan",
        "manual.s14": "Soalan tetapan",
        "manual.s15": "Tip jenama telefon",
        "manual.s16": "Keutamaan",
        "manual.s17": "Sandar & pindah",
        "manual.s18": "Prestasi",
        "manual.s19": "Privasi",
        "manual.s20": "Peta jalan",
        "manual.s21": "Hubungi"
    }
};

function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] != null) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (dict[key] != null) el.innerHTML = dict[key];
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    try { localStorage.setItem('site_lang', lang); } catch (e) {}
    try {
        const url = new URL(window.location.href);
        url.searchParams.set('lang', lang);
        history.replaceState(null, '', url);
    } catch (e) {}
}

function initMobileMenu() {
    const toggle = document.querySelector('.menu-toggle-btn');
    const drawer = document.querySelector('.mobile-nav-drawer');
    if (!toggle || !drawer) return;
    toggle.addEventListener('click', () => drawer.classList.toggle('open'));
    drawer.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => drawer.classList.remove('open'));
    });
}

function initMobileToc() {
    const select = document.querySelector('.mobile-toc-select');
    if (!select) return;
    select.addEventListener('change', () => {
        const id = select.value;
        if (!id) return;
        const target = document.getElementById(id);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
    });
    const params = new URLSearchParams(window.location.search);
    const saved = (() => { try { return localStorage.getItem('site_lang'); } catch (e) { return null; } })();
    const fromUrl = params.get('lang');
    const lang = (fromUrl === 'en' || fromUrl === 'zh' || fromUrl === 'ms')
        ? fromUrl
        : ((saved === 'en' || saved === 'zh' || saved === 'ms') ? saved : 'en');
    applyLanguage(lang);
    initMobileMenu();
    initMobileToc();
});
