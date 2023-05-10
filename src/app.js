import express from 'express';
import cors from 'cors';
import { pool } from './db.js';
import { PORT } from './config.js';

const app = express();

app.use(cors());

app.use(express.json()); // Agregamos este middleware para poder procesar los datos del cuerpo en formato JSON

app.get('/', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM users');
  res.json(rows);
});

app.get('/user', async (req, res) => {
  const [results] = await pool.query('SELECT * FROM users');
  res.json(results);
});



// Agregamos la función para insertar un nuevo usuario con un nombre y un ID
// app.post('/iuser', async (req, res) => {
//   const { id,name } = req.body; // Obtenemos los datos del cuerpo de la solicitud
//   const result = await pool.query(`INSERT INTO users(id, name) VALUES ("${id}", "${name}")`);
//   res.json(result);
// });

// app.post('/asistencia', async (req, res) => {
//   const { id,fecha, hora, documento, placa, vehiculo } = req.body; // Obtenemos los datos del cuerpo de la solicitud
//   const result = await pool.query(`INSERT INTO registroe (id,fecha, hora, documento, placa, vehiculo) VALUES ("${id}","${fecha}","${hora}", "${documento}", "${placa}", "${vehiculo}")`);
//   res.json(result);
// });

// app.get('/gasistencia', async (req, res) => {
//   const [results] = await pool.query('SELECT * FROM registro');
//   res.json(results);
// });



app.listen(PORT);
console.log('Server on port', PORT);
