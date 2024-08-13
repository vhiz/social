import { usePage } from '@inertiajs/react'

export default function UserMediaCard() {
  const { user } = usePage().props
  const postWithMedia = user.posts
    .filter((post) => post.img)
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, 8)
  return (
    <div className="mt-2 w-full rounded-md p-2 shadow-md">
      <div className="flex w-full items-center justify-between">
        <span className="text-sm opacity-70">User Media</span>
        <span className="link-hover link link-secondary text-xs">see all</span>
      </div>
      <div className="mt-2 flex flex-wrap gap-3">
        {postWithMedia.length < 1 ? (
          <div className="flex w-full items-center justify-center p-3 text-xl opacity-70">
            No media found
          </div>
        ) : (
          <>
            {postWithMedia.map((post) => (
              <div className="avatar" key={post.id}>
                <div className="mask mask-squircle w-14 lg:w-20">
                  <img src={post.img} />
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}
