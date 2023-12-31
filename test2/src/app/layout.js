import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], weight:['400'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className='wrapper'>
        <div className='row'>
          <h1>Global header</h1>
        </div>
        {children}
        <div className='row'>
          <h1>Global footer</h1>
        </div>
        </div>
        </body>
    </html>
  )
}
