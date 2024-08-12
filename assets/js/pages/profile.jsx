import Feed from '../components/Feed'
import RootLayout from '../layout/RootLayout'

export default function Profile({ user }) {
  return (
    <RootLayout
      header={
        user.firstName && user.lastName
          ? `${user.firstName} ${user.lastName}`
          : user.username
      }
    >
      {/* profile */}
      <div className="w-full rounded-md">
        <div className="relative h-52 w-full rounded-t-md">
          <img
            src={user.cover}
            alt=""
            className="absolute left-0 top-0 h-full w-full rounded-t-md object-cover"
          />
          <div className="absolute -bottom-10 left-1/3 lg:left-[40%]">
            <div className={`avatar ${user.avatar ? '' : 'placeholder'}`}>
              {user.avatar ? (
                <div className="w-28 rounded-full ring ring-accent ring-offset-2 ring-offset-base-100">
                  <img src={user.avatar} />
                </div>
              ) : (
                <div className="w-28 rounded-full bg-accent text-accent-content ring ring-accent ring-offset-2 ring-offset-base-100">
                  <span className="text-3xl capitalize">
                    {user.username.split('')[0]}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center gap-2 p-2">
          <span className="text-lg">
            {user.firstName && user.lastName
              ? `${user.firstName} ${user.lastName}`
              : user.username}
          </span>
          <div className="flex items-center text-sm">
            <div className="flex flex-col items-center gap-1">
              <strong>{user.posts.length}</strong>
              <span className="opacity-70">Posts</span>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="flex flex-col items-center gap-1">
              <strong>{user.followers.length}</strong>
              <span className="opacity-70">Followers</span>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="flex flex-col items-center gap-1">
              <strong>{user.followings.length}</strong>
              <span className="opacity-70">Following</span>
            </div>
          </div>
        </div>
      </div>
      <Feed />
    </RootLayout>
  )
}
