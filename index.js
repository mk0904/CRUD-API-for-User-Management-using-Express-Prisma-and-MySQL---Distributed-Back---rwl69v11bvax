const express = require('express');
const dotenv = require('dotenv');
const prisma = require('@prisma/client').PrismaClient;

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;
