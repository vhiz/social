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
      let blockedUser = await Block.findOne({
        blocked: user.id,
        blocker: this.req.session.userId,
      })
      let requestSent = await FollowRequest.findOne({
        sender: this.req.session.userId,
        receiver: user.id,
      })
      let isFollowing = await Follower.findOne({
        follower: this.req.session.userId,
        following: user.id,
      })
      if (isBlocked) {
        sails.log('You are blocked')
        throw 'notFound'
      }
      return {
        page: 'profile',
        props: {
          user: {
            ...user,
            blockedUser: blockedUser ? true : false,
            requestSent: requestSent ? true : false,
            isFollowing: isFollowing ? true : false,
          },
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
