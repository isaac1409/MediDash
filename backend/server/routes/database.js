const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'postgres',
    database: 'medidash_db',
    password: 'medidash',
    port: 5432,
});

pool.on('error', (err, client) => {
    console.error('Error en la conexión a la base de datos', err);
    process.exit(-1);
});

module.exports = pool;
