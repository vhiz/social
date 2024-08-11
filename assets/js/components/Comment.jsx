import { useState } from 'react'
import { BiCommentDetail, BiLike, BiSolidLike } from 'react-icons/bi'
import { CiShare2 } from 'react-icons/ci'
import { PiDotsThree } from 'react-icons/pi'
import { RiDeleteBin6Line } from 'react-icons/ri'

export default function Comment({ img }) {
  const [like, setLike] = useState(false)

  return (
    <>
      <div className="flex w-full items-start gap-2">
        <div className="avatar">
          <div className="w-8 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="w-full text-sm">
          <span className="text-xs">Benjamin Moore</span>
          <div className="prose mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            doloremque, impedit nemo at perspiciatis sunt quae praesentium
            aliquam labore a amet voluptate eum, mollitia nam unde. Dolorem
            accusantium eius hic.
          </div>
          {img && (
            <div className="avatar mt-3 w-full">
              <div className="max-h-72 w-full rounded">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          )}

          <div className="mt-3 flex items-center gap-2 md:gap-5">
            <div className="flex items-center">
              <label className="btn btn-circle btn-ghost swap btn-sm">
                <input
                  type="checkbox"
                  checked={like}
                  onChange={(e) => setLike(e.target.checked)}
                />
                <div className="swap-on">
                  <BiSolidLike className="text-red-700" />
                </div>
                <div className="swap-off">
                  <BiLike />
                </div>
              </label>
              <div className="divider divider-horizontal hidden md:flex" /> 122
            </div>
            <div className="flex items-center">
              <div className="btn btn-circle btn-ghost btn-sm">
                <BiCommentDetail />
              </div>
              <div className="divider divider-horizontal hidden md:flex" /> 122
            </div>
            <div className="flex items-center">
              <div className="btn btn-circle btn-ghost btn-sm">
                <CiShare2 />
              </div>
              <div className="divider divider-horizontal hidden md:flex" /> 122
            </div>
          </div>
        </div>
        <div className="">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={1}
              role="button"
              className="btn btn-circle btn-ghost btn-sm"
            >
              <PiDotsThree />
            </div>
            <ul
              tabIndex={1}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <a>Edit</a>
              </li>
              <li>
                <a className="justify-between text-error">
                  Delete
                  <RiDeleteBin6Line />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </>
  )
}
