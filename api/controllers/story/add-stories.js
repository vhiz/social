module.exports = {
  friendlyName: 'Get stories',

  description: '',

  inputs: {
    img: { type: 'string' },
    desc: { type: 'string' },
  },

  exits: {
    success: {
      description: 'All Done',
      responseType: 'inertiaRedirect',
    },
  },

  fn: async function ({ desc, img }) {
    await Story.create({
      user: this.req.session.userId,
      img,
      desc,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
    })

    return '/'
  },
}
