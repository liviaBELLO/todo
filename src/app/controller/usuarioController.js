const Usuario = require("../model/usuario");

exports.saveUsuario = async (req, res) => {
  const usuario = new Usuario({
    nomeCompleto: req.body.nomeCompleto,
    email: req.body.email,
    idade: req.body.idade,
    listaTarefa: req.body.listaTarefa
  });

  try{
    const saveUsuario = await usuario.save();
    res.status(200).json(saveUsuario);
  } catch (error) {
    res.status(400).json({erro: error.message})
  }
}

