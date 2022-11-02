const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('goods-manager-db', 'Oleh', 'g201081M1981', {
    dialect: "sqlite",
    host: "./gm-database.sqlite"
});

module.exports = sequelize;