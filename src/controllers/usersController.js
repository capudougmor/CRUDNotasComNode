const usersController = {}

const User = require('../models/User')

usersController.renderSingUpForm = (req, res) => {
    res.render('users/singUp.html')
}

usersController.singUp = async (req, res) => {
    const errors = []

    const {nome, email, senha, confirme_senha} = req.body
    if(senha != confirme_senha) {
        req.flash('errors_msg', 'Senhas diferentes!')
        
        // errors.push({text: 'Senhas diferentes'})
    }
    if(senha.length < 4) {
        req.flash('errors_msg', 'Senhas com poucos digitos, colocar no minimo 4 digitos!')

        // errors.push({text: 'Senhas com poucos digitos, colocar no minimo 4 digitos!'})
    }
    if(errors.length > 0) {
        res.render('users/singUp.html', {
            errors,  
            nome, 
            email
        })
    }else {
        const emailUser = await User.findOne({email: email})
        if(emailUser) {
            req.flash('errors_msg', 'Este email já existe!')
            res.redirect('/users/singup')
        } else {
            const newUser = new User({nome, email, senha})
            newUser.senha = await newUser.encrypPassword(senha)
            await newUser.save()
            req.flash('success_msg', 'Usuario registrado')
            res.redirect('/users/singin')
        }
        console.log(emailUser)
    } 

    
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