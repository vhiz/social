module.exports = {
  friendlyName: 'Like post',

  description: '',

  inputs: {
    postId: {
      type: 'string',
      required: true,
    },
  },

  exits: {
    success: {
      description: 'All Done',
    },
    notFound: {
      responseType: 'notFound',
    },
  },

  fn: async function ({ postId }) {
    const userId = this.req.session.userId
    let post = await Post.findOne({ id: postId }).populate('likes')

    if (!post) {
      sails.log('Could not find post')
      throw 'notFound'
      throw ''
    }

    const likes = post.likes.map((like) => like.user)
    if (likes.includes(userId)) {
      const like = await Like.findOne({ user: userId, post: post.id })
      await Like.destroyOne({ id: like.id })
      return 'deleted'
    } else {
      const like = await Like.create({ user: userId, post: post.id })
      return like
    }
  },
}
