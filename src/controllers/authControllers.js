const UserService = require('../services/userService');
const userServie = new UserService();

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
        const {email} = req.body;
        const findUser = await userServie.findByEmail(email);
        res.json(findUser)    
    } catch (error) {
        next(error);
    }
}

module.exports = { register, login };
