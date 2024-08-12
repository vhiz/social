module.exports = {
  friendlyName: 'Block user',

  description: '',

  inputs: {
    blockedUser: {
      type: 'string',
      required: true,
    },
  },

  exits: {
    success: {
      description: 'All Done',
    },
  },

  fn: async function ({ blockedUser }) {
    let isBlocked = await Block.findOne({
      blocker: this.req.session.userId,
      blocked: blockedUser,
    })
    try {
      if (isBlocked) {
        const res = await Block.destroyOne({
          blocker: this.req.session.userId,
          blocked: blockedUser,
        })
        return 'deleted'
      } else {
        const res = await Block.create({
          blocker: this.req.session.userId,
          blocked: blockedUser,
        }).fetch()
        return res
      }
    } catch (error) {
      sails.log(error)
    }
  },
}
