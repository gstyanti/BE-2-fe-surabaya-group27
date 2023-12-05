const { Sequelize } = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize(process.env.group_27, process.env.root, process.env.password, {
    host: process.env.localhost,
    port: process.env.DB_PORT,
    dialect: 'mysql'
});

module.exports = sequelize;
