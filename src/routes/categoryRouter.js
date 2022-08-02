const express = require('express');
const passport = require('passport');
const { getCategories, postCategory, updateCategory } = require('../controllers/categoryController');
const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }), getCategories);

router.post('/', passport.authenticate('jwt', { session: false }), postCategory);

router.put('/:id', updateCategory)

module.exports = router;