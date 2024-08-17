module.exports = {
  friendlyName: 'Like comment',

  description: '',

  inputs: {
    commentId: {
      type: 'string',
      required: true,
    },
  },

  exits: {
    notFound:{
      responseType:'notFound'
    }
  },

  fn: async function ({ commentId }) {
    const userId = this.req.session.userId
    let comment = await Comment.findOne({ id: commentId }).populate('likes')

    if (!comment) {
      sails.log('Could not find comment')
      throw 'notFound'
      throw ''
    }

    const likes = comment.likes.map((like) => like.user)
    if (likes.includes(userId)) {
      const like = await Like.findOne({ user: userId, comment: comment.id })
      await Like.destroyOne({ id: like.id })
      return 'deleted'
    } else {
      const like = await Like.create({ user: userId, comment: comment.id })
      return like
    }
  },
}
