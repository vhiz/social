import React from 'react'
import Navbar from '../components/Navbar'
import { Head } from '@inertiajs/react'
import LeftBar from '../components/Leftbar'
import RightBar from '../components/RightBar'

export default function RootLayout({ children, header }) {
  return (
    <div>
      <Navbar />
      <Head>
        <title>{header || 'Timer'}</title>
      </Head>
      <div className="flex w-full">
        <div className="flex-1 px-2 hidden lg:block">
          <LeftBar />
        </div>
        <div className="flex-[2] px-2 flex flex-col gap-6">{children}</div>
        <div className="flex-[1.5] px-2 hidden md:block">
          <RightBar />
        </div>
      </div>
    </div>
  )
}
