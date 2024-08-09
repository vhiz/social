import React from 'react'
import Navbar from '../components/Navbar'
import { Head } from '@inertiajs/react'

export default function RootLayout({ children, header }) {
  return (
    <div>
      <Navbar />
      <Head>
        <title>{header || 'Timer'}</title>
      </Head>
      {children}
    </div>
  )
}
