const { listarPokemons, detalharPokemon } = require("utils-playground");

let pagina = 1;

const verificarPokemons = async (req, res) => {
  try {
    const todos = await listarPokemons(pagina);
    res.status(200).json(todos.results);
    pagina++;
  } catch (error) {
    res.json({ msg: "Ocorreu um erro!" });
  }
};

const pegarPokemons = async (req, res) => {
  const { id } = req.params;
  try {
    const unico = await detalharPokemon(id);
    const { name, height, weight, base_experience, forms, abilities, species } =
      unico;
    return res.json({
      id,
      name,
      height,
      weight,
      base_experience,
      forms,
      abilities,
      species,
    });
  } catch (error) {
    res.json({ msg: "Ocorreu um erro!" });
  }
};

module.exports = {
  verificarPokemons,
  pegarPokemons,
};
