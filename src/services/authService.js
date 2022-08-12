const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const UserService = require('./userService');
const userService = new UserService();
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer')

const { config } = require('../config/config')

class AuthService {

    async getUser(email, password) {

        const user = await userService.findByEmail(email);
        if (!user) {
            boom.unauthorized('Usuario incorrecto')
        }
        const validatePassword = await bcrypt.compare(password, user.password);

        if (!validatePassword) {
            boom.unauthorized('Password incorrect')
        }
        delete user.dataValues.password;
        return user
    }

    signToken(user) {
        const payload = {
            sub: user.id
        };
        const token = jwt.sign(payload, config.jwtSecret);

        return({
            user,
            token
        });
    }

    async sendMail(email) {
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'berta69@ethereal.email',
                pass: 'dbnP5kwe1CAsvK5ZC7'
            }
        })

        await transporter.sendMail({
            from: 'berta69@ethereal.email',
            to: 'berta69@ethereal.email',
            subject: `Bienvenido ${email}`,
            text: 'Bienvenido a la api de disney',
            html: '<b> Bienvenido a la api de disney </b>',
        })

        return { message: 'Mail sent'}
    }
}

module.exports = AuthService;