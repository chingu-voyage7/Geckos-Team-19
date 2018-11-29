const express = require('express');
const pgp = require('pg-promise')();
const {username, password, host, port, database} = require('./config/database.js');

const app = express();
const appPort = 3000;
const db = pgp(`postgres://${username}:${password}@${host}:${port}/${database}`);

if (db) {
    console.log('Connection to database established!');
} else {
    console.log('Error while connecting to database!');
}

app.get('/', (req, res) => res.send('Gecko team 19 ROCKS!'));

app.listen(appPort, () => console.log(`Example app listening on port ${appPort}!`));