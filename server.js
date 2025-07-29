const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000; // ✅ You can change port if needed

app.use(cors());
app.use(bodyParser.json());

// ✅ Dummy "database" (array for now)
let products = [
  { id: 1, name: 'MacBook Pro 16"', description: 'Powerful laptop with M2 chip', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Wireless AirPods Pro', description: 'Premium wireless earbuds', image: 'https://via.placeholder.com/150' },
];

// ✅ ROUTES

// 1️⃣ Get all products
app.get('/', (req, res) => {
  res.json(products);
});

// 2️⃣ Add a product
// app.post('/api/products', (req, res) => {
//   const newProduct = { id: Date.now(), ...req.body };
//   products.push(newProduct);
//   res.status(201).json(newProduct);
// });

// 3️⃣ Delete a product
// app.delete('/api/products/:id', (req, res) => {
//   const productId = Number(req.params.id);
//   products = products.filter((p) => p.id !== productId);
//   res.json({ message: 'Product deleted' });
// });

// 4️⃣ Update a product
// app.put('/api/products/:id', (req, res) => {
//   const productId = Number(req.params.id);
//   const index = products.findIndex((p) => p.id === productId);

//   if (index !== -1) {
//     products[index] = { id: productId, ...req.body };
//     res.json(products[index]);
//   } else {
//     res.status(404).json({ message: 'Product not found' });
//   }
// });

// ✅ Start server
app.listen(PORT, () => {
//   console.log(`✅ Server running on http://localhost:${PORT}`);
});
