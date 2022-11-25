const router = require('express').Router();
const restrictHttpMethods = require('../app/middleware/restrictHttpMethod');
const { mailerSend } = require('../app/mailerController');

router
  .route('/')
  .all(restrictHttpMethods(['HEAD', 'POST']))
  .post(mailerSend);

module.exports = router;
