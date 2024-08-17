module.exports = {
  friendlyName: 'Get comments',

  description: '',

  inputs: {
    postId: {
      type: 'string',
      required: true,
    },
  },

  exits: {
    notFound: {
      responseType: 'notFound',
    },
  },

  fn: async function ({ postId }) {
    let post = await Post.findOne({ id: postId })

    if (!post) {
      sails.log('Could not find post')
      throw 'notFound'
    }
    let comments = await Comment.find({ post: post.id })
      .populate('likes')
      .populate('user')
    return comments
  },
}
