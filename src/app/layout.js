import { Rubik } from 'next/font/google'
import './globals.css'
import Main from '@/layout/Main'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Car Showroom',
  description: 'Carshow room',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Main>
          {children}
        </Main>
      </body>
    </html>
  )
}
