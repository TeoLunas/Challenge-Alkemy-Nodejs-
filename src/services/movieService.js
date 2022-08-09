const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class MovieService {

    async getAllMovies() {
        try {
            const movies = await models.Movie.findAll();
            return movies
        } catch (error) {
            throw boom.badRequest('Error al buscar peliculas')
        }
    }

    async createMovie(data) {
        try {
            const createMovie = await models.Movie.create(data);
            return createMovie;
        } catch (error) {
            throw boom.badRequest('Error al crear pelicula')
        }
    }

    async findOneMovie(id){
        try {
            const movie = await models.Movie.findByPk(id, {
                include: ['characters']
            });
            return movie;
        } catch (error) {
            throw boom.notFound('No existe la pelicula')

        }
    }

    async updateMovie(id, changes) {
        const movie = await models.Movie.findByPk(id);
        if (!movie) {
            throw boom.notFound('No existe la pelicula')
        }
        const update = await movie.update(changes);
        return update
    }

    async deleteMovie(id) {
        try {
            const movie = await models.Movie.findByPk(id);
            await movie.destroy();
            return { msg: 'Pelicula eliminada con exito' }
        } catch (error) {
            if (!movie) {
                throw boom.notFound('No existe la pelicula')
            }
        }
    }

}

module.exports = MovieService;