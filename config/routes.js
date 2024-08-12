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

  //profile
  'GET /profile/:username?': 'profile/index',

  //auth
  'GET /login': 'auth/login',
  'GET /register': 'auth/register',
  'POST /login': 'auth/login-route',
  'POST /register': 'auth/register-route',
  'DELETE /logout': 'auth/logout',

  //settings
  'GET /setting': 'setting/index',
}
