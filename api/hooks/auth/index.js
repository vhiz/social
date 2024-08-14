/**
 * auth hook
 *
 * @description :: A hook definition.  Extends Sails by adding shadow routes, implicit actions, and/or initialization logic.
 * @docs        :: https://sailsjs.com/docs/concepts/extending-sails/hooks
 */

module.exports = function defineAuthHook(sails) {
  return {
    /**
     * Runs when this Sails app loads/lifts.
     */
    initialize: async function () {
      sails.log.info('Initializing custom hook (`auth`)')
    },
    routes: {
      before: {
        'GET /*': {
          skipAssets: true,
          fn: async function (req, res, next) {
            if (req.session.userId) {
              const currentUser = await User.findOne({
                id: req.session.userId,
              }).populate('followings')

              if (!currentUser) {
                sails.log.warn(
                  'Somehow, the user record for the logged-in user (`' +
                    req.session.userId +
                    '`) has gone missing....'
                )
                delete req.session.userId
                return res.redirect('/login')
              }
              const followings = await Promise.all(
                currentUser.followings.map(async (following) => {
                  const follower = await User.findOne({
                    id: following.follower,
                  })
                  return follower
                })
              )
              sails.inertia.share('currentUser', { ...currentUser, followings })
              res.setHeader('Cache-Control', 'no-cache, no-store')
              return next()
            } else {
              sails.inertia.flushShared('currentUser')
            }

            return next()
          },
        },
      },
    },
  }
}
