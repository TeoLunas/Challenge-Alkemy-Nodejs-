const express = require('express');
const authRouter = require('./authRouter')
const categoryRouter = require('./categoryRouter')
const movieRouter = require('./movieRouter')

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router)
    router.use('/auth', authRouter);
    console.log('Ruta http://localhost:3000/api/v1/auth disponible');
    console.log('Ruta http://localhost:3000/api/v1/login disponible');
    router.use('/category', categoryRouter)
    console.log('Ruta http://localhost:3000/api/v1/category disponible');
    router.use('/movies', movieRouter);
    console.log('Ruta http://localhost:3000/api/v1/movies disponible');
}

module.exports = routerApi;