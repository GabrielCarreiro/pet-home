//Configurando o servidor junto com express
// A variável express recebe como parâmetro o atributo express
const express = require("express")

// Variável que chama a função express
const server = express()

//Importando o banco de dados\
const db = require("./database/db")

// Configurar Pasta Publica
server.use(express.static("public"))

// Habilitar o uso do req.bory da nossa aplicação
server.use(express.urlencoded({ extended: true }))

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

server.post("/savepoint", (req, res) => {

        const query = `
        INSERT INTO places (
            name,
            address,
            number,
            address2,
            state,
            city,
            phone,
            whatsapp,
            image,
            open,
            close,
            description,
            places
        ) values (?,?,?,?,?,?,?,?,?,?,?,?,?);
        `
        const values = [
            req.body.name,
            req.body.address,
            req.body.number,
            req.body.address2,
            req.body.state,
            req.body.city,
            req.body.phone,
            req.body.whatsapp,
            req.body.image,
            req.body.open,
            req.body.close,
            req.body.description,
            req.body.places
        
        ]

        function afterInsertData(err) {
            if(err) {
                return console.log(err)
            }
            console.log("Cadastrado com sucesso")
            console.log(this)

            return res.send("search.html")
        }
    db.run(query, values, afterInsertData)


})

// Configurando o caminho do search

server.get("/search", (req, res) => {

    return res.render("search.html")

})

// Configurando o caminho do page-results

server.get("/page-results", (req, res) => {

    const search = req.query.search

    if(search == "" ){
        
        return res.render("page-results.html", {total: 0})

    }

    //pegar os dados do banco de dados

        db.all(` SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
        if(err) {
            return console.log(err)
        }

        const total = rows.length

        return res.render("page-results.html", { places: rows, total: total})
    })
    

})

// Ligar o servidor, listen é uma função que vai ouvir a porta 3000
server.listen(3000)