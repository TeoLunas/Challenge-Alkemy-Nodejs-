const CategoryService = require('../services/categoryService')
const categoryService = new CategoryService();

const getCategories = async (req, res, next) => {
    try {
        const categories = await categoryService.getAllCategories();
         resres.status(200).json(categories);
    } catch (error) {
        next(error)
    }
}

const getCategorie = async (req, res, next) => {
    try {
        const { id } = req.params;
        const category = await categoryService.findOneCategory(id);
        res.status(200).json(category);
    } catch (error) {
        next(error)
    }
}

const postCategory = async (req, res, next) => {
    try {
        const data = req.body;
        const createCategory = await categoryService.createCategory(data);
        resres.status(200).json(createCategory);
    } catch (error) {
        next(error)
    }
}

const updateCategory = async(req, res, next) => {
    try {
        const {id} = req.params;
        const changes = req.body;
        const updateCategory = await categoryService.updateCategory(id, changes);
        res.json(updateCategory)
    } catch (error) {
        next(error)
    }
}

const deleteCategory = async(req, res, next) =>{
    try {
        const { id } = req.params;
        const deleteCategory = await categoryService.deleteCategory(id);
        return deleteCategory
    } catch (error) {
        next(error)
    }
}


module.exports = { getCategories, postCategory, updateCategory, getCategorie, deleteCategory }