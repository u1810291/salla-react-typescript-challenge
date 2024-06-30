"use client"
import { ReactNode } from 'react';
import './global.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" dir="rtl" data-lt-installed={true}>
      <head>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="https://cdn.salla.network/fonts/sallaicons.css" />
        <link rel="icon" href="https://cdn.salla.network/images/logo/logo-square.png" />
        <link rel="apple-touch-icon-precomposed" href="https://cdn.salla.network/images/logo/logo-square.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>React App</title>
      </head>
      <body className="w-full min-h-screen bg-gray-50 flex flex-col items-start justify-start">
        <Header />
        <main id="root" className="w-full main flex-auto">{children}</main>
        <Footer />
      </body>
    </html>
  )
}