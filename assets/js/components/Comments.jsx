import Comment from './Comment'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { usePage } from '@inertiajs/react'
import { BiPaperPlane } from 'react-icons/bi'
import usePostStore from '../lib/usePostStore'
import { MdAddPhotoAlternate } from 'react-icons/md'
import upload from '../lib/upload'
export default function Comments({ postId }) {
  const { currentUser } = usePage().props
  const [comments, setComments] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const { addPostCommentCount } = usePostStore()
  const [dummy, setDummy] = useState(null)
  const scrollRef = useRef(null)
  const [img, setImg] = useState({
    file: null,
    url: '',
  })

  useEffect(() => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [])
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`/comment/${postId}`)
        setComments(
          res.data.map((comment) => ({
            ...comment,
            likes: comment.likes.map((like) => like.user),
            isLikedByUser: !!comment.likes.find(
              (like) => like.user === currentUser.id
            ),
          }))
        )
        setLoading(false)
      } catch (error) {
        console.log(error)
        toast.error('Something went wrong')
      }
    }
    fetchData()
  }, [postId])

  async function sendComment(e) {
    e.preventDefault()
    const desc = e.target.desc.value
    if (!desc) return
    setIsLoading(true)
    setDummy({
      createdAt: Date.now(),
      desc,
      id: Math.random(),
      likes: [],
      post: postId,
      img: img.url,
      updatedAt: Date.now(),
      user: currentUser,
    })
    try {
      let imgUrl
      if (img.file) {
        imgUrl = await upload(img.file)
      }
      const res = await axios.post('/comment', { postId, desc, img: imgUrl })
      console.log(res.data)
      addPostCommentCount(postId)
      setComments((prev) => [...prev, res.data])
      setDummy(null)
      setImg({
        file: null,
        url: '',
      })
      e.target.desc.value = ''
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className="w-full">
      <div className="flex w-full items-center gap-2">
        <div className="avatar">
          <div className="w-6 rounded-full">
            <img
              src={
                currentUser.avatar ||
                `https://avatar.iran.liara.run/username?username=${currentUser.username}`
              }
            />
          </div>
        </div>
      <div className="" ref={scrollRef}></div>
        <form
          className="flex h-full w-full items-center gap-5"
          onSubmit={sendComment}
        >
          <label className="input flex w-full items-center gap-2 bg-base-200">
            <input
              type="text"
              name="desc"
              className="grow"
              placeholder="Type Something"
            />
            <label className="btn btn-circle btn-ghost btn-sm">
              <MdAddPhotoAlternate className="text-xl" />
              <input
                type="file"
                multiple={false}
                accept="image/*"
                hidden
                onChange={(e) =>
                  setImg({
                    file: e.target.files[0],
                    url: URL.createObjectURL(e.target.files[0]),
                  })
                }
              />
            </label>
          </label>
          {img && img?.url && (
            <div className="avatar">
              <div className="w-12 rounded">
                <img src={img?.url} alt="" />
              </div>
              {!isLoading && (
                <span
                  className="btn btn-circle btn-xs absolute -right-3 -top-3"
                  onClick={() => setImg(null)}
                >
                  X
                </span>
              )}
              {isLoading && (
                <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black/50">
                  <div className="loading"></div>
                </div>
              )}
            </div>
          )}
          <button disabled={loading || isLoading} className="btn">
            <BiPaperPlane />
          </button>
        </form>
      </div>
      <div className="divider" />
      <div className="w-full">
        {loading ? (
          <div className="flex h-full w-full items-center justify-center">
            <div className="loading"></div>
          </div>
        ) : (
          <>
            {dummy && <Dummy dummy={dummy} />}
            {comments
              .sort((a, b) => b.createdAt - a.createdAt)
              .map((comment) => (
                <Comment
                  key={comment.id}
                  comment={comment}
                  setComments={setComments}
                />
              ))}
          </>
        )}
      </div>
    </div>
  )
}

function Dummy({ dummy }) {
  return (
    <>
      <div className="btn-disabled disabled relative opacity-70">
        <Comment comment={dummy} />
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
          <div className="loading"></div>
        </div>
      </div>
    </>
  )
}
