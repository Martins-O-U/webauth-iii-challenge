const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const Users = require('./users/user-route')

const server = express();

server.use(helmet())
server.use(express.json())
server.use(cors())
server.use('/api', Users)

server.get('/', (req, res) =>{
    res.json({Message: "Welcome to the default zone, please specify path"})
})

module.exports =server;