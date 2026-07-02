import type { Metadata } from "next"
import { Suspense } from "react"

import { BookingForm } from "@/components/site/booking-form"
import { bookingPageContent, siteConfig } from "@/lib/site-content"

export const metadata: Metadata = {
  title: "Booking",
  description:
    "Isi data booking Ranah Jiwa, pilih layanan dan jadwal, lalu lanjut otomatis ke WhatsApp.",
  alternates: { canonical: "/booking" },
  robots: { index: false, follow: true },
}

export default function BookingPage() {
  return (
    <main className="gradient-bg min-h-screen px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
          {/* Left Column - Info */}
          <div className="space-y-12 lg:col-span-5 lg:sticky lg:top-32">
            <div className="space-y-6">
              <span className="inline-block rounded-full bg-violet-100 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-violet-700">
                {bookingPageContent.eyebrow}
              </span>
              <h2 className="serif-heading text-5xl leading-tight text-slate-900">
                {bookingPageContent.title}
              </h2>
              <p className="text-lg leading-relaxed font-medium text-slate-600">
                {bookingPageContent.description}
              </p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4">
              <div className="feature-card flex items-start gap-5 rounded-[2rem] border border-violet-100 bg-white p-6 custom-shadow">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
                  <i className="ri-whatsapp-line text-2xl" />
                </div>
                <div>
                  <h4 className="mb-1 font-bold text-slate-900">Langsung ke WhatsApp</h4>
                  <p className="text-sm leading-relaxed text-slate-500">
                    Setelah form dikirim, pesan booking otomatis sudah siap tanpa perlu tulis ulang.
                  </p>
                </div>
              </div>

              {siteConfig.privacyPoints.slice(0, 2).map((point) => (
                <div
                  key={point}
                  className="feature-card flex items-start gap-5 rounded-[2rem] border border-violet-100 bg-white p-6 custom-shadow"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
                    <i className="ri-shield-user-line text-2xl" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold text-slate-900">Privasi dijaga</h4>
                    <p className="text-sm leading-relaxed text-slate-500">{point}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Alur Singkat */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-violet-900 p-8 text-violet-100 shadow-2xl">
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-violet-800 blur-3xl opacity-50" />
              <span className="mb-6 block text-[10px] font-extrabold uppercase tracking-widest text-violet-400">
                ALUR SINGKAT
              </span>
              <ul className="relative z-10 space-y-6">
                <li className="flex items-center gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-violet-500/50 bg-violet-700/80 text-xs font-bold text-white">
                    1
                  </span>
                  <p className="text-sm font-bold">Isi data inti seperlunya.</p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-violet-500/50 bg-violet-700/80 text-xs font-bold text-white">
                    2
                  </span>
                  <p className="text-sm font-bold">
                    Pilih layanan, metode, tanggal, dan jam.
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-violet-500/50 bg-violet-700/80 text-xs font-bold text-white">
                    3
                  </span>
                  <p className="text-sm font-bold">
                    Lanjut otomatis ke WhatsApp untuk konfirmasi.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-7">
            <Suspense fallback={<BookingFormFallback />}>
              <BookingForm />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  )
}

function BookingFormFallback() {
  return (
    <div className="rounded-[3rem] border border-violet-100 bg-white p-8 md:p-14 custom-shadow">
      <p className="text-sm text-slate-500">Menyiapkan form booking...</p>
    </div>
  )
}
