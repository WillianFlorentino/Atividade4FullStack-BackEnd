const ColaboradorModel = require("../model/entidades/ColaboradorModel");

const colaboradorModel = new ColaboradorModel
class ColaboradorController{

    async obterTodos(req,res){
        const colaboradores = await colaboradorModel.obterTodos();
        return res.status(200).json(colaboradores);

    }

    async obterPorId(req,res){
        const id = req.params.id;
        const colaboradores = await colaboradorModel.obterPorId(id);
        return res.status(200).json(colaboradores);

    }

    async adicionar(req,res){
        const {nome, cpf, contato, endereco, bairro, numero, dataNascimento, cargo, nivelEscolaridade, email}=req.body;
        const colaborador = new ColaboradorModel(0,nome, cpf, contato, endereco, bairro, numero, dataNascimento, cargo, nivelEscolaridade, email)

        try{
            await colaboradorModel.adicionar(colaborador);
            return res.status(201).json({message:'Cadastrado com sucesso'})
        }catch (error){
            console.log('Erro ao Cadastrar Colaborador:'+error)
            res.status(500).json({error:'Erro ao Cadastrar Colaborador'})
        }

    }

    async atualizar(req,res){
        const id =req.params.id;
        const {nome, cpf, contato, endereco, bairro, numero, dataNascimento, cargo, nivelEscolaridade, email}=req.body;
        const colaborador = new ColaboradorModel(id,nome, cpf, contato, endereco, bairro, numero, dataNascimento, cargo, nivelEscolaridade, email)

        try{
            await colaboradorModel.atualizar(id,colaborador);
            return res.status(201).json({message:'Atualizado com sucesso'})
        }catch (error){
            console.log('Erro ao Cadastrar Colaborador:'+error)
            res.status(500).json({error:'Erro ao Atualizar Colaborador'})
        }

    }

    async excluir(req,res){
        const id = req.params.id;
        try {
            await colaboradorModel.delete(id);
            res.status(200).json({message:'Colaborador Excluido'})
        } catch (error) {
            console.log('Erro ao Tentar Excluir um Colaborador',error)
            res.status(500).json({error:'Erro ao Tentar Excluir um Colaborador'})
        }
    }

    async filtrar(req,res){
        const termobusca =req.params.termobusca;
        const colaboradores = await colaboradorModel.filtrar(termobusca);
        return res.status(200).json(colaboradores);

    }

}

module.exports = ColaboradorController;