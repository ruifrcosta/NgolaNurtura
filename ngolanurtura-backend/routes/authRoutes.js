const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/auth');
const { body } = require('express-validator');
const passport = require('passport');

// Rota de Registro
router.post('/register', [
  body('nome_completo').notEmpty().withMessage('Nome completo é obrigatório.'),
  body('email').isEmail().withMessage('Email inválido.'),
  body('senha').isLength({ min: 6 }).withMessage('Senha deve ter pelo menos 6 caracteres.'),
  body('tipo_usuario').isIn(['mae_doadora', 'mae_receptora', 'profissional_saude', 'admin']).withMessage('Tipo de usuário inválido.')
], register);

// Rota de Login
router.post('/login', [
  body('email').isEmail().withMessage('Email inválido.'),
  body('senha').notEmpty().withMessage('Senha é obrigatória.')
], login);

// Rotas para autenticação por redes sociais
router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get('/facebook/callback', passport.authenticate('facebook', { successRedirect: '/frontend/dashboard.html', failureRedirect: '/frontend/index.html' }));

router.get('/twitter', passport.authenticate('twitter'));
router.get('/twitter/callback', passport.authenticate('twitter', { successRedirect: '/frontend/dashboard.html', failureRedirect: '/frontend/index.html' }));

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { successRedirect: '/frontend/dashboard.html', failureRedirect: '/frontend/index.html' }));

module.exports = router;