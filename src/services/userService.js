const { models } = require('../libs/sequelize');

class userService {
    constructor(){

    }

    async createUser(data){
        const createUser = await models.User.create(data);
        return createUser;
    }   
}

module.exports = userService;