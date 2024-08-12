module.exports = {
  friendlyName: 'Login route',

  description: '',

  inputs: {
    email: {
      type: 'string',
      required: true,
      isEmail: true,
    },
    password: {
      type: 'string',
      required: true,
    },
    rememberMe: {
      type: 'boolean',
      defaultsTo: false,
    },
  },

  exits: {
    success: {
      responseType: 'redirect',
    },
    badRequest: {
      responseType: 'badRequest',
    },
  },

  fn: async function ({ email, password, rememberMe }) {
    const user = await User.findOne({ email: email.toLowerCase() })
    if (!user) {
      throw {
        badRequest: {
          problems: [{ login: 'invalid credentials' }],
        },
      }
    }
    const bcryptjs = require('bcryptjs')
    const verified = bcryptjs.compareSync(password, user.password)
    if (!verified) {
      throw {
        badRequest: {
          problems: [{ login: 'invalid credentials' }],
        },
      }
    }
    if (rememberMe) {
      this.req.session.cookie.maxAge =
        sails.config.custom.rememberMeCookieMaxAge
    }
    this.req.session.userId = user.id
    return '/'
  },
}
