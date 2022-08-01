const express = require('express');
const authRouter = require('./authRouter')

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router)
    router.use('/auth', authRouter);
    console.log('Ruta http://localhost:3000/api/v1/auth disponible');
    console.log('Ruta http://localhost:3000/api/v1/login disponible');
}

module.exports = routerApi;