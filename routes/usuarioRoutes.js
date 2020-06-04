const express = require('express')
const router = express.Router()
const UsuarioModel = require('./../models/Usuario')

// Listagem de usuarios
router.get('/', async function (req, res, next) {
	const usuarios = await UsuarioModel.find({})

	res.status(200).json({
		message: 'Usuários listados com sucesso!',
		content: usuarios
	})
})

// Detalhe do usuário
// com PATH PARAM /:id
router.get('/:id', async function (req, res, next) {
	const idParam = req.params.id
	const usuario = await UsuarioModel.findOne({ _id: idParam })
	let response
	if (usuario) {
		response = {
			message: 'Usuário retornado com sucesso!',
			content: usuario
		}
	} else {
		response = {
			message: 'Usuário não encontrado!'
		}
	}
	res.status(200).json(response)
})

module.exports = router
