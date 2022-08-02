const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class CategoryService {
    async createCategory (data) {
        try {
            const newCategory = await models.Category.create(data);
            return newCategory;
        } catch (error) {
            throw boom.badRequest('error al crear categoria')
        }
    }

    async getAllCategories() {
        try {
            const categories = await models.Category.findAll();
            return categories;
        } catch (error) {
            throw boom.notFound('No existen categorias')
        }
    }

    async findOneCategory(id){
        try {
            const category = await models.Category.findByPk(id);
            return category;
        } catch (error) {
            if(!category){
                throw boom.notFound('Categoria no existe');
            }
        }
    }

    async updateCategory(id, changes) {
        const categorie = await this.findOneCategory(id);
        const updateCategory = await categorie.update(changes);
        return updateCategory;
    }
}

module.exports = CategoryService;