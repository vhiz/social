import { PiDotsThree } from 'react-icons/pi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { BiLike } from 'react-icons/bi'
import { BiSolidLike } from 'react-icons/bi'
import { BiCommentDetail } from 'react-icons/bi'
import { CiShare2 } from 'react-icons/ci'
import { useState } from 'react'
import Comments from './Comments'
export default function Post() {
  const [like, setLike] = useState(false)
  const [openComments, setOpenComments] = useState(false)

  return (
    <div className="w-full rounded-md p-2 shadow-md">
      {/* //user */}
      <div className="flex">
        <div className="flex flex-1 items-center gap-2">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <span>Olivia Moore</span>
        </div>
        <div className="flex-none">
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
      {/* //Post */}
      <div className="mt-3">
        <div className="prose text-sm">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolores
            consequatur hic nam molestias eum aut, quasi quibusdam velit.
            Incidunt corrupti sapiente voluptatem possimus hic corporis nisi
            veniam officia animi. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quos velit saepe commodi, molestiae magni officia
            possimus tempore ex asperiores aspernatur explicabo optio quod alias
            magnam in laborum? Error, natus nobis!
          </p>
        </div>
        <div className="avatar mt-3 w-full">
          <div className="max-h-96 w-full rounded bg-base-200">
            <img src="https://images.unsplash.com/photo-1721332149346-00e39ce5c24f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" />
          </div>
        </div>
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
            <div
              onClick={() => setOpenComments((prev) => !prev)}
              className="btn btn-circle btn-ghost btn-sm"
            >
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
      {openComments && <div className="divider" />}
      {/* comment */}
      {openComments && <Comments />}
    </div>
  )
}
