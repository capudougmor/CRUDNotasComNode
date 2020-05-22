require('dotenv').config()
const app = require('./server')
const database = require('./database')

console.log()

app.listen(3000, () => {
    console.log('Servidor na porta 3000')
})