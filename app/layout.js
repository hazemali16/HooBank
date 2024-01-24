import './globals.css'
import { Inter, Poppins } from 'next/font/google'


const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '700'] })

export const metadata = {
  title: 'HooBank',
  description: 'Create a Modern Business Landing page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
