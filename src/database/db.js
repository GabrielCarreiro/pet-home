// Importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// Criar o obejeto de banco de dados

const db = new sqlite3.Database("./src/database/database.db")

// utilizar o obejto de dados para nossas operações 

db.serialize(() => {
    // Criar tabelas 
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTERGER KEY AUTOINCREMENT,
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
            id INTERGER KEY AUTOINCREMENT,
            name TEXT,
            user TEXT,
            email TEXT,
            password TEXT
        );

    `)

    // Inserindo dados na tabelas

})