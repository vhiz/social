module.exports = {
  friendlyName: 'Get friend request',

  description: '',

  inputs: {},

  exits: {
    success: {
      description: 'All Done',
    },
  },

  fn: async function () {
    let friendRequests = await FollowRequest.find({
      receiver: this.req.session.userId,
    }).populate('sender')
    return friendRequests
  },
}
