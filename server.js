const express = require("express");
const cors = require("cors");
const productData = require("./product.json");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// main API data
let products = productData.products;

// ROUTES
app.get("/", (req, res) => {
  res.json(products);
});

// GET for specific user/id
app.get("/:id", (req, res) => {
  // res.json(products.find(productData.products.id));
  const id = parseInt(req.params.id) ;
  const product = products.find((p) => p.id === id);
  res.json(product);
});

// POST add a new product
app.post("/", (req, res) => {
  const newProduct = req.body;

  // find last product
  const lastProduct = products[products.length - 1];
  const lastId = lastProduct ? lastProduct.id : 0; // if empty array, start from 0
  const newId = lastId + 1;

  // assign auto id
  newProduct.id = newId;

  // basic validation
  if (!newProduct.name) {
    return res.status(400).json({ error: "Product must have a name" });
  }

  // add new product to array
  products.push(newProduct);

  res.status(201).json({
    message: "✅ Product added successfully",
    product: newProduct,
  });
});

// Start server
// npm start for node
// npm run dev for nodemon // it updates automatically
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
