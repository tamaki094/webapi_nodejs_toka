'use strict';

const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const eventRoutes = require('./routes/eventRoutes');
const personafisicaRoutes = require('./routes/personafisicaRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', eventRoutes.routes);
app.use('/api', personafisicaRoutes.routes);

app.listen(config.port, () => console.log('El servidor esta escuchando en http://localhost:' + config.port));

