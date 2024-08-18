import axios from 'axios'
import { create } from 'zustand'
const usePostStore = create((set) => ({
  posts: [],
  currentUserId: null,
  dummyPost: null,
  loading: true,
  addPost: async (username, toast, currentUser) => {
    try {
      const res = await axios.get(`/post?username=${username || ''}`)
      set((prev) => ({
        ...prev,
        posts: res.data.map((post) => ({
          ...post,
          isLikedByCurrentUser: !!post.likes.find(
            (like) => like.user === currentUser.id
          ),
          likes: post.likes.map((like) => like.user),
          commentsCount: post.comments.length,
        })),
        currentUserId: currentUser.id,
        loading: false,
        dummyPost: null,
      }))
    } catch (error) {
      set((prev) => ({
        ...prev,
        posts: [],
        loading: true,
        dummyPost: null,
      }))
      toast.error('Something went wrong')
    }
  },
  createPost: async (desc, img, currentUser, dummyImg) => {
    try {
      set((prev) => ({
        ...prev,
        dummyPost: {
          id: Math.random(),
          comments: [],
          desc,
          createdAt: Date.now(),
          updatedAt: Date.now(),
          img: dummyImg || '',
          likes: [],
          user: currentUser,
        },
      }))
      const post = await axios.post('/post', { desc, img })
      set((prev) => ({
        ...prev,
        dummyPost: null,
        posts: [
          ...prev.posts,
          { ...post.data, likes: [], comments: [], user: currentUser },
        ],
      }))
    } catch (error) {
      console.log(error)
    }
  },
  likePost: async (postId) => {
    try {
      set((prev) => ({
        ...prev,
        posts: prev.posts.map((post) =>
          post.id === postId
            ? {
                ...post,
                isLikedByCurrentUser: !post.isLikedByCurrentUser,
                likes: post.likes.includes(prev.currentUserId)
                  ? post.likes.filter((like) => like !== prev.currentUserId)
                  : [...post.likes, prev.currentUserId],
              }
            : post
        ),
      }))
      await axios.post(`/post/like`, { postId })
    } catch (error) {
      console.log(error)
      set((prev) => ({
        ...prev,
        posts: prev.posts.map((post) =>
          post.id === postId
            ? {
                ...post,
                isLikedByCurrentUser: !post.isLikedByCurrentUser,
                likes: post.likes.includes(prev.currentUserId)
                  ? post.likes.filter((like) => like !== prev.currentUserId)
                  : [...post.likes, prev.currentUserId],
              }
            : post
        ),
      }))
    }
  },
  addPostCommentCount: (postId) => {
    set((prev) => ({
      ...prev,
      posts: prev.posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              commentsCount: post.commentsCount + 1,
            }
          : post
      ),
    }))
  },

  deletePost: async (postId, toast) => {
    set((prev) => ({
      ...prev,
      posts: prev.posts.filter((post) => post.id !== postId),
    }))
    try {
      await axios.delete(`/post/${postId}`)
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong')
    }
  },
}))

export default usePostStore
