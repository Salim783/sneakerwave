const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./config/database');
const usersRouter = require('./routes/users');

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
app.use('/api/users', usersRouter); // Utilisation du routeur des utilisateurs
app.get('/', (req, res) => {
  res.send('Hello World ca va!');
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
module.exports = app;
