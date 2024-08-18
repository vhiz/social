/**
 * Story.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'stories',
  attributes: {
    user: {
      model: 'user',
    },
    expiresAt: {
      type: 'number',
    },
    img: {
      type: 'string',
    },
    desc: {
      type: 'string',
    },
  },
}
