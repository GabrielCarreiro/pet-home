// Importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// Criar o obejeto de banco de dados

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// utilizar o obejto de dados para nossas operações 

// db.serialize(() => {
//    // Criar tabelas 
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             number TEXT,
//             state TEXT,
//             city TEXT,
//             phone TEXT,
//             whatsapp TEXT,
//             image TEXT,
//             open TEXT,
//             close TEXT,
//             description TEXT,
//             places TEXT

//         );

//         CREATE TABLE IF NOT EXISTS client (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             name TEXT,
//             user TEXT,
//             email TEXT,
//             password BLOB,
//             confirm_password BLOB
//         );

//     `)

//     // Inserindo dados na tabelas
//     const query = `
//         INSERT INTO places (
//             name,
//             address,
//             state,
//             city,
//             phone,
//             whatsapp,
//             image,
//             time,
//             description,
//             items
//         ) values (?,?,?,?,?,?,?,?,?,?);
//         `
//         const values = [
//             "PetMonitor",
//             "Rua Jose Maria",
//             "Bahia",
//             "Salvador",
//             "xxxx-xxxx",
//             "(xx)xxxxx-xxxx",
//             "https://www.google.com/url?sa=i&url=https%3A%2F%2Fclinicaempreendedora.com.br%2Fcomo-escolher-o-ponto-certo-para-o-pet-shop%2F&psig=AOvVaw0HdZ0HRF6qf1uGFlP8h2pk&ust=1592442976748000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDzuMTWh-oCFQAAAAAdAAAAABAD",
//             "08:00 ás 16:00",
//             "Lindo lugar",
//             "Petshop"
//         ]

//         function afterInsertData(err) {
//             if(err) {
//                 return console.log(err)
//             }
//             console.log("Cadastrado com sucesso")
//             console.log(this)
//         }
//     //db.run(query, values, afterInsertData)

//     // Consultar dados na tabela

    // db.all(` SELECT * FROM places`, function(err, rows) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Aqui estão seus registros")
    //     console.log(rows)

    // })
    

// })