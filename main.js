const express = require('express');
const { add, multiply } = require('./calculator');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`2 + 3 = ${add(2, 3)}, 2 * 4 = ${multiply(2, 4)}`);
});

// Uwaga: musi być 0.0.0.0, by działało w kontenerze
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});
