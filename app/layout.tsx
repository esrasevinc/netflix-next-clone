import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'


export const metadata: Metadata = {
  title: 'Netflix',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=''>{children}</body>
    </html>
  )
}
