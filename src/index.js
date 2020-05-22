const app = require('./server')
const database = require('./database')

app.listen(3000, () => {
    console.log('Servidor na porta 3000')
})