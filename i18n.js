/**
 * Expense – Friendly multi-language & navigation engine
 * Languages: English (en), 简体中文 (zh), Bahasa Melayu (ms)
 * Copy tone: everyday spoken language, minimal jargon
 */

const translations = {
    en: {
        "nav.home": "Home",
        "nav.features": "What it does",
        "nav.how": "How to use",
        "nav.manual": "Guide",
        "nav.privacy": "Privacy",
        "nav.contact": "Contact",
        "nav.docsBtn": "Open guide",
        "mobile.menu": "Menu",
        "mobile.tocPrompt": "Jump to section...",

        "hero.tag": "Only on your phone · No internet needed · No spying",
        "hero.title": "Saving money notes<br>should be easy.",
        "hero.subtitle": "Pay with TnG, Maybank, CIMB… and Expense writes it down for you. No sign-up. Nothing leaves your phone.",
        "hero.btnHow": "Try it in 3 steps",
        "hero.btnManual": "How to use",
        "hero.btnPrivacy": "Is my money safe?",
        "hero.pill1": "Stays on your phone",
        "hero.pill2": "No account needed",
        "hero.pill3": "English · 中文 · BM",
        "hero.mockArrow": "↓ We catch it · You tap OK",
        "hero.mockLabel": "Today",
        "hero.demoCta": "Tap to log this",
        "hero.demoHint": "Try it · tap again to reset",
        "hero.demoDone": "Logged ✓ Tap to try again",

        "features.tag": "Why it's easy",
        "features.title": "Less typing. More living.",
        "feat1.num": "Auto write",
        "feat1.pill": "Reads your alerts",
        "feat1.title": "Pay → it writes for you",
        "feat1.desc": "When TnG, Maybank, CIMB, Boost and 70+ other apps say you paid, Expense turns that into a note. You just look and tap OK. Bank codes and ads are ignored.",
        "feat2.num": "Private",
        "feat2.pill": "Nothing uploaded",
        "feat2.title": "Your money. Your phone.",
        "feat2.desc": "No login. No internet required. No one watching. Get a new phone? Scan a few pictures and your whole money book moves over.",
        "feat3.num": "Real life",
        "feat3.pill": "Made for Malaysia",
        "feat3.title": "Makan, minyak, transfer",
        "feat3.desc": "Split the bill without messing up your monthly spend. Petrol hold + refund? It lines them up. Card charge and wallet top-up a few seconds apart? It asks: same transfer?",

        "setup.tag": "Start here",
        "setup.title": "Ready in 3 easy steps",
        "setup.desc": "No long manual needed. Just open the app.",
        "setup.step1": "STEP 1",
        "setup.step1Title": "Name + your usual cards",
        "setup.step1Desc": "First time: type a nickname, pick the wallets/banks you actually use.",
        "setup.step2": "STEP 2",
        "setup.step2Title": "Switch on auto-write",
        "setup.step2Desc": "In Me, turn it on and allow notification access. We only look at payment alerts — never your full SMS inbox.",
        "setup.step3": "STEP 3",
        "setup.step3Title": "Tap OK after you pay",
        "setup.step3Desc": "New payments wait for you to confirm. Keep, merge, or throw away — your choice. Some phones need one extra battery setting; the guide shows how.",

        "more.tag": "Little extras",
        "more.title": "Small things you'll notice",
        "more1.num": "Hide amounts",
        "more1.pill": "One tap",
        "more1.title": "Someone looking? Hide the numbers",
        "more1.desc": "One tap turns RM amounts into stars. Safer on the LRT or at the office.",
        "more2.num": "Remembers shops",
        "more2.pill": "Gets easier",
        "more2.title": "Confirm once, auto next time",
        "more2.desc": "After you teach it a shop once, it remembers. Shops you trust can even save themselves (under a limit you set).",
        "more3.num": "3 languages",
        "more3.pill": "EN · 中文 · BM",
        "more3.title": "Switch language anytime",
        "more3.desc": "Full English, Chinese, and Bahasa Melayu. Dark mode too.",
        "more4.num": "Budget alerts",
        "more4.pill": "On your phone",
        "more4.title": "Daily / monthly limit? It reminds you",
        "more4.desc": "Set a budget. When you're close, your phone pings you — nothing goes online.",

        "privacy.tag": "Privacy",
        "privacy.title": "We can't see your money",
        "privacy.desc": "There is no Expense server that can read your spending. No SMS access. Payment texts are read only on your phone, then thrown away. Codes and ads never become records. You can export or erase everything anytime.",
        "privacy.btn": "More about privacy",

        "bench.tag": "Quick facts",
        "bench.title": "Light. Fast. Quiet.",
        "bench.desc": "Real phone tests — not marketing fluff. It barely uses battery when idle, and big lists still feel snappy. Full numbers are in the guide.",
        "bench1.label": "Battery",
        "bench1.desc": "Less than 0.5% overnight with nothing running in the background.",
        "bench2.label": "Speed",
        "bench2.desc": "Payment alerts turn into notes almost instantly.",
        "bench3.label": "Tested",
        "bench3.desc": "435 automatic checks — so your numbers stay correct.",

        "contact.tag": "Say hi",
        "contact.title": "Questions? Just email",
        "contact.desc": "Ideas, feedback, tiny bugs — all welcome.",
        "footer.tag": "Expense · 5.1 · Malaysia",

        "manual.sidebarHead": "Sections",
        "manual.s01": "How it works",
        "manual.s02": "First open",
        "manual.s03": "Moving around",
        "manual.s04": "Adding expenses",
        "manual.s05": "Categories",
        "manual.s06": "Cards & cash",
        "manual.s07": "Split bills",
        "manual.s08": "Charts",
        "manual.s09": "Budgets",
        "manual.s10": "Auto-writing",
        "manual.s11": "Things to confirm",
        "manual.s12": "Petrol refunds",
        "manual.s13": "Transfer merge",
        "manual.s14": "Setup help",
        "manual.s15": "Phone brands",
        "manual.s16": "Settings",
        "manual.s17": "Backup & move",
        "manual.s18": "Performance",
        "manual.s19": "Privacy",
        "manual.s20": "What's next",
        "manual.s21": "Contact"
    },

    zh: {
        "nav.home": "首页",
        "nav.features": "能做什么",
        "nav.how": "怎么用",
        "nav.manual": "使用指南",
        "nav.privacy": "隐私",
        "nav.contact": "联系",
        "nav.docsBtn": "打开指南",
        "mobile.menu": "菜单",
        "mobile.tocPrompt": "跳到某一节…",

        "hero.tag": "只存在你手机里 · 不用联网 · 没人偷看",
        "hero.title": "记花的钱，<br>可以很轻松。",
        "hero.subtitle": "用 TnG、Maybank、CIMB 付完款，Expense 帮你记一笔。不用注册账号，也不会把数据传到网上。",
        "hero.btnHow": "三步就能用",
        "hero.btnManual": "怎么用",
        "hero.btnPrivacy": "钱和隐私安全吗？",
        "hero.pill1": "留在手机里",
        "hero.pill2": "不用注册登录",
        "hero.pill3": "中文 · English · BM",
        "hero.mockArrow": "↓ 自动帮你记 · 你点一下确认",
        "hero.mockLabel": "今天记的",
        "hero.demoCta": "点一下，帮我记这笔",
        "hero.demoHint": "试试看 · 可以反复点",
        "hero.demoDone": "已记入 ✓ 再点一下重来",

        "features.tag": "为什么省心",
        "features.title": "少打字，多过日子",
        "feat1.num": "自动记",
        "feat1.pill": "看得懂付款通知",
        "feat1.title": "付完款，它帮你写一笔",
        "feat1.desc": "TnG、Maybank、CIMB、Boost 等 70 多个应用一发「你已付款」，Expense 就帮你写成一条。你只要看一眼、点确认。银行验证码和广告，直接忽略。",
        "feat2.num": "很私密",
        "feat2.pill": "什么都不上传",
        "feat2.title": "钱是你的，账也在你手机",
        "feat2.desc": "不用登录，不用联网，也没人盯着你花多少。换新手机？对着旧手机扫几下，整本账就搬过去了。",
        "feat3.num": "过日子用得上",
        "feat3.pill": "大马日常",
        "feat3.title": "吃饭、加油、转账",
        "feat3.desc": "AA 请客不会算乱你的月开销。加油先扣后退，它帮你对上。卡扣了一笔、钱包又进一笔？它会问：要不要合成一笔转账？",

        "setup.tag": "上手",
        "setup.title": "三步就会用",
        "setup.desc": "不用啃长教程，打开 App 跟着做就行。",
        "setup.step1": "第 1 步",
        "setup.step1Title": "起个名字，选常用卡",
        "setup.step1Desc": "第一次打开：取个昵称，勾上你平时用的钱包和银行卡。",
        "setup.step2": "第 2 步",
        "setup.step2Title": "打开「自动记账」",
        "setup.step2Desc": "在「我的」里打开开关，再允许通知权限。我们只看付款提醒，不会翻你全部短信。",
        "setup.step3": "第 3 步",
        "setup.step3Title": "付完款，点一下确认",
        "setup.step3Desc": "新付款会先放着等你点头。留下、合并还是删掉，都听你的。有些手机要多设一下后台，指南里有各品牌做法。",

        "more.tag": "还有这些",
        "more.title": "日常会用到的小功能",
        "more1.num": "防偷看",
        "more1.pill": "一键打码",
        "more1.title": "旁边有人？金额可以藏起来",
        "more1.desc": "点一下，金额变成星星。在 LRT 上、办公室里更安心。",
        "more2.num": "认得店家",
        "more2.pill": "越用越顺",
        "more2.title": "教一次，下次自己记",
        "more2.desc": "你确认过的店，它会记住。信任的店还可以自动记（金额上限你来定）。",
        "more3.num": "三种语言",
        "more3.pill": "中文 · EN · BM",
        "more3.title": "想换语言随时换",
        "more3.desc": "中文、English、Bahasa Melayu 都有。也有深色模式。",
        "more4.num": "预算提醒",
        "more4.pill": "只在本机",
        "more4.title": "设个上限，快超了会提醒",
        "more4.desc": "月预算、日预算都行。快超支时手机轻轻提醒你一下，不会发到网上。",

        "privacy.tag": "隐私",
        "privacy.title": "我们看不见你的账",
        "privacy.desc": "Expense 没有服务器能收到你的消费记录。也不需要读短信权限。付款内容只在你手机里看一眼就丢掉。验证码和广告永远不会变成账单。你随时可以导出备份，或者一键清空。",
        "privacy.btn": "再多了解一点隐私",

        "bench.tag": "简单说两句",
        "bench.title": "很轻，很快，不打扰",
        "bench.desc": "都是真机实测，不吹牛。放着不用几乎不费电；账本再多，点开也很快。详细数据在指南里。",
        "bench1.label": "省电",
        "bench1.desc": "一晚上待机，耗电不到半个电格。",
        "bench2.label": "够快",
        "bench2.desc": "付款通知几乎立刻变成一条记录。",
        "bench3.label": "测得多",
        "bench3.desc": "自动检查了 435 遍，账目不容易算错。",

        "contact.tag": "有话说",
        "contact.title": "有想法？发个邮件",
        "contact.desc": "建议、反馈、小问题，都欢迎。",
        "footer.tag": "Expense · 5.1 · 马来西亚",

        "manual.sidebarHead": "目录",
        "manual.s01": "它是怎么工作的",
        "manual.s02": "第一次打开",
        "manual.s03": "界面怎么走",
        "manual.s04": "怎么记一笔",
        "manual.s05": "分类",
        "manual.s06": "银行卡和现金",
        "manual.s07": "AA 分账",
        "manual.s08": "图表统计",
        "manual.s09": "预算",
        "manual.s10": "自动记账",
        "manual.s11": "待确认的账",
        "manual.s12": "加油退款",
        "manual.s13": "转账合并",
        "manual.s14": "设置遇到问题",
        "manual.s15": "各品牌手机",
        "manual.s16": "偏好设置",
        "manual.s17": "备份和搬家",
        "manual.s18": "性能",
        "manual.s19": "隐私说明",
        "manual.s20": "以后会做什么",
        "manual.s21": "联系我们"
    },

    ms: {
        "nav.home": "Utama",
        "nav.features": "Apa buat",
        "nav.how": "Cara guna",
        "nav.manual": "Panduan",
        "nav.privacy": "Privasi",
        "nav.contact": "Hubungi",
        "nav.docsBtn": "Buka panduan",
        "mobile.menu": "Menu",
        "mobile.tocPrompt": "Pilih bahagian...",

        "hero.tag": "Dalam telefon sahaja · Tak perlu internet · Tiada orang intai",
        "hero.title": "Rekod duit belanja<br>patut senang.",
        "hero.subtitle": "Bayar guna TnG, Maybank, CIMB… Expense tulis untuk anda. Tak perlu daftar akaun. Semuanya kekal dalam telefon.",
        "hero.btnHow": "Cuba 3 langkah",
        "hero.btnManual": "Cara guna",
        "hero.btnPrivacy": "Duit saya selamat?",
        "hero.pill1": "Kekal dalam telefon",
        "hero.pill2": "Tiada akaun",
        "hero.pill3": "English · 中文 · BM",
        "hero.mockArrow": "↓ Kami tangkap · Anda tekan OK",
        "hero.mockLabel": "Hari ini",
        "hero.demoCta": "Tekan untuk rekod",
        "hero.demoHint": "Cuba · tekan lagi untuk reset",
        "hero.demoDone": "Disimpan ✓ Tekan untuk cuba lagi",

        "features.tag": "Kenapa mudah",
        "features.title": "Kurang taip. Lebih hidup.",
        "feat1.num": "Auto tulis",
        "feat1.pill": "Baca amaran bayaran",
        "feat1.title": "Bayar → dia tulis",
        "feat1.desc": "Bila TnG, Maybank, CIMB, Boost dan 70+ apps lain cakap anda dah bayar, Expense jadikan nota. Anda tengok, tekan OK. Kod bank dan iklan diabaikan.",
        "feat2.num": "Peribadi",
        "feat2.pill": "Tiada muat naik",
        "feat2.title": "Duit anda. Telefon anda.",
        "feat2.desc": "Tiada log masuk. Tak perlu internet. Tiada orang memerhati. Tukar telefon? Imbas beberapa keping gambar, buku duit anda pindah sekali.",
        "feat3.num": "Kehidupan nyata",
        "feat3.pill": "Untuk Malaysia",
        "feat3.title": "Makan, minyak, pindah",
        "feat3.desc": "Bahagi bil tanpa rosak belanja bulanan. Pegangan minyak + refund? Ia susun. Caj kad dan top-up dompet berdekatan? Ia tanya: pindahan sama?",

        "setup.tag": "Mula sini",
        "setup.title": "Siap dalam 3 langkah mudah",
        "setup.desc": "Tak perlu baca panjang. Buka apps dan ikut.",
        "setup.step1": "LANGKAH 1",
        "setup.step1Title": "Nama + kad biasa anda",
        "setup.step1Desc": "Kali pertama: taip nama, pilih dompet/bank yang anda guna.",
        "setup.step2": "LANGKAH 2",
        "setup.step2Title": "Hidupkan auto-tulis",
        "setup.step2Desc": "Dalam Saya, hidupkan dan benarkan akses notifikasi. Kami hanya tengok amaran bayaran — bukan semua SMS anda.",
        "setup.step3": "LANGKAH 3",
        "setup.step3Title": "Tekan OK lepas bayar",
        "setup.step3Desc": "Bayaran baharu menunggu anda sahkan. Simpan, gabung, atau buang — pilihan anda. Sesetengah telefon perlu satu tetapan bateri; panduan ada tunjuk.",

        "more.tag": "Sedikit lagi",
        "more.title": "Perkara kecil yang anda perasan",
        "more1.num": "Sembunyi amaun",
        "more1.pill": "Satu ketik",
        "more1.title": "Ada orang pandang? Sembunyi nombor",
        "more1.desc": "Satu ketik tukar RM jadi bintang. Lebih selamat di LRT atau pejabat.",
        "more2.num": "Ingat kedai",
        "more2.pill": "Lebih mudah",
        "more2.title": "Sekali ajar, next time auto",
        "more2.desc": "Selepas anda ajar sekali, ia ingat. Kedai dipercayai boleh auto-simpan (ikut had yang anda set).",
        "more3.num": "3 bahasa",
        "more3.pill": "EN · 中文 · BM",
        "more3.title": "Tukar bahasa bila-bila",
        "more3.desc": "English, 中文, Bahasa Melayu penuh. Ada mod gelap.",
        "more4.num": "Alert bajet",
        "more4.pill": "Dalam telefon",
        "more4.title": "Had harian/bulanan? Ia ingatkan",
        "more4.desc": "Set bajet. Bila hampir cukup, telefon beri quiet ping — tiada apa dihantar online.",

        "privacy.tag": "Privasi",
        "privacy.title": "Kami tak nampak duit anda",
        "privacy.desc": "Tiada pelayan Expense yang boleh baca belanja anda. Tiada kebenaran SMS. Teks bayaran dibaca dalam telefon sahaja, kemudian dibuang. Kod & iklan tak jadi rekod. Anda boleh eksport atau padam semuanya bila-bila.",
        "privacy.btn": "Lagi pasal privasi",

        "bench.tag": "Fakta ringkas",
        "bench.title": "Ringan. Pantas. Senyap.",
        "bench.desc": "Ujian telefon sebenar — bukan iklan. Hampir tak makan bateri masa idle; senarai panjang pun masih laju. Nombor penuh dalam panduan.",
        "bench1.label": "Bateri",
        "bench1.desc": "Bawah 0.5% semalaman, tiada service latar berputar.",
        "bench2.label": "Pantas",
        "bench2.desc": "Amaran bayaran jadi nota hampir serta-merta.",
        "bench3.label": "Diuji",
        "bench3.desc": "435 semakan automatik — nombor anda kekal betul.",

        "contact.tag": "Kata hello",
        "contact.title": "Ada soalan? Email je",
        "contact.desc": "Idea, maklum balas, bug kecil — semua dialu-alukan.",
        "footer.tag": "Expense · 5.1 · Malaysia",

        "manual.sidebarHead": "Bahagian",
        "manual.s01": "Ia berfungsi macam mana",
        "manual.s02": "Buka pertama kali",
        "manual.s03": "Cara gerak",
        "manual.s04": "Tambah belanja",
        "manual.s05": "Kategori",
        "manual.s06": "Kad & tunai",
        "manual.s07": "Bahagi bil",
        "manual.s08": "Carta",
        "manual.s09": "Bajet",
        "manual.s10": "Auto tulis",
        "manual.s11": "Perlu disahkan",
        "manual.s12": "Refund minyak",
        "manual.s13": "Gabung pindahan",
        "manual.s14": "Bantuan tetapan",
        "manual.s15": "Jenama telefon",
        "manual.s16": "Keutamaan",
        "manual.s17": "Sandar & pindah",
        "manual.s18": "Prestasi",
        "manual.s19": "Privasi",
        "manual.s20": "Akan datang",
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

function initNavScroll() {
    const nav = document.querySelector('.navbar');
    if (!nav) return;
    const onScroll = () => {
        nav.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
}

function initReveal() {
    const nodes = document.querySelectorAll('.reveal');
    if (!nodes.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        nodes.forEach(n => n.classList.add('is-in'));
        return;
    }

    if (!('IntersectionObserver' in window)) {
        nodes.forEach(n => n.classList.add('is-in'));
        return;
    }

    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-in');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    nodes.forEach(n => io.observe(n));
}

function initPhoneDemo() {
    const phone = document.getElementById('demo-phone');
    const cta = document.getElementById('demo-cta');
    if (!phone || !cta) return;

    let stage = 'idle'; // idle | done
    let busy = false;

    const dict = () => translations[document.documentElement.getAttribute('data-lang')] || translations.en;

    const setCopy = () => {
        const d = dict();
        cta.textContent = stage === 'done' ? (d['hero.demoDone'] || cta.textContent) : (d['hero.demoCta'] || cta.textContent);
    };

    // Keep button label in sync after language switch
    const langObserver = new MutationObserver(setCopy);
    langObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-lang'] });
    setCopy();

    const runDemo = () => {
        if (busy) return;
        busy = true;

        if (stage === 'idle') {
            phone.classList.add('stage-confirm');
            cta.disabled = true;
            window.setTimeout(() => {
                phone.classList.remove('stage-confirm');
                phone.classList.add('stage-done');
                stage = 'done';
                cta.disabled = false;
                setCopy();
                busy = false;
            }, 380);
        } else {
            phone.classList.remove('stage-done');
            stage = 'idle';
            setCopy();
            busy = false;
        }
    };

    cta.addEventListener('click', (e) => {
        e.stopPropagation();
        runDemo();
    });
    phone.addEventListener('click', (e) => {
        if (e.target.closest('.mock-cta')) return;
        runDemo();
    });
    phone.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            runDemo();
        }
    });
    phone.setAttribute('tabindex', '0');
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
    initNavScroll();
    initReveal();
    initPhoneDemo();
});
