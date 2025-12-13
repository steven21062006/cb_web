const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
const port = process.env.PORT || 5000;


app.use(cors()); 
app.use(express.json());


app.get('/experiencia', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM experiencia');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del servidor');
  }
});

// RUTA 2: Obtener todos los Posts
app.get('/posts', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM posts');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del servidor');
  }
});

// RUTA 3: Obtener un Post por ID
app.get('/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Post no encontrado" });
    }
    
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del servidor');
  }
});
console.log("--> ¿Qué es pool?:", pool);
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});