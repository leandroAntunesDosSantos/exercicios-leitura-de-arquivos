const express = require("express");
const {
  listarProdutos,
  pegarProduto,
  calcularFrete,
} = require("./controladores/produto");

const app = express();

// app.get("/produtos", listarProdutos);
app.get("/produtos", listarProdutos);
app.get("/produtos/:idProduto", pegarProduto);
app.get("/produtos/:idProduto/frete/:cep", calcularFrete);

app.listen(3000);
