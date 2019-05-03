const routes = require('express').Router();
const { User } = require('./app/models');
const SessionController = require('./app/controllers/SessionController');
//Definição rotas

routes.post('/sessions', SessionController.store)

module.exports = routes;