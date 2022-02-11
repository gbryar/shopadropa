const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'onestep',
    host: 'localhost',
    port: 5432,
    database: 'shopadropa'
});

module.exports = pool;