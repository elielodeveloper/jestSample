require("dotenv").config({
  path: process.env.NODE_ENV = "test" ? ".env.test" : ".env"
});

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  dialect: process.env.DB_DIALECT || 'postgres',
  operatorAliases: false,//Desativo um warning que o sequelize emite
  storage: './__tests__/database.sqlite',
  logging: false,//Diminuo o número de logs gerados
  define: {
    timestamps: true,
    underscored: true, // pattern model_name
    underscoredAll: true,// same pattern for columns
  }
}