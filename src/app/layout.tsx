import { Poppins } from 'next/font/google'
import type { Metadata } from 'next'
// import ReactQueryProvider from '@/providers/ReactQueryProvider'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: "Portfolio réalisé par iSac - Concepteur Développeur d'Applications",
  description:
    "Actuellement en recherche d'une alternance et disponible dès maintenant. Je suis à la recherche d'une entreprise qui me permettra de mettre en pratique mes compétences full stack en JavaScript & TypeScript et d'en acquérir de nouvelles. Localisation : Eure-et-Loir, Région Centre-Val de Loire, ou partout en Île-de-France, notamment à Paris. Mon site portfolio a été réalisé avec Next.js, Tailwind CSS, Airtable et déployé sur Vercel.",
  keywords: [
    'iSac',
    'portfolio',
    'alternance',
    'développeur',
    'web',
    'full stack',
    'JavaScript',
    'TypeScript',
    'Next.js',
    'Tailwind CSS',
    'Material UI',
    'Airtable',
    'Vercel'
  ],
  robots: 'index, follow'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='fr' className={`scroll-smooth ${poppins.variable}`}>
      <body>
        {/* <ReactQueryProvider> */}
          <Navbar />
          {children}
          <Footer />
        {/* </ReactQueryProvider> */}
      </body>
    </html>
  )
}
