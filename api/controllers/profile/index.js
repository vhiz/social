module.exports = {
  friendlyName: 'Index',

  description: 'Index profile.',

  inputs: {},

  exits: {
    success: {
      responseType: 'inertia',
    },
  },

  fn: async function (inputs) {
    // All done.
    return {
      page: 'profile',
    }
  },
}
