//Configurando o servidor junto com express
// A variável express recebe como parâmetro o atributo express
const express = require("express")

// Variável que chama a função express
const server = express()

//Importando o banco de dados\
const db = require("./database/db")

// Configurar Pasta Publica
server.use(express.static("public"))

// Configurando o templete engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views",{
    express: server,
    noCache: true
})

//Configurar Caminhos da minha aplicação
//Configurando a pagina inical
server.get("/", (req, res) => {
     return res.render("index.html")

})

// Configurando o caminho do record

server.get("/record", (req, res) => {
    return res.render("record.html")

})

// Configurando o caminho do create-place

server.get("/create-place", (req, res) => {
    return res.render("create-place.html")

})

// Configurando o caminho do search

server.get("/search", (req, res) => {
    return res.render("search.html")

})

// Configurando o caminho do page-results

server.get("/page-results", (req, res) => {

    //pegar os dados do banco de dados

        db.all(` SELECT * FROM places`, function(err, rows) {
        if(err) {
            return console.log(err)
        }

        const total = rows.length

        return res.render("page-results.html", { places: rows, total: total})
    })
    

})

// Ligar o servidor, listen é uma função que vai ouvir a porta 3000
server.listen(3000)