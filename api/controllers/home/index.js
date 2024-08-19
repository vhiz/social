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

    const stories = await Story.find({
      user: { in: [...followings, user.id] },
      expiresAt: { '>': new Date() },
    }).populate('user')

    return {
      page: 'index',
      props: {
        stories,
      },
    }
  },
}
