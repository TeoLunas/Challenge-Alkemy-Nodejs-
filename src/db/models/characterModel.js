const { Model, DataTypes, Sequelize } = require('sequelize');

const CHARACTER_TABLE = 'characters';

const CharactersSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
    },
    image: {
        allowNull: false,
        type: DataTypes.STRING
    },
    age: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    weight: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    history: {
        allowNull: false,
        type: DataTypes.STRING
    },
    MovieId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'movie_id'
    }

}

class Character extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: CHARACTER_TABLE,
            modelName: 'Character',
            timestamps: false
        }
    }
}

module.exports = { CHARACTER_TABLE, CharactersSchema, Character  }