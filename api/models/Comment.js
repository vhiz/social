/**
 * Comment.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'comments',
  attributes: {
    desc: {
      type: 'string',
    },
    user: {
      model: 'user',
    },
    img: {
      type: 'string',
    },
    post: {
      model: 'post',
    },
    likes: {
      collection: 'like',
      via: 'comment',
    },
  },
}
