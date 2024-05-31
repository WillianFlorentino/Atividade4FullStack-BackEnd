const AtividadeController = require('../controller/AtividadeController');
const atividadeController = new AtividadeController();
const express = require('express');
const router = express.Router();
router.get('/atividade', atividadeController.obterTodos);
router.get('/atividade/:id', atividadeController.obterPorId);
router.post('/atividade',atividadeController.adicionar);
router.put('/atividade/:id',atividadeController.atualizar);

module.exports = router;