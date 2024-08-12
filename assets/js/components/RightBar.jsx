import FriendRequest from './FriendRequest'
import Birthday from './Birthday'
import Ad from './Ad'
import UserInfoCard from './UserInfoCard'
import UserMediaCard from './UserMediaCard'

export default function RightBar({ userId }) {
  return (
    <div className="fixed top-[4.5rem] h-[calc(100vh-4rem)]">
      <div className="flex h-full w-full flex-col items-center gap-6 overflow-y-scroll">
        {userId && (
          <>
            <UserInfoCard />
            <UserMediaCard />
          </>
        )}
        <FriendRequest />
        <Birthday />
        <Ad />
      </div>
    </div>
  )
}
