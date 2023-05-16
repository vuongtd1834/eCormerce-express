const express = require('express');
const morgan = require('morgan');
const { default: helmet } = require('helmet');
const compression = require('compression');

const app = express();

// init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// init db

// init routes

// error handle

app.get('/', (req, res, next) => {
    const stringCompress = 'Repeat!'
    return res.status(200).json({
        message: 'Hello world!',
        metadata: stringCompress.repeat(100000)
    })
})

module.exports = app;