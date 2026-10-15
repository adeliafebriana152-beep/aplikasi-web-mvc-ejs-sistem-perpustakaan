const express = require('express');
const app = express();
const PORT = 3000;

// Set View Engine EJS
app.set('view engine', 'ejs');

// Middleware untuk membaca data dari form POST dan file statis
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Import Routes
const catalogRoutes = require('./routes/catalogRoutes');
app.use('/', catalogRoutes);

// Untuk menjalankan Server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});