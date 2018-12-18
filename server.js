const express = require('express');
const pgp = require('pg-promise')();
const next = require('next');
const Router = require('./routes').Router;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const port = parseInt(process.env.PORT, 10) || 3000;

if (dev) {
  require('dotenv').load();
}

const db = pgp(`postgres://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_DB}`);
db.connect()
  .then(r => { // TODO: rename and use the param
    app.prepare().then(() => {
      const server = express();

      Router.forEachPrettyPattern((page, pattern, defaultParams) => {
        server.get(pattern, (req, res) => {
          app.render(req, res, `/${page}`, Object.assign({}, defaultParams, req.query, req.params));
        });
      });

      server.listen(port, () => `Listening on ${port}`);
    })
  })
  .catch(err => {
    console.log(`Error while connecting to database! Error: ${err}`);
  });
