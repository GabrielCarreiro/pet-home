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

server.post("/?", (req, res) => {
    
    // Atribui na const user, o usuario que foi digitado no login
    const user = req.body.user
    // Atribui na const password, a senha digitada no login
    const password = req.body.password
    
    // Se os campos não tiver valor, retorna para o index
    if(user == "" || password == ""){

        return res.render("index.html")
    }
    
    // Se não, faz um pesquisa no banco e consulta pelos dados
    db.all(`SELECT user FROM client WHERE user = '${user}' and password = '${password}'`, function(err, rows){
        if(err) {
            return console.log(err)
        }
        // Atribui na variavel results o rows com valor 1 ou 0
        const results = rows.length

        // Compara os valores, se verdadeiro faz o login
        if(results == 1){
            return res.render("search.html")
        }
        // Se não, vai para pagina de cadastro
            return res.render("record.html")
    })
})

// Configurando o caminho do record

server.get("/record", (req, res) => {
    return res.render("record.html")

})

server.post("/saveuser", (req, res) =>{

    const password = req.body.password
    const confirm_password = req.body.confirm_password
    if(password != confirm_password){
        
    return res.render("record.html")
     
    } const query = `
        INSERT INTO client (
            name,
            user,
            email,
            password,
            confirm_password
        ) values (?,?,?,?,?);
        `
        const values = [
            req.body.name,
            req.body.user,
            req.body.email,
            req.body.password,
            req.body.confirm_password

        ]

        function afterInsertData(err) {
            if(err) {
                return console.log(err)
            }
            console.log("Cadastrado com sucesso")
            console.log(this)

            return res.render("index.html")
        }
    db.run(query, values, afterInsertData)
})

// Configurando o caminho do create-place

server.get("/create-place", (req, res) => {

    return res.render("create-place.html")

})

server.post("/savepoint", (req, res) => {

    const name = req.body.name

   db.all(`SELECT name FROM places WHERE name = '${name}'`, function(err, rows){
       if(err){
           console.log(err)
       }
        const results = rows.length

        console.log(results)

        if(results >= 1){
            return res.render("create-place.html")
        }
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

            return res.render("search.html")
        }
    db.run(query, values, afterInsertData)


    })

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