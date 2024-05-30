const AtividadeModel = require("../model/entidades/AtividadeModel");
const atividadeModel = new AtividadeModel();
class AtividadeController{

    async obterTodos(req, res){

        const atividades = await atividadeModel.obterTodos();
        
        return res.status(200).json(atividades);
    }

    async adicionar(req, res){
        const {nome} = req.body;
        const atividade = new AtividadeModel(0, nome);

        try {
            await atividadeModel.adicionar(atividade);
            return res.status(200).json({message: 'Atividade cadastrada com sucesso'});
        } catch (error) {
            console.log('Erro ao adicionar atividade', error);
            return res.status(500).json({message: 'Erro ao cadastrar atividade'});
        }

    }
}

module.exports = AtividadeController;