const Sequelize =require("sequelize")

const sequelize =require("../Util/Database")

const OderData = sequelize.define("OderData",{
    id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        autoIncrement: true,
        primaryKey: true
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    dish: {
        type: Sequelize.STRING,
        allowNull: false
    },
    table: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = OderData