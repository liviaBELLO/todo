const mongoose = require('mongoose');

const tarefa = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId,  
  },
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