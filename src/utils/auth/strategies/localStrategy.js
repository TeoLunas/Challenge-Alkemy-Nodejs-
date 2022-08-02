const { Strategy } = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const UserService = require('../../../services/userService');
const userService = UserService();

const LocalStrategy = new Strategy({
    usernameField: 'email',
    passwordField: 'password'
},
    async(email, password, done) => {
        try {
            const user = await userService.findByEmail(email);

            if(!user){
                done(boom.unauthorized('Usuario incorrecto'), false)
            }

        } catch (error) {
            done(error, false)
        }
    }
)