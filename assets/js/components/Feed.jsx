import React, { useEffect, useState } from 'react'
import Post from './Post'
import toast from 'react-hot-toast'
import NewPrompt from './NewPrompt'
import usePostStore from '../lib/usePostStore'
import { usePage } from '@inertiajs/react'

export default function Feed({ username }) {
  const { addPost, posts, loading } = usePostStore()
  const { currentUser } = usePage().props

  useEffect(() => {
    addPost(username, toast, currentUser)
  }, [username, addPost])
  return (
    <div className="flex flex-col gap-3 p-4">
      {loading ? (
        <div className="flex w-full items-center justify-center">
          <div className="loading"></div>
        </div>
      ) : (
        <>
          <NewPrompt />
          {posts
            .sort((a, b) => b.createdAt - a.createdAt)
            .map((post) => (
              <Post key={post.id} post={post} />
            ))}
        </>
      )}
    </div>
  )
}
