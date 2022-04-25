const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool();

const dbName = process.env.PGDATABASE;
console.log(`Connected to database ${dbName}! 🐘\n`);

module.exports = pool;
