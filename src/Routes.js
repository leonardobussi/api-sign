const express = require('express');

const Controller = require('./Controllers');
const Auth = require('../main/auth');


const routes = express.Router();

routes.get('/', Controller.getLogar);
routes.post('/', Controller.postLogar);
routes.get('/deuCerto', Auth.autorizar, Controller.getDeuCerto);




module.exports = routes;