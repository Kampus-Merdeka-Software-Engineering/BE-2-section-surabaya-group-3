const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

// Membuat koneksi database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'surabaya-js-login'
});

// Menghubungkan ke database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

// Middleware untuk meng-handle data JSON
app.use(bodyParser.json());

// Menangani permintaan GET untuk tampilan registrasi
app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/register.hbs');
});

// Menangani permintaan POST dari formulir registrasi
app.post('/register', async (req, res) => {
  const { fullName, email, password } = req.body;

  // Validasi sederhana (pastikan menambahkan validasi yang lebih kuat di lingkungan produksi)
  if (!fullName || !email || !password) {
    return res.status(400).json({ error: 'Semua kolom harus diisi' });
  }

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert ke database
    const sql = 'INSERT INTO users SET ?';
    const user = { full_name: fullName, email: email, password: hashedPassword };

    db.query(sql, user, (error, results) => {
      if (error) {
        console.error('Error inserting user:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      } else {
        console.log('User inserted:', results);
        return res.render('register', { message: 'Pengguna Terdaftar' });
      }
    });
  } catch (error) {
    console.error('Error hashing password:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
