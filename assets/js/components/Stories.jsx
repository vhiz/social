import { usePage } from '@inertiajs/react'
import { PiPlusCircleFill } from 'react-icons/pi'
import { Swiper, SwiperSlide } from 'swiper/react'
import useStoryStore from '../lib/storyStore'

export default function Stories() {
  const { stories, currentUser } = usePage().props
  const { setStories } = useStoryStore()
  const groupedData = stories.reduce((acc, story) => {
    const existingUser = acc.find((user) => user.id === story.user.id)

    if (existingUser) {
      existingUser.stories.unshift(story)
      if (new Date(story.createdAt) > new Date(existingUser.createdAt)) {
        existingUser.createdAt = story.createdAt
      }
    } else {
      acc.push({
        id: story.user.id,
        name:
          story.user.firstName && story.user.lastName
            ? `${story.user.firstName} ${story.user.lastName}`
            : story.user.username,
        stories: [story],
        createdAt: story.createdAt,
      })
    }

    return acc
  }, [])

  return (
    <div className="flex overflow-x-scroll rounded-lg p-4 text-xs shadow-xl scrollbar-none">
      <Swiper
        slidesPerView={3}
        breakpoints={{
          360: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          375: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 10,
          },
        }}
        className="w-full"
        style={{ padding: '0.5rem' }}
      >
        <SwiperSlide>
          <div className="flex cursor-pointer flex-col items-center gap-2">
            <div className="avatar">
              <div className="w-16 rounded-full ">
                <img
                  src={
                    currentUser.avatar ||
                    `https://avatar.iran.liara.run/username?username=${currentUser.username}`
                  }
                />
              </div>
              <div
                className="absolute bottom-0 right-0"
                onClick={() => document.getElementById('addStory').showModal()}
              >
                <PiPlusCircleFill className="text-xl text-blue-500" />
              </div>
            </div>
            <span className="text-xs">
              {currentUser.firstName && currentUser.lastName
                ? `${currentUser.firstName} ${currentUser.lastName}`
                : currentUser.username}
            </span>
          </div>
        </SwiperSlide>
        {groupedData
          .sort((a, b) => b.createdAt - a.createdAt)
          .map((story) => (
            <SwiperSlide key={story.id}>
              <div
                className="flex cursor-pointer flex-col items-center gap-2"
                onClick={() => {
                  setStories(story)
                  document.getElementById('storiesModal').showModal()
                }}
              >
                <div className="avatar">
                  <div className="w-16 rounded-full ring ring-primary ring-offset-1 ring-offset-base-100">
                    <img src={story.stories[0].img} />
                  </div>
                </div>
                <span className="text-xs">{story.name}</span>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}
