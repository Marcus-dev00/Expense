# 💰 Expense — Pengurus Kewangan Peribadi Luar Talian & Privasi

<p align="center">
  <a href="./README.md">English</a> | <a href="./README.zh.md">简体中文</a> | <strong>Bahasa Melayu</strong>
</p>

<p align="center">
  <img src="public/favicon.ico" alt="Logo Expense" width="80" height="80">
</p>

<p align="center">
  <strong>Pengurus perbelanjaan peribadi 100% luar talian, sifar telemetri khusus untuk Malaysia 🇲🇾</strong>
</p>

<p align="center">
  <a href="https://github.com/marcuslzy0103-bit/expense-app/releases/latest">
    <img src="https://img.shields.io/github/v/release/marcuslzy0103-bit/expense-app?style=for-the-badge&color=000000" alt="Versi Terkini">
  </a>
  <a href="https://github.com/marcuslzy0103-bit/expense-app/releases/latest/download/app-release.apk">
    <img src="https://img.shields.io/badge/Muat_Turun-Android_APK-000000?style=for-the-badge&logo=android&logoColor=white" alt="Muat Turun APK">
  </a>
  <img src="https://img.shields.io/badge/Privasi-100%25_Luar_Talian-000000?style=for-the-badge" alt="100% Privasi Luar Talian">
</p>

---

## ⚡ Pautan Pantas & Dokumentasi

| Sumber | Pautan | Penerangan |
| :--- | :--- | :--- |
| 📱 **Muat Turun APK Terus** | [**Muat Turun APK Terkini (v4.4)**](https://github.com/marcuslzy0103-bit/expense-app/releases/latest/download/app-release.apk) | Pakej APK Android versi pengeluaran (Build 44) |
| 📦 **GitHub Releases** | [**Lihat Keluaran**](https://github.com/marcuslzy0103-bit/expense-app/releases) | Log perubahan, fail pemasangan, dan Android App Bundle (.aab) |
| 📖 **Manual Pengguna** | [**Manual Pengguna Lengkap**](./github-site/manual.html) | Panduan rujukan interaktif 20 seksyen |
| 🔒 **Dasar Privasi** | [**Arkitektur Privasi**](./github-site/privacy.html) | Standard pemprosesan peranti tempatan tanpa telemetri |

---

## 🛡️ Ciri-ciri & Keupayaan Utama

### 1. 100% Arkitektur Luar Talian SQLite
- **Pangkalan Data Tempatan**: Semua lejar transaksi, baki akaun, kategori, dan bajet disimpan secara eksklusif dalam pangkalan data SQLite peranti anda.
- **Sifar Telemetri**: Tiada pengumpulan data jauh, SDK analitik pihak ketiga, atau muat naik awan. 0 bait data kewangan keluar dari telefon anda.
- **Ketepatan Sen Integer**: Nilai wang disimpan dalam bentuk integer *sen* untuk mengelakkan ralat pembundaran titik terapung (`RM 124.50` = `12450` sen).

### 2. Enjin Auto-Kesan Notifikasi Asal
- **Senarai Putih Aplikasi Malaysia**: Pengesanan masa nyata untuk Touch 'n Go eWallet, MAE Maybank, CIMB Clicks, Boost, Boost Bank, RHB, Public Bank, GrabPay, Hong Leong, AmBank, Bank Islam, Alliance Bank, OCBC, UOB, HSBC, GXBank, WeChat Pay, Alipay, dan DuitNow.
- **Analisis SMS Bank dalam Memori**: Menganalisis SMS amaran bank dalam memori menggunakan kata kunci (`RM`, `MYR`, `paid`, `spent`, `debited`, `credited`). Mesej peribadi dan kod OTP dibuang serta-merta tanpa disimpan.
- **Tiada Kebenaran Membaca SMS**: **Tidak meminta kebenaran sensitif `READ_SMS` atau `RECEIVE_SMS`**.

### 3. Kongsi Bil & Bayaran Balik Rakan (AA)
- **Pecahan Nisbah Pantas**: Pintasan pecahan (`1/2`, `2/3`, `3/4`) atau amaun tersuai berserta nama peminjam.
- **Lejar Belum Terima Berasingan**: Memisahkan perbelanjaan sendiri daripada pinjaman rakan agar tidak menjejaskan laporan perbelanjaan bulanan peribadi.
- **Penyelesaian 1-Ketikan**: Selesaikan bayaran balik terus ke dalam akaun pilihan anda secara automatik.

### 4. Gabung Auto Bayaran Balik Pam Minyak (RON95)
- **Padanan Pra-Kebenaran & Baki Pulangan**: Penahanan pra-kebenaran pam stesen minyak (cth. RM 80) dan pulangan baki (cth. RM 5.34) dipadankan pada hari yang sama dan digabungkan menjadi perbelanjaan bersih tepat (`RM 74.66`) tanpa rekod pendapatan palsu.

### 5. Penggabungan Pindahan Silang Aplikasi 60-Saat
- **Pengesanan Tambah Nilai**: Mengesan transaksi dua hala dalam masa 60 saat (cth. tambah nilai TNG eWallet melalui CIMB) dan memaparkan cadangan: *"Gabung sebagai Pindahan: CIMB → TNG eWallet"*.

### 6. Alat Penentukuran Baki Kendiri
- **Audit Lejar & Pembaikan Baki**: Kira semula baki akaun secara tepat daripada lejar transaksi sah dengan penyongsangan tanda liabiliti Kad Kredit (`is_liability = 1`).

### 7. Sokongan Tri-Bahasa & Tema
- **Bahasa**: English, 简体中文 (Bahasa Cina Ringkas), dan Bahasa Malaysia dengan pertukaran serta-merta.
- **Penampilan**: Ikut Sistem, Tema Gelap, dan Tema Cerah.

---

## 🛠️ Tindanan Teknologi

- **Teras**: Vanilla JavaScript (Modul ES6), HTML5, Vanilla CSS3.
- **Masa Larian Mudah Alih**: CapacitorJS 8 (`@capacitor/core`, `@capacitor/android`).
- **Pangkalan Data**:
  - **Android Asal**: `@capacitor-community/sqlite` (CapacitorSQLite).
  - **Pratonton Web**: `sql.js` (WebAssembly) disokong oleh `localStorage`.
- **Jambatan Android Asal**: Java `NotificationListenerService` + `NotificationPlugin`.
- **Ujian Automatik**: Vitest (21 fail ujian, 151 ujian unit & regresi).

---

## 💻 Persediaan Pembangunan Tempatan

### Keperluan
- Node.js (v18 atau lebih tinggi)
- npm / npx
- Android Studio (untuk membina aplikasi Android asal)

### Arahan Menjalankan

```bash
# 1. Klon repositori
git clone https://github.com/marcuslzy0103-bit/expense-app.git
cd expense-app

# 2. Pasang kebergantungan
npm install

# 3. Mulakan pelayan pratonton Vite
npm run dev

# 4. Jalankan ujian unit automatik
npm test

# 5. Bina pakej pengeluaran
npm run build
```

---

## 📄 Lesen & Privasi

Projek ini dibina berasaskan prinsip privasi sepenuhnya. Tiada sebarang data kewangan peribadi dikumpul atau dimuat naik.
