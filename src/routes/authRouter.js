const express = require('express');
const passport = require('passport');

const router = express.Router();

const { register, login } = require('../controllers/authControllers')

router.post('/register', register)

router.post('/login', passport.authenticate('local', { session: false }), login)

module.exports = router;