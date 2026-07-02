import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { buildBookingPath, buildInquiryMessage, buildWhatsAppUrl } from "@/lib/whatsapp"
import {
  assetRefs,
  getBooks,
  getServices,
  getTestimonials,
  homeContent,
  profileContent,
  productsPageContent,
  siteConfig,
  trustStats,
} from "@/lib/site-content"

export const metadata: Metadata = {
  title: "Ruang Aman untuk Memahami Diri",
  description:
    "Ranah Jiwa menghadirkan ruang aman untuk berbagi, refleksi, dan bertumbuh lewat layanan psikologi yang hangat, profesional, dan terpercaya.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ruang Aman untuk Memahami Diri | Ranah Jiwa",
    description:
      "Ranah Jiwa menghadirkan ruang aman untuk berbagi, refleksi, dan bertumbuh lewat layanan psikologi yang hangat, profesional, dan terpercaya.",
    url: "/",
  },
}

const featuredPromises = [
  { icon: "ri-shield-check-line", text: "Ruang aman tanpa rasa dihakimi" },
  { icon: "ri-whatsapp-line", text: "WhatsApp jadi langkah paling mudah" },
  { icon: "ri-compass-line", text: "Pendekatan hangat dan terarah" },
]

const focusList = [
  "Pendampingan dengan pendekatan psikologis dan spiritual",
  "Kecemasan, stres & burnout",
  "Depresi & proses berduka",
  "Pengembangan diri & penyesuaian hidup",
  "Relasi & pola hubungan",
  "Luka batin, inner child & forgiveness",
  "Perilaku adiktif & maladaptif",
  "Neurodivergent (ADHD, Autism, Dyslexia)",
]

