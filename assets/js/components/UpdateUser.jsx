import { useForm, usePage } from '@inertiajs/react'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import { FcAddImage } from 'react-icons/fc'
export default function UpdateUser() {
  const [see, setSee] = useState(false)
  const { currentUser } = usePage().props

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
  function handleUpdate(e) {
    e.preventDefault()
    patch('/user/update')
    if (Object.keys(errors).length === 0) {
      reset()
      document.getElementById('updateUser').close()
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
            <input type="file" hidden />
            <div
              className="tooltip tooltip-right"
              data-tip="Add profile picture"
            >
              <FcAddImage className="cursor-pointer text-4xl" />
            </div>
          </label>
          <ErrorMessage error={errors.avatar} />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Cover Picture</span>
          </div>
          <label>
            <input type="file" hidden />
            <div className="tooltip tooltip-right" data-tip="Add cover picture">
              <FcAddImage className="cursor-pointer text-4xl" />
            </div>
          </label>
          <ErrorMessage error={errors.cover} />
        </label>
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
