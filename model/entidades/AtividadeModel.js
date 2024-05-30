const Database = require("../Database");

const database = new Database()

class AtividadeModel {

    constructor(id, nome){
        this.id = id;
        this.nome = nome;
    }

    async obterTodos(){
        const listaAtividades = await database.ExecutaComando('select * from cadastroatividadesustentavel');
        return listaAtividades;
    }

    async adicionar(dadosAtividade){
        await database.ExecutaComandoNonQuery('insert into cadastroatividadesustentavel set ?', dadosAtividade);
    }

}

module.exports = AtividadeModel;