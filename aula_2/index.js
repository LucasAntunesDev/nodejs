// index.js
import express from "express"
import { createConnection } from 'mysql2/promise'

const PORT = 3000
const app = express()

app.get('/', async (req, res) => {
    const conn = await createConnection({
        host: 'localhost',
        user: 'root',
        database: 'aula_01_04'
    })
    const [resultado] = await conn.query({
        sql: 'SELECT id, nome, sobrenome FROM pessoas'
    })

    res.json(resultado.map(
        ({ id, nome, sobrenome }) =>
        ({
            id, nome, sobrenome,
            nomeCompleto: `${nome} ${sobrenome}`
        }))
    )

})

app.post('/', (req, res) => {
    res.send('Você enviou uma requisição POST')
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}!`)
})