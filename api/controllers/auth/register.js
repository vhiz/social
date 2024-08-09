module.exports = {
  friendlyName: 'Register',

  description: 'Register auth.',

  inputs: {},

  exits: {
    success: {
      responseType: 'inertia',
    },
  },

  fn: async function (inputs) {
    // All done.
    return {
      page: 'register',
    }
  },
}
