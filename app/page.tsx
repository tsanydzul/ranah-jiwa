import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Brain,
  CalendarDays,
  GraduationCap,
  HeartHandshake,
  MessageCircleHeart,
  NotebookTabs,
  ShieldCheck,
  Sparkles,
  Star,
  UsersRound,
  type LucideIcon,
} from "lucide-react"

import { SectionHeading, SiteSection } from "@/components/site/section"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  assetRefs,
  books,
  homeContent,
  profileContent,
  profilePageContent,
  productsPageContent,
  services,
  siteConfig,
  testimonials,
  trustStats,
} from "@/lib/site-content"
import { cn } from "@/lib/utils"
import { buildBookingPath, buildInquiryMessage, buildWhatsAppUrl } from "@/lib/whatsapp"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Ruang aman untuk memahami diri, melihat layanan Ranah Jiwa, dan memulai langkah pertama lewat WhatsApp atau booking.",
}

const serviceIcons: Record<string, LucideIcon> = {
  annafisa: Brain,
  assyifa: Sparkles,
  assakinah: HeartHandshake,
  attarbiyah: NotebookTabs,
  "al-aqila": CalendarDays,
  "al-ilmaa": UsersRound,
}

export default function HomePage() {
  const consultationHref = buildWhatsAppUrl(buildInquiryMessage("konsultasi"))
  const featuredPromises = [
    "Ruang aman tanpa rasa dihakimi",
    "WhatsApp jadi langkah paling mudah",
    "Pendekatan hangat dan terarah",
  ]

  return (
    <div className="space-y-18 py-8 md:space-y-24 md:py-12">
      <SiteSection className="section-wash">
        <div className="hero-shell hero-shell-flat rounded-[2.7rem] border border-white/70 bg-white/88 px-5 py-6 shadow-soft sm:px-6 md:px-8 md:py-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
            <div className="min-w-0 space-y-6">
              <Badge className="flex w-full max-w-full items-center justify-center rounded-full bg-primary/12 px-4 py-2 text-center text-[10px] leading-4 font-semibold tracking-[0.16em] text-primary uppercase whitespace-normal hover:bg-primary/12 sm:w-fit sm:max-w-fit sm:px-4 sm:text-xs sm:tracking-[0.24em]">
                {homeContent.heroBadge}
              </Badge>

              <div className="space-y-4">
                <h1 className="max-w-3xl text-[3.2rem] leading-[0.98] font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl">
                  {siteConfig.heroHeadline}
                </h1>
                <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                  {siteConfig.heroSubheadline}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {featuredPromises.map((item) => (
                  <span
                    key={item}
                    className="glass-pill inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-center text-[11px] leading-4 font-semibold tracking-[0.14em] text-brand-purple uppercase whitespace-normal sm:w-auto sm:text-xs sm:tracking-[0.16em]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={consultationHref}
                  rel="noreferrer"
                  target="_blank"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-12 w-full rounded-full border-0 bg-[linear-gradient(135deg,var(--primary),var(--brand-pink))] px-6 text-base text-primary-foreground shadow-soft hover:opacity-95 sm:w-auto"
                  )}
                >
                  <MessageCircleHeart className="size-4" />
                  Mulai Konsultasi
                </a>
                <Link
                  href="/layanan"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-12 w-full rounded-full border-white/70 bg-white/78 px-6 text-base shadow-soft sm:w-auto"
                  )}
                >
                  Lihat Layanan
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {trustStats.map((stat) => (
                  <Card
                    key={stat.label}
                    className="hover-lift min-w-0 rounded-[1.75rem] border border-white/70 bg-white/80 shadow-soft"
                  >
                    <CardContent className="space-y-1 p-5">
                      <p className="font-heading text-3xl font-semibold text-primary">
                        {stat.value}
                      </p>
                      <p className="font-medium text-foreground">{stat.label}</p>
                      <p className="text-sm leading-6 text-muted-foreground">{stat.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="relative min-w-0">
              <div className="absolute inset-5 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,rgba(213,191,220,0.55),transparent_45%)] blur-3xl" />
              <Card className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-organic-panel soft-outline">
                <CardContent className="space-y-6 p-4 sm:p-5 md:p-6">
                  <div className="relative overflow-hidden bg-brand-soft p-3 editorial-frame">
                    <Image
                      src={assetRefs.mainHero}
                      alt={profileContent.name}
                      width={2773}
                      height={4160}
                      priority
                      className="editorial-frame h-[24rem] w-full object-cover object-top sm:h-[31rem]"
                    />
                    <div className="paper-tag absolute right-4 bottom-4 max-w-[15rem] rounded-[1.7rem] p-4">
                      <p className="text-xs font-semibold tracking-[0.22em] text-brand-purple uppercase">
                        Pendampingan
                      </p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {homeContent.miniCards[0]?.body}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <p className="font-heading text-3xl leading-none font-semibold text-foreground md:text-4xl">
                        {profileContent.name}
                      </p>
                      <p className="max-w-lg text-sm leading-6 text-muted-foreground">
                        {profileContent.identityCopy}
                      </p>
                    </div>

                    <div className="grid gap-3 md:grid-cols-3">
                      {profilePageContent.trustCards.map((item) => (
                        <div
                          key={item.title}
                          className="paper-panel rounded-[1.5rem] p-4"
                        >
                          <p className="text-xs font-semibold tracking-[0.2em] text-brand-purple uppercase">
                            {item.title}
                          </p>
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            {item.body}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SiteSection>

      <SiteSection className="section-wash">
        <div className="mx-auto max-w-4xl">
          <Card className="rounded-[2.2rem] border border-white/70 bg-white/82 shadow-soft">
            <CardContent className="space-y-6 p-6 md:p-8">
              <SectionHeading
                eyebrow={homeContent.shortProfile.eyebrow}
                title={profileContent.name}
                description={profileContent.shortIntro}
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <InfoTile
                  icon={GraduationCap}
                  title={homeContent.shortProfile.educationTitle}
                  body={profileContent.education.join(" - ")}
                />
                <InfoTile
                  icon={Sparkles}
                  title={homeContent.shortProfile.approachTitle}
                  body={homeContent.shortProfile.approachBody}
                />
              </div>
              <p className="text-base leading-7 text-muted-foreground">
                {profileContent.longIntro[0]}
              </p>
              <Link
                href="/profil"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-11 rounded-full border-white/70 bg-white px-5"
                )}
              >
                {homeContent.shortProfile.ctaLabel}
                <ArrowRight className="size-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </SiteSection>

      <SiteSection className="section-wash">
        <SectionHeading
          eyebrow={homeContent.servicesPreview.eyebrow}
          title={homeContent.servicesPreview.title}
          description={homeContent.servicesPreview.description}
        />
        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.id]

            return (
              <Card
                key={service.id}
                className="hover-lift min-w-[18rem] snap-start rounded-[2rem] border border-white/70 bg-white/84 shadow-soft md:min-w-0"
              >
                <CardContent className="flex h-full flex-col gap-5 p-6">
                  <div className="-mt-1 h-1.5 w-16 rounded-full bg-[linear-gradient(135deg,var(--primary),var(--brand-pink))]" />
                  <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary/12 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <p className="text-xs font-semibold tracking-[0.26em] text-brand-purple uppercase">
                        {service.packageName}
                      </p>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-6 text-muted-foreground">{service.summary}</p>
                  </div>
                  <div className="mt-auto flex flex-col gap-3">
                    <Link
                      href={buildBookingPath(service.packageName)}
                      className={cn(
                        buttonVariants({ size: "lg" }),
                        "h-11 rounded-full border-0 bg-[linear-gradient(135deg,var(--primary),var(--brand-pink))] text-primary-foreground"
                      )}
                    >
                      {service.ctaLabel}
                    </Link>
                    <Link
                      href="/layanan"
                      className="text-sm font-semibold text-brand-purple hover:text-foreground"
                    >
                      {homeContent.servicesPreview.detailLabel}
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </SiteSection>

      <SiteSection className="section-wash">
        <SectionHeading
          eyebrow={homeContent.testimonials.eyebrow}
          title={homeContent.testimonials.title}
          description={homeContent.testimonials.description}
        />
        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
          {testimonials.map((item) => (
            <Card
              key={item.name}
              className="hover-lift min-w-[18rem] snap-start rounded-[2rem] border border-white/70 bg-white/84 shadow-soft md:min-w-0"
            >
              <CardContent className="space-y-5 p-6">
                <div className="flex items-center gap-1 text-brand-purple">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="text-base leading-7 text-muted-foreground">
                  &quot;{item.quote}&quot;
                </p>
                <div>
                  <p className="font-semibold text-foreground">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SiteSection>

      <SiteSection className="section-wash">
        <Card className="rounded-[2.35rem] border border-white/70 bg-white/84 shadow-soft">
          <CardContent className="grid gap-6 p-6 md:grid-cols-[1.02fr_0.98fr] md:p-8">
            <div className="space-y-4">
              <SectionHeading
                eyebrow={homeContent.productsPreview.eyebrow}
                title={homeContent.productsPreview.title}
                description={homeContent.productsPreview.description}
              />
              <Link
                href="/produk"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 rounded-full border-0 bg-[linear-gradient(135deg,var(--primary),var(--brand-pink))] px-6 text-base text-primary-foreground"
                )}
              >
                {homeContent.productsPreview.ctaLabel}
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="paper-panel rounded-[1.7rem] p-5">
                <p className="text-xs font-semibold tracking-[0.18em] text-brand-purple uppercase">
                  Karya buku
                </p>
                <p className="mt-3 font-heading text-4xl leading-none font-semibold text-foreground">
                  {books.length}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {productsPageContent.hero.quickStats[0]?.body}
                </p>
              </div>
              <div className="paper-panel rounded-[1.7rem] p-5">
                <p className="text-xs font-semibold tracking-[0.18em] text-brand-purple uppercase">
                  Seminar
                </p>
                <p className="mt-3 font-heading text-4xl leading-none font-semibold text-foreground">
                  {productsPageContent.hero.quickStats[1]?.title}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {productsPageContent.hero.quickStats[1]?.body}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </SiteSection>

      <SiteSection className="section-wash">
        <Card className="rounded-[2.3rem] border border-white/70 bg-white/84 shadow-soft">
          <CardContent className="space-y-6 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary/12 text-primary">
                <ShieldCheck className="size-5" />
              </span>
              <div className="space-y-2">
                <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
                  {homeContent.privacy.title}
                </h2>
                <p className="max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
                  {homeContent.privacy.description}
                </p>
              </div>
            </div>
            <Separator className="bg-brand-pink/35" />
            <div className="grid gap-3 md:grid-cols-3">
              {siteConfig.privacyPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-[1.6rem] bg-brand-soft/88 p-4 text-sm leading-6 text-muted-foreground"
                >
                  {point}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </SiteSection>

      <SiteSection className="section-wash pb-4">
        <Card className="rounded-[2.6rem] border border-white/70 bg-organic-panel soft-outline">
          <CardContent className="space-y-6 p-8 text-center md:p-12">
            <div className="space-y-3">
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                {homeContent.finalCta.title}
              </h2>
              <p className="mx-auto max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                {homeContent.finalCta.description}
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={consultationHref}
                rel="noreferrer"
                target="_blank"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 rounded-full border-0 bg-whatsapp px-6 text-base text-white shadow-[0_20px_44px_rgba(37,211,102,0.28)] hover:bg-whatsapp/90"
                )}
              >
                <MessageCircleHeart className="size-4" />
                {homeContent.finalCta.primaryLabel}
              </a>
              <Link
                href="/booking"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 rounded-full border-white/80 bg-white/88 px-6 text-base"
                )}
              >
                {homeContent.finalCta.secondaryLabel}
                <CalendarDays className="size-4" />
              </Link>
            </div>
          </CardContent>
        </Card>
      </SiteSection>
    </div>
  )
}

function InfoTile({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof GraduationCap
  title: string
  body: string
}) {
  return (
    <div className="rounded-[1.6rem] bg-brand-soft/85 p-5">
      <span className="inline-flex size-10 items-center justify-center rounded-full bg-white text-brand-purple shadow-soft">
        <Icon className="size-5" />
      </span>
      <p className="mt-4 font-semibold text-foreground">{title}</p>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
    </div>
  )
}
