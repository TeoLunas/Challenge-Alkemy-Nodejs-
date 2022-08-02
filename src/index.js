const express = require('express');
const routerApi = require('./routes/index');
const { logErrors, errorHandler } = require('./middlewares/errorHandler');

const app = express();

app.use(express.json())

routerApi(app);

app.use(logErrors);
app.use(errorHandler)


app.listen(3000, () => console.log('app corriendo en puerto 3000'))