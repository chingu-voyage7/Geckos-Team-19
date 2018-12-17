const express = require('express');
const pgp = require('pg-promise')();
const next = require('./next');


const dev = process.env.NODE_ENV !== 'production';
const app = express();
const port = parseInt(process.env.PORT, 10) || 3000;

if (dev) {
  require('dotenv').load();
}

const db = pgp(`postgres://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_DB}`);

db.connect()
  .then(() => {
    server(port);
  })
  .catch(err => {
    console.log(`Error while connecting to database! Error: ${err}`);
  });

const server = async(port) => {

  await next(app);
  app.listen(port, () => `Listening on ${port}`);
};