export default async function HomePage() {
  const services = await getServices()
  const books = await getBooks()
  const testimonials = await getTestimonials()
  const consultationHref = buildWhatsAppUrl(buildInquiryMessage("konsultasi"))

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-12 pb-24 gradient-bg">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-12">
          {/* Left */}
          <div className="space-y-8 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-bold uppercase tracking-wider text-violet-700">
              <span className="h-2 w-2 animate-pulse rounded-full bg-violet-600" />
              {homeContent.heroBadge}
            </div>

            <h2 className="serif-heading text-6xl leading-[1.1] text-slate-900 xl:text-7xl">
              Ruang Aman untuk{" "}
              <span className="text-violet-600">Memahami Diri</span> &amp; Bertumbuh
            </h2>

            <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
              {siteConfig.heroSubheadline}
            </p>

            <div className="flex flex-wrap gap-3">
              {featuredPromises.map((item) => (
                <span
                  key={item.text}
                  className="inline-flex items-center gap-2 rounded-xl border border-violet-100 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                >
                  <i className={`${item.icon} text-violet-500`} />
                  {item.text}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <a
                href={consultationHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-violet-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-violet-200 transition-all hover:bg-violet-700"
              >
                Mulai Konsultasi <i className="ri-arrow-right-line" />
              </a>
              <Link
                href="/layanan"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-violet-100 px-8 py-4 text-lg font-bold text-slate-700 transition-all hover:border-violet-200"
              >
                Lihat Layanan
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 border-t border-violet-100 pt-12">
              {trustStats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-violet-900">{stat.value}</div>
                  <div className="text-sm font-medium text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="relative z-10 rounded-[2.5rem] bg-white p-4 shadow-2xl shadow-violet-100">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-violet-50">
                  <Image
                    src={assetRefs.mainHero}
                    alt={profileContent.name}
                    width={554}
                    height={693}
                    priority
                    className="h-full w-full object-cover object-top"
                  />

                  <div className="absolute right-6 bottom-6 left-6 rounded-2xl border border-white/50 bg-white/90 p-4 backdrop-blur-md">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-violet-600">
                      Pendampingan
                    </p>
                    <p className="text-sm font-medium leading-relaxed text-slate-700">
                      {homeContent.miniCards[0]?.body}
                    </p>
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute -top-6 -right-6 z-20 flex h-32 w-32 flex-col items-center justify-center rounded-full border-4 border-white bg-violet-600 p-4 text-center text-white shadow-xl">
                <i className="ri-verified-badge-fill mb-1 text-2xl" />
                <span className="text-[10px] font-bold uppercase leading-tight">
                  Profesional Psikolog
                </span>
              </div>

              {/* Name plate below */}
              <div className="mt-8 space-y-4 px-4">
                <h3 className="serif-heading text-2xl text-slate-900">
                  {profileContent.name}
                </h3>
                <p className="italic leading-relaxed text-slate-600">
                  &quot;{profileContent.identityCopy}&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus & Profile */}
      <section className="bg-violet-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            {/* Left - Focus Areas */}
            <div>
              <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
                Fokus &amp; Ketertarikan Isu
              </h3>
              <h2 className="serif-heading mb-8 text-4xl leading-tight text-slate-900">
                Membantu Anda menavigasi berbagai tantangan kehidupan batin.
              </h2>
              <p className="mb-10 text-lg text-slate-600">
                Privasi klien dijaga dan proses berjalan profesional dengan pendekatan yang komprehensif.
              </p>

              <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
                {focusList.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 font-medium text-slate-700"
                  >
                    <i className="ri-checkbox-circle-fill text-xl text-violet-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Profile Card */}
            <div className="space-y-6">
              <div className="rounded-[2.5rem] border border-violet-100 bg-white p-10 shadow-xl shadow-violet-100/50">
                <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-violet-600">
                  Profil singkat
                </h4>
                <h2 className="serif-heading mb-6 text-2xl text-slate-900">
                  {profileContent.name}
                </h2>

                <div className="mb-8 space-y-6">
                  <div>
                    <h5 className="mb-3 flex items-center gap-2 font-bold text-slate-800">
                      <i className="ri-graduation-cap-line text-violet-500" /> Latar pendidikan
                    </h5>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {profileContent.education.map((item) => (
                        <li key={item} className="border-l-2 border-violet-200 pl-4">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="mb-3 flex items-center gap-2 font-bold text-slate-800">
                      <i className="ri-mental-health-line text-violet-500" /> Pendekatan
                    </h5>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {homeContent.shortProfile.approachBody}
                    </p>
                  </div>
                </div>

                <p className="mb-8 leading-relaxed text-slate-600">
                  {profileContent.longIntro[0]}
                </p>

                <Link
                  href="/profil"
                  className="flex w-full items-center justify-center rounded-2xl border border-violet-200 bg-violet-50 py-4 font-bold text-violet-700 transition-all hover:bg-violet-100"
                >
                  {homeContent.shortProfile.ctaLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 space-y-4 text-center">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              Layanan Ranah Jiwa
            </h3>
            <h2 className="serif-heading mx-auto max-w-2xl text-4xl text-slate-900 md:text-5xl">
              Pendampingan Jiwa dengan Pendekatan Spiritualitas
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="service-card flex h-full flex-col rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl"
              >
                <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-violet-500">
                  {service.packageName}
                </span>
                <h4 className="mb-3 text-xl font-bold text-slate-900">{service.title}</h4>
                <p className="mb-8 flex-grow text-sm leading-relaxed text-slate-500">
                  {service.summary}
                </p>
                <div className="space-y-3">
                  <Link
                    href={buildBookingPath(service.packageName)}
                    className="block rounded-xl bg-violet-600 py-3 text-center text-sm font-bold text-white"
                  >
                    Booking
                  </Link>
                  <Link
                    href="/layanan"
                    className="block text-center text-xs font-bold text-slate-400 hover:text-violet-500"
                  >
                    Lihat detail
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="overflow-hidden bg-violet-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
                Testimoni
              </h3>
              <h2 className="serif-heading text-4xl text-slate-900">
                Cerita kecil dari proses yang terasa aman
              </h2>
            </div>
            <div className="flex gap-2">
              <button className="flex h-12 w-12 items-center justify-center rounded-full border border-violet-200 text-violet-600 transition-all hover:bg-violet-600 hover:text-white">
                <i className="ri-arrow-left-s-line text-xl" />
              </button>
              <button className="flex h-12 w-12 items-center justify-center rounded-full border border-violet-200 text-violet-600 transition-all hover:bg-violet-600 hover:text-white">
                <i className="ri-arrow-right-s-line text-xl" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, i) => (
              <div
                key={item.name}
                className="relative rounded-[2rem] border border-violet-100 bg-white p-8 shadow-sm"
              >
                <div className="mb-6 flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <i key={idx} className="ri-star-fill" />
                  ))}
                </div>
                <p className="mb-8 leading-relaxed text-slate-600">
                  &quot;{item.quote}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full font-bold text-white ${
                      ["bg-violet-600", "bg-blue-600", "bg-rose-600", "bg-emerald-600", "bg-indigo-600", "bg-orange-600"][
                        i % 6
                      ]
                    }`}
                  >
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900">{item.name}</h5>
                    <p className="text-xs text-slate-400">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[3rem] bg-slate-900 p-12 lg:p-20">
            <div className="absolute top-0 right-0 -mt-20 -mr-40 h-full w-1/3 rounded-full bg-violet-600/10 blur-[120px]" />

            <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2">
              <div className="space-y-8">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-violet-400">
                  Produk
                </h3>
                <h2 className="serif-heading text-4xl text-white md:text-5xl">
                  Karya buku dan jejak seminar dalam satu halaman
                </h2>
                <p className="text-lg text-slate-400">
                  Eksplorasi pemikiran dan materi edukasi kami untuk membantu perjalanan pertumbuhan Anda lebih dalam.
                </p>
                <Link
                  href="/produk"
                  className="inline-flex items-center gap-3 rounded-2xl bg-violet-600 px-8 py-4 font-bold text-white transition-all hover:bg-violet-700"
                >
                  Buka halaman Produk <i className="ri-book-open-line" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-sm">
                  <div className="mb-2 text-5xl font-bold text-violet-400">{books.length}</div>
                  <div className="font-medium text-white">karya buku</div>
                </div>
                <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-sm">
                  <div className="mb-2 text-5xl font-bold text-violet-400">
                    {productsPageContent.hero.quickStats[1]?.title}
                  </div>
                  <div className="font-medium text-white">seminar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="bg-[#fdf8f6] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 space-y-4 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 text-violet-600">
              <i className="ri-shield-user-line text-3xl" />
            </div>
            <h2 className="serif-heading text-4xl text-slate-900">
              Privasi dan kerahasiaan tetap jadi prioritas
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { icon: "ri-lock-2-line", title: "Data Terenkripsi", body: siteConfig.privacyPoints[0] },
              { icon: "ri-eye-off-line", title: "Anonimitas", body: siteConfig.privacyPoints[1] },
              { icon: "ri-file-shield-2-line", title: "Kode Etik", body: siteConfig.privacyPoints[2] },
            ].map((item) => (
              <div
                key={item.title}
                className="space-y-4 rounded-[2.5rem] border border-violet-100 bg-white p-10 text-center shadow-sm transition-all hover:shadow-md"
              >
                <i className={`${item.icon} mb-2 block text-4xl text-violet-500`} />
                <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                <p className="text-sm leading-relaxed text-slate-500">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-violet-600 px-6 py-24">
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-white/10 blur-[100px]" />
          <div className="absolute right-[-10%] bottom-[-20%] h-[500px] w-[500px] rounded-full bg-violet-900/20 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl space-y-10 text-center">
          <h2 className="serif-heading text-5xl leading-tight text-white md:text-6xl">
            Mulai Cerita Sekarang
          </h2>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-violet-100">
            Bila Anda sedang mencari ruang aman untuk berbagi, refleksi, dan bertumbuh, langkah pertama bisa dimulai hari ini.
          </p>
          <div className="flex flex-col justify-center gap-6 pt-6 sm:flex-row">
            <a
              href={consultationHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-10 py-5 text-lg font-bold text-violet-700 shadow-2xl transition-all hover:bg-violet-50"
            >
              <i className="ri-whatsapp-line text-2xl" /> Hubungi via WhatsApp
            </a>
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-violet-500/50 bg-violet-800 px-10 py-5 text-lg font-bold text-white transition-all hover:bg-violet-900"
            >
              Booking sesi
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
