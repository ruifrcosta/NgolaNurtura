const Sequelize = require('sequelize');
const config = require('dotenv').config();

const sequelize = new Sequelize(config.parsed.DB_NAME, config.parsed.DB_USER, config.parsed.DB_PASSWORD, {
  host: config.parsed.DB_HOST,
  dialect: 'postgres',
  logging: false // Optional: Disable logging for production
});

module.exports = sequelize; 