import type { Metadata } from "next"
import { Cormorant_Garamond, Manrope } from "next/font/google"

import { SiteChrome } from "@/components/site/chrome"
import { assetRefs, profileContent, siteConfig } from "@/lib/site-content"
import "./globals.css"

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
})

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Ranah Jiwa",
    template: "%s | Ranah Jiwa",
  },
  description:
    "Ranah Jiwa adalah ruang aman untuk berbagi, refleksi, dan bertumbuh dengan layanan psikologi yang hangat, profesional, dan terpercaya.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.siteUrl,
    siteName: siteConfig.brandName,
    title: "Ranah Jiwa",
    description:
      "Ranah Jiwa adalah ruang aman untuk berbagi, refleksi, dan bertumbuh dengan layanan psikologi yang hangat, profesional, dan terpercaya.",
    images: [
      {
        url: assetRefs.mainHero,
        alt: profileContent.name,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="id"
      className={`${bodyFont.variable} ${headingFont.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full font-sans">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  )
}
