const Usuario = require("../model/usuario");

exports.saveUsuario = async (req, res) => {
  const usuario = new Usuario({
    nomeCompleto: req.body.nomeCompleto,
    email: req.body.email,
    idade: req.body.idade,
    listaTarefa: []
  });

  try{
    const saveUsuario = await usuario.save();
    res.status(200).json(saveUsuario);
  } catch (error) {
    res.status(400).json({erro: error.message})
  }
}

exports.findUserByEmail = async (req, res) => {
  try{
    const email = req.params.email;
    const usuario = await Usuario.find({email: {$regex: email, $options: 'i' } });
    res.status(200).json(usuario);
  } catch{
    res.status(500).send({ message: `Não foi encontrado.`})
  }
}

