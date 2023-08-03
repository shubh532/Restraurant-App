const Sequelize = require("sequelize")

const sequelize = new Sequelize("OderData", "root", "Shubham5659102", {
    dialect: 'mysql',
    host: "localhost"
})

module.exports = sequelize