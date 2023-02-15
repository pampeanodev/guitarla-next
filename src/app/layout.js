import '../app/styles/globals.css'

import { Outfit } from '@next/font/google'
import Header from '@/app/components/header'
import Footer from '@/app/components/footer'

const outfit = Outfit({ 
  weight: ['400', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
