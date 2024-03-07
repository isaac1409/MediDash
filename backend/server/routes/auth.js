const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('./database');

const secret = process.env.SECRET;
const router = express.Router();
const errLoging = 'Usuario y/o constraseña incorrectos';
const logSuccess = 'Usuario autenticado correctamente';

const signToken = id => {
    return jwt.sign(({ id }), secret, {
        expiresIn: 60 * 60 * 24,
    });
};

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Validación de datos de entrada
        if (!email || !password) {
            return res.status(400).json({ message: 'Por favor, proporciona un correo electrónico y una contraseña válidos.' });
        }
        
        const query = 'SELECT * FROM users WHERE email = $1';
        const { rows } = await pool.query(query, [email]);
        const user = rows[0];
        
        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({ message: 'Credenciales incorrectas. Por favor, intenta de nuevo.' });
        }
        
        const token = signToken(user.id);
        return res.status(200).json({ message: 'Inicio de sesión exitoso.', token, user: email, rol: user.rol, userId: user.fId });
    }catch (error) {
        console.error('Error en el inicio de sesión:', error);
        return res.status(500).json({ error: 'Ocurrió un error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.' });
    }
});

module.exports = router;
