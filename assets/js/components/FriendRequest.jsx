import { FaCheck, FaXmark } from "react-icons/fa6";

export default function FriendRequest() {
  return (
    <div className="w-full p-2 text-sm shadow-md">
    <div className="flex w-full justify-between">
      <span className="opacity-70">Friend Request</span>
      <span className="link-hover link link-secondary text-xs">
        see all
      </span>
    </div>
    <div className="mt-2 flex flex-col gap-3">
      {Array(4)
        .fill()
        .map((i) => (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="avatar">
                <div className="w-6 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <span className="text-xs">Leah Cortez</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="btn btn-circle btn-outline btn-info btn-xs">
                <FaCheck />
              </button>
              <button className="btn btn-circle btn-outline btn-error btn-xs">
                <FaXmark />
              </button>
            </div>
          </div>
        ))}
    </div>
  </div>
  )
}
