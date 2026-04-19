import type { Metadata } from "next"
import { Suspense } from "react"
import { MessageCircleHeart, ShieldCheck } from "lucide-react"

import { BookingForm } from "@/components/site/booking-form"
import { SectionHeading, SiteSection } from "@/components/site/section"
import { Card, CardContent } from "@/components/ui/card"
import { bookingPageContent, siteConfig } from "@/lib/site-content"

export const metadata: Metadata = {
  title: "Booking",
  description:
    "Isi data booking Ranah Jiwa, pilih layanan dan jadwal, lalu lanjut otomatis ke WhatsApp.",
}

export default function BookingPage() {
  return (
    <div className="py-8 md:py-12">
      <SiteSection className="section-wash">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <Card className="rounded-[2.3rem] border border-white/70 bg-organic-panel soft-outline">
              <CardContent className="space-y-6 p-6 md:p-8">
                <SectionHeading
                  eyebrow={bookingPageContent.eyebrow}
                  title={bookingPageContent.title}
                  description={bookingPageContent.description}
                />
                <div className="grid gap-3">
                  <TrustCard
                    icon={<MessageCircleHeart className="size-4 text-whatsapp" />}
                    title="Langsung ke WhatsApp"
                    body="Setelah form dikirim, pesan booking otomatis sudah siap tanpa perlu tulis ulang."
                  />
                  {siteConfig.privacyPoints.slice(0, 2).map((point) => (
                    <TrustCard
                      key={point}
                      icon={<ShieldCheck className="size-4 text-brand-purple" />}
                      title="Privasi dijaga"
                      body={point}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2.3rem] border border-white/70 bg-white/86 shadow-soft">
              <CardContent className="space-y-4 p-6">
                <p className="text-xs font-semibold tracking-[0.22em] text-brand-purple uppercase">
                  Alur singkat
                </p>
                {[
                  "Isi data inti seperlunya.",
                  "Pilih layanan, metode, tanggal, dan jam.",
                  "Lanjut otomatis ke WhatsApp untuk konfirmasi.",
                ].map((item, index) => (
                  <div key={item} className="flex gap-3 rounded-[1.4rem] bg-brand-soft/72 p-4">
                    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-brand-purple shadow-soft">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-6 text-muted-foreground">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div>
            <Suspense fallback={<BookingFormFallback />}>
              <BookingForm />
            </Suspense>
          </div>
        </div>
      </SiteSection>
    </div>
  )
}

function BookingFormFallback() {
  return (
    <Card className="rounded-[2rem] border border-white/70 bg-white/86 shadow-soft">
      <CardContent className="p-6 text-sm text-muted-foreground sm:p-8">
        Menyiapkan form booking...
      </CardContent>
    </Card>
  )
}

function TrustCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode
  title: string
  body: string
}) {
  return (
    <div className="rounded-[1.7rem] bg-white/78 p-4 shadow-soft">
      <div className="flex items-start gap-3">
        <span className="inline-flex size-9 items-center justify-center rounded-full bg-brand-soft">
          {icon}
        </span>
        <div className="space-y-1">
          <p className="font-semibold text-foreground">{title}</p>
          <p className="text-sm leading-6 text-muted-foreground">{body}</p>
        </div>
      </div>
    </div>
  )
}
