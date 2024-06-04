const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('CDAProject', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 8000
});

module.exports = sequelize;
