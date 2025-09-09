import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { SOSButton } from "@/components/sos-button"
import "./globals.css"

export const metadata: Metadata = {
  title: "SereneCircle - Mental Health Support for Students",
  description:
    "AI-driven, stigma-free mental health support platform for college students in India. Get confidential counseling, peer support, and wellness resources.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <SOSButton />
        <Analytics />
      </body>
    </html>
  )
}
