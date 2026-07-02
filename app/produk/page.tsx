import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { getBooks, getSeminars, productsPageContent } from "@/lib/site-content"
import { buildInquiryMessage, buildWhatsAppUrl } from "@/lib/whatsapp"

export const metadata: Metadata = {
  title: "Karya Buku dan Seminar",
  description:
    "Kumpulan karya buku serta dokumentasi seminar dan workshop Ranah Jiwa.",
  alternates: { canonical: "/produk" },
  openGraph: {
    title: "Karya Buku dan Seminar | Ranah Jiwa",
    description: "Kumpulan karya buku serta dokumentasi seminar dan workshop Ranah Jiwa.",
    url: "/produk",
  },
}

export default async function ProductsPage() {
  const books = await getBooks()
  const seminars = await getSeminars()
  const consultationHref = buildWhatsAppUrl(buildInquiryMessage("produk, buku, atau seminar"))

  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden px-6 pt-16 pb-20 gradient-bg">
        <div className="relative mx-auto max-w-7xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-xs font-bold uppercase tracking-widest text-violet-700">
            PRODUK RANAH JIWA
          </div>
          <h1 className="serif-heading mb-8 text-5xl leading-tight text-slate-900 md:text-7xl">
            Karya buku dan jejak <br /> seminar{" "}
            <span className="text-violet-600">Ranah Jiwa</span>
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-slate-600">
            Kumpulan karya buku serta dokumentasi seminar dan workshop yang telah diisi oleh Ranah Jiwa untuk mendampingi perjalanan pertumbuhan Anda.
          </p>

          <div className="flex justify-center gap-8 md:gap-20">
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold text-violet-900">{books.length}</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Karya buku Ranah Jiwa
              </div>
            </div>
            <div className="hidden h-16 w-px self-center bg-violet-200 md:block" />
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold text-violet-900">20+</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Seminar dan workshop
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Books */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-6 border-b border-violet-100 pb-8 md:flex-row md:items-end">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-violet-600">
                KARYA BUKU
              </span>
              <h2 className="serif-heading text-4xl text-slate-900">Buku dan karya tulis</h2>
            </div>
            <p className="max-w-md text-slate-500">
              Kumpulan buku dan karya tulis yang telah diterbitkan atau didokumentasikan oleh Ranah Jiwa.
            </p>
          </div>

          {books.length ? (
            <div className="space-y-20 pb-24">
              {books.map((book) => (
                <div
                  key={book.title}
                  className="flex flex-col items-center gap-16 rounded-[3rem] border border-violet-100 bg-white p-8 shadow-2xl shadow-violet-100/50 md:p-16 lg:flex-row"
                >
                  {/* Cover */}
                  <div className="w-full lg:w-2/5">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] border border-violet-100 bg-violet-50 shadow-xl">
                      <div className="absolute inset-0 bg-gradient-to-tr from-violet-200/50 to-transparent" />
                      {book.cover ? (
                        <Image
                          src={book.cover}
                          alt={book.title}
                          width={450}
                          height={600}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full flex-col items-center justify-center p-12 text-center">
                          <i className="ri-book-3-line mb-4 block text-8xl text-violet-300" />
                          <p className="serif-heading text-2xl font-bold text-violet-900">
                            {book.title}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="w-full space-y-8 lg:w-3/5">
                    <div className="space-y-2">
                      <h3 className="serif-heading text-4xl text-slate-900">{book.title}</h3>
                      <p className="font-bold text-violet-600">Arina Nurul Badriyah</p>
                    </div>
                    <p className="text-lg italic leading-relaxed text-slate-600">
                      &quot;{book.description.replace(/\n/g, " ")}&quot;
                    </p>
                    <div className="flex gap-4 pt-4">
                      <button className="inline-flex items-center gap-2 rounded-2xl bg-violet-600 px-8 py-4 font-bold text-white transition-all hover:bg-violet-700">
                        Detail Buku <i className="ri-arrow-right-line" />
                      </button>
                      <a
                        href={buildWhatsAppUrl(buildInquiryMessage(`buku ${book.title}`))}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-2xl bg-[#25D366] px-8 py-4 font-bold text-white transition-all hover:scale-105"
                      >
                        <i className="ri-whatsapp-line" /> Beli via WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center gap-8 rounded-[2.5rem] border border-dashed border-violet-200 bg-white p-12 pb-24">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                <i className="ri-book-3-line text-3xl" />
              </div>
              <div>
                <h2 className="serif-heading text-4xl text-slate-900">
                  {productsPageContent.books.emptyTitle}
                </h2>
                <p className="text-lg text-slate-500">{productsPageContent.books.emptyBody}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Seminars */}
      <section className="bg-violet-50/50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 space-y-4 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-violet-600">
              JEJAK SEMINAR
            </span>
            <h2 className="serif-heading text-4xl text-slate-900">
              Seminar dan workshop yang telah diisi
            </h2>
            <p className="mx-auto max-w-xl text-slate-500">
              Dokumentasi seminar dan workshop yang telah diisi oleh Ranah Jiwa dengan pendekatan hangat dan profesional.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {seminars.map((seminar, index) => {
              const isComingSoon = seminar.date.includes("2026") && index === 0
              const isPast = seminar.date.includes("2025") || seminar.date.includes("Februari")

              return (
                <div
                  key={seminar.title}
                  className="card-hover flex h-full flex-col rounded-[2.5rem] border border-violet-100 bg-white p-8"
                >
                  <div className="mb-6 flex flex-wrap gap-2">
                    <span className="rounded-full bg-violet-100 px-3 py-1 text-[10px] font-bold uppercase text-violet-700">
                      Seminar 0{index + 1}
                    </span>
                    {isComingSoon ? (
                      <span className="rounded-full bg-orange-100 px-3 py-1 text-[10px] font-bold uppercase text-orange-700">
                        Coming Soon
                      </span>
                    ) : null}
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase text-slate-600">
                      {seminar.audience}
                    </span>
                  </div>

                  <h3 className="serif-heading mb-2 text-2xl text-slate-900">{seminar.title}</h3>
                  <p className="mb-6 text-sm font-semibold text-violet-600">{seminar.subtitle}</p>

                  <div className="mb-8 flex-grow space-y-4">
                    <div className="flex items-start gap-3">
                      <i className="ri-calendar-line text-violet-500" />
                      <div className="text-sm">
                        <p className="font-bold">{seminar.date}</p>
                        {seminar.time ? (
                          <p className="text-xs text-slate-500">{seminar.time}</p>
                        ) : null}
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <i className="ri-ticket-line text-violet-500" />
                      <p className="text-sm font-bold">{seminar.price}</p>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {seminar.description}
                    </p>
                  </div>

                  <div className="border-t border-violet-50 pt-6">
                    {isPast ? (
                      <button className="w-full cursor-not-allowed rounded-xl bg-slate-100 py-3 text-xs font-bold text-slate-400">
                        Sudah Terlaksana
                      </button>
                    ) : (
                      <div className="grid grid-cols-2 gap-3">
                        <button className="rounded-xl bg-violet-600 py-3 text-xs font-bold text-white">
                          Daftar di sini
                        </button>
                        <a
                          href={buildWhatsAppUrl(buildInquiryMessage(`seminar ${seminar.title}`))}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-1 rounded-xl border border-violet-200 py-3 text-xs font-bold text-violet-600"
                        >
                          <i className="ri-whatsapp-line" /> WhatsApp
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-violet-700 p-10 text-center text-white md:p-20">
          <div className="absolute top-0 right-0 -mt-32 -mr-32 h-64 w-64 rounded-full bg-white/10 blur-[100px]" />
          <div className="relative z-10 mx-auto max-w-3xl space-y-8">
            <h2 className="serif-heading text-4xl leading-tight md:text-5xl">
              Punya kebutuhan seminar atau ingin bertanya soal karya Ranah Jiwa?
            </h2>
            <p className="text-lg text-violet-100">
              Hubungi Ranah Jiwa lewat WhatsApp untuk diskusi seminar, psikoedukasi, kolaborasi, atau pertanyaan layanan lainnya.
            </p>
            <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
              <a
                href={consultationHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-10 py-5 text-lg font-bold text-white transition-all hover:scale-105"
              >
                <i className="ri-whatsapp-line text-2xl" /> Hubungi via WhatsApp
              </a>
              <Link
                href="/layanan"
                className="inline-flex items-center justify-center rounded-2xl border border-violet-400 bg-transparent px-10 py-5 text-lg font-bold text-white transition-all hover:bg-violet-600"
              >
                Lihat layanan
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
