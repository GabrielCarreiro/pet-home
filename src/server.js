//Configurando o servidor junto com express
// A variável express recebe como parâmetro o atributo express
const express = require("express")

// Variável que chama a função express
const server = express()

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

server.get("/create-place", (req, res) => {
    return res.render("create-place.html")

})

// Ligar o servidor, listen é uma função que vai ouvir a porta 3000
server.listen(3000)