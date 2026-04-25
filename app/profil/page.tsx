import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  GraduationCap,
  HeartHandshake,
  Medal,
  MessageCircleHeart,
  Sparkles,
  UsersRound,
} from "lucide-react"

import { SectionHeading, SiteSection } from "@/components/site/section"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { assetRefs, profileContent, profilePageContent } from "@/lib/site-content"
import { cn } from "@/lib/utils"
import { buildInquiryMessage, buildWhatsAppUrl } from "@/lib/whatsapp"

export const metadata: Metadata = {
  title: "Profil Arina Nurul Badriyah, S.Psi., Psikolog",
  description:
    "Profil Arina Nurul Badriyah, S.Psi., Psikolog, beserta pendidikan, pengalaman, sertifikasi, dan cara memulai langkah pertama.",
  alternates: {
    canonical: "/profil",
  },
  openGraph: {
    title: "Profil Arina Nurul Badriyah, S.Psi., Psikolog | Ranah Jiwa",
    description:
      "Kenali profil Arina Nurul Badriyah, S.Psi., Psikolog, beserta pendidikan, pengalaman, dan sertifikasi di Ranah Jiwa.",
    url: "/profil",
  },
}

const focusIcons = [HeartHandshake, Sparkles, UsersRound]

export default function ProfilePage() {
  const whatsappHref = buildWhatsAppUrl(buildInquiryMessage("profil dan konsultasi"))

  return (
    <div className="space-y-18 py-8 md:space-y-24 md:py-12">
      <SiteSection className="section-wash">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="mx-auto w-full max-w-md">
            <div className="relative">
              <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-brand-pink/40 blur-3xl" />
              <div className="absolute -right-8 -bottom-8 h-40 w-40 rounded-full bg-brand-sage/40 blur-3xl" />
              <div className="relative overflow-hidden bg-brand-soft p-4 editorial-frame shadow-soft">
                <Image
                  src={assetRefs.mainHero}
                  alt={profileContent.name}
                  width={2773}
                  height={4160}
                  priority
                  className="editorial-frame h-auto w-full object-cover object-top"
                />
              </div>
            </div>

            <div className="paper-tag -mt-10 ml-auto max-w-[16rem] rounded-[1.8rem] p-4">
              <p className="text-xs font-semibold tracking-[0.22em] text-brand-purple uppercase">
                Ranah Jiwa
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Psikologi yang hangat dan profesional untuk anak, remaja, dan dewasa.
              </p>
            </div>
          </div>

          <div className="space-y-6 lg:text-left">
            <Badge className="rounded-full bg-primary/12 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-primary uppercase hover:bg-primary/12">
              {profilePageContent.heroBadge}
            </Badge>
            <div className="space-y-3">
              <h1 className="max-w-4xl font-heading text-5xl leading-[0.98] font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl">
                {profilePageContent.heroTitle}
              </h1>
              <p className="text-lg text-brand-purple md:text-xl">{profileContent.name}</p>
            </div>
            <div className="max-w-3xl space-y-4 text-base leading-8 text-muted-foreground">
              {profileContent.longIntro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {profilePageContent.trustCards.map((item) => (
                <Card
                  key={item.title}
                  className="hover-lift rounded-[1.8rem] border border-white/70 bg-white/84 shadow-soft"
                >
                  <CardContent className="space-y-3 p-5 text-left">
                    <p className="font-heading text-lg font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="text-sm leading-6 text-muted-foreground">{item.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                rel="noreferrer"
                target="_blank"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 rounded-full border-0 bg-whatsapp px-6 text-base text-white shadow-[0_20px_44px_rgba(37,211,102,0.28)] hover:bg-whatsapp/90"
                )}
              >
                <MessageCircleHeart className="size-4" />
                Tanya via WhatsApp
              </a>
              <Link
                href="/booking"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 rounded-full border-white/70 bg-white/84 px-6 text-base shadow-soft"
                )}
              >
                Booking
              </Link>
            </div>
          </div>
        </div>
      </SiteSection>

      <SiteSection className="section-wash">
        <SectionHeading
          eyebrow={profilePageContent.qualification.eyebrow}
          title={profilePageContent.qualification.title}
          description={profilePageContent.qualification.description}
        />

        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <Card className="rounded-[2.3rem] border border-white/70 bg-white/84 shadow-soft">
            <CardContent className="space-y-8 p-6 md:p-8">
              <div>
                <CardTitle className="font-heading text-2xl font-semibold">
                  Riwayat pendidikan
                </CardTitle>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Riwayat pendidikan dan pengalaman profesional.
                </p>
              </div>

              <div className="relative ml-2 border-l border-brand-purple/20 pl-6">
                {profileContent.education.map((item, index) => (
                  <TimelineCard
                    key={item}
                    title={item}
                    eyebrow="Academic history"
                    icon={GraduationCap}
                    tone={index % 2 === 0 ? "purple" : "sage"}
                  />
                ))}
                {profileContent.experience.map((item, index) => (
                  <TimelineCard
                    key={item}
                    title={item}
                    eyebrow="Professional journey"
                    icon={Sparkles}
                    tone={index % 2 === 0 ? "pink" : "purple"}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6">
            <Card className="rounded-[2.3rem] border border-white/70 bg-white/84 shadow-soft">
              <CardContent className="space-y-5 p-6 md:p-8">
                <div>
                  <CardTitle className="font-heading text-2xl font-semibold">
                    Area fokus
                  </CardTitle>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Pendampingan untuk anak, remaja, dan dewasa.
                  </p>
                </div>
                <div className="grid gap-4">
                  {profileContent.focusAreas.map((item, index) => {
                    const Icon = focusIcons[index]

                    return (
                      <div key={item} className="rounded-[1.8rem] bg-brand-soft/85 p-5">
                        <div className="flex items-start gap-4">
                          <span className="inline-flex size-11 items-center justify-center rounded-full bg-white text-brand-purple shadow-soft">
                            <Icon className="size-5" />
                          </span>
                          <div>
                            <p className="font-semibold text-foreground">{item}</p>
                            <p className="mt-1 text-sm leading-6 text-muted-foreground">
                              {item === "Anak" &&
                                "Pendampingan awal yang lembut untuk memahami tumbuh kembang dan kebutuhan emosi anak."}
                              {item === "Remaja" &&
                                "Ruang aman untuk dinamika identitas, relasi, dan perubahan emosi di masa remaja."}
                              {item === "Dewasa" &&
                                "Pendampingan untuk relasi, pekerjaan, pemulihan batin, dan proses bertumbuh yang lebih stabil."}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2.3rem] border border-white/70 bg-white/84 shadow-soft">
              <CardContent className="space-y-5 p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-primary/12 text-primary">
                    <Medal className="size-5" />
                  </span>
                  <div>
                    <CardTitle className="font-heading text-2xl font-semibold">
                      Sertifikasi
                    </CardTitle>
                    <p className="text-sm leading-6 text-muted-foreground">
                      Bukti pengembangan kompetensi yang relevan dengan praktik.
                    </p>
                  </div>
                </div>
                {profileContent.certifications.map((item) => (
                  <div key={item.title} className="rounded-[1.8rem] bg-brand-soft/85 p-5">
                    <p className="font-semibold leading-7 text-foreground">{item.title}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </SiteSection>

      <SiteSection className="section-wash pb-4">
        <Card className="rounded-[2.4rem] border border-white/70 bg-organic-panel soft-outline">
          <CardContent className="grid gap-6 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div className="space-y-3">
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground">
                {profilePageContent.finalCta.title}
              </h2>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground">
                {profilePageContent.finalCta.description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                rel="noreferrer"
                target="_blank"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 rounded-full border-0 bg-[linear-gradient(135deg,var(--primary),var(--brand-pink))] px-6 text-base text-primary-foreground"
                )}
              >
                {profilePageContent.finalCta.primaryLabel}
                <ArrowRight className="size-4" />
              </a>
              <Link
                href="/booking"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 rounded-full border-white/80 bg-white/88 px-6 text-base"
                )}
              >
                {profilePageContent.finalCta.secondaryLabel}
              </Link>
            </div>
          </CardContent>
        </Card>
      </SiteSection>
    </div>
  )
}

function TimelineCard({
  title,
  eyebrow,
  icon: Icon,
  tone,
}: {
  title: string
  eyebrow: string
  icon: typeof GraduationCap
  tone: "purple" | "pink" | "sage"
}) {
  const toneMap = {
    purple: "bg-primary",
    pink: "bg-brand-pink",
    sage: "bg-brand-sage",
  }

  return (
    <div className="relative pb-5 last:pb-0">
      <span
        className={cn(
          "absolute -left-[2.08rem] top-7 h-4 w-4 rounded-full border-4 border-background",
          toneMap[tone]
        )}
      />
      <div className="rounded-[1.8rem] bg-brand-soft/88 p-5 shadow-soft">
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.24em] text-brand-purple uppercase">
          <Icon className="size-4" />
          {eyebrow}
        </div>
        <p className="text-base leading-7 text-foreground">{title}</p>
      </div>
    </div>
  )
}
