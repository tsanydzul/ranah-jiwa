export type NavItem = {
  href: string
  label: string
}

export type StatItem = {
  value: string
  label: string
  description: string
}

export type TestimonialItem = {
  name: string
  role: string
  quote: string
}

export type CertificationItem = {
  title: string
  issuer: string
  date: string
  highlights: string[]
}

export type ServiceItem = {
  id: string
  packageName: string
  title: string
  summary: string
  description: string
  bullets: string[]
  duration: string
  outputs?: string[]
  fee: string
  serviceNotes?: string[]
  ctaLabel: string
}

export type SeminarItem = {
  title: string
  subtitle: string
  audience: string
  date: string
  time: string
  price: string
  description: string
  poster: string
}

export type BookItem = {
  title: string
  subtitle?: string
  description: string
  cover?: string
  year?: string
  publisher?: string
  ctaLabel?: string
  ctaHref?: string
}

export type BookingFormData = {
  nama: string
  umur: string
  jenisKelamin: string
  whatsapp: string
  layanan: string
  metode: string
  tanggal: string
  jam: string
  keluhan: string
}

export const siteConfig = {
  brandName: "Ranah Jiwa",
  heroHeadline: "Ruang Aman untuk Memahami Diri & Bertumbuh",
  heroSubheadline:
    "Ranah Jiwa hadir sebagai ruang aman untuk berbagi, refleksi, dan memahami kehidupan batin. Tempat untuk merasa didengar, dipahami, dan bertumbuh bersama pendampingan profesional dan terpercaya.",
  whatsappDisplay: "0858 0623 2515",
  whatsappNumber: "6285806232515",
  instagramHandle: "@ranahjiwaa",
  instagramUrl: "https://instagram.com/ranahjiwaa",
  offlineCoverageNote:
    "Layanan offline tersedia untuk area Surabaya, Sidoarjo, dan Gresik (lokasi menyesuaikan kesepakatan).",
  navItems: [
    { href: "/", label: "Home" },
    { href: "/profil", label: "Profil" },
    { href: "/layanan", label: "Layanan" },
    { href: "/produk", label: "Produk" },
    { href: "/booking", label: "Booking" },
  ] satisfies NavItem[],
  privacyPoints: [
    "Layanan bersifat rahasia dan privasi klien dijaga dengan sungguh-sungguh.",
    "Komunikasi dilakukan dengan aman, empatik, dan profesional.",
    "Setiap proses pendampingan disesuaikan dengan kebutuhan serta kesiapan klien.",
  ],
}

export const profileContent = {
  name: "Arina Nurul Badriyah, S.Psi., Psikolog",
  shortIntro:
    "Mendampingi proses berbagi, refleksi, dan pemulihan dengan pendekatan yang hangat, terstruktur, dan tetap membumi.",
  longIntro: [
    "Halo, saya Arina Nurul Badriyah, S.Psi., Psikolog. Saya percaya setiap orang berhak memiliki ruang aman untuk menceritakan apa yang sedang dirasakan tanpa takut dihakimi.",
    "Dalam proses pendampingan, saya mengutamakan hubungan yang empatik, profesional, dan terpercaya agar klien dapat merasa didengar dan dipahami. Ranah Jiwa hadir untuk membantu Anda mengenali diri, merawat luka batin, dan bertumbuh dengan langkah yang terasa lebih ringan.",
  ],
  identityCopy:
    "Psikolog yang menghadirkan ruang hangat untuk berbagi, refleksi, dan bertumbuh tanpa rasa dihakimi.",
  focusAreas: ["Anak", "Remaja", "Dewasa"],
  education: [
    "S1 Psikologi UIN Sunan Ampel Surabaya",
    "Pendidikan Profesi Psikologi Universitas 17 Agustus 1945 Surabaya",
  ],
  experience: [
    "Freelancer Asesor SDM - K3PG Petrokimia Gresik",
    "Assistant Psychologist - RSI Nyai Ageng Pinatih Gresik",
    "Assistant Psychologist - Santya Anggraini Gresik",
    "Freelancer Tester - PALP (Assessment Center and Psychological Services) Surabaya",
    "Freelancer Tester - Adi Citra Mandiri Surabaya",
  ],
  certifications: [
    {
      title: "Basic Practitioners Forgiveness Therapy",
      issuer: "Yayasan Kreativitas Membangun Seindonesia (YKMS)",
      date: "Mar 2025",
      highlights: [
        "Completed foundational training in forgiveness-based therapeutic approaches.",
        "Learned practical techniques to assist clients in resolving emotional wounds through the forgiveness process.",
        "Gained basic practitioner skills applicable in counseling and psychoeducational settings.",
      ],
    },
  ] satisfies CertificationItem[],
}

