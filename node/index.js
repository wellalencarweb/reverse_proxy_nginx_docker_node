'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Wellington'),('Well'),('Tom');`
connection.query(sql)
connection.end()

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1>Full Cycle Rocks! Teste</h1>');
});-

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);