const express = require('express');
const login = require('./routes/login')
const logout = require('./routes/logout')
const verify = require('./functions/verify');
const dados = require('./db/index')
const PORT = process.env.PORT
const connection = require('./db/index');

const app = express();
 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", verify, (req, res, next) => {
    res.json([{"status":'Conectado'}]);
})

app.get('/con', connection);
app.get('/dados', dados);
app.post('/dados', dados);
app.post('/login', login);
app.post('/logout', logout);

app.listen(PORT, ()=> console.log('listen on http://localhost:8080'));