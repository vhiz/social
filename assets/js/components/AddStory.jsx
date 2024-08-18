import { useState } from 'react'
import { MdAddPhotoAlternate } from 'react-icons/md'
import upload from '../lib/upload'
import { router } from '@inertiajs/react'

export default function AddStory() {
  const [img, setImg] = useState(null)
  const [loading, setLoading] = useState(false)
  async function addStory(e) {
    e.preventDefault()
    const desc = e.target.desc.value
    if (!desc || !img) return
    setLoading(true)
    let imgUrl
    if (img && img.file) {
      imgUrl = await upload(img.file)
    }
    try {
      router.post('/story', {
        img: imgUrl,
        desc,
      })
      document.getElementById('addStory').close()

      e.target.desc.value = ''
      setImg(null)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <form onSubmit={addStory} className="w-full items-center">
      <div className="flex">
        <div className="textarea flex w-full grow gap-3 bg-base-300">
          <textarea
            name="desc"
            className="w-full grow bg-inherit outline-none"
            placeholder="Description"
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
      </div>
      <button className="btn mt-2 w-full" disabled={loading}>
        Send
      </button>
    </form>
  )
}
