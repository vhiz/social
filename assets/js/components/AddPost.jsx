import { HiMiniPaperAirplane } from 'react-icons/hi2'
import { MdAddPhotoAlternate } from 'react-icons/md'
import { FaPhotoFilm } from 'react-icons/fa6'
import { MdEventNote } from 'react-icons/md'
import { FaPoll } from 'react-icons/fa'
import axios from 'axios'
import { useState } from 'react'
import usePostStore from '../lib/usePostStore'
import { usePage } from '@inertiajs/react'
import upload from '../lib/upload'

export default function AddPost() {
  const [loading, setLoading] = useState(false)
  const { createPost } = usePostStore()
  const { currentUser } = usePage().props
  const [img, setImg] = useState(null)
  async function addPost(e) {
    e.preventDefault()
    const desc = e.target.desc.value
    if (!desc) return
    setLoading(true)
    let imgUrl
    if (img && img.file) {
      imgUrl = await upload(img.file)
    }
    try {
      createPost(desc, imgUrl, currentUser, img && img?.url)
      e.target.desc.value = ''
      setImg(null)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="rounded-lg p-2 shadow-md">
      <form onSubmit={addPost} className="flex flex-col gap-2">
        <div className="flex w-full items-start gap-2">
          <div className={`avatar ${currentUser.avatar ? '' : 'placeholder'}`}>
            {currentUser.avatar ? (
              <div className="w-12 rounded-full">
                <img src={currentUser.avatar} />
              </div>
            ) : (
              <div className="w-12 rounded-full bg-accent text-accent-content">
                <span className="text-2xl capitalize">
                  {currentUser.username.split('')[0]}
                </span>
              </div>
            )}
          </div>
          <div className="flex w-full flex-col items-end gap-3 md:flex-row">
            <div className="textarea flex w-full grow gap-3 bg-base-300">
              <textarea
                name="desc"
                className="w-full grow bg-inherit outline-none"
                placeholder="Bio"
              ></textarea>
              {img && img?.url && (
                <div className="avatar">
                  <div className="w-12 rounded">
                    <img src={img?.url} alt="" />
                  </div>
                  {!loading && (
                    <span
                      className="btn btn-circle btn-xs absolute -right-3 -top-3"
                      onClick={() => setImg(null)}
                    >
                      X
                    </span>
                  )}
                  {loading && (
                    <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black/50">
                      <div className="loading"></div>
                    </div>
                  )}
                </div>
              )}
            </div>
            <button disabled={loading} className="btn btn-accent btn-sm">
              <div className="-rotate-45">
                <HiMiniPaperAirplane />
              </div>
            </button>
          </div>
        </div>
        <div className="flex  flex-wrap items-center gap-3">
          <label className="btn btn-ghost btn-sm flex items-center opacity-70">
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
            <span>Photo</span>
          </label>
          <label className="btn btn-ghost btn-sm flex items-center opacity-70">
            <FaPhotoFilm className="text-xl" />
            <span>Video</span>
          </label>
          <label className="btn btn-ghost btn-sm flex items-center opacity-70">
            <MdEventNote className="text-xl" />
            <span>Events</span>
          </label>
          <label className="btn btn-ghost btn-sm flex items-center opacity-70">
            <FaPoll className="text-xl" />
            <span>Poll</span>
          </label>
        </div>
      </form>
    </div>
  )
}
