class MailSendError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 500;
  }
}

module.exports = MailSendError;
