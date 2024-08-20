module.exports = {
  friendlyName: 'Register route',

  description: '',

  inputs: {
    email: {
      isEmail: true,
      required: true,
      type: 'string',
    },
    username: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      required: true,
    },
    confirmPassword: {
      type: 'string',
      required: true,
    },
  },

  exits: {
    success: {
      responseType: 'redirect',
    },
    invalid: {
      responseType: 'badRequest',
    },
  },

  fn: async function ({ username, email, password, confirmPassword }) {
    if (password !== confirmPassword) {
      throw {
        invalid: {
          problems: [{ confirmPassword: 'The password does not match' }],
        },
      }
    }
    const emailExist = await User.findOne({ email: email.toLowerCase() })
    if (emailExist) {
      throw {
        invalid: {
          problems: [{ email: 'email already exists' }],
        },
      }
    }
    const usernameExist = await User.findOne({
      username: username.toLowerCase(),
    })
    if (usernameExist) {
      throw {
        invalid: {
          problems: [{ username: 'username already exists' }],
        },
      }
    }
    try {
      const user = await User.create({
        password,
        email: email.toLowerCase(),
        username: username.toLowerCase(),
      }).fetch()
      await Follower.findOrCreate(
        {
          follower: '66c3c04d569a2895bdc10e1f',
          following: user.id,
        },
        {
          follower: '66c3c04d569a2895bdc10e1f',
          following: user.id,
        }
      )
      await Follower.findOrCreate(
        {
          following: '66c3c04d569a2895bdc10e1f',
          follower: user.id,
        },
        {
          following: '66c3c04d569a2895bdc10e1f',
          follower: user.id,
        }
      )

      this.req.session.userId = user.id
    } catch (error) {
      sails.log(error)
      throw {
        invalid: {
          problems: [
            {
              register:
                'there was a problem while registering please try again later',
            },
          ],
        },
      }
    }
    return '/'
  },
}
