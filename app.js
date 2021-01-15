const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');

const express = require('express');
const routeAdmin = require('./routes/admin');
const routeShop = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(routeAdmin);
app.use(routeShop);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'pageNotFound.html'));

});



app.listen(5000);
