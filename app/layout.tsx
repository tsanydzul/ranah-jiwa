import type { Metadata } from "next"
import { Cormorant_Garamond, Manrope } from "next/font/google"

import { SiteChrome } from "@/components/site/chrome"
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
  title: {
    default: "Ranah Jiwa",
    template: "%s | Ranah Jiwa",
  },
  description:
    "Ranah Jiwa adalah ruang aman untuk berbagi, refleksi, dan bertumbuh dengan layanan psikologi yang hangat, profesional, dan terpercaya.",
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
