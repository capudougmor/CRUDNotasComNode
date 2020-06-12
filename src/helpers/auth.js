const helpers = {}

helpers.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    }

    req.flash('errors_msg', 'Faça login primeiro!')
    res.redirect('../users/singin')
}

module.exports = helpers