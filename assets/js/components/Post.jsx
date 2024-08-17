import { PiDotsThree } from 'react-icons/pi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { BiLike } from 'react-icons/bi'
import { BiSolidLike } from 'react-icons/bi'
import { BiCommentDetail } from 'react-icons/bi'
import { CiShare2 } from 'react-icons/ci'
import { useState } from 'react'
import Comments from './Comments'
import moment from 'moment/moment'
import { Link } from '@inertiajs/react'
import usePostStore from '../lib/usePostStore'
export default function Post({ post }) {
  const [openComments, setOpenComments] = useState(false)
  const { likePost } = usePostStore()

  return (
    <div className="w-full rounded-md p-2 shadow-md">
      {/* //user */}
      <div className="flex">
        <Link
          href={`/profile/${post.user.username}`}
          className="flex flex-1 items-center gap-4"
        >
          <div className={`avatar ${post.user.avatar ? '' : 'placeholder'}`}>
            {post.user.avatar ? (
              <div className="w-10 rounded-full ring ring-accent ring-offset-2 ring-offset-base-100">
                <img src={post.user.avatar} />
              </div>
            ) : (
              <div className="w-10 rounded-full bg-accent text-accent-content ring ring-accent ring-offset-2 ring-offset-base-100">
                <span className="text-2xl capitalize">
                  {post.user.username.split('')[0]}
                </span>
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <span>{`${post.user.firstName} ${post.user.lastName} `}</span>
            <span className="text-xs opacity-60">
              {moment(post.createdAt).fromNow()}
            </span>
          </div>
        </Link>
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
          <p>{post?.desc}</p>
        </div>
        {post.img && (
          <div className="avatar mt-3 w-full">
            <div className="max-h-96 w-full rounded bg-base-200">
              <img src={post.img} />
            </div>
          </div>
        )}
        <div className="mt-3 flex items-center gap-2 md:gap-5">
          <div className="flex items-center gap-2">
            <label className="btn btn-circle btn-ghost swap swap-rotate btn-sm">
              <input
                type="checkbox"
                checked={post.isLikedByCurrentUser}
                onChange={(e) => likePost(post.id)}
              />
              <div className="swap-on">
                <BiSolidLike className="text-red-700" />
              </div>
              <div className="swap-off">
                <BiLike />
              </div>
            </label>
            <span className="countdown">
              <span style={{ '--value': post.likes.length }}></span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div
              onClick={() => setOpenComments((prev) => !prev)}
              className="btn btn-circle btn-ghost btn-sm"
            >
              <BiCommentDetail />
            </div>
            {post.comments.length}
          </div>
          {/* <div className="flex items-center">
            <div className="btn btn-circle btn-ghost btn-sm">
              <CiShare2 />
            </div>
            <div className="divider divider-horizontal hidden md:flex" /> 122
          </div> */}
        </div>
      </div>
      {openComments && <div className="divider" />}
      {/* comment */}
      {openComments && <Comments />}
    </div>
  )
}
