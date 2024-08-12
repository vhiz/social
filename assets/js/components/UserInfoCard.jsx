import { CiLocationOn } from 'react-icons/ci'
import { MdCalendarToday, MdOutlineWorkOutline } from 'react-icons/md'
import { IoSchoolOutline } from 'react-icons/io5'
import { CiLink } from 'react-icons/ci'

export default function UserInfoCard() {
  return (
    <div className="w-full rounded-md p-2 shadow-md">
      <div className="flex w-full items-center justify-between">
        <span className="text-sm opacity-70">User Information</span>
        <span className="link-hover link link-secondary text-xs">see all</span>
      </div>
      <div className="mt-2 flex w-full flex-col gap-3">
        <span className="">
          Delia AustinHeading
          <span className="badge badge-xs text-xs opacity-70">@Elsie</span>
        </span>
        <div className="prose text-xs font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
          tempore tenetur dolorum veritatis provident ratione facilis expedita
          ullam, reiciendis vero aliquid culpa officia eveniet aut! Tempora,
          atque. Incidunt, unde pariatur.
        </div>
        <div className="flex w-full items-center gap-2 text-xs">
          <CiLocationOn />
          <span>
            Living in <strong>Australia</strong>
          </span>
        </div>
        <div className="flex w-full items-center gap-2 text-xs">
          <IoSchoolOutline />
          <span>
            Went to <strong>The college of education</strong>
          </span>
        </div>
        <div className="flex w-full items-center gap-2 text-xs">
          <MdOutlineWorkOutline />
          <span>
            Works at <strong>Google.</strong>
          </span>
        </div>
        <div className="flex flex-col lg:flex-row w-full lg:items-center gap-2 lg:justify-between text-xs">
          <div className="flex items-center gap-2">
            <CiLink />
            <span className="link-hover link link-info">google.com</span>
          </div>
          <div className="mr-2 flex items-center gap-2">
            <MdCalendarToday />
            <span>Joined January 2020</span>
          </div>
        </div>
      </div>
      <button className="btn btn-info btn-sm mt-3 w-full">Following</button>
        <span className="link-hover link link-error mt-4 text-xs">
          Block user
        </span>
    </div>
  )
}
