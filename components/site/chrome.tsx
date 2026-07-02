"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
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
      {/* Announcement Bar */}
      <div className="bg-violet-700 text-violet-50 py-2.5 px-6 text-center text-xs font-medium tracking-wide uppercase">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 md:flex-row md:gap-8">
          <span className="flex items-center gap-2">
            <i className="ri-heart-2-line" /> Ruang aman untuk berbagi, refleksi, dan bertumbuh
          </span>
          <span className="hidden md:block opacity-40">|</span>
          <span className="flex items-center gap-2">
            <i className="ri-map-pin-2-line" /> {siteConfig.offlineCoverageNote}
          </span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 glass-nav border-b border-violet-100">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white">
              <i className="ri-sparkling-fill text-xl" />
            </div>
            <div>
              <h1 className="text-xl font-bold leading-none tracking-tight text-violet-900">
                {siteConfig.brandName}
              </h1>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-violet-500">
                Psikologi hangat, tenang, profesional
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-10 font-medium text-slate-600 lg:flex">
            {siteConfig.navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition-colors hover:text-violet-600",
                    active && "font-semibold text-violet-600",
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <a
            href={consultationHref}
            rel="noreferrer"
            target="_blank"
            className="hidden items-center gap-2 rounded-full bg-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-200 transition-all hover:bg-violet-700 lg:inline-flex"
          >
            <i className="ri-chat-smile-2-line" />
            Mulai Konsultasi
          </a>

          {/* Mobile Nav */}
          <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
            <SheetTrigger className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-violet-100 bg-white text-violet-600 lg:hidden">
              <Menu className="size-5" />
              <span className="sr-only">Buka navigasi</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[84vw] max-w-sm border-violet-100 bg-white p-0">
              <SheetHeader className="border-b border-violet-100 px-5 py-6">
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
                          ? "bg-violet-600 text-white"
                          : "bg-violet-50 text-slate-700 hover:bg-violet-100",
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
                  className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-200"
                >
                  <i className="ri-chat-smile-2-line" />
                  Mulai Konsultasi
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 px-6 pt-20 pb-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="space-y-6 lg:col-span-1">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-white">
                  <i className="ri-sparkling-fill text-lg" />
                </div>
                <div>
                  <h4 className="text-lg font-bold leading-none tracking-tight text-slate-900">
                    {siteConfig.brandName}
                  </h4>
                  <p className="mt-1 text-[9px] font-semibold uppercase tracking-widest text-slate-400">
                    Psikologi hangat, tenang, profesional
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-500">
                Ruang aman untuk berbagi, refleksi, dan bertumbuh melalui pendampingan profesional dan terpercaya.
              </p>
              <div className="flex gap-4">
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 shadow-sm transition-all hover:text-violet-600"
                >
                  <i className="ri-instagram-line text-lg" />
                </a>
                <a
                  href={`mailto:halo@ranahjiwa.id`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 shadow-sm transition-all hover:text-violet-600"
                >
                  <i className="ri-mail-line text-lg" />
                </a>
              </div>
            </div>

            {/* Navigasi */}
            <div>
              <h5 className="mb-6 font-bold text-slate-900">Navigasi</h5>
              <ul className="space-y-4 text-sm font-semibold text-slate-500">
                {siteConfig.navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "transition-all hover:text-violet-600",
                        pathname === item.href && "text-violet-600",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kontak */}
            <div>
              <h5 className="mb-6 font-bold text-slate-900">Kontak</h5>
              <ul className="space-y-4 text-sm font-semibold text-slate-500">
                <li className="flex items-center gap-3">
                  <i className="ri-instagram-line text-violet-500" /> {siteConfig.instagramHandle}
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-mail-line text-violet-500" /> halo@ranahjiwa.id
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-whatsapp-line text-violet-500" /> {siteConfig.whatsappDisplay}
                </li>
              </ul>
            </div>

            {/* Lokasi */}
            <div>
              <h5 className="mb-6 font-bold text-slate-900">Lokasi Layanan</h5>
              <p className="text-sm font-semibold leading-relaxed text-slate-500">
                Surabaya, Sidoarjo, dan Gresik (Area Jawa Timur). Layanan online tersedia secara global untuk siapa saja.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 border-t border-slate-200 pt-8 text-[10px] font-bold uppercase tracking-widest text-slate-400 md:flex-row md:justify-between">
            <div>© 2025 Ranah Jiwa. All rights reserved.</div>
            <div className="flex gap-8">
              <a href="#" className="transition-all hover:text-violet-600">
                Privacy Policy
              </a>
              <a href="#" className="transition-all hover:text-violet-600">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href={consultationHref}
        target="_blank"
        rel="noreferrer"
        className="group fixed right-6 bottom-8 z-[100] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-2xl transition-all hover:scale-110 active:scale-95"
      >
        <i className="ri-whatsapp-line" />
        <span className="pointer-events-none absolute right-full mr-4 whitespace-nowrap rounded-xl border border-slate-100 bg-white px-4 py-2 text-sm font-bold text-slate-800 opacity-0 shadow-lg transition-all group-hover:opacity-100">
          WhatsApp Kami
        </span>
      </a>
    </>
  )
}
