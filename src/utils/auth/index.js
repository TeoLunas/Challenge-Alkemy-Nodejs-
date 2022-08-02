const passport = require('passport')

const LocalStrategy = require('./strategies/localStrategy');
const JwtStrategy = require('./strategies/tokenVerify');

passport.use(LocalStrategy);
passport.use(JwtStrategy);