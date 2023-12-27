import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Container } from '@mui/material';
import Whatsapp from '@/components/whatsapp';
import './globals.css'
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ehwaz Muebles',
  description: 'Fabrica de muebles de algarrobo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Container style={{minWidth: "100%", padding: "0.2rem 0 0 0"}}>
          {children}
          <Whatsapp></Whatsapp>
        </Container>
        <Footer />
      </body>
    </html>
  )
}
