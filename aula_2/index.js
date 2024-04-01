// index.js
const express = require("express")
const mysql = require('mysql2/promise')

const PORT = 3000
const app = express()

app.get('/', (req, res) => {
    const conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'aula_01_04'
    })
    console.log(conn)
    res.send('<h1>Hello World!</h1>')
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}!`)
})