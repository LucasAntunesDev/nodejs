// index.js
const express = require("express")
const mysql = require('mysql2/promise')

const PORT = 3000
const app = express()

/*Define a função como assíncrona, para que a constante *conn* funcione com o await */
app.get('/', async (req, res) => {
    /*Promessa => evento assíncrono, espera algo acontecer
    * [antigamente] chama um callback com duas possibilidades : sucesso ou erro
    * [hoje] usar async e await
    */
    const conn = await mysql.createConnection({
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

    /**
     **Desestruturação**: 
     * no PHP:
     * const vetor = [1,2,3]
     * const a = vetor[0]
     * const b = vetor[1]
     * const c = vetor[2]
     * 
     * No JS:
     * const [a,b,c] = vetor
     * cosnt [a,b,c] = [1,2,3]
     */
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}!`)
})