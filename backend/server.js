const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3001;

// Configuración de la conexión a la base de datos PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: 'postgres',
    database: 'medidash_db',
    password: 'medidash',
    port: 5432,
});

// Manejo de errores de conexión
pool.on('error', (err, client) => {
    console.error('Error en la conexión', err);
    process.exit(-1);
});

// Middleware para manejar JSON en solicitudes
app.use(express.json());

// Ruta para verificar la conexión con la base de datos
app.get('/api/healthcheck', async (req, res) => {
    try {
        await pool.query('SELECT 1');
        res.status(200).json({ message: 'Conexión exitosa con la base de datos xD' });
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
        res.status(500).json({ error: 'Error al conectar con la base de datos' });
    }
});

// Puerto de escucha
app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});

