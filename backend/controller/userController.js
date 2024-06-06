const bcrypt = require('bcryptjs');
const { User } = require('../models');

exports.register = async (req, res) => {
  try {
    console.log('Received registration request:', req.body);
    const hashedPassword = await bcrypt.hash(req.body.password, 8);
    console.log('Hashed password:', hashedPassword);
    const user = await User.create({
      nom: req.body.nom,
      email: req.body.email,
      password: hashedPassword,
      telephone: req.body.telephone,
      adresse: req.body.adresse,
      date_naissance: req.body.date_naissance
    });
    console.log('User created successfully:', user);
    res.status(201).send({ message: 'Utilisateur créé', userId: user.id });
  } catch (error) {
    console.error('Error during user creation:', error);
    res.status(500).send({ message: "Erreur lors de la création de l'utilisateur", error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).send({ message: "L'utilisateur n'a pas été trouvé." });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).send({ message: "Mot de passe incorrect." });
    }
    res.status(200).send({ message: "Connexion réussie", userId: user.id });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send({ message: "Erreur lors de la connexion de l'utilisateur", error: error.message });
  }
};
