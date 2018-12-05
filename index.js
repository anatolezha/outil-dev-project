const express = require('express');

const dotenv = require('dotenv').config();

const app = express();

app.get('/', (req, res) => res.json({}));

app.listen(process.env.PORT, () => console.log('Listening...'));
