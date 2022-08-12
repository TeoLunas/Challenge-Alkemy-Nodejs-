const express = require('express');
const passport = require('passport');

const router = express.Router();

const { register, login } = require('../controllers/authControllers')

router.post('/register', register)
/**
 * @swagger
 *  components:
 *     schemas:
 *      Auth:
 *        type: object
 *        properties:
 *          email:
 *              type: string
 *              description: Nombre de la pelicula o serie
 *          password:
 *              type: string
 *              description: URL de la imagen
 *        required:
 *          - email
 *          - password
 *        example:
 *          email: example@example.com
 *          password:  passwordexample
 */
//Register user
/**
 * @swagger
 * /api/v1/auth/register:
 *  post:
 *      summary: Registra un nuevo usuario
 *      tags: [Auth]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Auth'
 *      responses:
 *          200:
 *              description: usuario registrado!
 *      
 */

router.post('/login', passport.authenticate('local', { session: false }), login)

/**
 * @swagger
 * /api/v1/auth/login:
 *  post:
 *      summary: Inicio de sesion
 *      tags: [Auth]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Auth'
 *      responses:
 *          200:
 *              description: usuario y password correctos!
 *          401:
 *              description: usuario o contraseña incorrectos
 *      
 */

module.exports = router;