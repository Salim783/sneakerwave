const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./config/database');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth'); // Ajout du routeur d'authentification

// Synchronize database
sequelize.sync()
  .then(() => {
    console.log('Database synchronized');
  })
  .catch(err => {
    console.error('Error synchronizing database:', err);
  });

// Autoriser toutes les origines (pour le développement)
app.use(cors());
app.use(express.json()); // Middleware pour parser le JSON

const port = 3001;

// Utilisation des routeurs
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter); // Monter le routeur d'authentification à /api/auth

app.get('/', (req, res) => {
  res.send('Hello World ca va!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

module.exports = app;
