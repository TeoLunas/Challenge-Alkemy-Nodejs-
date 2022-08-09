const express = require('express');
const passport = require('passport');
const { getMovies, postMovie, updateMovie, deleteMovie, getMovie } = require('../controllers/movieController');
const router = express.Router();


router.get('/', getMovies);
router.get('/:id', getMovie);
router.post('/', postMovie);
router.put('/:id', passport.authenticate('jwt', { session: false }), updateMovie);
router.delete('/:id', passport.authenticate('jwt', { session: false }), deleteMovie);

module.exports = router;