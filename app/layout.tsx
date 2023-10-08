import './globals.css'
import type { Metadata } from 'next'

import Auth0Wrapper from './components/Auth0Wrapper'

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
    <Auth0Wrapper>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Auth0Wrapper>
  )
}