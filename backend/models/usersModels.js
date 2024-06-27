//usersModels.js
'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }

  User.init({
    nom: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telephone: DataTypes.STRING,
    adresse: DataTypes.STRING,
    date_naissance: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};
