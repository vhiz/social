import { ImGift } from 'react-icons/im'

export default function Birthday() {
  return (
    <div className="w-full p-2 text-sm shadow-md">
      <span className="opacity-70">Birthdays</span>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="avatar">
            <div className="w-8 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <span className="text-xs">Leah Cortez</span>
        </div>
        <button className="btn btn-info btn-sm">continue</button>
      </div>
      <div className="mt-3 flex w-full items-center gap-4 rounded-md bg-base-200 p-2">
        <ImGift className="text-xl text-blue-500 opacity-70" />
        <div className="flex flex-col">
          <span className="font-semibold">Upcoming Birthday</span>
          <span className="text-xs opacity-70">
            See other upcoming birthdays
          </span>
        </div>
      </div>
    </div>
  )
}
