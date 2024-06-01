const Sequelize = require('sequelize');
const db = require('../config/db');

const User = db.define('User', {
  id_usuario: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome_completo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tipo_usuario: {
    type: Sequelize.ENUM('mae_doadora', 'mae_receptora', 'profissional_saude', 'admin'), // Adicione 'admin'
    allowNull: false
  },
  data_ultima_alteracao_senha: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  numero_tentativas_login_falhas: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  data_ultima_atualizacao_perfil: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  interesses: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  necessidades_especificas_leite: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  preferencias_comunicacao: {
    type: Sequelize.TEXT,
    allowNull: true
  }
});

module.exports = User;