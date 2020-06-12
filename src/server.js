const express = require('express')
const path = require('path') 
const app = express()
const nunjucks = require('nunjucks')
const methodOverride = require('method-override')//metodo para leitura dos metodo e m rotas
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport')

//Configuracoes
//app.set('views', path.join(__dirname, 'views'))

require('./config/passport')(passport)

 //nunjucks
nunjucks.configure('./src/views',{
    express: app,
    noCache: true,
})


//Middlewares
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))//metodo usado para complementar as rotas no mongoose
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

// Variaveis globais
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.errors_msg = req.flash('errors_msg')
    res.locals.error = req.flash('error')
    next()
})

//Routes
app.use(require('./routes/index.routes.js'))
app.use(require('./routes/notes.routes.js'))
app.use(require('./routes/users.routes.js'))

//estaticos
app.use(express.static(path.join(__dirname, 'publics')));

module.exports = app;