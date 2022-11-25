const notFoundMiddleware = (req, res) => {
  res.header('Content-Type', 'application/problem+json');
  res.status(404).send({
    status: 'error',
    message: 'Route does not exist. 404',
    info: {
      author: 'Jose Abarca',
      email: 'abarcaj.me@gmail.com',
    },
  });
};

module.exports = notFoundMiddleware;
