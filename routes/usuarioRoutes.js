const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
	const usuarios = [
		{
			id: '00001',
			nome: 'Henrique'
		},
		{
			id: '00002',
			nome: 'Leonardo'
		}
	]

	res.status(200).json({
		message: 'Usuários listados com sucesso!',
		content: usuarios
	})
})

// Implementar métodos PUT, PATCH, DELETE
router.post('/', function (req, res, next) {
	const usuarios = []
	const usuarioRequest = { ...req.body }

	// console.log(usuarioRequest)
	usuarios.push(usuarioRequest)

	res.status(201).json({
		message: 'Usuário criado com sucesso!',
		content: usuarios
	})
})

// Implementar métodos PUT, PATCH, DELETE

module.exports = router
