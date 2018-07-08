// import http from 'http'
//
//
// const server =http.createServer()
//
// server.listen(8080)
//
// server.on('request', (req, res) => {
//     res.write("Hello http\n")
//     res.end()
// })

import express from 'express'
import fs from 'fs'

import config from './config/config'


const server =express()

server.get('/', (req, res) => {
    res.send('Hello express')
})

server.use(express.static('public'))

server.listen(config.port, () =>{
    console.info("express listening on port: "+ config.port)
})