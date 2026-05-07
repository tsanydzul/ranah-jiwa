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
  registrationHref?: string
  registrationLabel?: string
  whatsappTopic?: string
  isUpcoming?: boolean
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
  silpNumber: "DD333F4F05B8",
  strNumber: "20252371-2026-0309",
  shortIntro:
    "Mendampingi proses berbagi, refleksi, dan pemulihan dengan pendekatan yang hangat, terstruktur, dan profesional.",
  longIntro: [
    "Halo, saya Arina Nurul Badriyah, S.Psi., Psikolog. Saya percaya setiap orang berhak memiliki ruang aman untuk menceritakan apa yang sedang dirasakan tanpa takut dihakimi.",
    "Dalam proses pendampingan, saya mengutamakan hubungan yang empatik, profesional, dan terpercaya agar klien dapat merasa didengar dan dipahami. Ranah Jiwa hadir untuk membantu Anda mengenali diri, merawat luka batin, dan bertumbuh dengan langkah yang terasa lebih ringan.",
  ],
  identityCopy:
    "Psikolog yang menghadirkan ruang hangat untuk berbagi, refleksi, dan bertumbuh tanpa rasa dihakimi.",
  focusAreas: ["Anak", "Remaja", "Dewasa", "Komunitas"],
  education: [
    "S1 Psikologi UIN Sunan Ampel Surabaya",
    "Pendidikan Profesi Psikologi Universitas 17 Agustus 1945 Surabaya",
  ],
  experience: [
    "Freelancer Assesor SDM - K3PG Petrokimia Gresik",
    "Psychologist & Therapist Special Needs Children - Lembaga Sebaya Riang",
    "Mentor & Trainer - Sinar Muda Indonesia",
    "Assistant Psychologist - RSI Nyai Ageng Pinatih Gresik & Biro Psikologi Santya Anggraini Gresik",
    "Psychological Staff - PALP (Assessment Center and Psychological Services) UINSA Surabaya",
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
    summary: "Pemeriksaan awal untuk membantu mengenali kondisi psikologis secara lebih terarah.",
    description:
      "Pemeriksaan awal untuk membantu mengenali kondisi psikologis seperti kecemasan, stres, suasana hati, serta kondisi emosional lainnya.",
    bullets: ["Pemeriksaan awal kondisi psikologis dan emosi."],
    duration: "±30 menit",
    outputs: ["Hasil pemeriksaan", "Laporan hasil & rekomendasi awal"],
    fee: "Rp 179.999",
    ctaLabel: "Booking Annafisa",
  },
  {
    id: "assyifa",
    packageName: "Assyifa",
    title: "Konseling MHCU",
    summary: "Paket pendampingan awal untuk memahami kondisi diri dan mendapatkan arahan.",
    description:
      "Paket pendampingan awal yang membantu memahami kondisi diri sekaligus mendapatkan arahan melalui sesi konseling.",
    bullets: [
      "Mental Health Check Up (±30 menit)",
      "1x sesi konseling individu (±60 menit)",
    ],
    duration: "±30 menit + ±60 menit",
    outputs: ["Hasil pemeriksaan", "Laporan hasil & rekomendasi"],
    fee: "Rp 299.999",
    ctaLabel: "Booking Assyifa",
  },
  {
    id: "assakinah",
    packageName: "Assakinah",
    title: "Konseling Individu",
    summary:
      "Pendampingan psikologis untuk memahami diri, emosi, dan permasalahan hidup secara lebih utuh.",
    description:
      "Pendampingan psikologis untuk membantu memahami diri, emosi, dan permasalahan hidup secara lebih utuh dalam ruang yang aman.",
    bullets: [
      "Pendampingan psikologis individu dalam ruang yang aman.",
      "Tersedia online & offline.",
    ],
    duration: "±60 menit",
    outputs: ["Laporan hasil & rekomendasi"],
    fee: "Rp 249.999",
    ctaLabel: "Booking Assakinah",
  },
  {
    id: "ar-rahmah",
    packageName: "Ar-Rahmah",
    title: "Konseling Pasangan / Couple",
    summary:
      "Pendampingan bagi pasangan untuk memahami dinamika hubungan dan membangun komunikasi yang lebih sehat.",
    description:
      "Pendampingan bagi pasangan untuk memahami dinamika hubungan, meningkatkan komunikasi, serta menyelesaikan konflik secara sehat. Layanan ini dapat digunakan untuk pasangan pra-nikah maupun pasangan dalam pernikahan.",
    bullets: [
      "1 sesi individu (perempuan)",
      "1 sesi individu (laki-laki)",
      "1 sesi bersama pasangan",
      "Tersedia online & offline.",
    ],
    duration: "±60 menit / sesi",
    outputs: ["Laporan hasil & rekomendasi"],
    fee: "Rp 649.999",
    ctaLabel: "Booking Ar-Rahmah",
  },
  {
    id: "al-wardah",
    packageName: "Al-Wardah",
    title: "Konseling Orang Tua & Anak",
    summary:
      "Pendampingan untuk membantu orang tua memahami kebutuhan anak dan membangun hubungan yang lebih sehat.",
    description:
      "Pendampingan untuk membantu orang tua memahami kebutuhan anak serta membangun hubungan yang lebih sehat. Cocok untuk konsultasi permasalahan perilaku anak, relasi orang tua & anak, pola asuh, dan lainnya.",
    bullets: [
      "Cocok untuk perilaku anak, relasi orang tua & anak, pola asuh, dan lainnya.",
      "Tersedia online & offline.",
    ],
    duration: "±60 menit",
    outputs: ["Laporan hasil & rekomendasi"],
    fee: "Rp 199.999",
    ctaLabel: "Booking Al-Wardah",
  },
  {
    id: "at-tarbiyah",
    packageName: "At-Tarbiyah",
    title: "Screening Tumbuh Kembang Anak",
    summary:
      "Pemeriksaan untuk mendeteksi tumbuh kembang anak serta potensi anak berkebutuhan khusus sejak dini.",
    description:
      "Pemeriksaan untuk mendeteksi tumbuh kembang anak serta potensi anak berkebutuhan khusus sejak dini.",
    bullets: [
      "Screening tumbuh kembang anak.",
      "Deteksi dini potensi anak berkebutuhan khusus.",
    ],
    duration: "±60 menit",
    outputs: ["Laporan hasil & rekomendasi awal"],
    fee: "Mulai Rp 179.999 / anak",
    serviceNotes: [
      "Individual: Rp 219.999",
      "Group (minimal 10 anak): Rp 179.999 / anak",
    ],
    ctaLabel: "Booking At-Tarbiyah",
  },
  {
    id: "al-aql",
    packageName: "Al-'Aql",
    title: "Asesmen Psikologis",
    summary:
      "Pemeriksaan psikologis untuk memahami potensi, kemampuan, dan karakteristik individu secara lebih mendalam.",
    description:
      "Pemeriksaan psikologis untuk memahami potensi, kemampuan, dan karakteristik individu secara lebih mendalam.",
    bullets: [
      "Tes IQ -> Rp 299.999 - 499.999",
      "Tes Kepribadian -> Rp 149.999",
      "Tes Minat & Bakat -> Rp 279.999",
      "Tes Kesiapan Sekolah -> Rp 249.999",
      "Tes Gaya Belajar -> Rp 149.999",
      "Tes Gaya & Sikap Kerja -> Rp 299.999",
    ],
    duration: "±60-90 menit",
    outputs: ["Laporan hasil & rekomendasi"],
    fee: "Rp 149.999 - Rp 499.999",
    serviceNotes: ["Layanan tersedia sesuai kebutuhan instansi / klien."],
    ctaLabel: "Booking Al-'Aql",
  },
  {
    id: "at-tazkiya",
    packageName: "At-Tazkiya",
    title: "Terapi Psikologis",
    summary:
      "Pendampingan psikologis berkelanjutan untuk proses pemulihan dan perubahan yang lebih mendalam.",
    description:
      "Pendampingan psikologis berkelanjutan untuk membantu proses pemulihan dan perubahan yang lebih mendalam. Dilakukan dengan metode terapi yang disesuaikan dengan kebutuhan klien.",
    bullets: [
      "Metode disesuaikan: forgiveness therapy, Islamic phototherapy, acceptance commitment therapy, dll.",
    ],
    duration: "±60 menit",
    outputs: ["Laporan perkembangan & rekomendasi lanjutan"],
    fee: "Rp 299.999",
    ctaLabel: "Booking At-Tazkiya",
  },
  {
    id: "al-ilma",
    packageName: "Al-Ilma",
    title: "Seminar / Workshop",
    summary:
      "Layanan edukasi psikologi untuk kelompok besar dengan fokus pada wawasan dan awareness.",
    description:
      "Layanan edukasi psikologi untuk kelompok besar dengan fokus pada penyampaian materi, peningkatan wawasan, dan awareness. Cocok untuk sekolah, komunitas, maupun instansi.",
    bullets: [
      "Peserta tidak terbatas (puluhan hingga ratusan).",
      "Durasi ±1-3 jam (fleksibel).",
    ],
    duration: "±1-3 jam",
    outputs: ["Insight, pemahaman, dan materi edukatif"],
    fee: "By agreement",
    serviceNotes: ["Fee menyesuaikan durasi, topik, dan kebutuhan acara."],
    ctaLabel: "Booking Al-Ilma",
  },
  {
    id: "an-nahda",
    packageName: "An-Nahda",
    title: "Mentoring / Coaching",
    summary:
      "Pendampingan personal dan interaktif untuk arahan, solusi, dan pengembangan diri yang lebih mendalam.",
    description:
      "Pendampingan yang lebih personal dan interaktif untuk membantu peserta mendapatkan arahan, solusi, serta pengembangan diri secara lebih mendalam. Cocok untuk individu atau kelompok kecil.",
    bullets: [
      "Peserta terbatas: individu / kelompok kecil.",
      "Tersedia kelas intensif (1-3 orang), kelas super (4-10 orang), atau mini workshop (>10 orang).",
    ],
    duration: "±60-90 menit",
    outputs: ["Insight personal, arahan praktis & rekomendasi pengembangan diri"],
    fee: "By agreement",
    serviceNotes: ["Fee menyesuaikan durasi, topik, dan kebutuhan acara."],
    ctaLabel: "Booking An-Nahda",
  },
] satisfies ServiceItem[]

