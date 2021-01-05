const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))
server.use(express.static('images'))

server.set("view engine", "html")

nunjucks.configure("views", {
	express: server
})

server.get("/", (req, res) => {
    return res.render("index")
})

server.get("/about", (req,res) => {
    return res.render("about")
})
server.get("/receitas", (req, res) => {
    return res.render("receitas")
})

server.get("/recipe", (req,res) => { 
    return res.render("recipe")
})

server.get("/layout", (req,res) => {
    return res.render("layout")
})

server.get("/not-found", (req,res) => {
    return res.render("not-found")
})

/* server.get("/recipes/:index", (req, res) => {
    const recipes = []; //Array de receitas carregadas do data.js
    const recipeIndex = req.params.index;

    console.log(recipes[recipeIndex])
}) */

server.use((req, res) => {
    res.status(404).render("not-found")
})

server.listen(5000, () => {
    console.log("server is running on 5000 port")
})