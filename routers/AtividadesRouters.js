const AtividadeController = require('../controller/AtividadeController');
const atividadeController = new AtividadeController();
const express = require('express');
const router = express.Router();
router.get('/atividade', atividadeController.obterTodos);
router.post('/atividade',atividadeController.adicionar);

module.exports = router;