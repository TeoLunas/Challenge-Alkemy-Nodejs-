const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const { models } = require('../libs/sequelize');
class UserService {

    async createUser(data){
        try {
            const encryptPassword = await bcrypt.hash(data.password, 10);
            const createUser = await models.User.create({
                ...data,
                password: encryptPassword
            });
            return createUser;            
        } catch (error) {
            throw boom.badRequest('Error al crear usuario')
        }
    }
    
    async findOneUser(id){
        const user = await models.User.findByPk(id);
        return user;
    }

    async findByEmail(email){
        const user = await models.User.findOne({
            where: {email} 
        })
        return user;
    }
}

module.exports = UserService;