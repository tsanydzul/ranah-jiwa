import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Brain,
  CalendarDays,
  ChevronDown,
  ClipboardCheck,
  HeartHandshake,
  MessageCircleHeart,
  NotebookTabs,
  Sparkles,
  UsersRound,
  type LucideIcon,
} from "lucide-react"

import { SectionHeading, SiteSection } from "@/components/site/section"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { serviceNotes, services, servicesPageContent } from "@/lib/site-content"
import { cn } from "@/lib/utils"
import { buildBookingPath, buildInquiryMessage, buildWhatsAppUrl } from "@/lib/whatsapp"

export const metadata: Metadata = {
  title: "Layanan Psikologi",
  description:
    "Lihat layanan psikologi Ranah Jiwa, mulai dari mental health check up, konseling, asesmen psikologis, hingga psikoedukasi dan seminar.",
  alternates: {
    canonical: "/layanan",
  },
  openGraph: {
    title: "Layanan Psikologi | Ranah Jiwa",
    description:
      "Lihat layanan psikologi Ranah Jiwa, mulai dari mental health check up, konseling, asesmen psikologis, hingga psikoedukasi dan seminar.",
    url: "/layanan",
  },
}

const iconMap: Record<string, LucideIcon> = {
  annafisa: Brain,
  assyifa: Sparkles,
  assakinah: HeartHandshake,
  attarbiyah: NotebookTabs,
  "al-aqila": ClipboardCheck,
  "al-ilmaa": UsersRound,
}

