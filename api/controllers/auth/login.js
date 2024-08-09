module.exports = {
  friendlyName: 'Login',

  description: 'Login auth.',

  inputs: {},

  exits: {
    success: {
      responseType: 'inertia',
    },
  },

  fn: async function (inputs) {
    // All done.
    return {
      page: 'login',
    }
  },
}
