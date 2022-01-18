const Sequelize = require('sequelize')
//Conexão com o banco de dados mysql
const sequelize = new Sequelize('postapp', 'root', 'jose1958', {
    host: "localhost",
    dialect: 'mysql'
})
const Postagen = sequelize.define('postagen', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});
(async () => {
    await sequelize.sync();
    /*   const postag = await Postagen.create(
          { titulo: 'Db', conteudo: 'JJJJJJJJJJ' }
      ); */
    const rpost = await Postagen.findAll();
    console.log("todas postagens", rpost.titulo)
    //  console.log(postag.titulo, postag.conteudo);
})()