/**
 * Block.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'blocks',
  attributes: {
    blocker: {
      model: 'user',
    },
    blocked: {
      model: 'user',
    },
  },
}
