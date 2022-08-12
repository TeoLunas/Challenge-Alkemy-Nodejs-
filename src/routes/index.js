const express = require('express');
const authRouter = require('./authRouter')
const categoryRouter = require('./categoryRouter')
const movieRouter = require('./movieRouter')
const characterRouter = require('./characterRouter');
const swaggerJSDoc = require('swagger-jsdoc');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router)
    router.use('/auth', authRouter);
    router.use('/category', categoryRouter)
    router.use('/movies', movieRouter);
    router.use('/characters', characterRouter);
}

module.exports = routerApi;