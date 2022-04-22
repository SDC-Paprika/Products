const express = require('express');
require('dotenv').config();

// Middleware here
// TODO: select a logging middleware

// Router
const router = require('./routes');

const app = express();

app.use(express.json());

app.use('/products', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}\n`));
