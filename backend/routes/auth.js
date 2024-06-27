// auth.js (routes/auth.js)

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { User } = require('../models');

router.post('/login', async (req, res) => {
    const { pseudo, password } = req.body;

    try {
        const user = await User.findOne({ where: { pseudo } });
        if (!user) {
            return res.status(400).json({ message: 'Identifiants incorrects' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Identifiants incorrects' });
        }

        res.json({ user });
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
        res.status(500).json({ message: 'Erreur interne du serveur lors de la connexion' });
    }
});


module.exports = router;
