module.exports = {
  friendlyName: 'Logout',

  description: 'Logout something.',

  inputs: {},

  exits: {
    success: {
      responseType: 'inertiaRedirect',
    },
  },

  fn: async function () {
    delete this.req.session.userId
    sails.inertia.flushShared('currentUser')

    return '/login'
  },
}
