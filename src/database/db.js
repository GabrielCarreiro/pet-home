// Importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// Criar o obejeto de banco de dados

const db = new sqlite3.Database("./src/database/database.db")

// utilizar o obejto de dados para nossas operações 

db.serialize(() => {
    // Criar tabelas 
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            address TEXT,
            state TEXT,
            city TEXT,
            phone TEXT,
            whatsapp TEXT,
            image TEXT,
            time TEXT,
            description TEXT,
            items TEXT

        );

        CREATE TABLE IF NOT EXISTS client (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            user TEXT,
            email TEXT,
            password TEXT
        );

    `)

    // Inserindo dados na tabelas
    const query = `
        INSERT INTO places (
            name,
            address,
            state,
            city,
            phone,
            whatsapp,
            image,
            time,
            description,
            items
        ) values (?,?,?,?,?,?,?,?,?,?);
        `
        const values = [
            "PetMonitor",
            "Rua Jose Maria",
            "Bahia",
            "Salvador",
            "xxxx-xxxx",
            "(xx)xxxxx-xxxx",
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fclinicaempreendedora.com.br%2Fcomo-escolher-o-ponto-certo-para-o-pet-shop%2F&psig=AOvVaw0HdZ0HRF6qf1uGFlP8h2pk&ust=1592442976748000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDzuMTWh-oCFQAAAAAdAAAAABAD",
            "08:00 ás 16:00",
            "Lindo lugar",
            "Petshop"
        ]

        function afterInsertData(err) {
            if(err) {
                return console.log(err)
            }
            console.log("Cadastrado com sucesso")
            console.log(this)
        }
    db.run(query, values, afterInsertData)

})