import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpenText, MessageCircleHeart } from "lucide-react"

import { SectionHeading, SiteSection } from "@/components/site/section"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { books, productsPageContent, seminars } from "@/lib/site-content"
import { cn } from "@/lib/utils"
import { buildInquiryMessage, buildWhatsAppUrl } from "@/lib/whatsapp"

export const metadata: Metadata = {
  title: "Produk",
  description:
    "Halaman produk Ranah Jiwa untuk menyimpan karya buku dan seminar yang telah diisi dalam satu arsip yang rapi.",
}

export default function ProductsPage() {
  const consultationHref = buildWhatsAppUrl(buildInquiryMessage("produk, buku, atau seminar"))

  return (
    <div className="space-y-18 py-8 md:space-y-24 md:py-12">
      <SiteSection className="section-wash">
        <Card className="rounded-[2.6rem] border border-white/70 bg-organic-panel soft-outline">
          <CardContent className="grid gap-8 p-6 md:p-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-end">
            <div className="space-y-5">
              <Badge className="w-fit rounded-full bg-primary/12 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-primary uppercase hover:bg-primary/12">
                {productsPageContent.hero.badge}
              </Badge>
              <h1 className="max-w-4xl text-5xl leading-[0.98] font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl">
                {productsPageContent.hero.title}
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                {productsPageContent.hero.description}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {productsPageContent.hero.quickStats.map((item) => (
                <div
                  key={item.title + item.body}
                  className="paper-panel rounded-[1.8rem] p-5 shadow-soft"
                >
                  <p className="font-heading text-3xl leading-none font-semibold text-foreground">
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
        <SectionHeading
          eyebrow={productsPageContent.books.eyebrow}
          title={productsPageContent.books.title}
          description={productsPageContent.books.description}
        />

        {books.length ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {books.map((book) => (
              <Card
                key={book.title}
                className="hover-lift rounded-[2rem] border border-white/70 bg-white/84 shadow-soft"
              >
                <CardContent className="space-y-5 p-5">
                  {book.cover ? (
                    <div className="overflow-hidden rounded-[1.7rem] bg-brand-soft p-3">
                      <Image
                        src={book.cover}
                        alt={book.title}
                        width={900}
                        height={1200}
                        className="h-[20rem] w-full rounded-[1.2rem] object-cover"
                      />
                    </div>
                  ) : (
                    <div className="paper-panel flex h-[20rem] items-center justify-center rounded-[1.7rem] p-6 text-center">
                      <div className="space-y-3">
                        <span className="inline-flex size-14 items-center justify-center rounded-full bg-white text-brand-purple shadow-soft">
                          <BookOpenText className="size-7" />
                        </span>
                        <p className="font-heading text-3xl leading-none font-semibold text-foreground">
                          {book.title}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <CardTitle className="text-3xl leading-none font-semibold">
                      {book.title}
                    </CardTitle>
                    {book.subtitle ? (
                      <p className="text-sm leading-6 text-brand-purple">{book.subtitle}</p>
                    ) : null}
                  </div>

                  <p className="text-sm leading-7 text-muted-foreground">{book.description}</p>

                  {(book.year || book.publisher) ? (
                    <div className="grid gap-3 sm:grid-cols-2">
                      {book.year ? (
                        <div className="rounded-[1.4rem] bg-brand-soft/82 p-4 text-sm text-muted-foreground">
                          <p className="text-xs font-semibold tracking-[0.18em] text-brand-purple uppercase">
                            Tahun
                          </p>
                          <p className="mt-2 text-foreground">{book.year}</p>
                        </div>
                      ) : null}
                      {book.publisher ? (
                        <div className="rounded-[1.4rem] bg-brand-soft/82 p-4 text-sm text-muted-foreground">
                          <p className="text-xs font-semibold tracking-[0.18em] text-brand-purple uppercase">
                            Penerbit
                          </p>
                          <p className="mt-2 text-foreground">{book.publisher}</p>
                        </div>
                      ) : null}
                    </div>
                  ) : null}

                  {book.ctaHref && book.ctaLabel ? (
                    <a
                      href={book.ctaHref}
                      className={cn(
                        buttonVariants({ variant: "outline", size: "lg" }),
                        "h-11 rounded-full border-white/70 bg-white px-5"
                      )}
                    >
                      {book.ctaLabel}
                    </a>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="rounded-[2.2rem] border border-dashed border-brand-purple/22 bg-white/82 shadow-soft">
            <CardContent className="grid gap-6 p-6 md:grid-cols-[auto_1fr] md:items-center md:p-8">
              <span className="inline-flex size-16 items-center justify-center rounded-full bg-brand-soft text-brand-purple shadow-soft">
                <BookOpenText className="size-8" />
              </span>
              <div className="space-y-2">
                <h2 className="font-heading text-4xl leading-none font-semibold text-foreground">
                  {productsPageContent.books.emptyTitle}
                </h2>
                <p className="max-w-2xl text-base leading-7 text-muted-foreground">
                  {productsPageContent.books.emptyBody}
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </SiteSection>

      <SiteSection className="section-wash">
        <SectionHeading
          eyebrow={productsPageContent.seminars.eyebrow}
          title={productsPageContent.seminars.title}
          description={productsPageContent.seminars.description}
        />
        <div className="grid gap-5">
          {seminars.map((seminar, index) => (
            <Card
              key={seminar.title}
              className="hover-lift rounded-[2.35rem] border border-white/70 bg-white/84 shadow-soft"
            >
              <CardContent className="grid gap-5 p-5 md:p-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                <div className="overflow-hidden rounded-[1.9rem] bg-brand-soft p-3">
                  <Image
                    src={seminar.poster}
                    alt={seminar.title}
                    width={800}
                    height={800}
                    className="h-full w-full rounded-[1.35rem] object-cover"
                  />
                </div>

                <div className="space-y-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="glass-pill rounded-full px-4 py-2 text-xs font-semibold tracking-[0.16em] text-brand-purple uppercase">
                      Seminar 0{index + 1}
                    </span>
                    <span className="glass-pill rounded-full px-4 py-2 text-xs font-semibold tracking-[0.16em] text-brand-purple uppercase">
                      {seminar.audience}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <CardTitle className="text-4xl leading-none font-semibold">
                      {seminar.title}
                    </CardTitle>
                    <p className="text-base leading-7 text-brand-purple">{seminar.subtitle}</p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <MetaBlock label="Tanggal" value={seminar.date} />
                    <MetaBlock label="Waktu" value={seminar.time} />
                    <MetaBlock label="Info" value={seminar.price} />
                  </div>

                  <p className="text-sm leading-7 text-muted-foreground">{seminar.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SiteSection>

      <SiteSection className="section-wash pb-4">
        <Card className="rounded-[2.5rem] border border-white/70 bg-organic-panel soft-outline">
          <CardContent className="grid gap-6 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div className="space-y-3">
              <h2 className="font-heading text-4xl leading-none font-semibold text-foreground md:text-5xl">
                {productsPageContent.finalCta.title}
              </h2>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground">
                {productsPageContent.finalCta.description}
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
                <MessageCircleHeart className="size-4" />
                {productsPageContent.finalCta.primaryLabel}
              </a>
              <Link
                href="/layanan"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 rounded-full border-white/80 bg-white/88 px-6 text-base"
                )}
              >
                {productsPageContent.finalCta.secondaryLabel}
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </CardContent>
        </Card>
      </SiteSection>
    </div>
  )
}

function MetaBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.4rem] bg-brand-soft/82 p-4 text-sm text-muted-foreground">
      <p className="text-xs font-semibold tracking-[0.18em] text-brand-purple uppercase">
        {label}
      </p>
      <p className="mt-2 text-foreground">{value}</p>
    </div>
  )
}
