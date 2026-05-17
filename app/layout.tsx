import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Aurora Tech S.A.C.',
  description: 'Transformamos ideas en soluciones digitales - Desarrollo de software, consultoría TI y gestión empresarial',
  generator: 'v0.app',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  viewport: {
    themeColor: '#0f172a',
    width: 'device-width',
    initialScale: 1,
    userScalable: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-slate-950">
      <body className={`${geist.className} font-sans antialiased text-slate-200 bg-slate-950`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
