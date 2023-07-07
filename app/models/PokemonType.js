const { DataTypes, Model } = require('sequelize');
const sequelize = require('../clientSequelize');

class PokemonType extends Model {}
  
PokemonType.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING(6),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'type',
  }
);

module.exports = PokemonType;