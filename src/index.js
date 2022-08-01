const express = require('express');
const routerApi = require('./routes/index');

const app = express();

app.use(express.json())

routerApi(app);


app.listen(3000, () => console.log('app corriendo en puerto 3000'))