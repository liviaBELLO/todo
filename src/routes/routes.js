const express = require('express')
const tarefaController = require('../app/controller/tarefaController.js');
const usuarioController = require('../app/controller/usuarioController.js');

const router = express.Router();

router.post("/tarefa/salvar", tarefaController.saveTarefa);

router.get("/tarefas", tarefaController.getAllTarefas); 

router.delete("/tarefa/apagar/:id", tarefaController.deleteTarefa);

router.put("/tarefa/alterar/:id", tarefaController.updateTarefa)

router.post("/usuario/salvar", usuarioController.saveUsuario);

module.exports = router;