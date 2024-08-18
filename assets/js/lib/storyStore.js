import { create } from 'zustand'

const useStoryStore = create((set) => ({
  stories: null,
  setStories: (stories) => set({ stories }),
}))

export default useStoryStore
