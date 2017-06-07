/**
 * HTTP Basic auth for access security
 */
const Bcrypt = require('bcrypt');

class Validate {
  constructor (users) {
    this.users = users;

    return this.validate;
  }

  /**
   * Validate a given request against allowed passwords and users
   * @param  {Object}   request  Request that sould e handled
   * @param  {String}   username Username to validate
   * @param  {String}   password Provided password
   * @param  {Function} callback
   * @return {void}
   */
  validate (request, username, password, callback) {
    const user = this.users[username];

    if (!user) {
      return callback(null, false);
    }

    Bcrypt.compare(password, user.password, (error, isValid) => {
      callback(error, isValid, {
        id: user.id,
        name: user.name
      });
    });
  }
};

module.exports = Validate;
