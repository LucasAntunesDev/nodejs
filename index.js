const express = require('express')

const PORT = 3000
//criando o servidor
const app = express()

// underline => usado pra ignorar um parâmetro
app.get('/', (_, res) => {
    res.send('Você enviou uma requisição GET!')
})

app.get('/cidade/:cidade', (req, res) => {
    const {cidade} = req.params
    res.send(`Você está na cidade ${cidade}!`)
})

app.post('/', (_, res) => {
    res.send('Você enviou uma requisição POST!')
})

app.delete('/', (_, res) => {
    res.send('Você enviou uma requisição DELETE!')
})

app.put('/', (_, res) => {
    res.send('Você enviou uma requisição PUT!')
})

//definindo a porta em que o servidor vai funcionar
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}!`))