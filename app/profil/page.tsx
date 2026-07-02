import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { assetRefs, profileContent, profilePageContent } from "@/lib/site-content"
import { buildInquiryMessage, buildWhatsAppUrl } from "@/lib/whatsapp"

export const metadata: Metadata = {
  title: "Profil Arina Nurul Badriyah, S.Psi., Psikolog",
  description:
    "Profil Arina Nurul Badriyah, S.Psi., Psikolog, beserta pendidikan, pengalaman, sertifikasi, dan cara memulai langkah pertama.",
  alternates: { canonical: "/profil" },
  openGraph: {
    title: "Profil Arina Nurul Badriyah, S.Psi., Psikolog | Ranah Jiwa",
    description:
      "Kenali profil Arina Nurul Badriyah, S.Psi., Psikolog, beserta pendidikan, pengalaman, dan sertifikasi di Ranah Jiwa.",
    url: "/profil",
  },
}

const focusAreas = [
  { icon: "ri-heart-pulse-line", label: "Pendekatan Psikologis & Spiritual" },
  { icon: "ri-windy-line", label: "Kecemasan, Stres & Burnout" },
  { icon: "ri-rainy-line", label: "Depresi & Proses Berduka" },
  { icon: "ri-seedling-line", label: "Pengembangan Diri" },
  { icon: "ri-team-line", label: "Relasi & Pola Hubungan" },
  { icon: "ri-shield-user-line", label: "Luka Batin & Forgiveness" },
  { icon: "ri-mental-health-line", label: "Perilaku Adiktif & Maladaptif" },
  { icon: "ri-brain-line", label: "Neurodivergent (ADHD, Autism)" },
]

