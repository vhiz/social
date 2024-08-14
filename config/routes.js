/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  /***************************************************************************
   *                                                                          *
   * Custom routes here...                                                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the custom routes above, it   *
   * is matched against Sails route blueprints. See `config/blueprints.js`    *
   * for configuration options and examples.                                  *
   *                                                                          *
   ***************************************************************************/
  'GET /': 'home/index',
  'GET /search': 'home/search',

  //profile
  'GET /profile/:username?': 'profile/index',

  //auth
  'GET /login': 'auth/login',
  'GET /register': 'auth/register',
  'POST /login': 'auth/login-route',
  'POST /register': 'auth/register-route',
  'DELETE /logout': 'auth/logout',

  //user
  'POST /user/block': 'user/block-user',
  'POST /user/follow': 'user/follow-user',
  'GET /user/friendRequests': 'user/get-friend-request',
  'POST /user/accept-request': 'user/accept-request',

  //posts
  'POST /post': 'posts/add-post',
  'GET /post': 'posts/get-posts',

  //settings
  'GET /setting': 'setting/index',
}
