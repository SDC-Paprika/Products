const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool();

/* test: client has a valid connection */
// client.query('SELECT $1::text as message', ['Hello, pg!'], (err, res) => {
//   console.log(err ? err.stack : res.rows[0].message);
//   client.end();
// });

/* test: client connects to the actual database */
// client
//   .query('SELECT * from products WHERE id = 1')
//   .then((res) => {
//     console.log({ res })
//     console.table(res.rows);
//   })
//   .catch(console.error)
//   .then(() => client.end());

const dbName = process.env.PGDATABASE;
console.log(`Connected to database ${dbName}! 🐘\n`);

module.exports = pool;
