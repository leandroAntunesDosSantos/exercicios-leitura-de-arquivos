const produtos = require("../bancodedados");
const { getStateFromZipcode } = require("utils-playground");

const listarProdutos = (req, res) => {
  res.send(produtos);
};

const pegarProduto = (req, res) => {
  const { idProduto } = req.params;
  produtoSelecionado = produtos.filter((item) => {
    return item.id === Number(idProduto);
  });
  res.send(produtoSelecionado);
};

calcularFrete = async (req, res) => {
  const { idProduto, cep } = req.params;
  try {
    const Estado = await getStateFromZipcode(cep);
    const Produto = produtos.find((item) => {
      return item.id === Number(idProduto);
    });
    const Frete = Produto.valor * 0.1;
    res.json({
      Produto,
      Estado,
      Frete,
    });
  } catch (erro) {
    res.json({ msg: "Ocorreu um erro!" });
  }
};

module.exports = {
  listarProdutos,
  pegarProduto,
  calcularFrete,
};
