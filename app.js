const express = require('express');
const cors = require('cors');
const app = express();

console.log('Starting server...');

app.use(cors());
app.use(express.json());

console.log('Setting up routes...');

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server started on port 3000');
});