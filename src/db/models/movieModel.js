const { Model, DataTypes, Sequelize } = require('sequelize');

const { CATEGORY_TABLE } = require('./categoryModel');

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
    categorieId: {
        allowNull: false,
        field: 'categorie_id',
        type: DataTypes.INTEGER,
        field: 'movie_id',
        references: {
            model: CATEGORY_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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