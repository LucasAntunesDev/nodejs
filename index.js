const express = require('express')

const PORT = 3000
//criando o servidor
const app = express()

// underline => usado pra ignorar um parâmetro
app.get('/teste', (_, res) => {
    res.send('Você enviou uma requisição GET!')
})

app.post('/', (_, res) => {
    res.send('Você enviou uma requisição POST!')
})

//definindo a porta em que o servidor vai funcionar
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}!`))