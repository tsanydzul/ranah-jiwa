/**
 * Airtable data fetcher — build-time / ISR.
 *
 * Reads from Airtable when AIRTABLE_BASE_ID + AIRTABLE_API_KEY are set.
 * Falls back to empty on any error — callers should provide static defaults.
 *
 * Tables expected (user creates these in Airtable):
 *   Layanan   — fields: ID, NamaPaket, Judul, Ringkasan, Deskripsi, Poin, Durasi, Output, Biaya, Catatan, LabelCTA, Aktif
 *   Seminar   — fields: Judul, Subjudul, Audiens, Tanggal, Waktu, Harga, Deskripsi, Poster, Aktif
 *   Buku      — fields: Judul, Subjudul, Deskripsi, Sampul, Tahun, Penerbit, LabelCTA, LinkCTA, Aktif
 *   Testimoni — fields: Nama, Peran, Kutipan, Aktif
 */

const BASE_ID = process.env.AIRTABLE_BASE_ID
const API_KEY = process.env.AIRTABLE_API_KEY

interface AirtableRecord {
  id: string
  fields: Record<string, unknown>
}

async function fetchTable(tableName: string): Promise<AirtableRecord[]> {
  if (!BASE_ID || !API_KEY) return []

  const url =
    `https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(tableName)}` +
    `?maxRecords=100&filterByFormula={Aktif}=1`

  try {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${API_KEY}` },
      next: { revalidate: 300 },
    })

    if (!res.ok) {
      console.warn(`[airtable] ${tableName}: HTTP ${res.status}`)
      return []
    }

    const data = await res.json()
    return data.records as AirtableRecord[]
  } catch (err) {
    console.warn(`[airtable] ${tableName}: fetch failed`, err)
    return []
  }
}

/** Split a long-text field into non-empty lines. */
function lines(field: unknown): string[] {
  if (!field) return []
  if (Array.isArray(field)) return field.map(String).filter(Boolean)
  return String(field)
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean)
}

/**
 * Resolve an ImageBB URL to a direct image URL.
 * - If already a direct i.ibb.co URL, return as-is.
 * - If a share page (ibb.co/xxx), fetch the page and extract og:image.
 */
async function resolveImageUrl(url: string): Promise<string> {
  if (!url) return ""
  if (url.includes("i.ibb.co")) return url

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 5000)

  try {
    const pageUrl = url.startsWith("//") ? `https:${url}` : url
    const res = await fetch(pageUrl, {
      headers: { "User-Agent": "Mozilla/5.0" },
      signal: controller.signal,
      next: { revalidate: 86400 },
    })
    clearTimeout(timeout)
    if (!res.ok) return url
    const html = await res.text()
    const match = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i)
      || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i)
      || html.match(/<link[^>]+rel=["']image_src["'][^>]+href=["']([^"']+)["']/i)
    if (match?.[1]) {
      const resolved = match[1].startsWith("//") ? `https:${match[1]}` : match[1]
      return resolved
    }
  } catch {
    clearTimeout(timeout)
  }
  return url
}

// ── Typed fetchers ──────────────────────────────────────────────

export interface AirtableService {
  id: string
  packageName: string
  title: string
  summary: string
  description: string
  bullets: string[]
  duration: string
  outputs: string[]
  fee: string
  serviceNotes: string[]
  ctaLabel: string
}

export async function fetchServices(): Promise<AirtableService[]> {
  const rows = await fetchTable("Layanan")
  return rows.map((r) => ({
    id: String(r.fields.ID ?? ""),
    packageName: String(r.fields.NamaPaket ?? ""),
    title: String(r.fields.Judul ?? ""),
    summary: String(r.fields.Ringkasan ?? ""),
    description: String(r.fields.Deskripsi ?? ""),
    bullets: lines(r.fields.Poin),
    duration: String(r.fields.Durasi ?? ""),
    outputs: lines(r.fields.Output),
    fee: String(r.fields.Biaya ?? ""),
    serviceNotes: lines(r.fields.Catatan),
    ctaLabel: String(r.fields.LabelCTA ?? ""),
  }))
}

export interface AirtableSeminar {
  title: string
  subtitle: string
  audience: string
  date: string
  time: string
  price: string
  description: string
  poster: string
}

export async function fetchSeminars(): Promise<AirtableSeminar[]> {
  const rows = await fetchTable("Seminar")
  const seminars = await Promise.all(
    rows.map(async (r) => ({
      title: String(r.fields.Judul ?? ""),
      subtitle: String(r.fields.Subjudul ?? ""),
      audience: String(r.fields.Audiens ?? ""),
      date: String(r.fields.Tanggal ?? ""),
      time: String(r.fields.Waktu ?? ""),
      price: String(r.fields.Harga ?? ""),
      description: String(r.fields.Deskripsi ?? ""),
      poster: await resolveImageUrl(String(r.fields.Poster ?? "")),
    }))
  )
  return seminars
}

export interface AirtableBook {
  title: string
  subtitle: string
  description: string
  cover: string
  year: string
  publisher: string
  ctaLabel: string
  ctaHref: string
}

export async function fetchBooks(): Promise<AirtableBook[]> {
  const rows = await fetchTable("Buku")
  const books = await Promise.all(
    rows.map(async (r) => ({
      title: String(r.fields.Judul ?? ""),
      subtitle: String(r.fields.Subjudul ?? ""),
      description: String(r.fields.Deskripsi ?? ""),
      cover: await resolveImageUrl(String(r.fields.Sampul ?? "")),
      year: String(r.fields.Tahun ?? ""),
      publisher: String(r.fields.Penerbit ?? ""),
      ctaLabel: String(r.fields.LabelCTA ?? ""),
      ctaHref: String(r.fields.LinkCTA ?? ""),
    }))
  )
  return books
}

export interface AirtableTestimonial {
  name: string
  role: string
  quote: string
}

export async function fetchTestimonials(): Promise<AirtableTestimonial[]> {
  const rows = await fetchTable("Testimoni")
  return rows.map((r) => ({
    name: String(r.fields.Nama ?? ""),
    role: String(r.fields.Peran ?? ""),
    quote: String(r.fields.Kutipan ?? ""),
  }))
}
