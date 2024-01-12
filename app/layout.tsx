import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import AuthProvider from './components/AuthProvider'


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
      <AuthProvider>
      <body className=''>{children}</body>
      </AuthProvider>
    </html>
  )
}
