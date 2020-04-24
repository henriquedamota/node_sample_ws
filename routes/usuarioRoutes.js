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

module.exports = router
