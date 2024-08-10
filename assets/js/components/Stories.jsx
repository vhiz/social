import React from 'react'

export default function Stories() {
  return (
    <div className="overflow-x-scroll rounded-md p-4 shadow-md scrollbar-none">
      <div className="flex h-20 w-max gap-8">
        {Array(10)
          .fill()
          .map((i) => (
            <div className="btn btn-circle">
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
