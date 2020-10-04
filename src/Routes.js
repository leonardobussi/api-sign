const express = require('express');

const Controller = require('./Controllers');
const auth = require('../main/auth');


const routes = express.Router();


routes.post('/', Controller.postLogar);
routes.post('/criar',Controller.postCriar);
routes.get('/deu-certo', auth.autorizar, Controller.getDeuCerto);




module.exports = routes;