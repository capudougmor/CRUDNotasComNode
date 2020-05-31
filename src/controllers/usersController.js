const usersController = {}

usersController.renderSingUpForm = (req, res) => {
    res.render('users/singUp.html')
}

usersController.singUp = (req, res) => {
    const errors = []

    const {nome, email, senha, confirme_senha} = req.body
    if(senha != confirme_senha) {
        errors.push({text: 'Senhas diferentes'})
    }
    if(senha.length < 4) {
        errors.push({text: 'Senhas com poucos digitos, colocar no minimo 4 digitos!'})
    }
    if(errors.length > 0) {
        res.render('users/singUp.html', {
            errors,     
        })
    }else {
        res.send('recebido')
    }

    console.log(req.body)
    
}

usersController.renderSinginForm = (req, res) => {
    res.render('users/singin.html')
}

usersController.singin = (req, res) => {
    res.send(singin)
}

usersController.logout = (req, res) => {
    res.send('logout')
}


module.exports = usersController