const express = require('express')
const path = require('path')
 
const app = express()

//Configuracoes
app.set('views', path.join(__dirname, 'views'))


//Middlewares
app.use(express.urlencoded({extended: false}))

//Variaveis globais


//Routes
app.get('/', (req, res) => {
    res.send('Hello casa')
})

//estaticos
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app;