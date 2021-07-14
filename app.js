const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const morgan = require('morgan')


const app = express();

app.use(morgan('tiny'))

app.use(bodyParser.json());
app.use('/', routes);

app.use((err, req, res, next) => {
    res.json(err);
});

module.exports = app;