export default function ProfilePage() {
  const whatsappHref = buildWhatsAppUrl(buildInquiryMessage("profil dan konsultasi"))

  return (
    <>
      {/* Hero Profile */}
      <main className="violet-gradient-bg px-6 pt-16 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-20">
            {/* Left - Photo & Cards */}
            <div className="space-y-12 lg:col-span-5">
              <div className="relative">
                {/* Photo frame */}
                <div className="profile-shadow relative z-10 rounded-[3rem] bg-white p-5">
                  <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[2.5rem] bg-violet-100">
                    {assetRefs.mainHero ? (
                      <Image
                        src={assetRefs.mainHero}
                        alt={profileContent.name}
                        width={554}
                        height={693}
                        priority
                        className="h-full w-full object-cover object-top"
                      />
                    ) : (
                      <div className="text-center">
                        <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-violet-200 text-5xl font-bold text-violet-600">
                          A
                        </div>
                        <p className="text-sm font-bold uppercase tracking-widest text-violet-500">
                          Arina Nurul Badriyah
                        </p>
                      </div>
                    )}

                    {/* Info overlay */}
                    <div className="absolute right-6 bottom-6 left-6 rounded-[2rem] border border-white/50 bg-white/90 p-6 backdrop-blur-md">
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-violet-600">
                        Ranah Jiwa
                      </p>
                      <p className="font-semibold leading-relaxed text-slate-700">
                        Psikologi yang hangat dan profesional untuk anak, remaja, dan dewasa.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute -top-6 -right-6 z-20 flex h-36 w-36 flex-col items-center justify-center rounded-full border-4 border-white bg-violet-600 p-4 text-center text-white shadow-2xl">
                  <i className="ri-verified-badge-fill mb-1 text-3xl" />
                  <span className="text-[10px] font-bold uppercase leading-tight tracking-wider">
                    Profesional<br />Psikolog
                  </span>
                </div>

                {/* Decorative blob */}
                <div className="absolute -bottom-10 -left-10 h-40 w-40 opacity-10">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#7C3AED"
                      d="M44.7,-76.4C58.3,-69.2,70.1,-58.5,78.2,-45.5C86.3,-32.5,90.7,-17.2,89.5,-2.1C88.3,13.1,81.5,28.1,72,40.9C62.5,53.6,50.3,64.2,36.5,71.2C22.7,78.2,7.3,81.7,-8.4,80.3C-24.1,78.9,-40.1,72.6,-53.4,62.8C-66.8,53.1,-77.5,39.9,-83.1,24.9C-88.7,9.9,-89.2,-6.9,-83.4,-21.8C-77.5,-36.8,-65.4,-49.9,-51.4,-57.2C-37.4,-64.5,-21.5,-66,-6,-64.1C9.6,-62.1,19.2,-56.8,31.1,-68.5C43.1,-80.3,31.1,-83.6,44.7,-76.4Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>
              </div>

              {/* Trust cards */}
              <div className="grid grid-cols-2 gap-6">
                <div className="hover-lift rounded-[2.5rem] border border-violet-100 bg-white p-8 shadow-sm">
                  <h4 className="mb-3 text-[10px] font-bold uppercase tracking-widest text-violet-600">
                    Pendampingan
                  </h4>
                  <p className="text-sm font-medium leading-relaxed text-slate-700">
                    {profilePageContent.trustCards[1]?.body}
                  </p>
                </div>
                <div className="hover-lift rounded-[2.5rem] bg-violet-900 p-8 text-white shadow-sm">
                  <h4 className="mb-3 text-[10px] font-bold uppercase tracking-widest text-violet-400">
                    Pengalaman
                  </h4>
                  <p className="text-sm font-medium leading-relaxed text-white">
                    Lebih dari 5 tahun dedikasi dalam kesehatan mental.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-12 lg:col-span-7">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-violet-700">
                  Psikolog - Empatik - Profesional
                </div>
                <h2 className="serif-heading text-5xl leading-[1.15] text-slate-900 xl:text-6xl">
                  Mendengar dengan hati, membimbing menuju{" "}
                  <span className="text-violet-600">pulih.</span>
                </h2>
                <h3 className="flex items-center gap-3 text-2xl font-bold text-violet-900">
                  {profileContent.name}
                </h3>

                {/* Credentials */}
                <div className="flex flex-wrap gap-4">
                  <div className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                    No. SILP: DD333F4F05B8
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                    No. STR: 20252371-2026-0309
                  </div>
                </div>

                {/* Bio */}
                <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-slate-600">
                  {profileContent.longIntro.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Education + Approach */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="space-y-6 rounded-[2.5rem] border border-violet-100 bg-white p-10 shadow-sm">
                  <h4 className="flex items-center gap-3 text-lg font-bold text-violet-600">
                    <i className="ri-graduation-cap-fill text-2xl" /> Latar Pendidikan
                  </h4>
                  <ul className="space-y-4">
                    {profileContent.education.map((item) => (
                      <li key={item} className="flex items-start gap-4">
                        <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                        <p className="text-sm font-medium text-slate-600">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6 rounded-[2.5rem] border border-violet-100 bg-white p-10 shadow-sm">
                  <h4 className="flex items-center gap-3 text-lg font-bold text-violet-600">
                    <i className="ri-mental-health-fill text-2xl" /> Pendekatan
                  </h4>
                  <p className="text-sm font-medium leading-relaxed text-slate-600">
                    Empatik, relevan, dan mudah dipahami agar klien merasa aman sejak awal. Menghargai keunikan setiap cerita sebagai bagian dari perjalanan manusia.
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-6 pt-4 sm:flex-row">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-10 py-5 text-lg font-bold text-white shadow-xl shadow-green-100 transition-all hover:bg-[#20ba5a]"
                >
                  <i className="ri-whatsapp-line text-2xl" /> Tanya via WhatsApp
                </a>
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-violet-600 px-10 py-5 text-lg font-bold text-violet-600 transition-all hover:bg-violet-50"
                >
                  Booking Sesi
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Focus Areas */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
                Keahlian &amp; Fokus
              </h3>
              <h2 className="serif-heading mb-8 text-4xl leading-tight text-slate-900">
                Membantu Anda menavigasi berbagai tantangan kehidupan batin.
              </h2>
              <p className="text-lg leading-relaxed text-slate-500">
                Privasi klien dijaga dan proses berjalan profesional dengan pendekatan yang komprehensif.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8">
              {focusAreas.map((item) => (
                <div
                  key={item.label}
                  className="group flex items-center gap-4 rounded-[2rem] border border-violet-100 bg-violet-50 p-6 transition-all hover:bg-white hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-violet-600 shadow-sm transition-all group-hover:bg-violet-600 group-hover:text-white">
                    <i className={`${item.icon} text-2xl`} />
                  </div>
                  <span className="font-bold text-slate-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Certifications */}
      <section className="bg-violet-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              {profilePageContent.qualification.eyebrow}
            </h3>
            <h2 className="serif-heading text-4xl text-slate-900">
              {profilePageContent.qualification.title}
            </h2>
            <p className="text-lg text-slate-500">
              {profilePageContent.qualification.description}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Experience */}
            <div className="space-y-6 rounded-[2.5rem] border border-violet-100 bg-white p-10 shadow-sm">
              <h4 className="flex items-center gap-3 text-lg font-bold text-violet-600">
                <i className="ri-briefcase-fill text-2xl" /> Pengalaman Profesional
              </h4>
              <ul className="space-y-4">
                {profileContent.experience.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                    <p className="text-sm font-medium text-slate-600">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div className="space-y-6 rounded-[2.5rem] border border-violet-100 bg-white p-10 shadow-sm">
              <h4 className="flex items-center gap-3 text-lg font-bold text-violet-600">
                <i className="ri-medal-fill text-2xl" /> Sertifikasi
              </h4>
              <div className="grid gap-3">
                {profileContent.certifications.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-violet-100 bg-violet-50/50 p-4 text-sm font-medium text-slate-700"
                  >
                    {item.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-violet-600 px-6 py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-white/10 blur-[100px]" />
          <div className="absolute right-[-10%] bottom-[-20%] h-[500px] w-[500px] rounded-full bg-violet-900/20 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl space-y-10 text-center">
          <h2 className="serif-heading text-5xl leading-tight text-white md:text-6xl">
            Mulai Cerita Anda
          </h2>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-violet-100">
            Bila Anda sedang mencari ruang aman untuk berbagi, refleksi, dan bertumbuh, langkah pertama bisa dimulai hari ini bersama pendampingan yang hangat.
          </p>
          <div className="flex flex-col justify-center gap-6 pt-6 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-10 py-5 text-lg font-bold text-white shadow-2xl transition-all hover:bg-[#20ba5a]"
            >
              <i className="ri-whatsapp-line text-2xl" /> Hubungi via WhatsApp
            </a>
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-violet-500/50 bg-violet-800 px-10 py-5 text-lg font-bold text-white transition-all hover:bg-violet-900"
            >
              Booking Sesi
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
