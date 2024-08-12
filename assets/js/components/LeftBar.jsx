import { Link } from '@inertiajs/react'
import Ad from './Ad'

export default function LeftBar({ userId }) {
  return (
    <div className="fixed top-[4.5rem] h-[calc(100vh-4rem)] w-[20%]">
      <div className="flex h-full w-full flex-col items-center gap-6 overflow-y-scroll">
        {/* Profile */}
        {!userId && (
          <div className="w-full rounded-box p-2 shadow-md">
            <div className="relative h-24 w-full rounded-box">
              <img
                src="https://images.unsplash.com/photo-1722925541914-ae7cf154d606?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="absolute left-0 top-0 h-full w-full rounded-box object-cover"
              />
              <div className="absolute -bottom-10 left-1/3">
                <div className="avatar">
                  <div className="w-16 rounded-full ring ring-accent ring-offset-2 ring-offset-base-100">
                    <img src="https://images.unsplash.com/photo-1723082053696-f94b182d4693?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-11 flex w-full flex-col items-center gap-2">
              <span className="font-semibold">Trevor Grant</span>
              <div className="flex items-center gap-2">
                <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                  <div className="avatar">
                    <div className="w-7">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-7">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-7">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-7">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                </div>
                <span className="text-sm opacity-70">300+ followers</span>
              </div>
              <Link href="/profile" className="btn btn-info btn-sm">
                My Profile
              </Link>
            </div>
          </div>
        )}
        {/* menu */}
        <ul className="menu w-full rounded-md shadow-md">
          <li>
            <a>My Posts</a>
          </li>
          <li>
            <a>Activity</a>
          </li>
          <li>
            <a>MarketPlace</a>
          </li>
          <li>
            <a>Events</a>
          </li>
          <li>
            <a>Albums</a>
          </li>
          <li>
            <a>Videos</a>
          </li>
          <li>
            <a>News</a>
          </li>
          <li>
            <a>Courses</a>
          </li>
          <li>
            <a>Lists</a>
          </li>
        </ul>
        <Ad />
        <div className="divider opacity-0"></div>
      </div>
    </div>
  )
}
