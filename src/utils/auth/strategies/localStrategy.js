const { Strategy } = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const UserService = require('../../../services/userService')
const userService = new UserService();

const LocalStrategy = new Strategy({
    usernameField: 'email',
    passwordField: 'password'
},
    async (email, password, done) => {
        try {
            const user = await userService.findByEmail(email);

            if (!user) {
                done(boom.unauthorized('Usuario incorrecto'), false)
            }

            const validatePassword = await bcrypt.compare(password, user.password);

            if (!validatePassword) {
                done(boom.unauthorized('Password incorrect'), false)
            }
            delete user.dataValues.password;
            done(null, user);

        } catch (error) {
            done(error, false)
        }
    });

module.exports = LocalStrategy;