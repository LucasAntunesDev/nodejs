const express = require('express')

//criando o servidor
const app = express()

//definindo a porta em que o servidor vai funcionar
app.listen(3000, () => {console.log('Servidor rodando na porta 3000')})