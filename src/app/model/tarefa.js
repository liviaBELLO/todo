const mongoose = require('mongoose');

const tarefa = new mongoose.Schema({
  titulo: {
    required: true,
    type: String
  },
  descricao:{
    required: true,
    type: String
  },
  prioridade: {
    required: true, 
    type: String
  }
}, {
  collection: 'tarefa', versionKey: false
})

module.exports = mongoose.model("tarefa", tarefa);