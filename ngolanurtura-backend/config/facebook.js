const FacebookStrategy = require('passport-facebook').Strategy;
const config = require('./db');
const User = require('../models/User');

module.exports = function(passport) {
  passport.use(new FacebookStrategy({
      clientID: config.parsed.FACEBOOK_APP_ID,
      clientSecret: config.parsed.FACEBOOK_APP_SECRET,
      callbackURL: config.parsed.FACEBOOK_CALLBACK_URL,
      profileFields: ['id', 'displayName', 'emails', 'photos']
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({ where: { email: profile.emails[0].value } });

        if (existingUser) {
          // Se o usuário já existe, faça o login
          return done(null, existingUser);
        } else {
          // Se o usuário não existe, crie um novo usuário
          const newUser = await User.create({
            nome_completo: profile.displayName,
            email: profile.emails[0].value,
            senha: '', // Senha não é necessária para login por rede social
            tipo_usuario: 'mae_receptora' // Assumindo que usuários do Facebook são mães receptoras
          });

          return done(null, newUser);
        }
      } catch (err) {
        return done(err, false);
      }
    }
  ));
};