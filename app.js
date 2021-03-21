const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use('/css', express.static('css'));
app.use('/views', express.static('views'));
const connectionsRouter = require('./controllers/connectionController.js');
const mainRouter = require('./controllers/mainController.js');

// Use the connectionsRouter for the connection and connections page
app.use(['/connections', '/connection', '/connections.ejs'], connectionsRouter);

// Use the mainRouter for all pages that are not connection or connections page
app.use('/', mainRouter);

// listen to port 3000
app.listen(3000);