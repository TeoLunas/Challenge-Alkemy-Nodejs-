const express = require('express');
const passport = require('passport');
const { getCategories, postCategory, updateCategory, getCategorie, deleteCategory } = require('../controllers/categoryController');
const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }), getCategories);
/**
 * @swagger
 *  components:
 *     schemas:
 *      Category:
 *        type: object
 *        properties:
 *          name:
 *              type: string
 *              description: Nombre de la categoria
 *          image:
 *              type: string
 *              description: URL de la imagen
 *        required:
 *          - name
 *          - image
 *        example:
 *          name: Infantil
 *          image:  http://example.com
 */
//Get movies
/**
 * @swagger
 * /api/v1/category:
 *  get:
 *      summary: Devuelve todas las categorias
 *      tags: [Category]
 *      responses:
 *          200:
 *              description: all categories
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Category'
 *          401:
 *              description: No se envio token para validar a usuario
 *      
 */
router.get('/:id', passport.authenticate('jwt', { session: false }), getCategorie);
/**
 * @swagger
 * /api/v1/category/{id}:
 *  get:
 *      summary: Devuelve una categoria segun su id
 *      tags: [Category]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the movie id
 *      responses:
 *          200:
 *              description: one category
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#/components/schemas/Category'
 *          401:
 *              description: No se envio token para validar a usuario
 *          404:
 *              description: Movie not found
 * 
 */
router.post('/', passport.authenticate('jwt', { session: false }), postCategory);
/**
 * @swagger
 * /api/v1/category:
 *  post:
 *      summary: Crear una nueva categoria
 *      tags: [Category]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Category'
 *      responses:
 *          200:
 *              description: nueva categoria creada!
 *          401:
 *              description: No se envio token para validar a usuario
 *          409:
 *              description: Ya existe esa categoria
 *      
 */
router.put('/:id', passport.authenticate('jwt', { session: false }), updateCategory)
/**
 * @swagger
 * /api/v1/category/{id}:
 *  put:
 *      summary: Actualiza una categoria
 *      tags: [Category]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the category id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Category'
 *      responses:
 *          200:
 *              description: categoria actualizada!
 *          401:
 *              description: No se envio token para validar a usuario
 *          404:
 *              description: Movie not found
 *      
 */
router.delete('/:id', passport.authenticate('jwt', { session: false }), deleteCategory);
//Delete movie
/**
 * @swagger
 * /api/v1/category/{id}:
 *  delete:
 *      summary: Elimina una categoria segun su id
 *      tags: [Category]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the category id
 *      responses:
 *          200:
 *              description: Se categoria pelicula
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#/components/schemas/Category'
 *          401:
 *              description: No se envio token para validar a usuario
 *          404:
 *              description: Category not found
 * 
 */
module.exports = router;