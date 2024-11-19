const Tarefa = require("../model/tarefa");

exports.saveTarefa = async (req, res) => {
  const tarefa = new Tarefa({
    titulo: req.body.titulo,
    descricao: req.body.descricao,
    prioridade: req.body.prioridade
  });

  try{
    const saveTarefa = await tarefa.save();
    res.status(200).json(saveTarefa);
  } catch (error) {
    res.status(400).json({erro: error.message})
  }
}

exports.getAllTarefas = async (req, res) => {
  try{
    const tarefas = await Tarefa.find();
    res.json(tarefas);
  } catch (error){
    res.status(500).json({erro: error.message})
  }
}


exports.deleteTarefa = async (req, res) => {
  try{
    const id = req.params.id;
    const tarefa = await Tarefa.findByIdAndDelete(id);
    res.send(`A tarefa com id: ${tarefa.id} foi removido com sucesso`);
  } catch (error){
    res.status(400).json({erro: error.message})
  }
}

exports.updateTarefa = async (req, res) => {
  try{
    const id = req.params.id;
    const dados = req.body;
    const resultado = await Tarefa.findByIdAndUpdate(id, dados);
    res.send(`O livro com o id: ${resultado.id} foi alterado com sucesso`);
  } catch(error){
    res.status(400).json({erro: error.message})
  }
}
