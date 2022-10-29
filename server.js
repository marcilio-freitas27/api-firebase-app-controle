const express = require('express');
const login = require('./routes/login')
const app = express();
const verify = require('./functions/verify');
 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", verify, (req, res, next) => {
    res.json([{"status":'Conectado'}]);
})

app.post('/login', login);

app.listen(8080, ()=> console.log('listen on http://localhost:8080'));