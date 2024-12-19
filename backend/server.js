const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const process = require('process');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Coding Club Backend is Running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
