const routes = require('express').Router();
const { User } = require('./models');

User.create({
  name: "Eliel",
  email: "elielrogernic@gmail.com",
  password_hash: "123123123"
});

//Definição rotas

module.exports = routes;