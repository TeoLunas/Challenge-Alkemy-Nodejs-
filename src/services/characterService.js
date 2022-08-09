const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize');

class CharacterService {

    async getCharacters () {
        try {
            const characters = await models.Character.findAll();
            return characters;
        } catch (error) {
            throw boom.badRequest('Error al buscar personajes');
        }
    }

    async createChatacter(data) {
        try {
            console.log(data);
            const createCharacter = await models.Character.create(data);
            return createCharacter;
        } catch (error) {
            throw boom.badRequest('Error al crear personaje')
        }

    }

    async findOneCharacter(id){
        try {
            const character = await models.Character.findByPk(id, {
                include: ['movie']
            });
            return character;
        } catch (error) {
            if (!character) {
                throw boom.notFound('Personaje no existe.')
            }    
        }
    }

    async updateChatacter(id, changes) {
        const character = await this.findOneCharacter(id);
        try {
            const update = await character.update(changes);
            return update
        } catch (error) {
            if (!character) {
                throw boom.notFound('No existe el personaje')
            }
        }
    }

    async deleteChatacter(id) {
        const character = await models.Character.findByPk(id);
        try {
            await character.destroy();
            return { msg: 'Personaje eliminada con exito' }
        } catch (error) {
            if (!character) {
                throw boom.notFound('No existe el personaje')
            }
        }
    }


}

module.exports = CharacterService;