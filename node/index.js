'use strict';

const express = require('express');

// Constants
const PORT = 5000;
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
const sqlList = `SELECT * FROM  people;`
const list = 'aqui'
connection.query(sql)
connection.query(sqlList)


// connection.connect(function(err) {
//   if (err) throw err;
//   con.query(sqlList, function (err, result, fields) {
//     if (err) throw err;
//     list = result
//     console.log(result);
//   });
// });

connection.end()

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1>Full Cycle Rocks!</h1>');
  res.send(`<h1>${list}</h1>`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);