export const trustStats = [
  {
    value: "150+",
    label: "klien didampingi",
    description: "Pendampingan personal dan program kelompok yang terus bertumbuh.",
  },
  {
    value: "96%",
    label: "kepuasan klien",
    description: "Berdasarkan umpan balik internal dan kelanjutan sesi.",
  },
  {
    value: "5+",
    label: "tahun pengalaman",
    description: "Pengalaman mendampingi anak, remaja, dewasa, dan institusi.",
  },
] satisfies StatItem[]

export const testimonials = [
  {
    name: "Klien A",
    role: "Konseling individu",
    quote:
      "Saya merasa benar-benar didengar dan dipahami. Prosesnya hangat, tidak menghakimi, dan membantu saya melihat masalah dengan lebih tenang.",
  },
  {
    name: "Orang tua B",
    role: "Pendampingan anak",
    quote:
      "Pendekatannya lembut tapi jelas. Sebagai orang tua, saya jadi lebih mengerti cara mendampingi anak tanpa merasa sendirian.",
  },
  {
    name: "Peserta workshop C",
    role: "Seminar komunitas",
    quote:
      "Materinya relevan, ringan dicerna, dan tetap terasa profesional. Banyak insight yang langsung bisa diterapkan sehari-hari.",
  },
] satisfies TestimonialItem[]

