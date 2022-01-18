const Sequelize = require('sequelize')
//Conexão com o banco de dados mysql
const sequelize = new Sequelize('postapp', 'root', 'jose1958', {
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    sequelize: sequelize
}