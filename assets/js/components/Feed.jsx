import React, { useEffect, useState } from 'react'
import Post from './Post'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function Feed({ username }) {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`/post?username=${username || ''}`)
        setPosts(res.data)
      } catch (error) {
        toast.error('Something went wrong')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [username])
  return (
    <div className="flex flex-col gap-3 p-4">
      {loading ? (
        <div className="loading"></div>
      ) : (
        posts.map((post) => <Post key={post.id} post={post} />)
      )}
    </div>
  )
}
