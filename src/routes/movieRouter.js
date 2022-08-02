const express = require('express');
const passport = require('passport');
const { getMovie, postMovie, updateMovie, deleteMovie } = require('../controllers/movieController');
const router = express.Router();


router.get('/', passport.authenticate('jwt', { session: false }), getMovie);
router.post('/', passport.authenticate('jwt', { session: false }), postMovie);
router.put('/:id', passport.authenticate('jwt', { session: false }), updateMovie);
router.delete('/:id', passport.authenticate('jwt', { session: false }), deleteMovie);

module.exports = router;