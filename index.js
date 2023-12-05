const express = require('express');
const cors = require('cors');
const connection = require('./app/model/index'); // Uncomment baris ini
// const mainRouter = require('./app/routes'); // Uncomment baris ini
require('dotenv').config(); // Uncomment baris ini

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use('/', mainRouter);

// Metode GET untuk menampilkan data
app.get('/data', async (req, res) => {
  try {
    // Lakukan query ke database untuk mendapatkan data
    const data = await connection.query('SELECT * FROM players');
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Metode POST untuk menambahkan data
app.post('/data', async (req, res) => {
  try {
    // Dapatkan data dari body request
    const { id_news, judul, sub_judul, link, bio } = req.body;

    // Lakukan query ke database untuk menambahkan data
    await connection.query('INSERT INTO players (id_news, judul, sub_judul, link, bio) VALUES (?, ?, ?, ?, ?)', [id_news, judul, sub_judul, link, bio]);

    res.json({ success: true, message: 'Data berhasil ditambahkan' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
