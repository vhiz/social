import React from 'react'
import Toggle from './Toggle'
import { GoBell } from 'react-icons/go'
import { Link } from '@inertiajs/react'

export default function Navbar() {
  const user = null
  return (
  <div className="navbar bg-base-100 shadow-md fixed top-0 z-50">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Timer</a>
      </div>
      <div className="flex-none gap-2">
        <div className="btn btn-circle btn-ghost btn-sm hidden md:inline-flex">
          <GoBell />
        </div>
        <Toggle />
        <div className="form-control hidden md:flex">
          <input
            type="text"
            placeholder="Search"
            className="input input-sm input-bordered w-24 md:w-auto"
          />
        </div>
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="avatar btn btn-circle btn-ghost"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li className="lg:hidden">
                <a>Friends </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link href='/login' className='btn ml-2 btn-sm btn-outline btn-secondary'>Login</Link>
        )}
      </div>
    </div>
  )
}
