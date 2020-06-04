const express = require('express')
const app = express()
const morgan = require('morgan')
const compression = require('compression')

const mongodbConnector = require('./mongodbConnector')

// CONFIGS EXPRESS
app.use(morgan('dev'))
app.use(compression())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// SETUP HEADER
app.use((req, res, next) => {
	res.header(
		// ALLOWED ACCESS TO API
		'Access-Control-Allow-Origin',
		'*'
	)
	res.header(
		// ALLOWED HEADERS
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	)
	if (req.method === 'OPTIONS') {
		res.header(
			// ALLOWED METHODS
			'Access-Control-Allow-Methods',
			'PUT, POST, PATCH, DELETE, GET'
		)
		return res.status(200).json({})
	}
	next()
})

// ROUTES
const usuarioRoutes = require('./routes/usuarioRoutes')
app.use('/usuario', usuarioRoutes)

// CATCH ERRORS
app.use((req, res, next) => {
	const error = new Error('Not Found')
	error.status = 404
	next(error)
})
app.use((error, req, res, next) => {
	res.status(error.status || 500)
	res.json({
		error: {
			message: error.message
		}
	})
})

module.exports = app
