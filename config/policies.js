/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {
  /***************************************************************************
   *                                                                          *
   * Default policy for all controllers and actions, unless overridden.       *
   * (`true` allows public access)                                            *
   *                                                                          *
   ***************************************************************************/
  '*': false,
  'home/*': 'is-auth',
  'auth/*': 'is-guest',
  'auth/logout': 'is-auth',
  'profile/*': 'is-auth',
  'setting/*': 'is-auth',
  'user/*': 'is-auth',
}
