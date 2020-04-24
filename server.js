const http = require('http')
const app = require('./app.js')
const httpServer = http.createServer(app)

httpServer.listen(3000, () => {
	console.log('URL: http://localhost:3000')
	console.log('Para derrubar o servidor: ctrl + c')
})
