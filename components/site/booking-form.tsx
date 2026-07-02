"use client"

import { useEffect, useRef, useState } from "react"
import { useSearchParams } from "next/navigation"

import { bookingOptions, findServiceByPackageName, services, type BookingFormData } from "@/lib/site-content"
import { buildBookingWhatsAppMessage, buildWhatsAppUrl } from "@/lib/whatsapp"

const initialValues: BookingFormData = {
  nama: "",
  umur: "",
  jenisKelamin: "",
  whatsapp: "",
  layanan: "",
  metode: "",
  tanggal: "",
  jam: "",
  keluhan: "",
}

type ErrorState = Partial<Record<keyof BookingFormData, string>>

export function BookingForm() {
  const searchParams = useSearchParams()
  const [values, setValues] = useState<BookingFormData>(initialValues)
  const [errors, setErrors] = useState<ErrorState>({})
  const [submitted, setSubmitted] = useState(false)
  const [redirectUrl, setRedirectUrl] = useState("")
  const lastPrefill = useRef<string | null>(null)

  const requestedService = findServiceByPackageName(searchParams.get("service"))?.packageName

  useEffect(() => {
    if (!requestedService || requestedService === lastPrefill.current) return
    setValues((current) => ({ ...current, layanan: requestedService }))
    setErrors((current) => ({ ...current, layanan: undefined }))
    lastPrefill.current = requestedService
  }, [requestedService])

  function updateValue<K extends keyof BookingFormData>(key: K, value: BookingFormData[K]) {
    setValues((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: undefined }))
  }

  function validate() {
    const nextErrors: ErrorState = {}
    if (!values.nama.trim()) nextErrors.nama = "Nama perlu diisi."
    if (!values.umur.trim()) nextErrors.umur = "Umur perlu diisi."
    if (!values.jenisKelamin.trim()) nextErrors.jenisKelamin = "Jenis kelamin perlu dipilih."
    if (!values.whatsapp.trim()) nextErrors.whatsapp = "Nomor WhatsApp perlu diisi."
    if (!values.layanan.trim()) nextErrors.layanan = "Pilih layanan terlebih dahulu."
    if (!values.metode.trim()) nextErrors.metode = "Pilih metode sesi."
    if (!values.tanggal.trim()) nextErrors.tanggal = "Pilih tanggal sesi."
    if (!values.jam.trim()) nextErrors.jam = "Pilih jam sesi."
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!validate()) return
    const url = buildWhatsAppUrl(buildBookingWhatsAppMessage(values))
    setRedirectUrl(url)
    setSubmitted(true)
    window.setTimeout(() => {
      window.location.assign(url)
    }, 1200)
  }

  const inputClass =
    "w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 text-slate-800 font-medium transition-all focus:border-violet-300 focus:ring-2 focus:ring-violet-100 focus:outline-none"
  const selectClass =
    "w-full cursor-pointer appearance-none rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 text-slate-800 font-medium transition-all focus:border-violet-300 focus:ring-2 focus:ring-violet-100 focus:outline-none"

  return (
    <div className="rounded-[3rem] border border-violet-100 bg-white p-8 md:p-14 custom-shadow">
      {/* Header */}
      <div className="mb-12 flex items-center gap-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-violet-600 text-white shadow-xl shadow-violet-200">
          <i className="ri-calendar-event-line text-3xl" />
        </div>
        <div>
          <h3 className="serif-heading text-3xl text-slate-900 md:text-4xl">Booking sesi</h3>
          <p className="mt-1 text-sm font-medium text-slate-500">
            Isi data singkat berikut. Setelah itu Anda akan diarahkan ke WhatsApp dengan pesan
            otomatis yang sudah terisi.
          </p>
        </div>
      </div>

      {requestedService ? (
        <div className="mb-8 rounded-[1.5rem] bg-violet-50 px-4 py-3 text-sm text-slate-600">
          Paket terpilih:{" "}
          <span className="font-bold text-slate-900">{requestedService}</span>
        </div>
      ) : null}

      <form className="space-y-8" onSubmit={handleSubmit}>
        {/* Nama + Umur */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Field label="Nama" error={errors.nama}>
            <input
              type="text"
              value={values.nama}
              onChange={(e) => updateValue("nama", e.target.value)}
              placeholder="Nama lengkap"
              className={inputClass}
            />
          </Field>
          <Field label="Umur" error={errors.umur}>
            <input
              type="number"
              value={values.umur}
              onChange={(e) => updateValue("umur", e.target.value)}
              placeholder="Contoh: 25"
              className={inputClass}
            />
          </Field>
        </div>

        {/* Jenis Kelamin + WhatsApp */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Field label="Jenis kelamin" error={errors.jenisKelamin}>
            <select
              value={values.jenisKelamin}
              onChange={(e) => updateValue("jenisKelamin", e.target.value)}
              className={selectClass}
            >
              <option value="" disabled>
                Pilih jenis kelamin
              </option>
              {bookingOptions.genders.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
          <Field label="No WhatsApp" error={errors.whatsapp}>
            <input
              type="tel"
              value={values.whatsapp}
              onChange={(e) => updateValue("whatsapp", e.target.value)}
              placeholder="08xx xxxx xxxx"
              className={inputClass}
            />
          </Field>
        </div>

        {/* Layanan + Metode */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Field label="Pilih layanan" error={errors.layanan}>
            <select
              value={values.layanan}
              onChange={(e) => updateValue("layanan", e.target.value)}
              className={selectClass}
            >
              <option value="" disabled>
                Pilih layanan
              </option>
              {services.map((service) => (
                <option key={service.id} value={service.packageName}>
                  {service.packageName} ({service.title})
                </option>
              ))}
            </select>
          </Field>
          <Field label="Pilih metode" error={errors.metode}>
            <select
              value={values.metode}
              onChange={(e) => updateValue("metode", e.target.value)}
              className={selectClass}
            >
              <option value="" disabled>
                Online / Offline
              </option>
              {bookingOptions.methods.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
        </div>

        {/* Tanggal + Jam */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Field label="Pilih tanggal" error={errors.tanggal}>
            <input
              type="date"
              value={values.tanggal}
              onChange={(e) => updateValue("tanggal", e.target.value)}
              className={`${inputClass} cursor-pointer`}
            />
          </Field>
          <Field label="Pilih jam" error={errors.jam}>
            <select
              value={values.jam}
              onChange={(e) => updateValue("jam", e.target.value)}
              className={selectClass}
            >
              <option value="" disabled>
                Pilih jam
              </option>
              {bookingOptions.hours.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
        </div>

        {/* Keluhan */}
        <div className="space-y-3">
          <div className="flex items-end justify-between">
            <label className="ml-1 text-[11px] font-extrabold uppercase tracking-widest text-slate-400">
              Keluhan singkat
            </label>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Opsional
            </span>
          </div>
          <textarea
            value={values.keluhan}
            onChange={(e) => updateValue("keluhan", e.target.value)}
            placeholder="Ceritakan singkat apa yang sedang ingin Anda bicarakan."
            rows={5}
            className="w-full resize-none rounded-[2rem] border border-slate-100 bg-slate-50 px-6 py-4 text-slate-800 font-medium transition-all focus:border-violet-300 focus:ring-2 focus:ring-violet-100 focus:outline-none"
          />
          <p className="ml-1 flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
            <i className="ri-information-line text-sm" /> Boleh singkat. Tujuannya membantu kami
            menyiapkan respon awal yang lebih pas.
          </p>
        </div>

        {/* Privacy */}
        <div className="flex items-start gap-4 rounded-[2rem] border border-violet-100 bg-violet-50 p-6">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm">
            <i className="ri-lock-2-line text-xl" />
          </div>
          <div>
            <p className="mb-1 text-sm font-bold text-slate-900">Kerahasiaan tetap dijaga.</p>
            <p className="text-[11px] leading-relaxed font-medium text-slate-500">
              Informasi dalam form ini hanya digunakan untuk proses booking awal dan komunikasi
              terkait jadwal.
            </p>
          </div>
        </div>

        {/* Submit */}
        <div className="space-y-4">
          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-3 rounded-[2rem] bg-violet-600 py-5 text-xl font-bold text-white shadow-2xl shadow-violet-200 transition-all hover:bg-violet-700"
          >
            Lanjutkan ke WhatsApp
            <i className="ri-heart-add-line text-2xl transition-transform group-hover:scale-110" />
          </button>

          {submitted ? (
            <div className="rounded-[2rem] border border-violet-100 bg-violet-50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-violet-600 text-white">
                  <i className="ri-check-line text-xl" />
                </div>
                <div className="space-y-2">
                  <p className="font-bold text-slate-900">Data booking siap dikirim.</p>
                  <p className="text-sm leading-relaxed text-slate-500">
                    Anda akan diarahkan ke WhatsApp dalam beberapa detik. Bila tidak berpindah
                    otomatis, gunakan tombol di bawah.
                  </p>
                  <a
                    href={redirectUrl}
                    rel="noreferrer"
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-violet-200 bg-white px-5 py-2.5 text-sm font-bold text-violet-600 transition-all hover:bg-violet-50"
                  >
                    <i className="ri-whatsapp-line" /> Buka WhatsApp sekarang
                  </a>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </form>
    </div>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <label className="grid gap-3">
      <span className="ml-1 text-[11px] font-extrabold uppercase tracking-widest text-slate-400">
        {label}
      </span>
      {children}
      {error ? <p className="text-xs font-medium text-red-500">{error}</p> : null}
    </label>
  )
}
