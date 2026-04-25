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
  siteUrl: "https://www.ranahjiwa.my.id",
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
    "Mendampingi proses berbagi, refleksi, dan pemulihan dengan pendekatan yang hangat, terstruktur, dan profesional.",
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
    "Psychologist & Therapist Special Needs Children - Lembaga Sebaya Riang",
    "Trainer - Sinar Muda Indonesia",
    "Freelancer Tester - PALP (Assessment Center and Psychological Services) Surabaya",
    "Freelancer Tester - Adi Citra Mandiri Surabaya",
  ],
  certifications: [
    {
      title: "Certified Counselling, Coaching, and Therapy",
    },
    {
      title: "Basic Practitioner Forgiveness Therapy",
    },
    {
      title: "Islamic Mindfulness Practitioner",
    },
    {
      title: "Quranic Healing Journaling Practitioner",
    },
    {
      title: "Basic Acceptance and Commitment Therapy (ACT) Practitioner",
    },
    {
      title: "Dialectical Behaviour Therapy (DBT) Practitioner",
    },
    {
      title: "Phototherapy Essence of Life Basic Practitioner",
    },
    {
      title: "Best Practice Konseling Kedukaan",
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
  {
    name: "Klien D",
    role: "Konseling individu",
    quote:
      "Pasca konseling, saya merasa jauh lebih tenang. Dada yang biasanya mudah terasa sesak juga sudah tidak lagi. Saya benar-benar merasakan banyak perubahan setelah menjalani konseling.",
  },
  {
    name: "Klien E",
    role: "Konseling individu",
    quote:
      "Setelah konseling, saya jadi lebih tahu arah dan apa yang perlu saya lakukan ke depan. Sebelumnya saya hanya punya tekad, tapi belum punya perencanaan yang jelas. Sekarang saya belajar merencanakan langkah-langkah saya dan menjalaninya perlahan.",
  },
  {
    name: "Klien F",
    role: "Konseling individu",
    quote:
      "Setelah konseling, rasa percaya diri saya meningkat. Saya jadi lebih mampu mengatur pikiran, mood, perasaan, dan perilaku, serta lebih paham apa yang harus saya lakukan saat suasana hati berubah.",
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
    title: "Konseling Mental Health Check Up",
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
      "Workshop reflektif yang mengajak peserta berhenti sejenak, menulis dengan lebih sadar, dan merawat ruang batin dengan pendekatan yang hangat serta profesional.",
    poster: "/seminar-journaling-mindfulness.jpg",
  },
] satisfies SeminarItem[]

export const books: BookItem[] = [
  {
    title: "Senja Kala Di Kampung Moderasi",
    description:
      "Sebuah kisah fiksi tentang perjalanan pengabdian di tanah Tana Toraja—tentang pertemuan, kehilangan, dan makna yang perlahan ditemukan.\n\nDi balik setiap langkah, tersimpan proses memahami diri, menerima ketidaksempurnaan, dan belajar melihat hidup dari sudut pandang yang berbeda.",
    cover: "/senja-kala-di-kampung-moderasi.png",
  },
]

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
    title: "Layanan untuk mendampingi sesuai kebutuhan",
    description:
      "Temukan pilihan layanan Ranah Jiwa, mulai dari mental health check up, konseling, asesmen psikologis, hingga psikoedukasi dan seminar.",
    detailLabel: "Lihat detail",
  },
  testimonials: {
    eyebrow: "Testimoni",
    title: "Cerita kecil dari proses yang terasa aman",
    description:
      "Beberapa cerita singkat dari proses pendampingan bersama Ranah Jiwa.",
  },
  productsPreview: {
    eyebrow: "Produk",
    title: "Karya buku dan jejak seminar dalam satu halaman",
    description:
      "Temukan karya buku dan jejak seminar Ranah Jiwa dalam satu halaman.",
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
  heroBadge: "Psikolog - empatik - profesional",
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
      "Latar pendidikan, pengalaman, dan sertifikasi yang membentuk cara kerja pendampingan di Ranah Jiwa.",
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
      "Setiap layanan dirancang untuk membantu Anda memahami kebutuhan, durasi, output, dan langkah pendampingan dengan lebih jelas.",
    quickStats: [
      { title: "6 paket", body: "Seluruh pilihan layanan inti Ranah Jiwa." },
      { title: "Mulai 30 menit", body: "Ada opsi check-up singkat hingga asesmen terarah." },
      { title: "Hasil dan rekomendasi", body: "Output jelas untuk paket pemeriksaan dan asesmen." },
      { title: "Online / Offline", body: "Pelaksanaan menyesuaikan konteks dan kebutuhan." },
    ],
  },
  fullList: {
    eyebrow: "Paket layanan",
    title: "Pilihan layanan Ranah Jiwa",
    description:
      "Temukan layanan yang paling sesuai dengan kebutuhan Anda.",
  },
  notes: {
    eyebrow: "Catatan layanan",
    title: "Info penting sebelum booking",
    description:
      "Mohon baca catatan layanan berikut sebelum booking.",
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
    title: "Karya buku dan jejak seminar Ranah Jiwa",
    description:
      "Kumpulan karya buku serta dokumentasi seminar dan workshop yang telah diisi oleh Ranah Jiwa.",
    quickStats: [
      { title: `${books.length}`, body: "Karya buku Ranah Jiwa." },
      { title: "20+", body: "Seminar dan workshop yang sudah terdokumentasi." },
    ],
  },
  books: {
    eyebrow: "Karya buku",
    title: "Buku dan karya tulis",
    description:
      "Kumpulan buku dan karya tulis yang telah diterbitkan atau didokumentasikan oleh Ranah Jiwa.",
    emptyTitle: "Karya buku belum tersedia",
    emptyBody:
      "Saat ada karya buku baru, bagian ini akan diperbarui.",
  },
  seminars: {
    eyebrow: "Jejak seminar",
    title: "Seminar dan workshop yang telah diisi",
    description:
      "Dokumentasi seminar dan workshop yang telah diisi oleh Ranah Jiwa.",
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
