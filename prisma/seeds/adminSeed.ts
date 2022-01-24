const passwordHash = require('password-hash');

module.exports.AdminSeed = Object.freeze({
  name: process.env.USER_ADMIN_NAME,
  email: process.env.USER_ADMIN_EMAIL,
  password: passwordHash.generate(process.env.USER_ADMIN_PASSWORD),
  type: 'admin',
});
