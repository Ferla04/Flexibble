import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Flexibble',
  description: 'Upload your projects to share them with the world'
}

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export default RootLayout
