const express = require("express");
const cors = require("cors");  

/** Rotas */

const atividadeRouters = require('./routers/AtividadesRouters')
const colaboradoresRoutes = require('./routers/ColaboradoresRoutes')
const beneficiarioRoutes = require('./routers/BeneficiarioRoutes')
const maquinarioRouter = require('./routers/MaquinarioRouter')
const servicoRouters = require('./routers/ServicoRouters')
const app = express();
const port = 3001;
app.use(express.json());
app.use(cors());
app.use(atividadeRouters);
app.use(colaboradoresRoutes);
app.use(beneficiarioRoutes);
app.use(maquinarioRouter);
app.use(servicoRouters);
const mysql = require("mysql2");
app.listen(port, () => `Executando na porta ${port}`);
app.use('/api', atividadeRouters); 
app.use('/api',colaboradoresRoutes);
app.use('/api',beneficiarioRoutes);
app.use('/api',maquinarioRouter);
app.use('/api',servicoRouters);






