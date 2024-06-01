const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/User');
const config = require('./db');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.parsed.JWT_SECRET;

passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.findByPk(jwt_payload.id_usuario)
        .then(user => {
            if (user) {
                return done(null, user);
            }
            return done(null, false);
        })
        .catch(err => done(err, false));
}));

// Adicionar as estratégias de autenticação para redes sociais
require('./facebook')(passport);
require('./twitter')(passport);
require('./google')(passport);

module.exports = passport;