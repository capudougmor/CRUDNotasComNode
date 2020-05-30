const usersController = {}

usersController.renderSingUpForm = (req, res) => {
    res.render('users/singUp.html')
}

usersController.singUp = (req, res) => {
    console.log(req.body)
    res.send('recebido')
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