const tarefa = require('../model/tarefa');
const mongoose = require('mongoose');

const usuario = new mongoose.Schema({
    nomeCompleto: {
        required: true,
        type: String
      },
      email:{
        required: true,
        type: String,
        unique: true
      },
      idade: {
        required: true, 
        type: Number
      },
      listaTarefa:{
        type: Array,
        default: [tarefa]
      }
}, {
  collection: 'usuario', versionKey: false
})

module.exports = mongoose.model("usuario", usuario);