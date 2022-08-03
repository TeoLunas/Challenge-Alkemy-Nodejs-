const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom')

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
            const createCharacter = await models.Character.create(data);
            return createCharacter;
        } catch (error) {
            throw boom.badRequest('Error al crear personaje')
        }
    }

    async updateChatacter(id, changes) {
        const character = await models.Character.findByPk(id);
        if (!character) {
            throw boom.notFound('No existe el personaje')
        }
        const update = await character.update(changes);
        return update
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