import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Srivatsa Juttur Portfolio',
  description: 'Creating a portfolio with Next.js',
  keywords: ['Srivatsa Juttur', 'Portfolio', 'Next.js'],
  authors: [{ name: 'Srivatsa Juttur', url: 'https://srivatsajuttur.vercel.app' }],
  generator: 'Next.js',
  applicationName: 'Srivatsa Juttur Portfolio'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
