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

    async obterPorId(id){
        const result = await database.ExecutaComando('select * from cadastroatividadesustentavel where id = ?', [id]);
        return result[0];
    }

    async adicionar(dadosAtividade){
        await database.ExecutaComandoNonQuery('insert into cadastroatividadesustentavel set ?', dadosAtividade);
    }

    async atualizar(id, dadosAtividade){
        await database.ExecutaComandoNonQuery('update cadastroatividadesustentavel set ? where id = ?', [dadosAtividade, id]);
    }

}

module.exports = AtividadeModel;