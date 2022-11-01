const express = require('express');
const login = require('./routes/login')
const logout = require('./routes/logout')
const app = express();
const verify = require('./functions/verify');
const dados = require('./db/index')
const PORT = process.env.PORT || 8080
 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", verify, (req, res, next) => {
    res.json([{"status":'Conectado'}]);
})

app.get("/dados", dados);
app.post("/dados", dados);
app.post('/login', login);
app.post('/logout', logout);

app.listen(PORT, ()=> console.log('listen on http://localhost:8080'));