export default function ServicesPage() {
  const consultationHref = buildWhatsAppUrl(buildInquiryMessage("layanan yang paling sesuai"))

  return (
    <div className="space-y-18 py-8 md:space-y-24 md:py-12">
      <SiteSection className="section-wash">
        <Card className="rounded-[2.5rem] border border-white/70 bg-organic-panel soft-outline">
          <CardContent className="grid gap-8 p-6 md:p-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <div className="space-y-5">
              <Badge className="w-fit rounded-full bg-primary/12 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-primary uppercase hover:bg-primary/12">
                {servicesPageContent.hero.badge}
              </Badge>
              <h1 className="font-heading text-4xl leading-tight font-semibold tracking-tight text-foreground md:text-6xl md:leading-[1.04]">
                {servicesPageContent.hero.title}
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                {servicesPageContent.hero.description}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {servicesPageContent.hero.quickStats.map((item) => (
                <div
                  key={item.title}
                  className="hover-lift rounded-[1.8rem] bg-white/84 p-5 shadow-soft"
                >
                  <p className="font-heading text-2xl font-semibold text-foreground">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </SiteSection>

      <SiteSection className="section-wash">
        <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`#${service.id}`}
              className="glass-pill inline-flex shrink-0 items-center rounded-full px-4 py-2 text-sm font-semibold text-foreground"
            >
              {service.packageName}
            </Link>
          ))}
        </div>
      </SiteSection>

      <SiteSection className="section-wash">
        <div className="grid gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.id]
            const whatsappHref = buildWhatsAppUrl(
              buildInquiryMessage(`paket ${service.packageName}`)
            )

            return (
              <Card
                key={service.id}
                id={service.id}
                className="hover-lift scroll-mt-28 rounded-[2.3rem] border border-white/70 bg-white/84 shadow-soft"
              >
                <CardContent className="grid gap-4 p-4 sm:p-5 md:gap-6 md:p-8 lg:grid-cols-[0.72fr_0.28fr]">
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary/12 text-primary">
                        <Icon className="size-5" />
                      </span>
                      <div className="space-y-1">
                        <p className="text-xs font-semibold tracking-[0.26em] text-brand-purple uppercase">
                          {service.packageName}
                        </p>
                        <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                          {service.title}
                        </h2>
                        <p className="text-sm leading-6 text-brand-purple">{service.summary}</p>
                        <div className="flex flex-wrap gap-2 pt-2 lg:hidden">
                          <span className="glass-pill rounded-full px-3 py-1 text-xs font-semibold text-foreground">
                            {service.duration}
                          </span>
                          <span className="glass-pill rounded-full px-3 py-1 text-xs font-semibold text-foreground">
                            {service.fee}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="hidden space-y-5 md:block">
                      <p className="max-w-3xl text-base leading-7 text-muted-foreground">
                        {service.description}
                      </p>

                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-foreground">Isi layanan</p>
                        <div className="grid gap-3">
                          {service.bullets.map((item) => (
                            <div
                              key={item}
                              className="rounded-[1.5rem] bg-brand-soft/85 p-4 text-sm leading-6 text-muted-foreground"
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      {service.outputs?.length ? (
                        <div className="space-y-3">
                          <p className="text-sm font-semibold text-foreground">Output</p>
                          <div className="grid gap-3 sm:grid-cols-2">
                            {service.outputs.map((item) => (
                              <div
                                key={item}
                                className="rounded-[1.5rem] bg-white/82 p-4 text-sm leading-6 text-muted-foreground shadow-[inset_0_0_0_1px_rgba(103,86,141,0.08)]"
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : null}

                      {service.serviceNotes?.length ? (
                        <div className="space-y-3">
                          <p className="text-sm font-semibold text-foreground">Catatan paket</p>
                          <div className="grid gap-3">
                            {service.serviceNotes.map((item) => (
                              <div
                                key={item}
                                className="rounded-[1.5rem] border border-brand-purple/12 bg-white p-4 text-sm leading-6 text-muted-foreground"
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>

                    <details className="group rounded-[1.6rem] bg-brand-soft/75 md:hidden">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-foreground">
                        <span>Lihat detail layanan</span>
                        <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="space-y-4 px-4 pb-4 pt-1">
                        <p className="text-sm leading-6 text-muted-foreground">
                          {service.description}
                        </p>

                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-foreground">Isi layanan</p>
                          <div className="grid gap-2">
                            {service.bullets.map((item) => (
                              <div
                                key={item}
                                className="rounded-[1.2rem] bg-white/82 p-3 text-sm leading-6 text-muted-foreground"
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>

                        {service.outputs?.length ? (
                          <div className="space-y-2">
                            <p className="text-sm font-semibold text-foreground">Output</p>
                            <div className="grid gap-2">
                              {service.outputs.map((item) => (
                                <div
                                  key={item}
                                  className="rounded-[1.2rem] bg-white/82 p-3 text-sm leading-6 text-muted-foreground"
                                >
                                  {item}
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : null}

                        {service.serviceNotes?.length ? (
                          <div className="space-y-2">
                            <p className="text-sm font-semibold text-foreground">Catatan paket</p>
                            <div className="grid gap-2">
                              {service.serviceNotes.map((item) => (
                                <div
                                  key={item}
                                  className="rounded-[1.2rem] border border-brand-purple/12 bg-white p-3 text-sm leading-6 text-muted-foreground"
                                >
                                  {item}
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </details>
                  </div>

                  <div className="order-first flex h-full flex-col rounded-[1.6rem] bg-brand-soft/92 p-4 lg:order-none lg:sticky lg:top-28 lg:rounded-[1.8rem] lg:p-5">
                    <p className="font-heading text-xl font-semibold text-foreground">
                      Ringkasan
                    </p>
                    <div className="mt-4 grid grid-cols-3 gap-3 text-sm leading-6 text-muted-foreground lg:mt-5 lg:grid-cols-1 lg:gap-4">
                      <ServiceMeta label="Paket" value={service.packageName} />
                      <ServiceMeta label="Durasi" value={service.duration} />
                      <ServiceMeta label="Fee" value={service.fee} />
                    </div>

                    <div className="mt-4 flex flex-col gap-2 pt-1 lg:mt-auto lg:gap-3 lg:pt-6">
                      <Link
                        href={buildBookingPath(service.packageName)}
                        className={cn(
                          buttonVariants({ size: "lg" }),
                          "h-11 rounded-full border-0 bg-[linear-gradient(135deg,var(--primary),var(--brand-pink))] text-sm text-primary-foreground lg:h-12 lg:text-base"
                        )}
                      >
                        <CalendarDays className="size-4" />
                        {service.ctaLabel}
                      </Link>
                      <a
                        href={whatsappHref}
                        rel="noreferrer"
                        target="_blank"
                        className={cn(
                          buttonVariants({ variant: "outline", size: "lg" }),
                          "h-11 rounded-full border-white/80 bg-white text-sm lg:h-12 lg:text-base"
                        )}
                      >
                        <MessageCircleHeart className="size-4" />
                        Hubungi via WhatsApp
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </SiteSection>

      <SiteSection className="section-wash">
        <Card className="rounded-[2.3rem] border border-white/70 bg-white/84 shadow-soft">
          <CardContent className="space-y-5 p-6 md:p-8">
            <SectionHeading
              eyebrow={servicesPageContent.notes.eyebrow}
              title={servicesPageContent.notes.title}
              description={servicesPageContent.notes.description}
            />
            <div className="grid gap-3 md:grid-cols-2">
              {serviceNotes.map((note) => (
                <div
                  key={note}
                  className="rounded-[1.6rem] bg-brand-soft/85 p-4 text-sm leading-6 text-muted-foreground"
                >
                  {note}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </SiteSection>

      <SiteSection className="section-wash pb-4">
        <Card className="rounded-[2.4rem] border border-white/70 bg-organic-panel soft-outline">
          <CardContent className="grid gap-6 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-full bg-primary/12 text-primary">
                  <ClipboardCheck className="size-5" />
                </span>
                <p className="font-heading text-3xl font-semibold tracking-tight text-foreground">
                  {servicesPageContent.helpCta.title}
                </p>
              </div>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground">
                {servicesPageContent.helpCta.description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={consultationHref}
                rel="noreferrer"
                target="_blank"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 rounded-full border-0 bg-whatsapp px-6 text-base text-white shadow-[0_20px_44px_rgba(37,211,102,0.28)] hover:bg-whatsapp/90"
                )}
              >
                {servicesPageContent.helpCta.primaryLabel}
                <ArrowRight className="size-4" />
              </a>
              <Link
                href="/booking"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 rounded-full border-white/80 bg-white/88 px-6 text-base"
                )}
              >
                {servicesPageContent.helpCta.secondaryLabel}
              </Link>
            </div>
          </CardContent>
        </Card>
      </SiteSection>
    </div>
  )
}

function ServiceMeta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-[0.18em] text-brand-purple uppercase lg:text-sm lg:tracking-normal lg:text-foreground lg:uppercase-none">
        {label}
      </p>
      <p>{value}</p>
    </div>
  )
}
