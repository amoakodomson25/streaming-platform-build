const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true,
}));

app.use(express.json());

// Your routes
const accountsRoutes = require('./routes/accountsRoutes');
app.use('/api/accounts', accountsRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
