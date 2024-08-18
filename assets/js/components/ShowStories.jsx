import { FaCircleArrowLeft } from 'react-icons/fa6'
import { FaCircleArrowRight } from 'react-icons/fa6'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css/navigation'
import { useRef } from 'react'
import useStoryStore from '../lib/storyStore'
import moment from 'moment'
export default function ShowStories() {
  const { stories } = useStoryStore()
  const prevButtonRef = useRef(null)
  const nextButtonRef = useRef(null)
  const progressCircle = useRef(null)
  const progressContent = useRef(null)
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress)
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
  }
  return (
    <div className="h-[calc(100vh-8em)] w-full p-2">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevButtonRef.current
          swiper.params.navigation.nextEl = nextButtonRef.current
          swiper.navigation.init()
          swiper.navigation.update()
        }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="h-full w-full"
      >
        {stories.stories.map((story) => (
          <SwiperSlide>
            <div className="relative h-full w-full">
              <img
                src={story.img}
                alt=""
                className="h-full w-full object-contain"
              />
              <div className="absolute left-0 top-0 flex h-20 w-full items-center gap-2 bg-gradient-to-b from-base-100/60 to-base-100/0 p-4">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src={
                        story.user.avatar ||
                        `https://avatar.iran.liara.run/username?username=${story.user.username}`
                      }
                    />
                  </div>
                </div>
                <div className="ml-3 flex flex-col">
                  <span className="text-lg">
                    {story.user.firstName && story.user.lastName
                      ? `${story.user.firstName} ${story.user.lastName}`
                      : story.user.username}
                  </span>

                  <span className="text-xs">
                    {moment(story.createdAt).fromNow()}
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 flex h-32 w-full items-center gap-2 bg-gradient-to-t from-base-100 to-base-100/0 p-4">
                <div className="w-full text-center text-lg">{story.desc}</div>
                <div className="autoplay-progress" slot="container-end">
                  <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                  </svg>
                  <span ref={progressContent}></span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute left-0 top-1/2 z-20 -translate-y-1/2 transform">
        <button ref={prevButtonRef} className="rounded p-2">
          <FaCircleArrowLeft className="text-xl" />
        </button>
      </div>
      <div className="absolute right-0 top-1/2 z-20 -translate-y-1/2 transform">
        <button ref={nextButtonRef} className="rounded p-2">
          <FaCircleArrowRight className="text-xl" />
        </button>
      </div>
    </div>
  )
}
