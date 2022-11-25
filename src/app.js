/** Modules */
const express = require('express');
require('express-async-errors');

const logger = require('morgan');
const bodyParser = require('body-parser');

/** Definicion de constantes Middleware */
const notFoundMiddleware = require('./app/middleware/routeNotFound');
const errorHandlerMiddleware = require('./app/middleware/errorHandler');

/** Definicion de ExpresssJS */
const app = express();
app.disable('x-powered-by');
app.set('trust proxy', 1); // trust first proxy

app.use(logger('dev'));
app.use(bodyParser.json({ defaultCharset: 'utf-8' }));
app.use(bodyParser.urlencoded({ extended: false, defaultCharset: 'utf-8' }));

/** Registro de rutas. */
app.use('/api', require('./routes/mailerRoutes'));
app.use('/docs', require('./routes/swaggerRoutes'));

/** Favicon */
app.get('/favicon.ico', (req, res) => res.sendStatus(204));

/** Manejo de Rutas 404 (No encontrada) y errores. */
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

module.exports = app;
