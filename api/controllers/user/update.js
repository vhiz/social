module.exports = {
  friendlyName: 'Update',

  description: 'Update user.',

  inputs: {
    email: {
      type: 'string',
      isEmail: true,
    },
    password: {
      type: 'string',
    },
    username: {
      type: 'string',
    },
    cover: {
      type: 'string',
    },
    avatar: {
      type: 'string',
    },
    firstName: {
      type: 'string',
    },
    lastName: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    city: {
      type: 'string',
    },
    school: {
      type: 'string',
    },
    work: {
      type: 'string',
    },
    website: {
      type: 'string',
    },
  },

  exits: {
    badRequest: {
      responseType: 'badRequest',
    },
    success: {
      responseType: 'inertiaRedirect',
    },
  },

  fn: async function (inputs) {
    let {
      email,
      username,
      password,
      description,
      city,
      work,
      website,
      firstName,
      lastName,
      cover,
      avatar,
      school,
    } = inputs

    let filteredFields = Object.fromEntries(
      Object.entries({
        email,
        username,
        password,
        description,
        city,
        work,
        website,
        firstName,
        lastName,
        cover,
        avatar,
        school,
      }).filter(([key, value]) => value)
    )

    if (filteredFields.password) {
      const bcryptjs = require('bcryptjs')
      var salt = bcryptjs.genSaltSync(10)
      filteredFields.password = bcryptjs.hashSync(filteredFields.password, salt)
    }

    if (filteredFields.username) {
      let userExist = await User.findOne({ username: filteredFields.username })

      if (userExist) {
        throw {
          badRequest: {
            problems: [{ username: 'username already exits' }],
          },
        }
      }
    }
    if (filteredFields.email) {
      let userExist = await User.findOne({ email: filteredFields.email })

      if (userExist) {
        throw {
          badRequest: {
            problems: [{ email: 'email already exits' }],
          },
        }
      }
    }

    try {
      await User.updateOne({ id: this.req.session.userId }).set({
        ...filteredFields,
      })
      return '/profile'
    } catch (error) {
      console.log(error)
      throw 'badRequest'
    }
  },
}
