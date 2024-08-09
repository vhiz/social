module.exports = {
  friendlyName: 'Index',

  description: 'Index setting.',

  inputs: {},

  exits: {
    success: {
      responseType: 'inertia',
    },
  },

  fn: async function (inputs) {
    // All done.
    return {
      page: 'setting',
    }
  },
}
