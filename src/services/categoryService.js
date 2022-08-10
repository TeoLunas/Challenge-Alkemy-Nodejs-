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

    async findOneCategory(id) {
        const category = await models.Category.findByPk(id, {
            include: ['movies']
        });
        console.log(category);
        try {
            return category;
        } catch (error) {
            if (category === 'null') {
                throw boom.notFound('Categoria no existe');
            }
        }
    }

    async updateCategory(id, changes) {
        const category = await models.Category.findByPk(id);
        const updateCategory = await categorie.update(changes);
        return updateCategory;
    }

    async deleteCategory(id){
        const categorie = await models.Category.findByPk(id);
        if(!category){
            throw boom.notFound('Categoria no existe');
        }
        await categorie.destroy();
        return 'Categoria eliminada con exito'
    }
}

module.exports = CategoryService;