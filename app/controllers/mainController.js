const dataMapper = require('../dataMapper');
const { Pokemon, PokemonType } = require('../models');

const mainController = {
  // méthode pour la page d'accueil
  homePage: async (req, res) => {
    // on récupère tous les pokemons sans les types associés
    const pokedex = await Pokemon.findAll();
    // si aucun pokemon n'est trouvé, on affiche la page 404
    if (!pokedex) {
      res.status(404).render('404');
    }
    // sinon on affiche la page d'accueil avec la liste des pokemons
    res.render('home', { pokedex });
  },
  
  // méthode pour la page de détail d'un pokemon
  pokemonPage: async (req, res) => {
    const { id } = req.params;

    // on récupère le pokemon avec ses types associés
    const pokemon = await Pokemon.findByPk(id, {
      include: ['types'],
    });

    // si aucun pokemon n'est trouvé, on affiche la page 404
    if (!pokemon) {
      return res.status(404).render('404');
    }

    // sinon on affiche la page de détail du pokemon
    return res.render('pokemonDetail', { pokemon });
  },

  // méthode pour la page de recherche par type
  typesPage: async (req, res) => {
    // on récupère tous les types de pokemon sans les pokemons associés
    const types = await PokemonType.findAll();

    // si aucun type n'est trouvé, on affiche la page 404
    if (!types) {
      res.status(404).render('404');
    }
    
    // sinon on affiche la page de recherche par type
    res.render('searchType', { types });
  },

  // méthode pour la page de recherche par type
  pokemonByTypePage: async (req, res) => {
    const { id } = req.params;

    // on récupère le type de pokemon avec les pokemons associés
    const pokemonsOfType = await PokemonType.findByPk(id, {
      include: ['pokemons'],
    });
    // si aucun type n'est trouvé, on affiche la page 404
    if (!pokemonsOfType) {
      res.status(404).render('404');
    }
    // sinon on garde uniquement la liste des pokemons associés au type
    const pokemonList = pokemonsOfType.pokemons;
    // on affiche la page des pokemons associés au type
    res.render('pokemonByType', { pokemonList });
  },
};

module.exports = mainController;
