const CharacterService = require('../services/characterService');
const characterService = new CharacterService();

const getCharacters = async(req, res, next) => {
    try {
        const characters = await characterService.getCharacters();
        res.status(200).json(characters);
    } catch (error) {
        next(error)
    }
}

const postCharacters = async(req, res, next) => {
    try {
        const data = req.body;
        const createCharacter = await characterService.createChatacter(data);
        res.status(200).json(createCharacter);
    } catch (error) {
        next(error)
    }
}

const updateCharacters = async(req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;
        console.log(data);
        const updateCharacter = await characterService.updateChatacter(id, data);
        res.status(200).json(updateCharacter);
    } catch (error) {
        next(error)
    }
}

const deleteCharacters = async(req, res, next) => {
    try {
        const { id } = req.params;
        const deleteCharacter = await characterService.deleteChatacter(id);
        res.status(200).json(deleteCharacter);
    } catch (error) {
        next(error)   
    }
}

const findOne = async(req, res, next) => {
    try {
        const { id } = req.params;
        const find = await characterService.findOneCharacter(id);
        res.json(find)
    } catch (error) {
        next(error)
    }
}

module.exports = { getCharacters, postCharacters, updateCharacters, deleteCharacters, findOne }