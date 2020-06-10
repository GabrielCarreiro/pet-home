//Configurando o servidor junto com express
// A variável express recebe como parâmetro o atributo express
const express = require("express")

// Variável que chama a função express
const server = express()

//Configurar Caminhos da minha aplicação
//Configurando a pagina inical
server.get("/", (req, res) => {
    res.send("Hello Word")

})

// Ligar o servidor, listen é uma função que vai ouvir a porta 3000
server.listen(3000)