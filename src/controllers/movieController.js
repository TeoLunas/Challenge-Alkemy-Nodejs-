const MovieService = require('../services/movieService');
const movieService = new MovieService();


const getMovies = async (req, res, next) => {
    try {
        const movies = await movieService.getAllMovies();
        res.status(200).json(movies);
    } catch (error) {
        next(error)
    }
}

const getMovie = async(req, res, next) => {
    try {
        const { id } = req.params;
        const movie = await movieService.findOneMovie(id);
        res.status(200).json(movie)
    } catch (error) {
        next(error)
    }
}

const postMovie = async (req, res, next) => {
    try {
        const data = req.body;
        const newMovie = await movieService.createMovie(data);
        res.status(200).json(newMovie)
    } catch (error) {
        next(error)
    }
}

const updateMovie = async (req, res, next) => {
    try {
        const { id } = req.params;
        const changes = req.body;
        const updateMovie = await movieService.updateMovie(id, changes);
        res.status(200).json(updateMovie)
    } catch (error) {
        next(error)
    }
}

const deleteMovie = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteMovieFromDB = await movieService.deleteMovie(id);
        res.status(200).json(deleteMovieFromDB)
    } catch (error) {
        next(error)
    }
}

module.exports = { getMovies, postMovie, updateMovie, deleteMovie, getMovie };