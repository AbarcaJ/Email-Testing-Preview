const router = require('express').Router();
const restrictHttpMethods = require('../app/middleware/restrictHttpMethod');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

router.all('/', restrictHttpMethods(['HEAD', 'GET']));
router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;
