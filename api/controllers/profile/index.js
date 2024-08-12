module.exports = {
  friendlyName: 'Index',

  description: 'Index profile.',

  inputs: {
    username: {
      type: 'string',
    },
  },

  exits: {
    success: {
      responseType: 'inertia',
    },
    notFound: {
      responseType: 'notFound',
    },
  },

  fn: async function ({ username }) {
    if (username) {
      const user = await User.findOne({ username })
        .populate('followers')
        .populate('followings')
        .populate('posts')
        .populate('blocks')

      if (!user) {
        sails.log('Could not find the user')
        throw 'notFound'
      }

      let isBlocked = await Block.findOne({
        blocker: user.id,
        blocked: this.req.session.userId,
      })
      if (isBlocked) {
        sails.log('You are blocked')

        throw 'notFound'
      }
      return {
        page: 'profile',
        props: {
          user: user,
        },
      }
    } else {
      const user = await User.findOne({ id: this.req.session.userId })
        .populate('followers')
        .populate('followings')
        .populate('posts')
      return {
        page: 'profile',
        props: {
          user,
        },
      }
    }
  },
}
