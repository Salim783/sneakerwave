const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('CDAProject', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 8000 // Par défaut, MySQL utilise le port 3306. Change-le si nécessaire.
});

module.exports = sequelize;
