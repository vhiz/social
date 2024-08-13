module.exports = {
  friendlyName: 'Add post',

  description: '',

  inputs: {
    desc: {
      type: 'string',
    },
    img: {
      type: 'string',
    },
  },

  exits: {
    badRequest: {
      responseType: 'badRequest',
    },
    success: {
      description: 'All Done',
    },
  },

  fn: async function ({ desc, img }) {
    try {
      const post = await Post.create({
        desc,
        img,
        user: this.req.session.userId,
      }).fetch()
      return post
    } catch (error) {
      console.log(error)
    }
  },
}
