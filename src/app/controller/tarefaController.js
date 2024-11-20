const Tarefa = require("../model/tarefa");
const Usuario = require("../model/usuario");

exports.saveTarefa = async (req, res) => {
  const email = req.params.email;
 
  const tarefa = new Tarefa({
    titulo: req.body.titulo,
    descricao: req.body.descricao,
    prioridade: req.body.prioridade,
  });

  try{
    const saveTarefa = await Usuario.findOneAndUpdate(
      { email: email }, 
      { $push: { listaTarefa: tarefa } }, 
      { new: true } 
    );
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
    
    const usuario = await Usuario.findOneAndUpdate(
      { "listaTarefa._id": id },
      { $pull: { listaTarefa: { _id: id } } }, 
      { new: true } 
    );

    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário ou tarefa não encontrada' });
    }

    res.status(200).json(usuario)
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
