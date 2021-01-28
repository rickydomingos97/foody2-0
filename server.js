const express = require('express')
const nunjucks = require('nunjucks')
const { indexOf } = require('./data')
const recipes = require("./data")

const server = express()

server.use(express.static('public'))
server.use(express.static('images'))
server.use(express.static('views'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true

})

server.get("/", (req, res) => {
    return res.render("index", { items: recipes})
})

server.get("/about", (req,res) => {
    return res.render("about")
})

server.get("/recipes", (req, res) => {
    return res.render("recipes", { items: recipes})
})

server.get("/recipes/:index", (req, res) => {
    const { index: recipeIndex } = req.params
    const recipe = recipes[recipeIndex]
    const receita = indexOf

    if(!recipe) {
        return res.send("Sitio No Encontrado")
    }

    return res.render("recipe", { item: recipe})
})

server.get("/layout", (req,res) => {
    return res.render("layout")
})

server.get("/not-found", (req,res) => {
    return res.render("not-found")
})

server.use((req, res) => {
    res.status(404).render("not-found")
})

server.listen(5000, () => {
    console.log("server is running on 5000 port")
})


