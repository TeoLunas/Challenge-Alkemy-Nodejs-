const express = require('express');
const passport = require('passport');
const { getCharacters, postCharacters, updateCharacters, deleteCharacters, findOne } = require('../controllers/characterController');
const router = express.Router();

const CharacterService = require('../services/characterService');
const characterService = new CharacterService();


router.get('/', passport.authenticate('jwt', { session: false }), getCharacters)
router.post('/', passport.authenticate('jwt', { session: false }),postCharacters)
router.put('/:id', passport.authenticate('jwt', { session: false }),updateCharacters)
router.delete('/:id', passport.authenticate('jwt', { session: false }),deleteCharacters)
router.get('/:id', passport.authenticate('jwt', { session: false }),findOne)

module.exports = router;