const express = require('express');
const passport = require('passport');
const { getCharacters, postCharacters, updateCharacters, deleteCharacters, find } = require('../controllers/characterController');
const router = express.Router();

router.get('/', getCharacters)
router.post('/', postCharacters)
router.put('/:id', updateCharacters)
router.delete('/:id', deleteCharacters)
router.get('/:id', find)

module.exports = router;