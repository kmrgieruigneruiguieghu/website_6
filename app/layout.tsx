import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "@/components/ui/header-footer/header"
import Footer from "@/components/ui/header-footer/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "Pizza Pasta | Доставка еды",
  description: "Доставка пиццы, пасты и других блюд",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
