const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.disable('x-powered-by');

const publicPath = path.join(__dirname, 'public');
const imagesPath = path.join(__dirname, 'images');

// Sayt
app.use(express.static(publicPath));

// images papkasini alohida ochish
app.use('/images', express.static(imagesPath));

// Sayt sahifasi
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Pilla Consulting running on port ${PORT}`);
});
