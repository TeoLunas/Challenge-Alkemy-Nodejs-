const express = require('express');
const routerApi = require('./routes/index')
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler');
const { config } = require('./config/config');
const path = require('path')
const PORT = config.dbPort || 3000;

//Swagger config
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerSpec = {
    definition: {
        openapi: '3.0.3',
        info: {
            title: 'Challange Alkemy Node.js',
            version: '1.0.0'
        }
    },
    apis: [`${path.join(__dirname, "./routes/*.js")}`]
}


const app = express();
app.use(express.json())

require('./utils/auth');

routerApi(app)
app.use('/api/doc', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(3000, () => console.log(`app corriendo en puerto 3000`))