export const serviceNotes = [
  "Biaya layanan dapat berubah sesuai kebutuhan dan kesepakatan bersama.",
  "Layanan tersedia secara online maupun offline menyesuaikan ketersediaan jadwal psikolog.",
  "Tersedia layanan home service di luar biaya transportasi.",
  "Pembatalan atau reschedule maksimal H-1 sebelum jadwal layanan.",
  "Seluruh layanan bersifat rahasia dan profesional.",
]

export const seminars = [
  {
    title: "Takut Salah Jurusan?",
    subtitle: "Career Mentoring Class untuk bantu kenal diri dan menemukan arah jurusan yang lebih jelas.",
    audience: "Pelajar, guru BK, dan orang tua",
    date: "6 Juni 2026",
    time: "15.00 WIB - selesai",
    price: "Single 50K | Bundling bestie 90K / 2 orang",
    description:
      "Kelas kecil bersama Psikolog untuk mengenali potensi dan minat diri, mendapat gambaran arah jurusan yang lebih cocok, belajar menyusun SMART Goal, serta menikmati sharing santai dan mini consultation langsung dengan Psikolog. Bonus worksheet eksplorasi diri, e-certificate, dan giveaway menarik. Slot terbatas maksimal 10 peserta dan dilaksanakan offline di Dapur Kilen Gresik.",
    poster: "/seminar-takut-salah-jurusan.jpeg",
    registrationHref: "https://forms.gle/Qvhc2MeSJGotSFrs7",
    registrationLabel: "Daftar di sini",
    whatsappTopic: "Career Mentoring Class Takut Salah Jurusan",
    isUpcoming: true,
  },
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
    eyebrow: "Profil singkat",
    approachTitle: "Pendekatan",
    approachBody:
      "Empatik, relevan, dan mudah dipahami agar klien merasa aman sejak awal.",
    educationTitle: "Latar pendidikan",
    ctaLabel: "Lihat Profil Lengkap",
  },
  heroFocus: {
    title: "Fokus & Ketertarikan Isu",
    items: [
      "Pendampingan dengan pendekatan psikologis dan spiritual",
      "Kecemasan, stres & burnout",
      "Depresi & proses berduka",
      "Pengembangan diri & penyesuaian hidup",
      "Relasi & pola hubungan",
      "Luka batin, inner child, & forgiveness",
      "Perilaku adiktif & maladaptif",
      "Neurodivergent (ADHD, Autism, Dyslexia)",
    ],
    privacyNote: "Privasi klien dijaga dan proses berjalan profesional.",
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
    badge: "Layanan Ranah Jiwa",
    title: "Pendampingan Jiwa dengan Pendekatan Spirituallitas",
    description:
      "Pilihan layanan Ranah Jiwa dirancang untuk membantu Anda mengenali kebutuhan, memahami bentuk pendampingan, dan memilih langkah yang paling sesuai.",
    quickStats: [
      { title: "10 layanan", body: "Pilihan layanan dari check up hingga coaching." },
      { title: "Mulai 30 menit", body: "Ada layanan singkat hingga pendampingan lebih mendalam." },
      { title: "Online / Offline", body: "Pelaksanaan menyesuaikan kebutuhan dan jadwal." },
      { title: "Home service", body: "Tersedia sesuai konteks, di luar biaya transportasi." },
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
