const express = require('express');
const connectDB = require('./db');
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');

const app = express();

// Conectar ao banco de dados
connectDB();

// Middlewares
app.use(bodyParser.json());

// Rotas
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
