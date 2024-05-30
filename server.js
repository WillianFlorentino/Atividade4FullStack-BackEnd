const express = require("express");
const cors = require("cors");  

/** Rotas */

const atividadeRouters = require('./routers/AtividadesRouters')
const app = express();
const port = 3001;
app.use(express.json());
app.use(cors());
app.use(atividadeRouters);
const mysql = require("mysql2");
app.listen(port, () => `Executando na porta ${port}`);
app.use('/api', atividadeRouters); 






