const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize');

class CharacterService {

    async createCharacter(data){
        try {
            const newCharaceter = await models.Character.create(data);
            return newCharaceter;
        } catch (error) {
            throw boom.badRequest('Error al crear el personaje')
        }
    }

    async getAllCharacters(query){
        try {
            const options = { where: {} };
            const { name, age, movie } = query; 
            if (name) {
                options.where.name = name
            }
            if (age) {
                options.where.age = age
            }
            if (movie) {
                options.where.movieId = movie
            }

            const charactersList = await models.Character.findAll(options);
            const characters = [];
            charactersList.forEach( character => {  
                const {age, weight, history, movieId, ...info} = character.dataValues;
                characters.push(info)
            })
            return characters;
        } catch (error) {
            throw boom.badRequest('Error al buscar personajes')
        }
    }

    async findOneCharacter(id) {
        const character = await models.Character.findByPk(id, {
            include: ['movie']
        });
        if (!character) {
            throw boom.notFound('Personaje no existe en la base de datos.')
        }
        return character;
    }

    async updateCharacter(id, changes){
        const character = await this.findOneCharacter(id);
        const updateCharacter = await character.update(changes);
        return {msg: 'Personaje actualizado', data: updateCharacter};
    }

    async deleteCharacter(id){
        const character = await this.findOneCharacter(id);
        await character.destroy();
        return {msg: 'Personaje eliminado con exito'}
    }

}

module.exports = CharacterService;