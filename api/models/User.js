/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
const bcryptjs = require('bcryptjs')

module.exports = {
  tableName: 'users',
  attributes: {
    username: {
      type: 'string',
      required: true,
      unique: true,
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
    },
    password: {
      type: 'string',
      required: true,
      unique: true,
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
    posts: {
      collection: 'post',
      via: 'user',
    },
    comments: {
      collection: 'comment',
      via: 'user',
    },
    likes: {
      collection: 'like',
      via: 'user',
    },
    followers: {
      collection: 'follower',
      via: 'follower',
    },
    followings: {
      collection: 'follower',
      via: 'following',
    },
    followRequestSent: {
      collection: 'followRequest',
      via: 'sender',
    },
    followRequestReceived: {
      collection: 'followRequest',
      via: 'receiver',
    },
    blocks: {
      collection: 'block',
      via: 'blocker',
    },
    blockedBy: {
      collection: 'block',
      via: 'blocked',
    },
    stories: {
      collection: 'story',
      via: 'user',
    },
  },
  beforeCreate: async function name(valueToSet, proceed) {
    var salt = bcryptjs.genSaltSync(10)
    valueToSet.password = bcryptjs.hashSync(valueToSet.password, salt)
    return proceed()
  },
  customToJSON: function () {
    return _.omit(this, ['password'])
  },
}
