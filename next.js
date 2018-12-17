const next = require('next');
const Router = require('./routes').Router;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

module.exports = (async server => {
  await app.prepare();
  server.use('/', (req, res, n) => {
      req.app = app;
      req.handle = handle;
      n();
  });
  server.originalListen = server.listen;
  server.listen = (port) => {
      Router.forEachPrettyPattern((page, pattern, defaultParams) => {
        server.get(pattern, (req, res) => {
          app.render(req, res, `/${page}`, Object.assign({}, defaultParams, req.query, req.params));
        });
      });
      server.originalListen(port);
  };
  return server;
});