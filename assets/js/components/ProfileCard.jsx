import { Link, usePage } from '@inertiajs/react'

export default function ProfileCard() {
  const { currentUser } = usePage().props
  return (
    <div className="w-full rounded-box p-2 shadow-md">
      <div className="relative h-24 w-full rounded-box">
        {currentUser.cover ? (
          <img
            src={currentUser.cover || ''}
            alt=""
            className="absolute left-0 top-0 h-full w-full rounded-box object-cover"
          />
        ) : (
          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-box bg-neutral">
            <span className="text-4xl capitalize">
              {currentUser.username.split('')[0]}
            </span>
          </div>
        )}
        <div className="absolute -bottom-10 left-1/3">
          <div className={`avatar ${currentUser.avatar ? '' : 'placeholder'}`}>
            {currentUser.avatar ? (
              <div className="w-16 rounded-full ring ring-accent ring-offset-2 ring-offset-base-100">
                <img src={currentUser.avatar} />
              </div>
            ) : (
              <div className="w-16 rounded-full bg-accent ring ring-accent ring-offset-2 ring-offset-base-100 text-accent-content">
                <span className="text-2xl capitalize">
                  {currentUser.username.split('')[0]}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-11 flex w-full flex-col items-center gap-2">
        <span className="font-semibold">
          {currentUser.firstName && currentUser.lastName
            ? `${currentUser.firstName}  ${currentUser.lastName}`
            : `@${currentUser.username}`}
        </span>
        {currentUser.followers.length > 0 && (
          <div className="flex items-center gap-2">
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              {currentUser.followers.map((user) => (
                <div
                  key={user.id}
                  className={`avatar ${user.avatar ? '' : 'placeholder'}`}
                >
                  {user.avatar ? (
                    <div className="w-7">
                      <img src={user.avatar} />
                    </div>
                  ) : (
                    <div className="w-7 bg-accent text-accent-content">
                      <span className="text-xl capitalize">
                        {user.username.split('')[0]}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <span className="text-sm opacity-70">
              {currentUser.followers.length}+ followers
            </span>
          </div>
        )}
        <Link href="/profile" className="btn btn-info btn-sm">
          My Profile
        </Link>
      </div>
    </div>
  )
}
