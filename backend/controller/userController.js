const bcrypt = require('bcryptjs');
const User = require('../model/usersModel');

exports.register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 8);
    const user = await User.create({
      nom: req.body.nom,
      email: req.body.email,
      password: hashedPassword,
      telephone: req.body.telephone,
      adresse: req.body.adresse,
      date_naissance: req.body.date_naissance
    });
    res.status(201).send({ message: 'Utilisateur créé', userId: user.id });
  } catch (error) {
    res.status(500).send({ message: "Erreur lors de la création de l'utilisateur" });
  }
};

