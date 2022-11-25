const { MethodNotAllowed } = require('../errors');

/** Comprobar si esta usando un metodo HTTP Permitido para la Ruta */
const validateMethods =
  (validMethods = ['GET', 'HEAD']) =>
  (req, res, next) => {
    if (validMethods.includes(req.method)) {
      return next();
    }
    res.set('Allow', validMethods.join(', '));
    throw new MethodNotAllowed(
      `Method: ${req.method} is not allowed for this route.`,
    );
  };

module.exports = validateMethods;
