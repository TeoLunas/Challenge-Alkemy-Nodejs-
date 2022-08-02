const UserService = require('../services/userService');
const { config } = require('../config/config');
const userServie = new UserService();

const jwt = require('jsonwebtoken');
const passport = require('passport');
const boom = require('@hapi/boom')


const register = async (req, res, next) => {

    try {
        const data = req.body;
        const createUser = await userServie.createUser(data);
        res.json(createUser);
    } catch (error) {
        console.log(error);
    }
}

const login = async (req, res, next) => {
    try {
        const user = req.user;

        const payload = {
            sub: user.id
        };
        const token = jwt.sign(payload, config.jwtSecret);

        res.json({
            user,
            token
        });

    } catch (error) {
        next(error)
    }
}


module.exports = { register, login };
