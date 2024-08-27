require('dotenv').config();
const express = require("express");
const cors = require("cors");  
const authRouters = require('./routers/auth')
const anuncioRoutes =require('./routers/anuncio')

/** Rotas */

const atividadeRouters = require('./routers/AtividadesRouters')
const colaboradoresRoutes = require('./routers/ColaboradoresRoutes')
const beneficiarioRoutes = require('./routers/BeneficiarioRoutes')
const maquinarioRouter = require('./routers/MaquinarioRouter')
const servicoRouters = require('./routers/ServicoRouters')
const tipoMaquinarioRouter = require('./routers/TipoMaquinarioRouters')
const app = express();
const port = 3001;
app.use(express.json());
app.use(cors());


app.use('/api/auth', authRouters)
app.use('/api/anuncio', anuncioRoutes)


app.use(atividadeRouters);
app.use(colaboradoresRoutes);
app.use(beneficiarioRoutes);
app.use(maquinarioRouter);
app.use(servicoRouters);
app.use(tipoMaquinarioRouter); 
const mysql = require("mysql2");
app.listen(port, () => `Executando na porta ${port}`);
app.use('/api', atividadeRouters); 
app.use('/api', colaboradoresRoutes);
app.use('/api', beneficiarioRoutes);
app.use('/api', maquinarioRouter);
app.use('/api', servicoRouters);
app.use('/api', tipoMaquinarioRouter); 