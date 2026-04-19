"use client"

import { useEffect, useRef, useState } from "react"
import { useSearchParams } from "next/navigation"
import { CalendarDays, CheckCircle2, LockKeyhole, MessageCircleHeart } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import {
  bookingOptions,
  findServiceByPackageName,
  services,
  type BookingFormData,
} from "@/lib/site-content"
import { cn } from "@/lib/utils"
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

  return (
    <Card className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/86 shadow-soft">
      <CardHeader className="space-y-4 bg-[linear-gradient(180deg,rgba(245,239,236,0.76),rgba(255,255,255,0))] p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex size-11 items-center justify-center rounded-full bg-primary/12 text-primary">
            <CalendarDays className="size-5" />
          </span>
          <div className="space-y-1">
            <CardTitle className="font-heading text-2xl">Booking sesi</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Isi data singkat berikut. Setelah itu Anda akan diarahkan ke WhatsApp
              dengan pesan otomatis yang sudah terisi.
            </p>
          </div>
        </div>
        {requestedService ? (
          <div className="rounded-[1.5rem] bg-brand-soft/90 px-4 py-3 text-sm text-muted-foreground">
            Paket terpilih: <span className="font-semibold text-foreground">{requestedService}</span>
          </div>
        ) : null}
      </CardHeader>

      <CardContent className="space-y-8 p-6 pt-0 sm:p-8 sm:pt-0">
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="grid gap-5 rounded-[1.8rem] bg-brand-soft/52 p-4 md:grid-cols-2 md:p-5">
            <Field label="Nama" error={errors.nama}>
              <Input
                value={values.nama}
                onChange={(event) => updateValue("nama", event.target.value)}
                placeholder="Nama lengkap"
                className="h-12 rounded-2xl border-white bg-brand-soft/80 px-4"
              />
            </Field>

            <Field label="Umur" error={errors.umur}>
              <Input
                value={values.umur}
                onChange={(event) => updateValue("umur", event.target.value)}
                inputMode="numeric"
                placeholder="Contoh: 25"
                className="h-12 rounded-2xl border-white bg-brand-soft/80 px-4"
              />
            </Field>

            <Field label="Jenis kelamin" error={errors.jenisKelamin}>
              <Select
                value={values.jenisKelamin}
                onValueChange={(value) => updateValue("jenisKelamin", value ?? "")}
              >
                <SelectTrigger className="h-12 w-full rounded-2xl border-white bg-brand-soft/80 px-4">
                  <SelectValue placeholder="Pilih jenis kelamin" />
                </SelectTrigger>
                <SelectContent>
                  {bookingOptions.genders.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field label="No WhatsApp" error={errors.whatsapp}>
              <Input
                value={values.whatsapp}
                onChange={(event) => updateValue("whatsapp", event.target.value)}
                placeholder="08xx xxxx xxxx"
                className="h-12 rounded-2xl border-white bg-brand-soft/80 px-4"
              />
            </Field>
          </div>

          <Separator className="bg-brand-pink/35" />

          <div className="grid gap-5 rounded-[1.8rem] bg-white/72 p-4 ring-1 ring-brand-purple/8 md:grid-cols-2 md:p-5">
            <Field label="Pilih layanan" error={errors.layanan}>
              <Select
                value={values.layanan}
                onValueChange={(value) => updateValue("layanan", value ?? "")}
              >
                <SelectTrigger className="h-12 w-full rounded-2xl border-white bg-brand-soft/80 px-4">
                  <SelectValue placeholder="Pilih layanan" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.id} value={service.packageName}>
                      {service.packageName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field label="Pilih metode" error={errors.metode}>
              <Select
                value={values.metode}
                onValueChange={(value) => updateValue("metode", value ?? "")}
              >
                <SelectTrigger className="h-12 w-full rounded-2xl border-white bg-brand-soft/80 px-4">
                  <SelectValue placeholder="Online / Offline" />
                </SelectTrigger>
                <SelectContent>
                  {bookingOptions.methods.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field label="Pilih tanggal" error={errors.tanggal}>
              <Input
                type="date"
                value={values.tanggal}
                onChange={(event) => updateValue("tanggal", event.target.value)}
                className="h-12 rounded-2xl border-white bg-brand-soft/80 px-4"
              />
            </Field>

            <Field label="Pilih jam" error={errors.jam}>
              <Select
                value={values.jam}
                onValueChange={(value) => updateValue("jam", value ?? "")}
              >
                <SelectTrigger className="h-12 w-full rounded-2xl border-white bg-brand-soft/80 px-4">
                  <SelectValue placeholder="Pilih jam" />
                </SelectTrigger>
                <SelectContent>
                  {bookingOptions.hours.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          </div>

          <Field label="Keluhan singkat" error={errors.keluhan}>
            <Textarea
              value={values.keluhan}
              onChange={(event) => updateValue("keluhan", event.target.value)}
              placeholder="Ceritakan singkat apa yang sedang ingin Anda bicarakan."
              className="min-h-32 rounded-[1.75rem] border-white bg-brand-soft/80 px-4 py-3"
            />
            <p className="text-xs text-muted-foreground">
              Boleh singkat. Tujuannya membantu kami menyiapkan respon awal yang lebih pas.
            </p>
          </Field>

          <div className="rounded-[1.75rem] bg-brand-soft p-5">
            <div className="flex gap-3">
              <LockKeyhole className="mt-0.5 size-5 shrink-0 text-brand-purple" />
              <div>
                <p className="font-semibold text-foreground">Kerahasiaan tetap dijaga.</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  Informasi dalam formulir ini digunakan untuk proses booking awal dan
                  ditangani secara aman, profesional, dan penuh empati.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Button
              type="submit"
              size="lg"
              className="h-14 w-full rounded-full border-0 bg-[linear-gradient(135deg,var(--primary),var(--brand-pink))] text-base text-primary-foreground shadow-soft hover:opacity-95"
            >
              <MessageCircleHeart className="size-4" />
              Lanjutkan ke WhatsApp
            </Button>

            {submitted ? (
              <div className="rounded-[1.75rem] border border-brand-purple/18 bg-primary/8 p-5">
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-purple" />
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">Data booking siap dikirim.</p>
                    <p className="text-sm leading-6 text-muted-foreground">
                      Anda akan diarahkan ke WhatsApp dalam beberapa detik. Bila tidak
                      berpindah otomatis, gunakan tombol di bawah.
                    </p>
                    <a
                      href={redirectUrl}
                      rel="noreferrer"
                      target="_blank"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "lg" }),
                        "h-11 rounded-full border-brand-purple/20 bg-white px-5"
                      )}
                    >
                      Buka WhatsApp sekarang
                    </a>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </form>
      </CardContent>
    </Card>
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
    <label className="grid gap-2 text-sm font-medium text-foreground">
      <span>{label}</span>
      {children}
      {error ? <p className="text-xs text-destructive">{error}</p> : null}
    </label>
  )
}
