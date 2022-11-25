const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const Handlebars = require('handlebars');
const { MailSendError, BadRequestError } = require('./errors');
const {
  MAILER_HOST,
  MAILER_PORT,
  MAILER_IGNORE_TLS,
  MAILER_SECURE,
  MAILER_USER,
  MAILER_PWD,
  MAILER_DEFAULT_FROM,
  MAILER_DEFAULT_TO,
} = require('../config');

const transporter = nodemailer.createTransport({
  host: MAILER_HOST,
  port: +MAILER_PORT,
  ignoreTLS: MAILER_IGNORE_TLS === 'true',
  secure: MAILER_SECURE === 'true',
  tls: { rejectUnauthorized: false },
  auth: { user: MAILER_USER, pass: MAILER_PWD },
});

const sendNodeMail = async (to, subject, html) => {
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `Mail Testing MBE <${MAILER_DEFAULT_FROM}>`,
    to,
    subject,
    html,
  });
  console.log('Message sent: %s', info.messageId);
};

/**
 * @param {string} template Template to use for the email content.
 * @param {object} dynamicData Object with content to replace in the template.
 * @param {string} to, mail recipient.
 */
const sendMail = async (template, dynamicData, to = MAILER_DEFAULT_TO) => {
  if (!template) {
    throw new BadRequestError('The template missing in our request');
  }

  let htmlFileText;
  try {
    htmlFileText = fs.readFileSync(
        path.resolve(`src/templates/${template}.hbs`),
        'utf8',
    );
  } catch (err) {
    if (err?.message.includes('ENOENT: no such file or directory, open')) {
      throw new BadRequestError('The template specified doesn`t exists...');
    }
  }
  if (!htmlFileText) {
    throw new BadRequestError('The template specified doesn`t exists...');
  }

  const compileTemplate = Handlebars.compile(htmlFileText);
  try {
    const subject = `Preview ${template}`;
    await sendNodeMail(to, subject, compileTemplate(dynamicData));
  } catch (error) {
    console.error(error);
    throw new MailSendError('Something is wrong, failed to send mail...');
  }
};

module.exports = sendMail;
