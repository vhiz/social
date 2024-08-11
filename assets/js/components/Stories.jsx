import React from 'react'

export default function Stories() {
  return (
    <div className="flex text-xs overflow-x-scroll scrollbar-none rounded-lg p-4 shadow-xl">
      <div className="flex gap-8 w-max">
        {Array(10)
          .fill()
          .map((i) => (
            <div className="flex cursor-pointer flex-col items-center gap-2">
              <div className="avatar">
                <div className="w-16 rounded-full ring ring-primary ring-offset-1 ring-offset-base-100">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <span className="text-xs">Edward</span>
            </div>
          ))}
      </div>
    </div>
  )
}
