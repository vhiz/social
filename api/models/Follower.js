/**
 * Follower.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'followers',
  attributes: {
    follower: {
      model: 'user',
    },
    following: {
      model: 'user',
    },
  },
}
