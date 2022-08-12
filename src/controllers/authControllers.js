const UserService = require('../services/userService');
const userServie = new UserService();

const AuthService = require('../services/authService');
const authService = new AuthService();

const register = async (req, res, next) => {
    try {
        const data = req.body;
        const createUser = await userServie.createUser(data);
        const sendMail = await authService.sendMail(data.email);
        res.json({
            msg: createUser,
            sendMail
        });
    } catch (error) {
        console.log(error);
    }
}

const login = async (req, res, next) => {
    try {
        const user = req.user;
        res.json(authService.signToken(user))
    } catch (error) {
        next(error)
    }
}


module.exports = { register, login };
