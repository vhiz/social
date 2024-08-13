module.exports = {
  friendlyName: 'Accept request',

  description: '',

  inputs: {
    sender: {
      type: 'string',
      required: true,
    },
    type: {
      type: 'string',
      isIn: ['accept', 'delete'],
      required: true,
    },
  },

  exits: {
    success: {
      description: 'All Done',
    },
  },

  fn: async function ({ sender, type }) {
    let friendRequest = await FollowRequest.findOne({
      receiver: this.req.session.userId,
      sender: sender,
    })
    if (friendRequest) {
      if (type === 'accept') {
        const res = await Follower.create({
          follower: sender,
          following: this.req.session.userId,
        }).fetch()

        await FollowRequest.destroyOne({ id: friendRequest.id })
        return res
      } else {
        await FollowRequest.destroyOne({ id: friendRequest.id })
        return 'Deleted'
      }
    } else {
      throw new Error('Request does not exist')
    }

    // All done.
  },
}
