const { EXPRESS_PORT } = require('./config');
const app = require('./app');

/** INICIAMOS LA APP */
async function initApp(PORT) {
  try {
    app.set('port', PORT);
    const server = app.listen(PORT, () =>
      console.log(
        `[OK] Express listening on: http://${server.address().address}:${PORT}`,
      ),
    );
  } catch (e) {
    console.error(e);
    process.exit(0);
  }
}
initApp(EXPRESS_PORT);
