import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Errol Blog',
  description: 'A blog about software development and other things.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
