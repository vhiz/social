import { usePage } from '@inertiajs/react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { BiCommentDetail, BiLike, BiSolidLike } from 'react-icons/bi'
import { CiShare2 } from 'react-icons/ci'
import { PiDotsThree } from 'react-icons/pi'
import { RiDeleteBin6Line } from 'react-icons/ri'

export default function Comment({ comment, setComments }) {
  const { currentUser } = usePage().props

  async function likePost() {
    setComments((prev) => [
      ...prev.map((comments) =>
        comments.id === comment.id
          ? {
              ...comments,
              isLikedByUser: !comments.isLikedByUser,
              likes: comments.likes.includes(currentUser.id)
                ? comments.likes.filter((like) => like !== currentUser.id)
                : [...comments.likes, currentUser.id],
            }
          : comments
      ),
    ])
    try {
      await axios.put(`/comment/${comment.id}`)
    } catch (error) {
      toast.error('Something went wrong')
      setComments((prev) => [
        ...prev.map((comments) =>
          comments.id === comment.id
            ? {
                ...comments,
                isLikedByUser: !comments.isLikedByUser,
                likes: comments.likes.includes(currentUser.id)
                  ? comments.likes.filter((like) => like !== currentUser.id)
                  : [...comments.likes, currentUser.id],
              }
            : comments
        ),
      ])
    }
  }
  return (
    <>
      <div className="flex w-full items-start gap-2">
        <div className="avatar">
          <div className="w-8 rounded-full">
            <img
              src={
                comment.user.avatar ||
                `https://avatar.iran.liara.run/username?username=${comment.user.username}`
              }
            />
          </div>
        </div>
        <div className="w-full text-sm">
          <span className="text-xs">
            {comment.user.firstName && comment.user.lastName
              ? `${comment.user.firstName} ${comment.user.lastName}`
              : comment.user.username}
          </span>
          <div className="prose mt-1">{comment.desc}</div>
          {comment.img && (
            <div className="avatar mt-3 w-full">
              <div className="max-h-72 w-full rounded">
                <img src={comment.img} />
              </div>
            </div>
          )}

          <div className="mt-3 flex gap-2 md:gap-5">
            <div className="flex items-center">
              <label className="btn btn-circle btn-ghost swap btn-sm">
                <input
                  type="checkbox"
                  checked={comment.isLikedByUser}
                  onChange={(e) => likePost()}
                />
                <div className="swap-on">
                  <BiSolidLike className="text-red-700" />
                </div>
                <div className="swap-off">
                  <BiLike />
                </div>
              </label>
              <div className="divider divider-horizontal hidden md:flex" />
              <span className="countdown">
                <span style={{ '--value': comment.likes.length }}></span>
              </span>
            </div>
            {/* <div className="flex items-center">
              <div className="btn btn-circle btn-ghost btn-sm">
                <BiCommentDetail />
              </div>
              <div className="divider divider-horizontal hidden md:flex" /> 122
            </div> */}
            {/* <div className="flex items-center">
              <div className="btn btn-circle btn-ghost btn-sm">
                <CiShare2 />
              </div>
              <div className="divider divider-horizontal hidden md:flex" /> 122
            </div> */}
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
