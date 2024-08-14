import { CiLocationOn } from 'react-icons/ci'
import { MdCalendarToday, MdOutlineWorkOutline } from 'react-icons/md'
import { IoSchoolOutline } from 'react-icons/io5'
import { CiLink } from 'react-icons/ci'
import { Link, usePage } from '@inertiajs/react'
import moment from 'moment'
import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'

export default function UserInfoCard() {
  const { user, currentUser } = usePage().props
  const [blockedLoading, setBlockedLoading] = useState(false)
  const [isBlocked, setIsBlocked] = useState(user?.blockedUser)
  const [followRequest, setFollowRequest] = useState(user?.requestSent)
  const [followLoader, setFollowLoader] = useState(false)
  const [isFollowing, setIsFollowing] = useState(user?.isFollowing)
  async function blockUser() {
    setBlockedLoading(true)
    try {
      await axios.post('/user/block', { blockedUser: user.id })
      setIsBlocked((prev) => !prev)
    } catch (error) {
      toast.error('Something went wrong')
    } finally {
      setBlockedLoading(false)
    }
  }

  async function followUser() {
    setFollowLoader(true)
    try {
      const res = await axios.post('/user/follow', { receiver: user.id })
      if (isFollowing) {
        setIsFollowing((prev) => !prev)
        return
      }
      setFollowRequest((prev) => !prev)
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong')
    } finally {
      setFollowLoader(false)
    }
  }
  return (
    <div className="w-full rounded-md p-2 shadow-md">
      <div className="flex w-full items-center justify-between">
        <span className="text-sm opacity-70">User Information</span>
        {currentUser.id === user.id ? (
          <div
            className="link-hover link link-secondary text-xs"
            onClick={() => document.getElementById('updateUser').showModal()}
          >
            update
          </div>
        ) : (
          <span className="link-hover link link-secondary text-xs">
            see all
          </span>
        )}
      </div>
      <div className="mt-2 flex w-full flex-col gap-3">
        <span className="">
          {`${user.firstName} ${user.lastName}`}
          <span className="badge badge-xs text-xs opacity-70">
            @{user.username}
          </span>
        </span>
        <div className="prose text-xs font-light">{user.description}</div>
        {user.city && (
          <div className="flex w-full items-center gap-2 text-xs">
            <CiLocationOn />
            <span>
              Living in <strong>{user.city}</strong>
            </span>
          </div>
        )}
        {user.school && (
          <div className="flex w-full items-center gap-2 text-xs">
            <IoSchoolOutline />
            <span>
              Went to <strong>{user.school}</strong>
            </span>
          </div>
        )}
        {user.work && (
          <div className="flex w-full items-center gap-2 text-xs">
            <MdOutlineWorkOutline />
            <span>
              Works at <strong>{user.work}</strong>
            </span>
          </div>
        )}
        <div className="flex w-full flex-col gap-2 text-xs lg:flex-row lg:items-center lg:justify-between">
          {user.website && (
            <div className="flex items-center gap-2">
              <CiLink />
              <a
                href={user.website}
                target="blank"
                className="link-hover link link-info"
              >
                {user.website}
              </a>
            </div>
          )}
          <div className="mr-2 flex items-center gap-2">
            <MdCalendarToday />
            <span>Joined {moment(user.createdAt).format('MMMM  YYYY')}</span>
          </div>
        </div>
      </div>
      {user.id !== currentUser.id && (
        <>
          <button
            className={`btn ${
              followRequest ? 'btn-accent' : 'btn-info'
            } btn-sm mt-3 w-full ${
              isBlocked || followLoader ? 'btn-disabled' : ''
            }`}
            disabled={isBlocked || followLoader}
            onClick={followUser}
          >
            {followLoader ? (
              <div className="loading loading-bars"></div>
            ) : followRequest ? (
              'Friend Request Sent'
            ) : isFollowing ? (
              'UnFollow'
            ) : (
              'Follow'
            )}
          </button>
          <button
            className="link-hover link link-error mt-4 text-xs"
            onClick={() => blockUser()}
            disabled={blockedLoading}
          >
            {blockedLoading ? (
              <div className="loading loading-bars"></div>
            ) : isBlocked ? (
              'Unblock User'
            ) : (
              'Block user'
            )}
          </button>
        </>
      )}
    </div>
  )
}
