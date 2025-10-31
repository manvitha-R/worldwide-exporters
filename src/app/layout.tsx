import type { Metadata } from "next";
import "./globals.css";
import Layout from "./components/Layout";
import { Inter, Roboto_Mono } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: "WEINDIAN EXPORTERS",
  description: "LEADING EXPORT IMPORT COMPANY COMMITTED TO QUALITY AND EXCELLENCE ",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}