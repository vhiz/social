import useStoryStore from '../lib/storyStore'
import ShowStories from './ShowStories'
export default function StoriesModal() {
  const { stories, setStories } = useStoryStore()

  return (
    <dialog id="storiesModal" className="modal">
      <div className="modal-box max-w-3xl">
        <form method="dialog">
          <button
            className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
            onClick={() => {
              setStories(null)
              document.getElementById('addStory').close()
            }}
          >
            ✕
          </button>
        </form>
        {stories && <ShowStories />}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button
          onClick={() => {
            setStories(null)
            document.getElementById('addStory').close()
          }}
        >
          close
        </button>
      </form>
    </dialog>
  )
}
