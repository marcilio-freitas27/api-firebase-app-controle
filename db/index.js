const mysql = require('mysql');
const express = require('express');

const con = new mysql.createConnection({
    host: 'us-cdbr-east-06.cleardb.net',
    user:'bb4cf6cb17111a',
    password: 'ce1d05d7',
    database: 'heroku_c64cf4ce1275151'
  })

const app = express();

app.get('/dados', (req, res)=>{
    con.query('SELECT * FROM clientes',(err, result) => {
      if(err) {
        throw err;
      }
      res.status(200).send(result);
    });
  })

app.post('/dados', (req, res)=>{
    const codigo = req.body.id;
    const nome = req.body.nome;
    const email = req.body.email;
    con.query(`INSERT INTO CLIENTES (id, nome, email, ativo) VALUES (?, ?, ?, ?)`, [codigo, nome, email, 1],(err, result) => {
      if(err) {
        throw err;
      }
      res.status(200).send(result);
    });
  })


module.exports = app;