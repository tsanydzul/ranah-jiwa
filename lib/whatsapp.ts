import { findServiceByPackageName, siteConfig, type BookingFormData } from "@/lib/site-content"

function normalizePhoneNumber(value: string) {
  return value.replace(/\D/g, "")
}

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${normalizePhoneNumber(siteConfig.whatsappNumber)}?text=${encodeURIComponent(message)}`
}

export function buildInquiryMessage(topic: string) {
  return `Halo, saya ingin mengetahui lebih lanjut tentang ${topic} di Ranah Jiwa.`
}

export function buildBookingWhatsAppMessage(data: BookingFormData) {
  return [
    "Halo, saya ingin booking layanan di Ranah Jiwa.",
    "",
    `Nama: ${data.nama}`,
    `Umur: ${data.umur}`,
    `Jenis kelamin: ${data.jenisKelamin}`,
    `Layanan: ${data.layanan}`,
    `Metode: ${data.metode}`,
    `Tanggal: ${data.tanggal}`,
    `Jam: ${data.jam}`,
    `No. WhatsApp: ${data.whatsapp}`,
    `Keluhan singkat: ${data.keluhan || "-"}`,
  ].join("\n")
}

export function buildBookingPath(packageName?: string) {
  const service = findServiceByPackageName(packageName ?? null)

  if (!service) return "/booking"

  return `/booking?service=${encodeURIComponent(service.packageName)}`
}
