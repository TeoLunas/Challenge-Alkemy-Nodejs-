const express = require('express');
const passport = require('passport');
const { getCharacters, postCharacters, updateCharacters, deleteCharacters, findOne } = require('../controllers/characterController');
const router = express.Router();

const CharacterService = require('../services/characterService');
const characterService = new CharacterService();


router.get('/', passport.authenticate('jwt', { session: false }), getCharacters)
/**
 * @swagger
 *  components:
 *     schemas:
 *      Character:
 *        type: object
 *        properties:
 *          name:
 *              type: string
 *              description: Nombre del personaje
 *          image:
 *              type: string
 *              description: URL de la imagen
 *          age:
 *              type: string
 *              description: Edad del personaje
 *          weight:
 *              type: integer
 *              description: Peso del personaje
 *          history:
 *              type: string
 *              description: Historia del personaje
 *          movieId:
 *              type: integer
 *              description: Id de la pelicula asociada
 *        required:
 *          - title
 *          - image
 *          - age
 *          - weight
 *          - history
 *          - movieId
 *        example:
 *          name: bruno
 *          image: http://example.com 
 *          age: 26
 *          weight: 78
 *          history : Tiene visiones del futuro
 *          movieId: 1
 */
//Get characters
/**
 * @swagger
 * /api/v1/characters:
 *  get:
 *      summary: Devuelve todos los personajes
 *      tags: [Character]
 *      responses:
 *          200:
 *              description: Todos los personajes
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Character'
 *          401:
 *              description: No se envio token para validar a usuario
 *      
 */
router.post('/', passport.authenticate('jwt', { session: false }),postCharacters)
/**
 * @swagger
 * /api/v1/characters:
 *  post:
 *      summary: Crear un nuevo personaje
 *      tags: [Character]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Character'
 *      responses:
 *          200:
 *              description: nueva personaje creado!
 *          401:
 *              description: No se envio token para validar a usuario
 *      
 */
router.put('/:id', passport.authenticate('jwt', { session: false }),updateCharacters)
/**
 * @swagger
 * /api/v1/characters/{id}:
 *  put:
 *      summary: Actualiza un personaje
 *      tags: [Character]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the character id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Character'
 *      responses:
 *          200:
 *              description: Peliculada Actualizada!
 *          401:
 *              description: No se envio token para validar a usuario
 *          404:
 *              description: Character not found
 *      
 */
router.delete('/:id', passport.authenticate('jwt', { session: false }),deleteCharacters)
/**
 * @swagger
 * /api/v1/characters/{id}:
 *  delete:
 *      summary: Elimina un personaje segun su id
 *      tags: [Character]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the movie id
 *      responses:
 *          200:
 *              description: Se elimino el personaje
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#/components/schemas/Character'
 *          401:
 *              description: No se envio token para validar a usuario
 *          404:
 *              description: Movie not found
 * 
 */
router.get('/:id', passport.authenticate('jwt', { session: false }),findOne)
/**
 * @swagger
 * /api/v1/Character/{id}:
 *  get:
 *      summary: Devuelve un personaje segun su id
 *      tags: [Character]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the movie id
 *      responses:
 *          200:
 *              description: get character
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#/components/schemas/Character'
 *          401:
 *              description: No se envio token para validar a usuario
 *          404:
 *              description: Movie not found
 * 
 */
module.exports = router;