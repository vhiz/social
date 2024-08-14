module.exports = {
  friendlyName: 'Search',

  description: 'Search home.',

  inputs: {
    query: {
      type: 'string',
    },
  },

  exits: {
    success: {
      description: 'Search home success.',
      responseType: 'inertia',
    },
  },

  fn: async function ({ query }) {
    if (query) {
      const allUsers = await User.find({
        or: [
          { username: { contains: query } },
          { firstName: { contains: query } },
          { lastName: { contains: query } },
        ],
      })

      const users = allUsers.filter(
        (user) => user.id !== this.req.session.userId
      )

      return {
        page: 'search',
        props: {
          query: users,
        },
      }
    }

    return {
      page: 'search',
    }
  },
}
