const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const User = require('../models/User');
const config = require('../config/db');
const apiUrl = 'http://localhost:3000/api'; 

// Função de Registro
exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { nome_completo, email, senha, tipo_usuario } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email já cadastrado.' });
    }

    const saltRounds = 10;
    const senhaHash = await bcrypt.hash(senha, saltRounds);

    const newUser = await User.create({
      nome_completo,
      email,
      senha: senhaHash,
      tipo_usuario
    });

    const token = jwt.sign({ id_usuario: newUser.id_usuario }, config.parsed.JWT_SECRET, { expiresIn: '1h' });

    return res.status(201).json({ token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro ao cadastrar usuário.' });
  }
};

// Função de Login
exports.login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { email, senha } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Usuário não encontrado.' });
    }

    const isMatch = await bcrypt.compare(senha, user.senha);
    if (!isMatch) {
      return res.status(401).json({ message: 'Senha inválida.' });
    }

    const token = jwt.sign({ id_usuario: user.id_usuario }, config.parsed.JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro ao fazer login.' });
  }
};

// Função para lidar com o login por redes sociais
exports.loginSocial = async (req, res) => {
  // Não é necessário implementar esta função, pois o Passport já lida com o login por redes sociais
};