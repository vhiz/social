import React, { useState } from 'react'
import Social from './Social'
import { Link, useForm, usePage } from '@inertiajs/react'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'

export default function RegisterForm(props) {
  const page = usePage().props.errors
  const [see, setSee] = useState(false)
  const { data, setData, processing, errors, post } = useForm({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  })
  function handleSubmit(e) {
    e.preventDefault()
    post('/register')
  }
  return (
    <div className="flex max-h-fit min-h-fit flex-col items-center gap-2 rounded-md bg-base-200 p-8">
      <h2 className="text-lg font-bold">Create your account</h2>
      <h3 className="text-sm opacity-70">
        Welcome! Please fill in the details to get started.
      </h3>
      {page?.register && !processing && (
        <div className="my-2 text-error">{page.register}</div>
      )}
      <Social />
      <div className="divider opacity-70">or</div>
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-sm font-semibold">Username</span>
          </div>
          <input
            type="text"
            value={data.username}
            onChange={(e) => setData('username', e.target.value)}
            placeholder="Type here"
            className="input input-sm input-bordered w-full max-w-xs"
          />
          {errors.username && (
            <span className="text-sm text-error">{errors.username}</span>
          )}
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-sm font-semibold">Email</span>
          </div>
          <input
            type="email"
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
            placeholder="Type here"
            className="input input-sm input-bordered w-full max-w-xs"
          />
          {errors.email && (
            <span className="text-sm text-error">{errors.email}</span>
          )}
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-sm font-semibold">Password</span>
          </div>
          <label className="input input-sm input-bordered flex items-center gap-2">
            <input
              type={see ? 'text' : 'password'}
              placeholder="Type here"
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              className="grow"
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
          {errors.password && (
            <div className="text-sm text-error">{errors.password}</div>
          )}
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-sm font-semibold">
              Confirm Password
            </span>
          </div>
          <input
            type={see ? 'text' : 'password'}
            placeholder="Type here"
            value={data.confirmPassword}
            onChange={(e) => setData('confirmPassword', e.target.value)}
            className="input input-sm input-bordered w-full max-w-xs"
          />
          <div className="text-sm text-error">
            {errors.confirmPassword ||
              (props.confirmPassword && (
                <span className="text-sm text-error">
                  {errors.confirmPassword || props.confirmPassword}
                </span>
              ))}
          </div>
        </label>
        <button className="btn btn-primary btn-sm mt-3" disabled={processing}>
          Continue {processing && <div className="loading"></div>}
        </button>
      </form>
      <div className="divider opacity-70"></div>
      <div className="text-sm opacity-70">
        Already have an account?{' '}
        <Link href="/login" className="link-hover link font-semibold">
          Sign in
        </Link>
      </div>
    </div>
  )
}
