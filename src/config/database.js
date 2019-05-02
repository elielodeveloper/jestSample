module.exports = {
  host: '127.0.0.1',
  username: 'postgres',
  database: 'nodeauth',
  dialect: 'postgres',
  operatorAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true, // pattern model_name
    underscoredAll: true,// same pattern for columns
  }
}