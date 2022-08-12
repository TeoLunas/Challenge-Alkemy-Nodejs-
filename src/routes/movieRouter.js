const express = require('express');
const passport = require('passport');
const { getMovies, postMovie, updateMovie, deleteMovie, getMovie } = require('../controllers/movieController');
const router = express.Router();

/**
 * @swagger
 *  components:
 *     schemas:
 *      Movie:
 *        type: object
 *        properties:
 *          title:
 *              type: string
 *              description: Nombre de la pelicula o serie
 *        required:
 *          - title
 *        example:
 *          title: Encanto
 */

router.get('/', passport.authenticate('jwt', { session: false }), getMovies);
//Get movies
/**
 * @swagger
 * /api/v1/movies:
 *  get:
 *      summary: Devuelve todas las peliculas
 *      tags: [Movie]
 *      responses:
 *          200:
 *              description: all users
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Movie'
 *          401:
 *              description: No se envio token para validar a usuario
 *      
 */


router.get('/:id', passport.authenticate('jwt', { session: false }), getMovie);
//Get one movie
/**
 * @swagger
 * /api/v1/movies/{id}:
 *  get:
 *      summary: Devuelve una pelicula segun su id
 *      tags: [Movie]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the movie id
 *      responses:
 *          200:
 *              description: all users
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#/components/schemas/Movie'
 *          401:
 *              description: No se envio token para validar a usuario
 *          404:
 *              description: Movie not found
 * 
 */
router.post('/', passport.authenticate('jwt', { session: false }), postMovie);
/**
 * @swagger
 * /api/v1/movies:
 *  post:
 *      summary: Crear una nueva pelicula
 *      tags: [Movie]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Movie'
 *      responses:
 *          200:
 *              description: nueva peliculada creada!
 *          401:
 *              description: No se envio token para validar a usuario
 *      
 */
router.put('/:id', passport.authenticate('jwt', { session: false }), updateMovie);
/**
 * @swagger
 * /api/v1/movies/{id}:
 *  put:
 *      summary: Actualiza una pelicula
 *      tags: [Movie]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the movie id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Movie'
 *      responses:
 *          200:
 *              description: nueva peliculada creada!
 *          401:
 *              description: No se envio token para validar a usuario
 *          404:
 *              description: Movie not found
 *      
 */
router.delete('/:id', passport.authenticate('jwt', { session: false }), deleteMovie);
//Delete movie
/**
 * @swagger
 * /api/v1/movies/{id}:
 *  delete:
 *      summary: Elimina una pelicula segun su id
 *      tags: [Movie]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the movie id
 *      responses:
 *          200:
 *              description: Se elimino pelicula
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#/components/schemas/Movie'
 *          401:
 *              description: No se envio token para validar a usuario
 *          404:
 *              description: Movie not found
 * 
 */

module.exports = router;