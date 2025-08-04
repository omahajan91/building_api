const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const productData = require('./product.json'); // ✅ correct: no destructuring

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// ✅ Access products from the JSON
let products = productData.products;

// ROUTES
app.get('/', (req, res) => {
  res.json(products);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
