import { Head } from '@inertiajs/react'
import Navbar from '../components/Navbar'

export default function Auth({ children, header }) {
  return (
    <div className="w-full">
      <Head>
        <title>{header}</title>
      </Head>
      <Navbar />
      <div className="mt-16 flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}
