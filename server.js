require('dotenv').config();
const express = require("express");
const cors = require("cors");  

/** Rotas */
const authRoutes = require('./routers/auth');
const anuncioRouters = require('./routers/anuncio');
const atividadeRouters = require('./routers/AtividadesRouters');
const colaboradoresRoutes = require('./routers/ColaboradoresRoutes');
const beneficiarioRoutes = require('./routers/BeneficiarioRoutes');
const maquinarioRouter = require('./routers/MaquinarioRouter');
const servicoRouters = require('./routers/ServicoRouters');
const tipoMaquinarioRouter = require('./routers/TipoMaquinarioRouters');

const app = express();
const port = 3001;

// Middleware
app.use(express.json());  // Middleware para interpretar JSON no corpo da requisição
app.use(cors());          // Middleware para habilitar CORS

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/anuncio', anuncioRouters);
app.use('/api/atividades', atividadeRouters);
app.use('/api/colaboradores', colaboradoresRoutes);
app.use('/api/beneficiarios', beneficiarioRoutes);
app.use('/api/maquinarios', maquinarioRouter);
app.use('/api/servicos', servicoRouters);
app.use('/api/tipos-maquinarios', tipoMaquinarioRouter);

// Inicializa o servidor
app.listen(port, () => {
    console.log(`Executando na porta ${port}`);
});
