const express = require('express');
const bp = require('body-parser');
const rota = require('../src/Routes');
const app = express();


app.use(bp.json());
app.use(bp.urlencoded({extended: false}));

app.use('/', rota);

module.exports = app;