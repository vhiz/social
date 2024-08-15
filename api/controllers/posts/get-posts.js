module.exports = {
  friendlyName: 'Get posts',

  description: '',

  inputs: {
    username: {
      type: 'string',
    },
  },

  exits: {
    notFound: {
      responseType: 'notFound',
    },
  },

  fn: async function ({ username }) {
    if (username) {
      let user = await User.findOne({ username: username })

      if (!user) {
        throw 'notFound'
      }

      const userPosts = await Post.find({ user: user.id })
        .populate('user')
        .populate('comments')
        .populate('likes')
      return userPosts
    } else {
      let user = await User.findOne({ id: this.req.session.userId }).populate(
        'followers'
      )

      const userPosts = await Post.find({ user: user.id }).populate('user')
      const followings = user.followers.map((follower) => follower.following)

      const followingWithPost = await Promise.all(
        followings.map(async (following) => {
          const posts = await Post.find({ user: following })
            .populate('user')
            .populate('comments')
            .populate('likes')
          return posts
        })
      )
      return userPosts.concat(followingWithPost.flat())
    }
  },
}
