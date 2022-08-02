const { Model, DataTypes, Sequelize } = require('sequelize');

const MOVIE_TABLE = 'movies';

const MovieSchema = {
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
    },
    
}

class Movie extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: MOVIE_TABLE,
            modelName: 'Category',
            timestamps: false
        }
    }
}

module.exports = { MOVIE_TABLE, MovieSchema, Movie }