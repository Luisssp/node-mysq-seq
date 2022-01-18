const { request } = require("express");
const express = require("express");
//const connect = require('./models/db')
const Sequelize = require('sequelize')
const postar = require("./models/Post")

const app = express()
//const router = express.Router()

app.use(express.json())
const postadd = {}

app.get('/', async (req, res) => {
    const postag = await postar.findAll();
    res.json(postag)
    //({ nome: "vctor", sobrenome: "lima" })
});

app.post('/add', async (req, res) => {
    postadd.titulo = req.body.titulo
    postadd.conteudo = req.body.conteudo
    const usuario = await postar.create(postadd)
    res.json(postadd)
})

app.get('/deletar/:id', async (req, res) => {
    //console.log("estou aqui")
    const { id } = req.params
    console.log(id)
    await postar.destroy({
        where: {
            id: id
        }
    })
    res.json("deletei com sucesso")
})

app.listen(3333, () => {
    console.log("servidor Rodando na ulr http://localhost:3333")
})