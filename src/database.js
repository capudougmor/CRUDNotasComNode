const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://capu:capu@cluster0-yluuw.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado ao banco de dados')
}).catch((err) => {
    console.log('Erro ao conectar ao banco de dados')
})
