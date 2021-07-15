const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('tiny'))
app.use(cors());

app.use(bodyParser.json());
app.use('/api/', routes);

app.use((err, req, res, next) => {
    console.log(err);
    res.json(err);
});

module.exports = app;
