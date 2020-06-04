const mongoose = require('mongoose')

mongoose.connect(
	'mongodb+srv://henrique:1q2w3e4r@clusterhenrique-nnnbn.gcp.mongodb.net/MeuPrimeiroDatabase'
)

mongoose.connection
mongoose.Promise = global.Promise
