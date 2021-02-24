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
//const sqlInsert = `INSERT INTO people(name) values('Wellington'),('Well'),('Tom'), ('FullCycle');`
// App
const app = express();
app.get('/', (req, res) => {
  const connection = mysql.createConnection(config)
  
  connection.query('SELECT name FROM  people', function(err, rows) {
    if (err) {
      throw err;
    }
    
    let list = '';
    rows.forEach( (row) => {
      let result = `<h4>${row.name}</h4>`;
      list = list.concat(result);
      // console.log(`${row.name}`);
    });
    
    res.send('<h1>Full Cycle Rocks!</h1>'+list);
    
  });
  
  connection.end();
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);