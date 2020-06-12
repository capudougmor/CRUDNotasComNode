const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

require('../models/User')
const User = mongoose.model('User')


module.exports = function(passport) {

  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'senha'
  }, (email, senha, done) => {
    
    User.findOne({email: email}).then((user) => {
      if(!user) {
      return done(null, false, {message: 'Usuario inexistente!'})
      }

      bcrypt.compare(senha, user.senha, (erro, batem) => {
        if (batem){
          return done(null, user)
        } else {
          return done(null, false, {message: 'Senha incorreta!'})
        }
      })
    })
  }))

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  })
}