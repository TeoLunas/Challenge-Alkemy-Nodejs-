const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class CategoryService {
    async createCategory(data){
        const validateCategoryExists = await models.Category.findAll({
            where: {
                name: data.name
            }
        });
        if(validateCategoryExists){
            throw boom.conflict('Ya existe esa categoria')
        }
        const create = await models.Category.create(data);
        return create
    }

    async getCategories(){
        const categories = await models.Category.findAll();
        return categories;
    }

    async getOneCategory(id){
        const category = await models.Category.findByPk(id);
        if (!category) {
            throw boom.notFound('Categoria no encontrada')
        }
        return category;
    }

    async updateCategory(id, changes){
        const category = await this.getOneCategory(id);
        const update = await category.update(changes);
        return { msg: 'Categoria actualizada con exito', update }
    }

    async deleteCategory(id){
        const category = await this.getOneCategory(id);
        await category.destroy();
        return { msg: 'Categoria Eliminada con exito' }
    }
}

module.exports = CategoryService;