const Database = require("./database");
const db = new Database();  // Instanciando a classe

const findUserByEmail = async (email) => {
    const rows = await db.ExecutaComando('SELECT * FROM users WHERE email = ?', [email]);
    return rows;  
}

const createUser = async (email, nome, hashedPassword) => {
    const result = await db.ExecutaComando('INSERT INTO users (email, nome, senha) VALUES (?, ?, ?)', [email, nome, hashedPassword]);
    return result;
}

module.exports = { findUserByEmail, createUser };
