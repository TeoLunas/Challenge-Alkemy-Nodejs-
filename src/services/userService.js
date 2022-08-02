const { models } = require('../libs/sequelize');

class userService {
    constructor(){

    }

    async createUser(data){
        const createUser = await models.User.create(data);
        return createUser;
    }
    
    async findOneUser(id){
        const user = await models.User.findByPk(id);
        return user;
    }
}

module.exports = userService;