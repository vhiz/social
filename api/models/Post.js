/**
 * Posts.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'posts',
  attributes: {
    desc: {
      type: 'string',
    },
    img: {
      type: 'string',
    },
    user: {
      model: 'user',
    },
    comments: {
      collection: 'comment',
      via: 'post',
    },
    likes: {
      collection: 'like',
      via: 'post',
    },
  },
}
