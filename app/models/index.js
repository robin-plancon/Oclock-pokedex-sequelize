const Pokemon = require('./Pokemon');
const PokemonType = require('./PokemonType');

Pokemon.belongsToMany(PokemonType, {
  as: 'types',
  through: 'pokemon_has_type',
  foreignKey: 'pokemon_id',
  otherKey: 'type_id',
});

PokemonType.belongsToMany(Pokemon, {
  as: 'pokemons',
  through: 'pokemon_has_type',
  foreignKey: 'type_id',
  otherKey: 'pokemon_id',
});

module.exports = { Pokemon, PokemonType };