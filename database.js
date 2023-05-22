const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tugas_sequelize', 'root', '', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
