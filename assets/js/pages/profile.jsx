import { usePage } from '@inertiajs/react'
import Feed from '../components/Feed'
import RootLayout from '../layout/RootLayout'

export default function Profile() {
  const { url } = usePage()
  const userId = url.split('/')[2]
  return (
    <RootLayout
      userId={userId}
      header={userId ? 'Marguerite Caldwell' : 'My Profile'}
    >
      {/* profile */}
      <div className="w-full rounded-md">
        <div className="relative h-52 w-full rounded-t-md">
          <img
            src="https://images.unsplash.com/photo-1722925541914-ae7cf154d606?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="absolute left-0 top-0 h-full w-full rounded-t-md object-cover"
          />
          <div className="absolute -bottom-10 left-1/3 lg:left-[40%]">
            <div className="avatar">
              <div className="w-28 rounded-full ring ring-accent ring-offset-2 ring-offset-base-100">
                <img src="https://images.unsplash.com/photo-1722352565642-47e4942af628?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center gap-2 p-2">
          <span className="text-lg">Benjamin Flowers</span>
          <div className="flex items-center text-sm">
            <div className="flex items-center flex-col gap-1">
              <strong>142</strong>
              <span className="opacity-70">Posts</span>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="flex flex-col items-center gap-1">
              <strong>1.2k</strong>
              <span className="opacity-70">Followers</span>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="flex flex-col gap-1 items-center">
              <strong>142k</strong>
              <span className="opacity-70">Following</span>
            </div>
          </div>
        </div>
      </div>
      <Feed />
    </RootLayout>
  )
}
