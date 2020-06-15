// Importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// Criar o obejeto de banco de dados

const db = new sqlite3.Database("./src/database/database.db")

// utilizar o obejto de dados para nossas operações 

db.serialize(() => {
    
})