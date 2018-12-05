const express = require('express');
const dotenv = require('dotenv').config();
const data = require('./data');

const app = express();

app.get('/', (req, res) => res.json(data));

app.listen(process.env.PORT, () => console.log('Listening...'));
