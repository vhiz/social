import { Link, usePage } from '@inertiajs/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { FaCheck, FaXmark } from 'react-icons/fa6'

export default function FriendRequest({ modal }) {
  const { currentUser } = usePage().props
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getRequests() {
      setLoading(true)
      try {
        const res = await axios.get('/user/friendRequests')
        setData(res.data)
      } catch (error) {
        console.log(error)
        toast.error('Something went wrong')
      } finally {
        setLoading(false)
      }
    }
    getRequests()
  }, [currentUser.id])

  async function acceptRequest(sender, type) {
    try {
      const res = await axios.post('/user/accept-request', { sender, type })
      setData((prev) => [...prev.filter((item) => item.sender.id !== sender)])
      console.log(res)
      console.log(sender)
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong')
    }
  }

  return (
    <div className={`w-full p-2 text-sm ${modal ? '' : 'shadow-md'}`}>
      {!modal && (
        <div className="flex w-full justify-between">
          <span className="opacity-70">Friend Request</span>
          <span
            className="link-hover link link-secondary text-xs"
            onClick={() => {
              if (!data || data.length < 5) return

              document.getElementById('friendRequestModal').showModal()
            }}
          >
            see all
          </span>
        </div>
      )}
      <div className="mt-2 flex flex-col gap-3">
        {loading || !data ? (
          <div className="flex w-full items-center justify-center p-2">
            <div className="loading loading-bars"></div>
          </div>
        ) : data.length < 1 ? (
          <div className="flex w-full items-center justify-center p-2 opacity-70">
            No Friend Request
          </div>
        ) : modal ? (
          // if modal show full
          data.map((request) => (
            <div key={request.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className={`avatar ${
                    request.sender.avatar ? '' : 'placeholder'
                  }`}
                >
                  {request.sender.avatar ? (
                    <div className="w-6 rounded-full">
                      <img src={request.sender.avatar} />
                    </div>
                  ) : (
                    <div className="w-6 rounded-full bg-accent text-accent-content ring ring-accent ring-offset-2 ring-offset-base-100">
                      <span className="text-xl capitalize">
                        {request.sender.username.split('')[0]}
                      </span>
                    </div>
                  )}
                </div>
                <Link
                  href={`/profile/${request.sender.username}`}
                  className="link-hover link text-xs"
                >{`${request.sender.firstName} ${request.sender.lastName}`}</Link>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="btn btn-circle btn-outline btn-info btn-xs"
                  onClick={() => acceptRequest(request.sender.id, 'accept')}
                >
                  <FaCheck />
                </button>
                <button
                  className="btn btn-circle btn-outline btn-error btn-xs"
                  onClick={() => acceptRequest(request.sender.id, 'delete')}
                >
                  <FaXmark />
                </button>
              </div>
            </div>
          ))
        ) : (
          data.slice(0, 5).map((request) => (
            <div key={request.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className={`avatar ${
                    request.sender.avatar ? '' : 'placeholder'
                  }`}
                >
                  {request.sender.avatar ? (
                    <div className="w-6 rounded-full">
                      <img src={request.sender.avatar} />
                    </div>
                  ) : (
                    <div className="w-6 rounded-full bg-accent text-accent-content ring ring-accent ring-offset-2 ring-offset-base-100">
                      <span className="text-xl capitalize">
                        {request.sender.username.split('')[0]}
                      </span>
                    </div>
                  )}
                </div>
                <Link
                  href={`/profile/${request.sender.username}`}
                  className="link-hover link text-xs"
                >{`${request.sender.firstName} ${request.sender.lastName}`}</Link>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="btn btn-circle btn-outline btn-info btn-xs"
                  onClick={() => acceptRequest(request.sender.id, 'accept')}
                >
                  <FaCheck />
                </button>
                <button
                  className="btn btn-circle btn-outline btn-error btn-xs"
                  onClick={() => acceptRequest(request.sender.id, 'delete')}
                >
                  <FaXmark />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
