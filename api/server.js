const express = require('express')
const fortunes = require("./fortunes")

const server = express()

server.get('/', (req,res) => {
    res.send(`<h1>Heroku Deployment</h1>`)
})

server.get("/fortune", (req,res) => {
    let randonIndex = Math.floor(Math.random() * fortunes.length)
})

module.exports = server            