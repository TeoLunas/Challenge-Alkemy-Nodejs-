const CategoryService = require('../services/categoryService')
const categoryService = new CategoryService();

const getCategories = async (req, res, next) => {
    try {
        const categories = await categoryService.getAllCategories();
         res.json(categories);
    } catch (error) {
        next(error)
    }
}

const postCategory = async (req, res, next) => {
    try {
        const data = req.body;
        const createCategory = await categoryService.createCategory(data);
        res.json(createCategory);
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

}


module.exports = { getCategories, postCategory, updateCategory }