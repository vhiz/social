import React from 'react'
import Toggle from './Toggle'
import { GoBell } from 'react-icons/go'
import { Link, router, usePage } from '@inertiajs/react'
import { IoSearch } from 'react-icons/io5'

export default function Navbar() {
  const { currentUser } = usePage().props



  function searchUser(e) {
    e.preventDefault()
    const query = e.target.query.value
    if (!query) return
    router.get(`/search?query=${query}`)
    e.target.query.value = ''
  }
  return (
    <div className="navbar fixed top-0 z-50 bg-base-100 shadow-md">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          Timer
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="btn btn-circle btn-ghost btn-sm hidden md:inline-flex">
          <GoBell />
        </div>
        <Link href='/search' className="btn btn-circle btn-ghost btn-sm md:hidden">
          <IoSearch />
        </Link >
        <Toggle />
        <form onSubmit={searchUser} className="form-control hidden md:flex flex-col">
          <input
            name="query"
            type="text"
            placeholder="Search"
            className="input input-sm input-bordered w-24 md:w-auto"
          />
        </form>
        {currentUser ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className={`avatar btn btn-circle btn-ghost ${
                currentUser.avatar ? '' : 'placeholder'
              }`}
            >
              {currentUser.avatar ? (
                <div className="w-10 rounded-full">
                  <img alt={currentUser.username} src={currentUser.avatar} />
                </div>
              ) : (
                <div className="w-10 rounded-full bg-accent text-accent-content">
                  <span className="text-2xl capitalize">
                    {currentUser.username.split('')[0]}
                  </span>
                </div>
              )}
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <Link href="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li className="lg:hidden">
                <a>Friends </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <Link as="button" method="delete" href="/logout">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            href="/login"
            className="btn btn-outline btn-secondary btn-sm ml-2"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  )
}
