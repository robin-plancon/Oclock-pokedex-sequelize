const dotenv = require('dotenv');
dotenv.config();
const { Pokemon, PokemonType } = require('./app/models');

async function test() {
  const pokemon = await Pokemon.findByPk(1, {
    include: ['types'],
  });
  console.log(JSON.stringify(pokemon, null, 4));

  // const pokemonType = await PokemonType.findByPk(5 ,{
  //   include: ['pokemons'],
  // });
  // console.log(JSON.stringify(pokemonType, null, 4));
}

test();