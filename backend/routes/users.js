const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../config/database');

router.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 8);
    const [result] = await db.execute(
      'INSERT INTO users (nom, email, password, telephone, adresse, date_naissance) VALUES (?, ?, ?, ?, ?, ?)',
      [req.body.nom, req.body.email, hashedPassword, req.body.telephone, req.body.adresse, req.body.date_naissance]
    );
    res.status(201).send({ message: 'Utilisateur créé', userId: result.insertId });
  } catch (error) {
    res.status(500).send({ message: "Erreur lors de la création de l'utilisateur" });
  }
});

module.exports = router;
