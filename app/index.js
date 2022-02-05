require('dotenv').config();
const express = require('express');
const app = express();
//router maintenance
const router = require('./routers');

//integration de ejs
app.set('view engine','ejs');
app.set('views','views');
app.use(express.static('assets'));

//parse en format json
app.use(express.json());

//access router
app.use(router);

module.exports = app;