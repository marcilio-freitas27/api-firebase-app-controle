//import libraries
// import * as functions from 'firebase-functions';
// import * as admin from 'firebase-admin';
// import * as express from 'express';
// import * as bodyParser from "body-parser";

const express = require('express');

//initialize firebase inorder to access its services
// admin.initializeApp(functions.config().firebase);

//initialize express server
const app = express();
const main = express();

//add the path to receive request and set json as bodyParser to process the body 
main.use('/api/v1', app);
main.use(express.json());
main.use(express.urlencoded({ extended: false }));

//initialize the database and the collection 
// const db = admin.firestore();
// const userCollection = 'users';

//define google cloud function name
// export const webApi = functions.https.onRequest(main);

//get all users
// app.get('/users', async (req, res) => {
//     try {
//         const userQuerySnapshot = await db.collection(userCollection).get();
//         const users = [];
//         userQuerySnapshot.forEach(
//             (doc)=>{
//                 users.push({
//                     id: doc.id,
//                     data:doc.data()
//             });
//             }
//         );
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

app.get("/", function(req, res) {
    res.json('Conectado');
})

app.listen(process.env.PORT, ()=> console.log('listen on http://localhost:8080'));