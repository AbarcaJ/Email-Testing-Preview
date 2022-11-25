const sendMail = require('./mailerService');

const mailerSend = async (req, res) => {
  const { template, ...rest } = req.body;
  await sendMail(template, rest);
  res.json({ status: 'success', message: `Email sent successfully!` });
};

module.exports = {
  mailerSend,
};
