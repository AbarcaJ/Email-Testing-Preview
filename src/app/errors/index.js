const BadRequestError = require('./vendor/badRequest');
const MethodNotAllowed = require('./vendor/methodNotAllowed');
const NotFoundError = require('./vendor/notFound');
const MailSendError = require('./vendor/mailSendError');

module.exports = {
  BadRequestError,
  MethodNotAllowed,
  NotFoundError,
  MailSendError,
};
