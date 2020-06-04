const mongoose = require('mongoose')

const usuarioSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	nome: String,
	endereco: String,
	idade: Number,
	filhos: [String]
})

module.exports = mongoose.model('Usuario', usuarioSchema)
