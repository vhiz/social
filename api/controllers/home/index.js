module.exports = {
  friendlyName: 'Home',

  description: 'Home index.',

  inputs: {},

  exits: {
    success: {
      responseType: 'inertia',
    },
  },

  fn: async function () {
    let user = await User.findOne({ id: this.req.session.userId }).populate(
      'followers'
    )
    const followings = user.followers.map((follower) => follower.following)

    const userStory = await Story.find({
      user: user.id,
      expiresAt: { '>': new Date() },
    }).populate('user')
    const followingStories = await Promise.all(
      followings.map(async (following) => {
        const stories = await Story.find({
          user: following,
          expiresAt: { '>': new Date() },
        }).populate('user')

        return stories
      })
    )
    return {
      page: 'index',
      props: {
        stories: userStory.concat(followingStories.flat()),
      },
    }
  },
}
