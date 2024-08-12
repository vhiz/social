import { usePage } from '@inertiajs/react'
import Ad from './Ad'
import ProfileCard from './ProfileCard'

export default function LeftBar() {
  const { currentUser, user } = usePage().props
  let show = !user || currentUser.id === user?.id
  return (
    <div className="fixed top-[4.5rem] h-[calc(100vh-4rem)] w-[20%]">
      <div className="flex h-full w-full flex-col items-center gap-6 overflow-y-scroll">
        {/* Profile */}
        {show && <ProfileCard />}
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
