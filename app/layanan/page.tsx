import type { Metadata } from "next"
import Link from "next/link"

import { getServices, serviceNotes, servicesPageContent } from "@/lib/site-content"
import { buildBookingPath, buildInquiryMessage, buildWhatsAppUrl } from "@/lib/whatsapp"

export const metadata: Metadata = {
  title: "Layanan Psikologi",
  description:
    "Lihat layanan psikologi Ranah Jiwa, mulai dari mental health check up, konseling, asesmen psikologis, hingga psikoedukasi dan seminar.",
  alternates: { canonical: "/layanan" },
  openGraph: {
    title: "Layanan Psikologi | Ranah Jiwa",
    description:
      "Lihat layanan psikologi Ranah Jiwa, mulai dari mental health check up, konseling, asesmen psikologis, hingga psikoedukasi dan seminar.",
    url: "/layanan",
  },
}

const serviceIcons: Record<string, string> = {
  annafisa: "ri-heart-pulse-line",
  assyifa: "ri-mental-health-line",
  assakinah: "ri-user-smile-line",
  attarbiyah: "ri-parent-line",
  "al-aqila": "ri-brain-line",
  "al-ilmaa": "ri-presentation-line",
}

export default async function ServicesPage() {
  const services = await getServices()
  const consultationHref = buildWhatsAppUrl(buildInquiryMessage("layanan yang paling sesuai"))

  return (
    <>
      {/* Hero */}
      <section className="relative px-6 pt-16 pb-24 gradient-bg">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[3.5rem] border border-violet-100 bg-violet-50/50 p-8 md:p-16">
            <div className="grid items-center gap-16 lg:grid-cols-12">
              <div className="space-y-8 lg:col-span-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-violet-700">
                  LAYANAN RANAH JIWA
                </div>
                <h1 className="serif-heading text-5xl leading-[1.1] text-slate-900 md:text-6xl">
                  Pendampingan Jiwa dengan Pendekatan{" "}
                  <span className="text-violet-600">Spiritualitas</span>
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-slate-600">
                  Pilihan layanan Ranah Jiwa dirancang untuk membantu Anda mengenali kebutuhan, memahami bentuk pendampingan, dan memilih langkah yang paling sesuai.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-6">
                {servicesPageContent.hero.quickStats.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[2.5rem] border border-violet-100 bg-white p-8 shadow-sm"
                  >
                    <div className="mb-2 text-3xl font-bold text-violet-900">{item.title}</div>
                    <p className="text-sm leading-relaxed text-slate-500">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Service Pills */}
      <div className="sticky top-20 z-40 glass-nav overflow-x-auto border-b border-violet-100 px-6 py-4">
        <div className="mx-auto flex max-w-7xl flex-nowrap items-center justify-start gap-3 md:flex-wrap md:justify-center">
          {services.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="whitespace-nowrap rounded-full border border-violet-100 bg-violet-50 px-5 py-2.5 text-sm font-bold text-violet-700"
            >
              {service.packageName}
            </a>
          ))}
        </div>
      </div>

      {/* Service Detail Sections */}
      <main className="mx-auto max-w-7xl space-y-32 px-6 py-20">
        {services.map((service) => {
          const IconRi = serviceIcons[service.id] ?? "ri-heart-line"
          const whatsappHref = buildWhatsAppUrl(
            buildInquiryMessage(`paket ${service.packageName}`)
          )
          const quoteMap: Record<string, string> = {
            annafisa: '"Pemeriksaan awal untuk membantu mengenali kondisi psikologis secara lebih terarah."',
            assyifa: '"Paket pendampingan awal untuk memahami kondisi diri dan mendapatkan arahan."',
            assakinah: '"Layanan konseling mendalam untuk pertumbuhan dan penyembuhan diri pribadi."',
            attarbiyah: '"Layanan skrining awal untuk melihat tumbuh kembang anak dan deteksi dini."',
            "al-aqila": '"Pengukuran objektif terhadap potensi, kepribadian, dan minat bakat."',
            "al-ilmaa": '"Program edukasi pilihan untuk komunitas, sekolah, orang tua, dan institusi."',
          }

          return (
            <section key={service.id} id={service.id} className="scroll-mt-40">
              <div className="violet-shadow grid grid-cols-1 overflow-hidden rounded-[3rem] border border-violet-100 bg-white lg:grid-cols-12">
                {/* Main Content */}
                <div className="space-y-10 p-8 md:p-14 lg:col-span-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
                      <i className={`${IconRi} text-3xl`} />
                    </div>
                    <div>
                      <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-violet-500">
                        {service.packageName}
                      </span>
                      <h2 className="serif-heading text-3xl text-slate-900">{service.title}</h2>
                    </div>
                  </div>

                  <p className="text-lg font-medium italic leading-relaxed text-slate-600">
                    {quoteMap[service.id] ?? `"${service.summary}"`}
                  </p>

                  <div className="space-y-6 text-slate-600">
                    <p>{service.description}</p>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                      <div>
                        <h4 className="mb-3 flex items-center gap-2 font-bold text-slate-900">
                          <i className="ri-list-check-3 text-violet-500" /> Isi Layanan
                        </h4>
                        <p className="text-sm leading-relaxed">
                          {service.bullets.join(" ")}
                        </p>
                      </div>
                      {service.outputs?.length ? (
                        <div>
                          <h4 className="mb-3 flex items-center gap-2 font-bold text-slate-900">
                            <i className="ri-file-list-3-line text-violet-500" /> Output
                          </h4>
                          <p className="text-sm leading-relaxed">
                            {service.outputs.join(", ")}
                          </p>
                        </div>
                      ) : (
                        <div>
                          <h4 className="mb-3 flex items-center gap-2 font-bold text-slate-900">
                            <i className="ri-file-list-3-line text-violet-500" /> Output
                          </h4>
                          <p className="text-sm leading-relaxed">
                            Pemahaman diri dan rencana tindak lanjut.
                          </p>
                        </div>
                      )}
                    </div>

                    {service.serviceNotes?.length ? (
                      <div>
                        <h4 className="mb-3 flex items-center gap-2 font-bold text-slate-900">
                          <i className="ri-information-line text-violet-500" /> Catatan
                        </h4>
                        <ul className="space-y-1 text-sm leading-relaxed">
                          {service.serviceNotes.map((note) => (
                            <li key={note}>{note}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-6">
                    <Link
                      href={buildBookingPath(service.packageName)}
                      className="inline-flex items-center rounded-2xl bg-violet-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-violet-200 transition-all hover:bg-violet-700"
                    >
                      {service.ctaLabel}
                    </Link>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 rounded-2xl border-2 border-slate-100 px-8 py-4 text-lg font-bold text-slate-600 transition-all hover:border-violet-600 hover:text-violet-600"
                    >
                      <i className="ri-whatsapp-line" /> Hubungi via WhatsApp
                    </a>
                  </div>
                </div>

                {/* Summary Sidebar */}
                <div className="summary-panel flex flex-col justify-center border-l border-violet-50 p-8 md:p-10 lg:col-span-4">
                  <h3 className="serif-heading mb-8 text-2xl text-slate-900">Ringkasan</h3>
                  <div className="space-y-8">
                    <div>
                      <span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-violet-400">
                        PAKET
                      </span>
                      <p className="text-lg font-bold text-slate-800">{service.packageName}</p>
                    </div>
                    <div>
                      <span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-violet-400">
                        DURASI
                      </span>
                      <p className="text-lg font-bold text-slate-800">{service.duration}</p>
                    </div>
                    <div>
                      <span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-violet-400">
                        FEE
                      </span>
                      <p className="text-2xl font-bold text-violet-700">{service.fee}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        })}
      </main>

      {/* Notes */}
      <section className="bg-violet-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 space-y-4 text-center">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              {servicesPageContent.notes.eyebrow}
            </h3>
            <h2 className="serif-heading text-4xl text-slate-900">
              {servicesPageContent.notes.title}
            </h2>
            <p className="text-slate-500">{servicesPageContent.notes.description}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {serviceNotes.map((note) => (
              <div
                key={note}
                className="rounded-[2rem] border border-violet-100 bg-white p-6 text-sm leading-relaxed text-slate-600 shadow-sm"
              >
                <i className="ri-information-line mr-2 text-violet-500" />
                {note}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help CTA */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-[3rem] bg-slate-900 p-10 text-center md:p-16">
          <div className="mx-auto max-w-2xl space-y-8">
            <h2 className="serif-heading text-4xl leading-tight text-white">
              {servicesPageContent.helpCta.title}
            </h2>
            <p className="text-lg text-slate-400">
              {servicesPageContent.helpCta.description}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={consultationHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-8 py-4 font-bold text-white transition-all hover:bg-[#20ba5a]"
              >
                <i className="ri-whatsapp-line text-xl" /> {servicesPageContent.helpCta.primaryLabel}
              </a>
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-violet-500/50 bg-violet-800 px-8 py-4 font-bold text-white transition-all hover:bg-violet-900"
              >
                {servicesPageContent.helpCta.secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
