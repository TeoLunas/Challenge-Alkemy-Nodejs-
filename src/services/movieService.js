const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class MovieService {

    async createMovie(data){
        try {
            const create = await models.Movie.create(data);
            return {msg: 'Pelicula creada correctamente', data: create}
        } catch (error) {
            throw boom.badRequest('Error al crear la pelicula')
        }
    }

    async getAllMovies(query){
        const options = { where: {} };
        const {name, genre} = query;
        if(name)options.where.title = name
        if(genre)options.where.categorieId = genre
        const listMovies = await models.Movie.findAll(options);
        const movies = [];
        listMovies.forEach(movie => {
            const {categorieId, ...info} = movie.dataValues;
            movies.push(info)
        })
        return movies;
    }

    async getOneMovie(id){
        const movie = await models.Movie.findByPk(id, {
            include: ['characters']
        })
        if (!movie) {
            throw boom.notFound('Pelicula no existe')
        }
        return movie
    }

    async updateMovie(id, changes){
        const movie = this.getOneMovie(id);
        const updateMovie = await movie.update(changes);
        return { msg: 'Pelicual actualizada correctamente', data: updateMovie}
    }

    async deleteMovie(id){
        const movie = this.getOneMovie(id);
        await movie.destroy
        return { msg: 'Pelicual Eliminada correctamente'}
    }
}

module.exports = MovieService;