export const services = [
  {
    id: "annafisa",
    packageName: "Annafisa",
    title: "Mental Health Check Up",
    summary: "Paket deteksi dini kondisi mental yang ringan, cepat, dan terstruktur.",
    description:
      "Cocok untuk langkah awal mengenali kondisi psikologis seperti kecemasan, stress, depresi, dan dinamika emosi lain sebelum menentukan pendampingan berikutnya.",
    bullets: [
      "Pemeriksaan deteksi dini kondisi mental: kecemasan, stress, depresi, dsb.",
    ],
    duration: "30 menit",
    outputs: ["Hasil Pemeriksaan MHCU (pdf)"],
    fee: "Rp 179.999",
    ctaLabel: "Booking Annafisa",
  },
  {
    id: "assyifa",
    packageName: "Assyifa",
    title: "Mental Health Check Up",
    summary:
      "Check-up mental plus sesi lanjut untuk membantu membaca hasil secara lebih personal.",
    description:
      "Paket ini menggabungkan pemeriksaan awal dan satu sesi konseling individu agar hasil tidak berhenti di laporan, tetapi bisa langsung dibahas bersama psikolog.",
    bullets: [
      "Pemeriksaan deteksi dini kondisi mental: kecemasan, stress, depresi, dsb.",
      "1x sesi konseling individu selama 45 menit.",
    ],
    duration: "30 menit",
    outputs: [
      "Hasil Pemeriksaan MHCU (pdf)",
      "1x sesi konseling individu selama 45 menit",
    ],
    fee: "Rp 299.999",
    ctaLabel: "Booking Assyifa",
  },
  {
    id: "assakinah",
    packageName: "Assakinah",
    title: "Konseling Individu",
    summary:
      "Pendampingan psikologis hangat untuk isu pribadi, keluarga, pengasuhan, hingga pranikah.",
    description:
      "Ruang aman untuk berbagi dan merefleksikan isu yang sedang dihadapi dengan pendampingan profesional dan terpercaya.",
    bullets: [
      "Pendampingan psikologis untuk isu atau keluhan pribadi, keluarga, pengasuhan, pranikah, dan dinamika lain yang sedang dihadapi.",
    ],
    duration: "60 menit",
    fee: "Rp 249.999",
    ctaLabel: "Booking Assakinah",
  },
  {
    id: "attarbiyah",
    packageName: "Attarbiyah",
    title: "Screening Tumbuh Kembang Anak",
    summary:
      "Layanan skrining awal untuk melihat tumbuh kembang anak dan deteksi dini kebutuhan khusus.",
    description:
      "Paket ini membantu orang tua mendapatkan gambaran awal tumbuh kembang anak secara lebih terarah sebelum melangkah ke intervensi berikutnya.",
    bullets: [
      "Screening tumbuh kembang anak selama 60 menit.",
      "Deteksi dini kondisi anak berkebutuhan khusus.",
    ],
    duration: "60 menit",
    outputs: ["Hasil Pemeriksaan (pdf) + Rekomendasi awal"],
    fee: "Rp 249.999",
    ctaLabel: "Booking Attarbiyah",
  },
  {
    id: "al-aqila",
    packageName: "Al-'Aqila",
    title: "Asesmen Psikologis",
    summary:
      "Asesmen psikologis terstruktur untuk kebutuhan belajar, potensi, dan pemetaan diri.",
    description:
      "Paket asesmen ini membantu memetakan kemampuan, karakter, dan kebutuhan klien melalui rangkaian pemeriksaan yang relevan dengan tujuan pemeriksaan.",
    bullets: [
      "Tes IQ, Tes Kepribadian, Bakat Minat, Kesiapan Sekolah, Gaya Belajar, dll.",
    ],
    duration: "60-90 menit",
    outputs: ["Hasil Pemeriksaan (pdf) + Rekomendasi awal"],
    fee: "Rp 299.999",
    serviceNotes: ["Pemaparan dilakukan offline selama 60-90 menit."],
    ctaLabel: "Booking Al-'Aqila",
  },
  {
    id: "al-ilmaa",
    packageName: "Al-'Ilmaa",
    title: "Psikoedukasi / Seminar",
    summary:
      "Program edukasi pilihan untuk komunitas, sekolah, orang tua, dan institusi.",
    description:
      "Layanan seminar dan psikoedukasi dengan materi yang bisa disesuaikan dengan kebutuhan audiens agar tetap relevan, hangat, dan mudah diterapkan.",
    bullets: ["Materi pilihan: Manajemen stress, Parenting, Bakat Minat, dsb."],
    duration: "60 menit",
    fee: "Rp 499.999",
    ctaLabel: "Booking Al-'Ilmaa",
  },
] satisfies ServiceItem[]

export const serviceNotes = [
  "Fee dapat berubah sesuai konteks, kebutuhan layanan, dan kesepakatan bersama.",
  "Layanan bisa menyesuaikan permintaan dan kondisi via online maupun offline.",
  "Di luar area Gresik belum termasuk biaya transportasi.",
  "Jadwal yang sudah disepakati, pembatalan maksimal H-1 atau 24 jam sebelumnya.",
]

export const seminars = [
  {
    title: "Ramadhan as a Mental Reset",
    subtitle: "Membangun kebiasaan mental yang lebih sehat sepanjang bulan Ramadhan.",
    audience: "Seminar publik dan komunitas muslim",
    date: "14 Maret 2025",
    time: "20.00 WIB",
    price: "Free HTM",
    description:
      "Seminar ini membahas bagaimana Ramadhan dapat menjadi ruang jeda untuk merawat pikiran, menata ulang kebiasaan, dan menjalani proses refleksi diri dengan lebih tenang dan bermakna.",
    poster: "/seminar-ramadhan-reset-poster.jpeg",
  },
  {
    title: "Journaling & Mindfulness",
    subtitle: "Menulis untuk menyadari, hadir untuk menyembuhkan.",
    audience: "Terbuka untuk umum",
    date: "7 Februari 2026",
    time: "10.00 WIB",
    price: "Investasi 50K",
    description:
      "Workshop reflektif yang mengajak peserta berhenti sejenak, menulis dengan lebih sadar, dan merawat ruang batin dengan pendekatan yang hangat serta membumi.",
    poster: "/seminar-journaling-mindfulness.jpg",
  },
] satisfies SeminarItem[]

export const books: BookItem[] = []

