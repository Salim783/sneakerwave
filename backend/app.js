const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/users');

// Autoriser toutes les origines (pour le développement)
app.use(cors());


app.use(express.json()); // Middleware pour parser le JSON
app.use('/api/users', userRoutes);  // Utilisez le router sur un chemin spécifique


const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World ca va!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
