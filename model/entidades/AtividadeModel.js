const Database = require("../Database");

const database = new Database

class AtividadeModel {

    constructor(id, nome){
        this.id = id;
        this.nome = nome;
    }

    async ObterTodos(){
        const listaAtividades = await database.ExecutaComando('select * from cadastroatividadesustentavel');
        return listaAtividades;
    }

}

module.exports = AtividadeModel;