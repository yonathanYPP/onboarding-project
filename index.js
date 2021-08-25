require('dotenv').config()
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');

global.appRoot = path.resolve(__dirname);

const db = require('./app/models');
db.sequelize.authenticate()
    .then(() => {
        console.log('Database onnection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

app.use(require('./app/controllers'))


app.listen(process.env.PORT, () => {
    console.log(`app listening at http://localhost:${process.env.PORT}`)
})