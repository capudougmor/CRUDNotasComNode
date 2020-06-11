const passport = require('passport')
const LocalStratefy = require('passport-local').Strategy

const User = require('../models/User')

passport.use(new LocalStratefy({
  usernameField: 'email',
  passwordField: 'password'
}, async (email, password, done) => {
  console.log('Usuario inexistente!')

  const user = await User.findOne({email: email})
  if(!user) {
    return done(null, false, {message: 'Usuario inexistente!'})
  } else {
    const match = await user.matchPassword(password)
    if(match) {
      return done(null, user)
    } else {
      return done(null, false, {message: 'password incorreta!'})
    }
  }
}))

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

module.exports = passport