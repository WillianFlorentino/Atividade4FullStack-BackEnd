const AtividadeModel = require("../model/entidades/AtividadeModel");


const atividadeModel = new AtividadeModel();
class AtividadeController{

    async ObterTodos(req, res){

        const atividades = await atividadeModel.ObterTodos();
        
        return res.status(200).json(atividades);
    }

}

module.exports = AtividadeController;