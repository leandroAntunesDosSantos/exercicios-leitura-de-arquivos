const express = require("express");
const fs = require("fs/promises");
const { buscarEndereco } = require("utils-playground");
const app = express();

app.use(express.json());

app.get("/enderecos/:cep", async (req, res) => {
  const { cep } = req.params;

  const enderecoEncontrado = await buscarEndereco(cep);

  const test = await fs.readFile("./src/enderecos.json");
  const cepObjeto = JSON.parse(test);

  const buscarCep = cepObjeto.find((item) => {
    return item.cep === cep;
  });

  if (buscarCep) {
    return res.json({ msg: "endereco ja existe" });
  }

  cepObjeto.push(enderecoEncontrado);

  cepString = JSON.stringify(cepObjeto);
  await fs.writeFile("./src/enderecos.json", cepString);
  return res.json({ msg: "Endereco adicionado" });
});

app.listen(3000);