export const bookingOptions = {
  genders: ["Perempuan", "Laki-laki", "Lainnya / memilih tidak menjawab"],
  methods: ["Online", "Offline"],
  hours: [
    "09.00 - 10.00",
    "10.30 - 11.30",
    "13.00 - 14.00",
    "15.30 - 16.30",
    "18.30 - 19.30",
  ],
}

export const assetRefs = {
  mainHero: "/arina-hero-v2.jpeg",
  avatar: "/arina-avatar.png",
  instagram: "/instagram-profile.jpeg",
}

export const homeContent = {
  heroBadge: "Ruang aman - profesional - terpercaya",
  miniCards: [
    {
      title: "Fokus layanan",
      body: "Anak, remaja, dewasa, keluarga, dan komunitas.",
    },
    {
      title: "Alur mudah",
      body: "Lihat layanan, booking, lalu lanjut langsung ke WhatsApp.",
    },
  ],
  shortProfile: {
    eyebrow: "Tentang singkat",
    approachTitle: "Pendekatan",
    approachBody:
      "Empatik, relevan, dan mudah dipahami agar klien merasa aman sejak awal.",
    educationTitle: "Latar pendidikan",
    ctaLabel: "Lihat Profil Lengkap",
  },
  servicesPreview: {
    eyebrow: "Layanan",
    title: "Pilihan layanan yang jelas dan mudah dipahami",
    description:
      "Enam paket layanan ditampilkan di Home agar pengunjung langsung melihat seluruh pilihan yang tersedia.",
    detailLabel: "Lihat detail",
  },
  testimonials: {
    eyebrow: "Testimoni",
    title: "Cerita kecil dari proses yang terasa aman",
    description:
      "Testimoni anonim ini membantu pengunjung baru merasa lebih tenang sebelum memulai langkah pertama.",
  },
  productsPreview: {
    eyebrow: "Produk",
    title: "Karya buku dan jejak seminar dalam satu halaman",
    description:
      "Simpan dokumentasi karya buku dan seminar Ranah Jiwa di satu ruang yang lebih rapi, mudah dipindai, dan mudah ditambah nanti.",
    ctaLabel: "Buka halaman Produk",
  },
  instagram: {
    eyebrow: "Instagram",
    title: "Tetap dekat lewat konten yang relevan",
    description:
      "Arahkan pengunjung ke Instagram untuk update edukasi, seminar, dan kabar terbaru Ranah Jiwa.",
    cardBody: "Konten edukasi, pengumuman seminar, dan update Ranah Jiwa.",
    ctaLabel: "Kunjungi Instagram",
  },
  privacy: {
    title: "Privasi dan kerahasiaan tetap jadi prioritas",
    description:
      "Layanan dilakukan dengan aman, rahasia, dan profesional agar pengunjung merasa lebih tenang sejak kontak pertama.",
  },
  finalCta: {
    badge: "CTA utama",
    title: "Mulai Cerita Sekarang",
    description:
      "Bila Anda sedang mencari ruang aman untuk berbagi, refleksi, dan bertumbuh, langkah pertama bisa dimulai hari ini.",
    primaryLabel: "Hubungi via WhatsApp",
    secondaryLabel: "Booking sesi",
  },
}

export const profilePageContent = {
  heroBadge: "Psikolog - empatik - membumi",
  heroTitle: "Mendengar dengan hati, membimbing menuju pulih.",
  trustCards: [
    {
      title: "Pendidikan",
      body: "Latar akademik psikologi dan profesi yang terarah.",
    },
    {
      title: "Pendampingan",
      body: "Anak, remaja, dewasa, dan komunitas.",
    },
    {
      title: "Rasa aman",
      body: "Privasi klien dijaga dan proses berjalan profesional.",
    },
  ],
  qualification: {
    eyebrow: "Kualifikasi",
    title: "Pendidikan, pengalaman, dan sertifikasi",
    description:
      "Disusun dalam kartu yang mudah dipindai agar pengunjung cepat membangun rasa percaya.",
  },
  finalCta: {
    title: "Siap mulai dengan langkah yang terasa aman?",
    description:
      "Bila Anda ingin bertanya lebih dulu atau langsung menjadwalkan sesi, alurnya dibuat sederhana dan rendah hambatan.",
    primaryLabel: "Hubungi WhatsApp",
    secondaryLabel: "Menuju booking",
  },
}

