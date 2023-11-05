import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Star Rail Realm',
  description: 'A website for discussing Honkai: Star Rail.',
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