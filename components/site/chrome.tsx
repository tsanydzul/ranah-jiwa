"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import {
  AtSign,
  MapPin,
  Menu,
  MessageCircleHeart,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-content"
import { cn } from "@/lib/utils"
import { buildInquiryMessage, buildWhatsAppUrl } from "@/lib/whatsapp"

type SiteChromeProps = {
  children: React.ReactNode
}

export function SiteChrome({ children }: SiteChromeProps) {
  const pathname = usePathname()
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const consultationHref = buildWhatsAppUrl(buildInquiryMessage("konsultasi"))

  return (
    <>
      <div className="sticky top-0 z-50 pt-1 [padding-top:max(env(safe-area-inset-top),0.25rem)] md:pt-0 md:[padding-top:0px]">
        <div className="hidden border-b border-white/55 bg-white/46 backdrop-blur-xl md:block">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-5 py-2 text-[11px] font-semibold tracking-[0.16em] text-brand-purple uppercase sm:px-6 lg:px-8">
            <span>Ruang aman untuk berbagi, refleksi, dan bertumbuh</span>
            <span>{siteConfig.offlineCoverageNote}</span>
          </div>
        </div>
        <header className="border-b border-white/40 bg-background/78 backdrop-blur-2xl md:rounded-none">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="inline-flex size-11 items-center justify-center rounded-full bg-primary/12 text-primary shadow-soft">
              <Sparkles className="size-5" />
            </span>
            <div>
              <p className="font-heading text-lg font-bold tracking-tight text-foreground">
                {siteConfig.brandName}
              </p>
              <p className="text-xs text-muted-foreground">Psikologi hangat, tenang, profesional</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-white/70 bg-white/72 p-1 shadow-soft md:flex">
            {siteConfig.navItems.map((item) => {
              const active = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-semibold tracking-tight transition-colors",
                    active
                      ? "bg-[linear-gradient(135deg,rgba(103,86,141,0.96),rgba(140,120,182,0.92))] text-primary-foreground shadow-soft"
                      : "text-muted-foreground hover:bg-white/82 hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden md:block">
            <a
              href={consultationHref}
              rel="noreferrer"
              target="_blank"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 rounded-full border-0 bg-[linear-gradient(135deg,var(--primary),var(--brand-pink))] px-5 text-sm text-primary-foreground shadow-soft hover:opacity-95"
              )}
            >
              <MessageCircleHeart className="size-4" />
              Mulai Konsultasi
            </a>
          </div>

          <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
            <SheetTrigger className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/80 text-foreground shadow-soft md:hidden">
              <Menu className="size-5" />
              <span className="sr-only">Buka navigasi</span>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[84vw] max-w-sm border-l-white/70 bg-[rgba(253,248,246,0.96)] p-0 backdrop-blur-2xl"
            >
              <SheetHeader className="border-b border-white/70 bg-organic-panel px-5 py-6">
                <SheetTitle>{siteConfig.brandName}</SheetTitle>
                <SheetDescription>
                  Navigasi sederhana dengan WhatsApp sebagai langkah utama.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-2 p-5">
                {siteConfig.navItems.map((item) => {
                  const active = pathname === item.href

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileNavOpen(false)}
                      className={cn(
                        "rounded-2xl px-4 py-3 text-sm font-semibold transition-colors",
                        active
                          ? "bg-[linear-gradient(135deg,rgba(103,86,141,0.96),rgba(140,120,182,0.92))] text-primary-foreground"
                          : "bg-white/82 text-foreground hover:bg-white"
                      )}
                    >
                      {item.label}
                    </Link>
                  )
                })}

                <a
                  href={consultationHref}
                  onClick={() => setMobileNavOpen(false)}
                  rel="noreferrer"
                  target="_blank"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "mt-3 h-12 rounded-full border-0 bg-[linear-gradient(135deg,var(--primary),var(--brand-pink))] text-primary-foreground shadow-soft"
                  )}
                >
                  Mulai Konsultasi
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        </header>
      </div>

      <main className="flex-1 pb-24 md:pb-0">{children}</main>

      <footer className="border-t border-white/70 bg-white/42">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr_1fr] lg:px-8">
          <div className="space-y-4 rounded-[2rem] border border-white/70 bg-white/62 p-5 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-primary/12 text-primary shadow-soft">
                <Sparkles className="size-5" />
              </span>
              <div>
                <p className="font-heading text-xl font-semibold">{siteConfig.brandName}</p>
                <p className="text-sm text-muted-foreground">
                  Mendampingi proses berbagi, refleksi, dan bertumbuh.
                </p>
              </div>
            </div>
            <div className="grid gap-3 text-sm leading-6 text-muted-foreground">
              {siteConfig.privacyPoints.map((point) => (
                <div key={point} className="flex gap-3 rounded-2xl bg-brand-soft/70 p-4">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-brand-purple" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 rounded-[2rem] border border-white/70 bg-white/62 p-5 shadow-soft">
            <p className="font-heading text-base font-semibold">Navigasi</p>
            <div className="grid gap-2 text-sm text-muted-foreground">
              {siteConfig.navItems.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-foreground">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4 rounded-[2rem] border border-white/70 bg-white/62 p-5 shadow-soft">
            <p className="font-heading text-base font-semibold">Terhubung dengan Ranah Jiwa</p>
            <div className="space-y-3 text-sm leading-6 text-muted-foreground">
              <a
                href={consultationHref}
                rel="noreferrer"
                target="_blank"
                className="flex items-center gap-2 hover:text-foreground"
              >
                <MessageCircleHeart className="size-4 text-whatsapp" />
                {siteConfig.whatsappDisplay}
              </a>
              <a
                href={siteConfig.instagramUrl}
                rel="noreferrer"
                target="_blank"
                className="flex items-center gap-2 hover:text-foreground"
              >
                <AtSign className="size-4 text-brand-purple" />
                {siteConfig.instagramHandle}
              </a>
              <div className="flex gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand-purple" />
                <span>{siteConfig.offlineCoverageNote}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a
        aria-label="Hubungi via WhatsApp"
        href={consultationHref}
        rel="noreferrer"
        target="_blank"
        className="fixed right-4 bottom-4 z-50 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-white shadow-[0_22px_46px_rgba(37,211,102,0.38)] transition-transform hover:scale-[1.03] hover:bg-whatsapp/90 md:right-6 md:bottom-6"
      >
        <MessageCircleHeart className="size-6" />
        <span className="hidden text-sm font-semibold md:inline">WhatsApp</span>
      </a>
    </>
  )
}
