require("dotenv-safe").config();
const userController =require ("./controllers/userController");
const express = require('express');
const { celebrate, Joi, errors, Segments } = require('celebrate');
const middleware = require('./middleware');
const routes = require('./routes');

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);
app.use(errors());

app.listen(1234);