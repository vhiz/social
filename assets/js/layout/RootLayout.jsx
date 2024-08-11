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
      <div className="flex gap-6 pt-6">
        <div className="hidden w-[20%] px-2 xl:block">
          <LeftBar />
        </div>
        <div className="px-2 w-full md:w-[70%] xl:w-1/2">
          <div className="flex flex-col gap-6">{children}</div>
        </div>
        <div className="hidden w-[30%] px-2 md:block">
          <RightBar />
        </div>
      </div>
    </div>
  )
}
