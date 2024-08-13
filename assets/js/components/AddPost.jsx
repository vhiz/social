import { HiMiniPaperAirplane } from 'react-icons/hi2'
import { MdAddPhotoAlternate } from 'react-icons/md'
import { FaPhotoFilm } from 'react-icons/fa6'
import { MdEventNote } from 'react-icons/md'
import { FaPoll } from 'react-icons/fa'
import axios from 'axios'
import { useState } from 'react'

export default function AddPost() {
  const [loading, setLoading] = useState(false)

  async function addPost(e) {
    e.preventDefault()
    const desc = e.target.desc.value
    if (!desc) return
    setLoading(true)
    try {
      const post = await axios.post('/post', { desc })
      e.target.desc.value = ''
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
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div className="flex w-full flex-col items-end gap-3 md:flex-row">
            <textarea
              name="desc"
              className="textarea w-full grow bg-base-300"
              placeholder="Bio"
            ></textarea>
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
