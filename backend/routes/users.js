const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// Route de connexion
router.post('/login', userController.login);

// Route d'enregistrement
router.post('/register', userController.register);

module.exports = router;