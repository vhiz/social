/**
 * Like.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'likes',
  attributes: {
    user: {
      model: 'user',
    },
    post: {
      model: 'post',
    },
    comment: {
      model: 'comment',
    },
  },
}
