const { Router } = require('express')
const router = Router()

const { 
    renderSingUpForm, 
    renderSinginForm, 
    singUp, 
    singin, 
    logout 
}  = require('../controllers/usersController')

router.get('/users/singup', renderSingUpForm)
router.post('/users/singup', singUp)

router.get('/users/singin', renderSinginForm)
router.post('/users/singin', singin)

router.get('/users/logout', logout)


module.exports = router