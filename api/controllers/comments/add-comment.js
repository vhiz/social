module.exports = {
  friendlyName: 'Add comment',

  description: '',

  inputs: {
    postId: {
      type: 'string',
      required: true,
    },
    desc: {
      type: 'string',
    },
    img: {
      type: 'string',
    },
  },

  exits: {
    notFound: {
      responseType: 'notFound',
    },
  },

  fn: async function ({ postId, desc, img }) {
    let post = await Post.findOne({ id: postId })

    if (!post) {
      sails.log('Could not find post')
      throw 'notFound'
    }

    const userId = this.req.session.userId
    let comment = await Comment.create({
      post: post.id,
      desc: desc,
      img: img,
      user: userId,
    }).fetch()

    let newComment = await Comment.findOne({ id: comment.id })
      .populate('likes')
      .populate('user')

    return newComment
  },
}
