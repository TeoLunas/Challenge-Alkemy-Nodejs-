const { Model, DataTypes, Sequelize } = require('sequelize');

const MOVIE_TABLE = 'movies';

const MovieSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    title: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
    },
    image: {
        allowNull: false,
        type: DataTypes.STRING
    },
    creationDate: {
        allowNull: false,
        field: 'creation_date',
        type: DataTypes.STRING
    },
    CategorieId: {
        allowNull: false,
        field: 'categorie_id',
        type: DataTypes.INTEGER,
        field: 'movie_id'
    }
    
}

class Movie extends Model {
    static associate(models){
        this.hasMany(models.Character, {
            as: 'characters',
            foreignKey: 'movieId'
        })
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: MOVIE_TABLE,
            modelName: 'Movie',
            timestamps: false
        }
    }
}

module.exports = { MOVIE_TABLE, MovieSchema, Movie }