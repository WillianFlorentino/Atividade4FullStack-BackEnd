const express = require("express");
const app = express();
const cors = require("cors");   
const mysql = require("mysql2");
const port = 3001;
const atividadeRouters = require('./routers/AtividadesRouters')

app.use(express.json());
app.use(cors());
app.use(atividadeRouters);
app.listen(port, () => {`Executando na porta ${port}`});