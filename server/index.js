const envConfig = require('dotenv').config()
if(envConfig.error && process.env.NODE_ENV == 'development') throw envConfig.error

const server = require('./server')
const PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
