module.exports = {
  friendlyName: 'Follow user',

  description: '',

  inputs: {
    receiver: {
      required: true,
      type: 'string',
    },
  },

  exits: {
    success: {
      description: 'All Done',
    },
  },

  fn: async function ({ receiver }) {
    let isBlocked = await Block.findOne({
      blocker: this.req.session.userId,
      blocked: receiver,
    })
    if (!isBlocked) {
      let friendRequest = await FollowRequest.findOne({
        sender: this.req.session.userId,
        receiver,
      })

      let isFollowing = await Follower.findOne({
        follower: this.req.session.userId,
        following: receiver,
      })
      if (isFollowing) {
        await Follower.destroyOne({ id: isFollowing.id })
        return 'UnFollowed'
      }
      if (friendRequest) {
        await FollowRequest.destroyOne({
          sender: this.req.session.userId,
          receiver,
        })
        return 'Friend request deleted'
      } else {
        const res = await FollowRequest.create({
          sender: this.req.session.userId,
          receiver,
        })
        return res
      }
    }
    return 'you blocked this user'
  },
}
