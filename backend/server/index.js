const express = require('express');
const pool = require('./routes/database');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Ruta de verificación de salud de la base de datos
app.get('/api/healthcheck', async (req, res) => {
    try {
        await pool.query('SELECT 1');
        res.status(200).json({ message: 'Conexión exitosa con la base de datos :)' });
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
        res.status(500).json({ error: 'Error al conectar con la base de datos' });
    }
});
// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});

//Aqui van las rutas

// Middleware para manejar rutas no encontradas
app.use((req, res, next) => {
    res.status(404).json({
        message: '¡Ups! Estas perdido. Consulta la documentación de la API para encontrar una ruta correcta'
    });
});
