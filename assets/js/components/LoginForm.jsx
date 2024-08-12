import React, { useState } from 'react'
import { Link, useForm } from '@inertiajs/react'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import Social from './Social'

export default function LoginForm() {
  const [see, setSee] = useState(false)

  const { data, setData, processing, errors, post } = useForm({
    email: '',
    password: '',
    login: '',
    rememberMe: false,
  })

  function handleSubmit(e) {
    e.preventDefault()
    post('/login')
  }
  return (
    <div className="flex max-h-fit min-h-fit flex-col items-center gap-2 rounded-md bg-base-200 p-10">
      <h2 className="text-lg font-bold">Sign in to Timer</h2>
      <h3 className="text-sm opacity-70">
        Welcome back! Please sign in to continue
      </h3>
      <Social />
      <div className="divider opacity-70">or</div>
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-sm font-semibold">Email</span>
          </div>
          <input
            type="email"
            placeholder="Type here"
            onChange={(e) => setData('email', e.target.value)}
            value={data.email}
            className="input input-sm input-bordered w-full max-w-xs"
          />
          {errors.email && (
            <div className="text-sm text-error">{errors.email}</div>
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
              <label className="btn swap-on btn-xs btn-circle btn-ghost">
                <FaEye className="" />
              </label>
              <label className="btn swap-off btn-xs btn-circle btn-ghost">
                <FaEyeSlash className="" />
              </label>
            </label>
          </label>
          {errors.password && (
            <div className="text-sm text-error">{errors.password}</div>
          )}
        </label>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Remember me</span>
            <input
              type="checkbox"
              checked={data.rememberMe}
              className="checkbox checkbox-sm"
              onChange={(e) => setData('rememberMe', e.target.checked)}
            />
          </label>
        </div>
        {errors.login && (
          <div className="flex w-full items-center justify-center text-sm text-error">
            {errors.login}
          </div>
        )}
        <button className="btn btn-primary btn-sm" disabled={processing}>
          Continue {processing && <div className="loading"></div>}
        </button>
      </form>
      <div className="divider opacity-70"></div>
      <div className="text-sm opacity-70">
        Don't have an account?{' '}
        <Link href="/register" className="link-hover link font-semibold">
          Sign up
        </Link>
      </div>
    </div>
  )
}
