import React from 'react'
import RootLayout from '../layout/RootLayout'
import { Link, router } from '@inertiajs/react'
import { IoSearch } from 'react-icons/io5'

export default function Search({ query }) {
  function searchUser(e) {
    e.preventDefault()
    const query = e.target.query.value
    if (!query) return
    router.get(`/search?query=${query}`)
    e.target.query.value = ''
  }
  return (
    <RootLayout header={'Search'}>
      <form onSubmit={searchUser} className="w-full md:hidden">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            name="query"
            placeholder="Search"
          />
          <button className="btn btn-circle btn-ghost btn-sm opacity-70">
            <IoSearch />
          </button>
        </label>
      </form>
      <ul className="menu w-full p-2">
        {!query || query.length < 1 ? (
          <div className="text-xl opacity-70">No User Found</div>
        ) : (
          query.map((user) => (
            <li key={user.id}>
              <Link href={`/profile/${user.username}`}>
                <div className="flex items-center gap-2">
                  <div className={`avatar ${user.avatar ? '' : 'placeholder'}`}>
                    {user.avatar ? (
                      <div className="w-16 rounded-full">
                        <img src={user.avatar} />
                      </div>
                    ) : (
                      <div className="w-16 rounded-full bg-neutral text-neutral-content">
                        <span className="text-lg">UI</span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <span>{`${user.firstName} ${user.lastName}`}</span>
                    <span className="badge opacity-70">@{user.username}</span>
                    <div className="prose mt-2 text-xs opacity-70">
                      {user.description.length > 150
                        ? user.description.slice(0, 150) + '....'
                        : user.description}
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))
        )}
      </ul>
    </RootLayout>
  )
}
