const connect = require('./db')
const { Sequelize, DataTypes } = require('sequelize')
const Postagen = connect.sequelize.define('postagen', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING
    },
    conteudo: {
        type: DataTypes.TEXT
    }
});

(async () => {
    await connect.sequelize.sync();
    /*   const postag = await Postagen.create(
          { titulo: 'Db', conteudo: 'JJJJJJJJJJ' }
      ); */
    //const rpost = await Postagen.findAll();
    //console.log("todas postagens", rpost.titulo)
    //  console.log(postag.titulo, postag.conteudo);
})()

//return Postagen
module.exports = Postagen