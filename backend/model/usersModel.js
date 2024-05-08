const mysql = require('mysql12');

const userSchema = new mysql.Schema({
  nom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  telephone: String,
  adresse: String,
  date_naissance: Date
});

const User = mysql.model('User', userSchema);

module.exports = User;