export const servicesPageContent = {
  hero: {
    badge: "Layanan Kesehatan Mental",
    title: "Pendampingan Jiwa Berlandaskan Nilai Islami",
    description:
      "Setiap paket dirancang agar pengunjung mudah memahami isi layanan, durasi, output, dan langkah berikutnya tanpa alur yang terasa rumit.",
    quickStats: [
      { title: "6 paket", body: "Seluruh pilihan layanan inti Ranah Jiwa." },
      { title: "Mulai 30 menit", body: "Ada opsi check-up singkat hingga asesmen terarah." },
      { title: "PDF + rekomendasi", body: "Output jelas untuk paket pemeriksaan dan asesmen." },
      { title: "Online / Offline", body: "Pelaksanaan menyesuaikan konteks dan kebutuhan." },
    ],
  },
  fullList: {
    eyebrow: "Paket layanan",
    title: "Enam paket layanan yang mudah discan",
    description:
      "Setiap kartu memuat nama paket, isi layanan, output, fee, dan CTA yang langsung mengarah ke booking atau WhatsApp.",
  },
  notes: {
    eyebrow: "Catatan layanan",
    title: "Info penting sebelum booking",
    description:
      "Catatan ini mengikuti keterangan pada poster layanan dan membantu pengunjung memahami alur dengan lebih jelas.",
  },
  helpCta: {
    title: "Masih bingung memilih layanan?",
    description:
      "Ceritakan kebutuhan Anda terlebih dahulu. Tim admin akan membantu mengarahkan ke layanan yang paling tepat tanpa membuat alur terasa rumit.",
    primaryLabel: "Tanya via WhatsApp",
    secondaryLabel: "Menuju booking",
  },
}

export const bookingPageContent = {
  eyebrow: "Booking",
  title: "Isi data booking",
  description:
    "Isi data singkat berikut. Setelah submit, Anda diarahkan langsung ke WhatsApp dengan pesan otomatis.",
}

export const productsPageContent = {
  hero: {
    badge: "Produk Ranah Jiwa",
    title: "Ruang arsip untuk karya buku dan seminar yang telah diisi",
    description:
      "Halaman ini disiapkan untuk menyimpan karya buku Ranah Jiwa dan dokumentasi seminar agar lebih rapi, lebih mudah dilihat, dan lebih mudah diperbarui.",
    quickStats: [
      { title: `${books.length}`, body: "Karya buku yang sudah ditambahkan." },
      { title: `${seminars.length}`, body: "Seminar dan workshop yang sudah terdokumentasi." },
      { title: "1 halaman", body: "Semua karya dan jejak seminar tersimpan di satu tempat." },
    ],
  },
  books: {
    eyebrow: "Karya buku",
    title: "Buku dan karya tulis",
    description:
      "Bagian ini disiapkan untuk menyimpan buku yang sudah dibuat. Datanya dibuat terpusat agar nanti mudah ditambah tanpa bongkar layout.",
    emptyTitle: "Data buku belum ditambahkan",
    emptyBody:
      "Saat data karya buku sudah siap, bagian ini tinggal diisi dari content file tanpa perlu ubah struktur halaman lagi.",
  },
  seminars: {
    eyebrow: "Jejak seminar",
    title: "Seminar dan workshop yang telah diisi",
    description:
      "Dokumentasi seminar dipindahkan ke halaman ini agar Home tetap fokus pada trust, layanan, dan konversi.",
  },
  finalCta: {
    title: "Punya kebutuhan seminar atau ingin bertanya soal karya Ranah Jiwa?",
    description:
      "Hubungi Ranah Jiwa lewat WhatsApp untuk diskusi seminar, psikoedukasi, kolaborasi, atau pertanyaan layanan lainnya.",
    primaryLabel: "Hubungi via WhatsApp",
    secondaryLabel: "Lihat layanan",
  },
}

export function findServiceByPackageName(packageName: string | null) {
  if (!packageName) return undefined

  return services.find((service) => service.packageName === packageName)
}
