const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON
// Sample product data
const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Smartphone', price: 499 },
  { id: 3, name: 'Tablet', price: 299 }
];
// API endpoint to get products
app.get('/api/products', (req, res) => {
    res.json(products);
  });
  
  // Run server
  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });