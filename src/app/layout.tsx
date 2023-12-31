import './globals.css'
import type { Metadata } from 'next'
import { cn } from '../lib/utils'
import { Inter as FontSans } from "next/font/google"
import Sidebar from '../components/nav/Sidebar'
import { Toaster } from '../components/ui/toaster'
import Nav from '../components/nav/Nav'
 
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn('relative bg-slate-100 text-foreground flex', fontSans.className)}>
        <Sidebar />
        <main className="relative flex flex-col gap-4 p-4 ml-[320px] w-full min-h-screen overflow-auto">
          <Nav />
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  )
}
