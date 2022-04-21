const { Client } = require('pg');
require('dotenv').config();

const client = new Client();

client.connect().then(() => console.log('Connected to PostgreSQL!'));

client.query('SELECT $1::text as message', ['Hello, pg!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message);
  client.end();
});
