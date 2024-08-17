import React from 'react'
import Post from './Post'
import usePostStore from '../lib/usePostStore'

export default function NewPrompt() {
  const { dummyPost } = usePostStore()
  return (
    <>
      {dummyPost && (
        <div className="btn-disabled opacity-70 relative">
          <Post post={dummyPost} />
          <div className="absolute top-0 w-full h-full items-center justify-center flex">
            <div className="loading"></div>
          </div>
        </div>
      )}
    </>
  )
}
