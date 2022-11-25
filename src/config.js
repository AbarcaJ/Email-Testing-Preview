require('dotenv').config();

const config = {
  EXPRESS_PORT: process.env.PORT || 5000,

  // Mailing
  MAILER_HOST: process.env.MAILER_HOST,
  MAILER_PORT: process.env.MAILER_PORT,
  MAILER_IGNORE_TLS: process.env.MAILER_IGNORE_TLS || true,
  MAILER_SECURE: process.env.MAILER_SECURE,
  MAILER_USER: process.env.MAILER_USER,
  MAILER_PWD: process.env.MAILER_PWD,
  MAILER_DEFAULT_FROM: process.env.MAILER_DEFAULT_FROM,
  MAILER_DEFAULT_TO: process.env.MAILER_DEFAULT_TO,
};

module.exports = config;
