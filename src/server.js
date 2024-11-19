require('dotenv').config({path: "env"})
var express = require('express')
const mongoose = require('mongoose');

const mongoString = "mongodb+srv://liviabguarda:liviaadm123@api-todo.3horh.mongodb.net/todo"

mongoose.connect(mongoString);
const database = mongoose.connection;


database.on('error', (error) => {
    console.log(error)
});

database.once('connected', () => {
    console.log('Banco de dados conectado');
})


const app = express()

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var porta = 8080;

const routes = require('./routes/routes');
app.use(routes);

app.listen(porta);

console.log('Conectado a porta' + " " + porta);
