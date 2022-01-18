const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', 'jose1958', {
    host: "localhost",
    dialect: 'mysql'
})

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

/* Postagem.create({
    titulo: "um titulo novo",
    conteudo: "conteudo sendo colocado ja"
}) */
//Postagem.sync()

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})
// Usuario.sync()
/* Usuario.create({
    nome: "Victor",
    sobrenome: "Lima",
    idade: 30,
    email: "bland@mail.com"
}) */

/* sequelize.authenticate().then(function () {
    console.log("conectado com sucesso!")
}).catch(function (erro) {
    console.log("Falha ao se conectar" + erro)
}) */