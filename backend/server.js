// ===== IMPORTACIONES =====
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// ===== CONFIGURACIÓN =====
dotenv.config(); // Cargar variables de .env
const app = express();
const PORT = process.env.PORT || 5000;

// ===== MIDDLEWARES =====
app.use(express.json()); // Permitir JSON en peticiones
app.use(cors()); // Permitir peticiones desde otro dominio

// ===== RUTA DE PRUEBA =====
app.get('/', (req, res) => {
  res.json({ 
    mensaje: 'Servidor funcionando ✅',
    puerto: PORT
  });
});

// ===== INICIAR SERVIDOR =====
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});