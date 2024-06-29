import type { Metadata } from 'next'
import { Sen } from 'next/font/google'
import './globals.css'

const font = Sen({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'pjnicolas',
  description: 'Curriculum Vitae',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-neutral-50 text-neutral-900 text-lg`}
      >
        {children}
      </body>
    </html>
  )
}
