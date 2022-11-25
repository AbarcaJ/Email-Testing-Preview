const { NODE_ENV } = require('../../config');

/** Estandar de handling de error */
const errorHandlerMiddleware = (err, req, res, next) => {
  /** Avoid responses to requests where headers are already sent !! */
  if (res.headersSent) return res.end();

  const customError = {
    statusCode: err.statusCode || 500,
    message: err.message || 'Something went wrong, please try again later',
  };

  res.header('Content-Type', 'application/problem+json');
  if (NODE_ENV === 'dev') {
    console.error(err);
  }
  return res
    .status(customError.statusCode)
    .json({ status: 'error', message: customError.message });
};

module.exports = errorHandlerMiddleware;
