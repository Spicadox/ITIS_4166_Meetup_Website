const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use('/css', express.static('css'));
app.use('/views', express.static('views'));
const connectionsRouter = require('./controllers/connectionController.js');

// routes to the homepage
app.get(['/', '/index', '/index.ejs'], function (req,res) {
    res.render("index", {req: req});
});

// routes to the newConnection page
app.get(['/newConnection', '/newConnection.ejs'], function (req,res) {
    res.render("newConnection", {req: req})
});

// routes to the savedConnections page
app.get(['/savedConnections', '/savedConnections.ejs'], function (req,res) {
    res.render("savedConnections", {req: req})
});

// Use the connectionsRouter for the connection and connections page
app.use(['/connections', '/connection', '/connections.ejs'], connectionsRouter);

// routes to the about page
app.get(['/about', '/about.ejs'], function (req,res) {
    res.render("about", {req: req})
});

// routes to the contact page
app.get(['/contact', '/contact.ejs'], function (req,res) {
    res.render("contact", {req: req})
});

// routes to unavailable pages
app.get('/*', function (req,res) {
    res.send('404 Error: Page Not Found')
});

// listen to port 3000
app.listen(3000);