import { useForm, usePage } from '@inertiajs/react'
import { useEffect, useState } from 'react'
import { FaCircleCheck, FaEye, FaEyeSlash } from 'react-icons/fa6'
import { FcAddImage } from 'react-icons/fc'
import upload from '../lib/upload'
export default function UpdateUser() {
  const [see, setSee] = useState(false)
  const { currentUser } = usePage().props
  const [imagesObj, setImagesObj] = useState({
    cover: null,
    avatar: null,
  })
  const [uploading, setUploading] = useState(false)
  const [uploaded, setUploaded] = useState({
    avatar: false,
    cover: false,
  })
  //normal form
  //   async function handleUpdate(e) {
  //     e.preventDefault()
  //     const formData = new FormData(e.target)
  //     const inputs = Object.fromEntries(
  //       [...formData.entries()].filter(([key, value]) => value)
  //     )
  //     console.log(inputs)
  //   }

  const { data, setData, processing, errors, patch, reset } = useForm({
    email: '',
    password: '',
    username: '',
    cover: '',
    avatar: '',
    firstName: '',
    lastName: '',
    description: '',
    city: '',
    school: '',
    work: '',
    website: '',
  })

  async function handleUpdate(e) {
    e.preventDefault()

    patch('/user/update', {
      preserveScroll: true,
      onSuccess: () => {
        reset()
        document.getElementById('updateUser').close()
        setUploaded({ avatar: false, cover: true })
      },
    })
  }
  function handleImgChange(e) {
    const { files, name } = e.target
    setImagesObj((prev) => ({
      ...prev,
      [name]: { file: files[0], url: URL.createObjectURL(files[0]) },
    }))
  }
  async function handleAvatar() {
    if (imagesObj.avatar && !uploaded.avatar) {
      setUploading(true)
      const avatarUrl = await upload(imagesObj.avatar.file)
      setData('avatar', avatarUrl)
      setUploading(false)
      setUploaded((prev) => ({ ...prev, avatar: true }))
    }
  }
  async function handleCover() {
    if (imagesObj.cover && !uploaded.cover) {
      setUploading(true)
      const coverUrl = await upload(imagesObj.cover.file)
      setData('cover', coverUrl)
      setUploading(false)
      setUploaded((prev) => ({ ...prev, cover: true }))
    }
  }

  return (
    <div className="w-full">
      <span className="font-semibold opacity-70">Update Information</span>
      <form onSubmit={handleUpdate} className="flex w-full flex-col gap-2">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Username</span>
          </div>
          <input
            type="text"
            placeholder={currentUser?.username}
            className="input input-bordered w-full"
            name="username"
            value={data.username}
            onChange={(e) => setData('username', e.target.value)}
          />
          <ErrorMessage error={errors.username} />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="email"
            name="email"
            placeholder={currentUser?.email}
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
            className="input input-bordered w-full"
          />
          <ErrorMessage error={errors.email} />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <label className="input input-bordered flex w-full items-center gap-2">
            <input
              name="password"
              type={see ? 'text' : 'password'}
              className="grow"
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
            />
            <label
              className="swap swap-rotate"
              onClick={() => setSee((prev) => !prev)}
            >
              <input type="checkbox" checked={see} />
              <label className="btn btn-circle btn-ghost swap-on btn-xs">
                <FaEye className="" />
              </label>
              <label className="btn btn-circle btn-ghost swap-off btn-xs">
                <FaEyeSlash className="" />
              </label>
            </label>
          </label>
          <ErrorMessage error={errors.password} />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Profile Picture</span>
          </div>
          <label>
            <input
              type="file"
              hidden
              name="avatar"
              accept="image/*"
              multiple={false}
              onChange={handleImgChange}
            />
            <div
              className="tooltip tooltip-right"
              data-tip="Add profile picture"
            >
              <div className="flex items-center gap-2">
                <FcAddImage className="cursor-pointer text-4xl" />
              </div>
            </div>
          </label>
          <ErrorMessage error={errors.avatar} />
        </label>
        <div className="flex items-center gap-2">
          <div
            className={`btn w-max ${
              uploading || uploaded.avatar ? 'btn-disabled' : ''
            }`}
            onClick={handleAvatar}
          >
            {uploading ? (
              <div className="loading"></div>
            ) : uploaded.avatar ? (
              'Uploaded'
            ) : (
              'Upload Profile'
            )}
          </div>
          {imagesObj?.avatar?.file && (
            <div className={`avatar ${uploaded.avatar ? 'opacity-60' : ''}`}>
              <div className="w-16 rounded">
                <img src={imagesObj?.avatar?.url} alt="profile" />
              </div>
              <div className="absolute -right-3 -top-4 z-10 ">
                {!uploaded.avatar && (
                  <div
                    className="btn btn-circle btn-xs items-center justify-center"
                    onClick={() =>
                      setImagesObj((prev) => ({ ...prev, avatar: null }))
                    }
                  >
                    X
                  </div>
                )}
              </div>
              {uploaded.avatar && (
                <div className="absolute left-0 top-0 h-full w-full">
                  <FaCircleCheck className="text-lg text-lime-500" />
                </div>
              )}
            </div>
          )}
        </div>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Cover Picture</span>
          </div>
          <label>
            <input
              type="file"
              accept="image/*"
              multiple={false}
              name="cover"
              onChange={handleImgChange}
              hidden
            />
            <div className="tooltip tooltip-right" data-tip="Add cover picture">
              <FcAddImage className="cursor-pointer text-4xl" />
            </div>
          </label>
          <ErrorMessage error={errors.cover} />
        </label>
        <div className="flex items-center gap-2">
          <div
            className={`btn w-max ${
              uploading || uploaded.cover ? 'btn-disabled' : ''
            }`}
            onClick={handleCover}
          >
            {uploading ? (
              <div className="loading"></div>
            ) : uploaded.cover ? (
              'Uploaded'
            ) : (
              'Upload Cover'
            )}
          </div>
          {imagesObj?.cover?.file && (
            <div className={`avatar ${uploaded.cover ? 'opacity-60' : ''}`}>
              <div className="w-16 rounded">
                <img src={imagesObj?.cover?.url} alt="profile" />
              </div>
              <div className="absolute -right-3 -top-4 z-10 ">
                {!uploaded.cover && (
                  <div
                    className="btn btn-circle btn-xs items-center justify-center"
                    onClick={() =>
                      setImagesObj((prev) => ({ ...prev, cover: null }))
                    }
                  >
                    X
                  </div>
                )}
              </div>
              {uploaded.cover && (
                <div className="absolute left-0 top-0 h-full w-full">
                  <FaCircleCheck className="text-lg text-lime-500" />
                </div>
              )}
            </div>
          )}
        </div>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">First Name</span>
          </div>
          <input
            type="text"
            name="firstName"
            placeholder={currentUser?.firstName}
            className="input input-bordered w-full"
            value={data.firstName}
            onChange={(e) => setData('firstName', e.target.value)}
          />
          <ErrorMessage error={errors.firstName} />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Last Name</span>
          </div>
          <input
            type="text"
            name="lastName"
            placeholder={currentUser?.lastName}
            className="input input-bordered w-full"
            value={data.lastName}
            onChange={(e) => setData('lastName', e.target.value)}
          />
          <ErrorMessage error={errors.lastName} />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Bio</span>
          </div>
          <input
            type="text"
            name="description"
            placeholder={currentUser?.description}
            className="textarea textarea-bordered h-20 w-full"
            value={data.description}
            onChange={(e) => setData('description', e.target.value)}
          />
          <ErrorMessage error={errors.description} />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">City</span>
          </div>
          <input
            type="text"
            name="city"
            placeholder={currentUser?.city}
            className="input input-bordered w-full"
            value={data.city}
            onChange={(e) => setData('city', e.target.value)}
          />
          <ErrorMessage error={errors.city} />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">School</span>
          </div>
          <input
            type="text"
            name="school"
            placeholder={currentUser?.school}
            className="input input-bordered w-full"
            value={data.school}
            onChange={(e) => setData('school', e.target.value)}
          />
          <ErrorMessage error={errors.school} />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Work</span>
          </div>
          <input
            type="text"
            name="work"
            placeholder={currentUser?.work}
            className="input input-bordered w-full"
            value={data.work}
            onChange={(e) => setData('work', e.target.value)}
          />
          <ErrorMessage error={errors.work} />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Website</span>
          </div>
          <input
            type="text"
            name="website"
            placeholder={currentUser?.website}
            className="input input-bordered w-full"
            value={data.website}
            onChange={(e) => setData('website', e.target.value)}
          />
          <ErrorMessage error={errors.website} />
        </label>
        <button disabled={processing} className="btn btn-primary">
          {processing ? <div className="loading"></div> : 'Update'}
        </button>
      </form>
    </div>
  )
}

function ErrorMessage({ error }) {
  return (
    <div className="label">
      {error && (
        <div className="label-text-alt text-sm text-error">{error}</div>
      )}
    </div>
  )
}
