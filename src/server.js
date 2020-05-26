const express = require('express')
const path = require('path') 
const app = express()
const nunjucks = require('nunjucks')

//Configuracoes
//app.set('views', path.join(__dirname, 'views'))

 //nunjucks
nunjucks.configure('./src/views',{
    express: app,
    noCache: true,
})


//Middlewares
app.use(express.urlencoded({extended: false}))

//Variaveis globais


//Routes
app.use(require('./routes/index.routes.js'))
app.use(require('./routes/notes.routes.js'))


//estaticos
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app;