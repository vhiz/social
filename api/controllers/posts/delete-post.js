module.exports = {
  friendlyName: 'Delete post',

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
    success:{
      description:'all DOne'
    }
  },

  fn: async function ({ postId }) {
    let post = await Post.findOne({ id: postId, user: this.req.session.userId })

    if (!post) {
      sails.log('Could not find ')
      throw 'notFound'
    }

    await Post.destroyOne({ id: post.id })
    return 'deleted'
  },
}
