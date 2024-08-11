import { BsEmojiSunglassesFill } from 'react-icons/bs'
import Comment from './Comment'
export default function Comments() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center gap-2">
        <div className="avatar">
          <div className="w-6 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <label className="input input-sm flex w-full items-center gap-2 bg-base-200">
          <input type="text" className="grow" placeholder="Type Something" />
          <button className="btn btn-circle btn-ghost btn-sm">
            <BsEmojiSunglassesFill className="text-yellow-500" />
          </button>
        </label>
      </div>
      <div className="divider" />
      <div className="w-full">
        {Array(5)
          .fill()
          .map((_, i) => (
            <Comment key={i} img={i === i % 2}/>
          ))}
      </div>
    </div>
  )
}
