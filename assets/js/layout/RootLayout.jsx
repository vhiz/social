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
        <div className="px-2 hidden lg:block w-[20%]">
          <LeftBar />
        </div>
        <div className=" px-2 flex flex-col gap-6 w-[70%]">{children}</div>
        <div className="px-2 hidden md:block w-[30%]">
          <RightBar />
        </div>
      </div>
    </div>
  )
}
