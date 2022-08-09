const express = require('express');
const passport = require('passport');
const { getCategories, postCategory, updateCategory, getCategorie } = require('../controllers/categoryController');
const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }), getCategories);

router.get('/:id', passport.authenticate('jwt', { session: false }), getCategorie);

router.post('/', passport.authenticate('jwt', { session: false }), postCategory);

router.put('/:id', passport.authenticate('jwt', { session: false }), updateCategory)

module.exports = router;