const { Client } = require('pg');
require('dotenv').config();

const client = new Client();

client.connect().then(() => console.log('Connected to PostgreSQL!'));

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

module.exports = client;
