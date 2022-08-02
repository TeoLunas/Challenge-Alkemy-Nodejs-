const express = require('express');
const routerApi = require('./routes/index');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler');

const app = express();

app.use(express.json())

require('./utils/auth');

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler)


app.listen(3000, () => console.log('app corriendo en puerto 3000'))