const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../model/userModel');

const registerUser = async (email, nome, senha) => {
    const users = await userModel.findUserByEmail(email);
    if (users.length > 0) {
        throw new Error('Usuário com esse e-mail já existe!');
    }

    const hashedPassword = await bcryptjs.hash(senha, 10);
    await userModel.createUser(email, nome, hashedPassword);
}

const loginUser = async (email, password) => {
    const users = await userModel.findUserByEmail(email);

    if (users.length === 0) {
        throw new Error('Email ou senha inválidos!');
    }

    const user = users[0];

    // Verifica se a senha fornecida é correta
    const isPasswordCorrect = await bcryptjs.compare(password, user.senha);
    if (!isPasswordCorrect) {
        throw new Error('Email ou senha inválidos!');
    }

    // Gera o token se a senha estiver correta
    const token = jwt.sign({ id: user.id, nome: user.nome, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return token;
}

module.exports = { registerUser, loginUser };
