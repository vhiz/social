import { HiMiniPaperAirplane } from 'react-icons/hi2'
import { MdAddPhotoAlternate } from 'react-icons/md'
import { FaPhotoFilm } from 'react-icons/fa6'
import { MdEventNote } from 'react-icons/md'
import { FaPoll } from 'react-icons/fa'

export default function AddPost() {
  return (
    <div className="flex flex-col gap-2 rounded-lg p-2 shadow-md">
      <div className="flex w-full items-start gap-2">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full items-end gap-3">
          <textarea
            className="textarea w-full grow bg-base-300"
            placeholder="Bio"
          ></textarea>
          <button className="btn btn-accent btn-sm">
            <div className="-rotate-45">
              <HiMiniPaperAirplane />
            </div>
          </button>
        </div>
      </div>
      <div className="flex  flex-wrap items-center gap-3">
        <label className="flex btn btn-ghost btn-sm items-center opacity-70">
          <MdAddPhotoAlternate className="text-xl" />
          <span>Photo</span>
        </label>
        <label className="flex btn btn-ghost btn-sm items-center opacity-70">
          <FaPhotoFilm className="text-xl" />
          <span>Video</span>
        </label>
        <label className="flex btn btn-ghost btn-sm items-center opacity-70">
          <MdEventNote className="text-xl" />
          <span>Events</span>
        </label>
        <label className="flex btn btn-ghost btn-sm items-center opacity-70">
          <FaPoll className="text-xl" />
          <span>Poll</span>
        </label>
      </div>
    </div>
  )
}
