/**
 * pool de connection a la database
 */
const { Pool } = require('pg');
const config = {};

/**configuration pool de connexion database */
config.idleTimeoutMillis = process.env.IDLETIMEMILLIS;
config.connectionTimeoutMillis = process.env.TIMEOUTMILLIS;
config.connectionString = process.env.PGURL;
config.ssl = {
    rejectUnauthorized: false,
};

const pool = new Pool(config);
module.exports = pool;
