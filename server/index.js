const express = require('express');
require('dotenv').config();
// probably require some stuff from db/index.js here
const app = express();

app.use(express.json());

// Routes go here
// TODO: do I want to go HAM and do the router thing?
app.get('/*', (req, res) => {
  res.status(200).send('Hello, world!');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}\n`));
