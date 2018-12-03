const express = require('express');
const pgp = require('pg-promise')();
const next = require('next');
const Router = require('./routes').Router;

const dev = process.env.NODE_ENV !== 'production';
const appPort = parseInt(process.env.PORT, 10) || 3000;
const app = next({ dev });
const {login, password, host, port, database} = require('./config/database.js');

const db = pgp(`postgres://${login}:${password}@${host}:${port}/${database}`);
db.connect()
  .then(r => { // TODO: rename and use the param
    app.prepare().then(() => {
      const server = express();

      Router.forEachPrettyPattern((page, pattern, defaultParams) => {
        server.get(pattern, (req, res) => {
          app.render(req, res, `/${page}`, Object.assign({}, defaultParams, req.query, req.params));
        });
      });

      server.listen(appPort, () => `Listening on ${appPort}`);
    })
  })
  .catch(err => {
    console.log(`Error while connecting to database! Error: ${err}`);
  });
