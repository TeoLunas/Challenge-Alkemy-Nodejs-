const { Model, DataTypes, Sequelize } = require('sequelize');

const {MOVIE_TABLE} = require('./movieModel');

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
    movieId: {
        allowNull: false,
        fiel: 'movie_id',
        type: DataTypes.INTEGER,
        references: {
            model: MOVIE_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }

}

class Character extends Model {
    static associate(models){
        this.belongsTo(models.Movie, {as: 'movie'})
    }

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