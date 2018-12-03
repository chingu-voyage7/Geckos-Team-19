const express = require('express');
const pgp = require('pg-promise')();
const next = require('next');
const Router = require('./routes').Router;

const dev = process.env.NODE_ENV !== 'production';
const appPort = parseInt(process.env.PORT, 10) || 3000;
const app = next({ dev });
const {login, password, host, port, database} = require('./config/database.js');

app.prepare().then(() => {
  const server = express();
  const db = pgp(`postgres://${login}:${password}@${host}:${port}/${database}`);

  if (db) {
    console.log('Connection to database established!');
  } else {
    console.log('Error while connecting to database!');
  }

  Router.forEachPattern((page, pattern, defaultParams) => {
    server.get(pattern, (req, res) => {
      app.render(req, res, `/${page}`, Object.assign({}, defaultParams, req.query, req.params));
    });
  });

  server.listen(appPort, () => `Listening on ${appPort}`);
})