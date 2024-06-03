const Database = require("../Database")
const database = new Database()

class MaquinarioModel {
    constructor(id, modelo, placa, ano) {
        this.id = id;
        this.modelo = modelo;
        this.placa = placa;
        this.ano = ano;
    }
    async obterTodos() {
        const listaMaquinarios = await database.ExecutaComando('select * from maquinarios');
        return listaMaquinarios;
    }
    async adicionar(dadosMaquinario) {
        await database.ExecutaComandoNonQuery('insert into maquinarios set ?', dadosMaquinario)
    }
    async atualizar (id,dadosMaquinario){
        await database.ExecutaComandoNonQuery('update maquinarios set ? where id = ?', [
            dadosMaquinario,
            id
        ])
    }
    async delete(id){
        await database.ExecutaComandoNonQuery('delete from maquinarios where id ?',[id])
    }
    async filtrar(termobusca) {
        const maquinarios = await database.ExecutaComando(
            "select * from maquinarios where modelo like ? or placa like ? or ano like ?",
            [`%${termobusca}%`, `%${termobusca}%`, `%${termobusca}%`]
        );
        return maquinarios;
    }
}

module.exports = MaquinarioModel;